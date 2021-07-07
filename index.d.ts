declare module '*.png'

declare module '*.svg' {
	import React from 'react'
	import { SvgProps } from 'react-native-svg'
	const content: React.FC<SvgProps>
	export default content
}

declare module '@env' {
	export const ENV: 'dev' | 'prod'
	export const SENTRY_DSN: string
}
