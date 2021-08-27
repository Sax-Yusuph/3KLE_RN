import React, { FC } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import * as Animatable from 'react-native-animatable'

interface Props {
	animation?: string
	delay?: number
	useNativeDriver?: boolean
	style?: StyleProp<ViewStyle>
}

export const MotionBox: FC<Props> = ({
	children,
	animation = 'fadeIn',
	delay = 300,
	useNativeDriver = true,
	style,
}) => {
	return (
		<Animatable.View pointerEvents="box-none" {...{ animation, useNativeDriver, delay, style }}>
			{children}
		</Animatable.View>
	)
}
