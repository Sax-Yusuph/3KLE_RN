<<<<<<< HEAD
import React from 'react'
=======
import React, { FC } from 'react'
>>>>>>> dev/setup
import {
	ImageBackground,
	ImageBackgroundProps,
	StyleProp,
	StyleSheet,
<<<<<<< HEAD
	View,
	ViewStyle,
} from 'react-native'
=======
	ViewStyle,
} from 'react-native'
import { Div } from 'react-native-magnus'
>>>>>>> dev/setup

export interface OverlayImageStyle extends ViewStyle {
	overlayColor?: string
}

export interface ImageOverlayProps extends ImageBackgroundProps {
	style?: StyleProp<OverlayImageStyle>
<<<<<<< HEAD
	children?: React.ReactNode
=======
>>>>>>> dev/setup
}

const DEFAULT_OVERLAY_COLOR = 'rgba(0, 0, 0, 0.45)'

<<<<<<< HEAD
export const ImageOverlay = (props: ImageOverlayProps) => {
=======
export const ImageOverlay: FC<ImageOverlayProps> = props => {
>>>>>>> dev/setup
	const { style, children, ...imageBackgroundProps } = props
	const { overlayColor, ...imageBackgroundStyle } = StyleSheet.flatten(style)

	return (
		<ImageBackground {...imageBackgroundProps} style={imageBackgroundStyle}>
<<<<<<< HEAD
			<View
=======
			<Div
>>>>>>> dev/setup
				style={[
					StyleSheet.absoluteFill,
					{ backgroundColor: overlayColor || DEFAULT_OVERLAY_COLOR },
				]}
			/>
			{children}
		</ImageBackground>
	)
}
