import { Platform } from 'react-native'

export const smallest = 12
export const smaller = 14
export const small = 16
export const normal = 18
export const large = 20
export const larger = 22
export const largest = 24
export const XLarge = 35

// APP FONT FAMILY
export const appFontRegular = Platform.select({
	ios: 'Poppins-Regular',
	android: 'Poppins-Regular',
})
export const appFontBold = Platform.select({
	ios: 'Poppins-Bold',
	android: 'Poppins-Bold',
})

export const appFontSemiBold = Platform.select({
	ios: 'Poppins-SemiBold',
	android: 'Poppins-Semibold',
})

export const appFontItalic = Platform.select({
	ios: 'Poppins-Bold',
	android: 'Poppins-Bold',
})
export const appFontBoldItalic = Platform.select({
	ios: 'Poppins-Bold',
	android: 'Poppins-Bold',
})
