import { ToastAndroid } from 'react-native'

export function toProperCase(str: string) {
	if (!str) {
		return
	}
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	})
}

export const showToast = (message?: string) => {
	const _message =
		message && typeof message === 'string'
			? message
			: 'not yet implemented 🤓 👋 '

	ToastAndroid.showWithGravityAndOffset(
		_message,
		ToastAndroid.LONG,
		ToastAndroid.BOTTOM,
		25,
		50
	)
}

export const Sleep = (time: number) =>
	new Promise(resolve => setTimeout(resolve, time))
