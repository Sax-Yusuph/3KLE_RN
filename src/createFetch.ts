import { AnyObject } from '@types'

const AppConfig = {
	apiUrl: '',
}

const transformFormUrlEncoded = (obj: AnyObject): string => {
	const str = []
	for (const p in obj) {
		// eslint-disable-next-line  no-prototype-builtins
		if (obj.hasOwnProperty(p)) {
			const k = p
			const v = obj[p]
			if (typeof v === 'object') {
				str.push(
					`${encodeURIComponent(k)}=${encodeURIComponent(JSON.stringify(v))}`
				)
			} else if (typeof v === 'string') {
				str.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
			}
		}
	}
	return str.join('&')
}

const transformFormData = (body: AnyObject): FormData => {
	const formDataBody = new FormData()
	Object.keys(body).forEach(key => {
		const item = body[key]

		if (Array.isArray(item)) {
			item.map((el: unknown) => el != null && formDataBody.append(key, el))
		} else {
			body[key] != null && formDataBody.append(key, body[key])
		}
	})
	return formDataBody
}

const prepareRequestHeaders = (
	contentType = 'application/json',
	token: string
): AnyObject => {
	const headers: AnyObject = {}
	if (token) {
		headers.Authorization = `Bearer ${token}`
	}
	headers.Accept = 'application/json'
	headers['Content-Type'] = contentType
	return headers
}

const prepareRequestBody = (
	body: AnyObject,
	contentType: string
): FormData | string => {
	if (contentType === 'application/x-www-form-urlencoded') {
		return transformFormUrlEncoded(body)
	} else if (contentType === 'multipart/form-data') {
		return transformFormData(body)
	} else {
		return JSON.stringify(body)
	}
}

/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */

type Response = { text(): string; ok: boolean; status: number }
type RequestOptions = {
	token: string
	contentType: string

	[key: string]: unknown
}

function createFetch(fetch: (a: string, b: AnyObject) => Response) {
	return async (
		url: string,
		{ token, contentType, ...options }: RequestOptions
	) => {
		const apiUrl = AppConfig.apiUrl

		const anotherDomainRequest = url.startsWith('http')
		// eslint-disable-next-line  @typescript-eslint/ban-ts-comment
		//@ts-ignore
		options.body = prepareRequestBody(options.body, contentType)
		if (!anotherDomainRequest) {
			options.headers = prepareRequestHeaders(contentType, token)
		}
		try {
			const _url = anotherDomainRequest ? url : `${apiUrl}${url}`

			const resp = await fetch(_url, {
				...options,
				headers: {
					// eslint-disable-next-line  @typescript-eslint/ban-ts-comment
					//@ts-ignore
					...options.headers,
				},
			})
			//console.log("***************respBinary",resp);
			const responseText = await resp.text()
			//console.log("***************response",responseText);
			if (responseText) {
				const responseBody = JSON.parse(responseText)
				return resp.ok
					? // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
					  //@ts-ignore
					  options.success(responseBody)
					: // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
					  //@ts-ignore
					  options.failure({ ...responseBody, status: resp.status })
			} else {
				return resp.ok
					? // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
					  //@ts-ignore
					  options.success({})
					: // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
					  //@ts-ignore
					  options.failure({})
			}
		} catch (error) {
			// eslint-disable-next-line  @typescript-eslint/ban-ts-comment
			//@ts-ignore
			return options.failure({ error })
		}
	}
}

export default createFetch
