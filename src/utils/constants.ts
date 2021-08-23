export const __IMAGE_STYLES = {
	width: '100%',
	height: '100%',
}

import { Dimensions } from 'react-native'

/**
 * Variable shared among the whole project for having consistent spacing between elements
 */
export const SPACING = 8

/**
 * Screen and window dimensions
 */
export const __WINDOW_WIDTH = Dimensions.get('window').width
export const __WINDOW_HEIGHT = Dimensions.get('window').height
export const __SCREEN_WIDTH = Dimensions.get('screen').width
export const __SCREEN_HEIGHT = Dimensions.get('screen').height

export const PADDING = SPACING * 2

export const horizontalPadding = { paddingHorizontal: PADDING }

export const DEFAULT_BORDER_RADIUS = 8

export const DEFAULT_AVATAR = 'https://i.pravatar.cc/500'
