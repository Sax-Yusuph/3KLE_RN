import React, { FC } from 'react'
import {
	ImageBackground,
	ImageBackgroundProps,
	StyleProp,
	StyleSheet,
	ViewStyle,
} from 'react-native'
import { Div } from 'react-native-magnus'

export interface OverlayImageStyle extends ViewStyle {
	overlayColor?: string
}

export interface ImageOverlayProps extends ImageBackgroundProps {
	style?: StyleProp<OverlayImageStyle>
}

const DEFAULT_OVERLAY_COLOR = 'rgba(0, 0, 0, 0.45)'

export const ImageOverlay: FC<ImageOverlayProps> = props => {
	const { style, children, ...imageBackgroundProps } = props
	const { overlayColor, ...imageBackgroundStyle } = StyleSheet.flatten(style)

	return (
		<ImageBackground {...imageBackgroundProps} style={imageBackgroundStyle}>
			<Div
				style={[
					StyleSheet.absoluteFill,
					{ backgroundColor: overlayColor || DEFAULT_OVERLAY_COLOR },
				]}
			/>
			{children}
		</ImageBackground>
	)
}
