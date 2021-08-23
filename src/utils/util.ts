import { Dimensions } from 'react-native'
import { __COLORS } from './colors'
// import { sanFranciscoWeights } from 'react-native-typography'
// import { normal } from './fonts'

// iPhone 11 Height = 896
// iPhone 8 Height = 736

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height

export { DEVICE_HEIGHT, DEVICE_WIDTH }

export const Shadowed = {
	shadowColor: '#000000',
	shadowOffset: {
		width: 1,
		height: 1,
	},
	shadowOpacity: 0.5,
	shadowRadius: 3,
	elevation: 2,
}

export const LightlyShadowed = {
	shadowColor: __COLORS.GREY,
	shadowOffset: {
		width: 1,
		height: 1,
	},
	shadowOpacity: 0.2,
	shadowRadius: 2,
	elevation: 1,
}

export const QuiteShadowed = {
	shadowColor: '#105157',
	shadowOffset: {
		width: 0,
		height: 2,
	},
	shadowOpacity: 0.18,
	shadowRadius: 5,
	elevation: 24,
}

export const RIPPLE_CONFIG = {
	color: 'rgba(0,0,0,0.08)',
	borderless: false,
	// radius: ,
}

export const DEFAULT_PADDING = 20
export const DEFAULT_BORDER_RADIUS = 20
export const DEFAULT_SPACING = 10

export const makeSpacing = (multiplier = 1) => DEFAULT_SPACING * multiplier
export const makePadding = (multiplier = 1) => DEFAULT_PADDING * multiplier
export const BORDER_WIDTH = 1
