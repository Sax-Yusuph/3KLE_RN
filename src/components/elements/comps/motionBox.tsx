import React, { FC } from 'react'
import { ViewProps, ViewStyle } from 'react-native'
import * as Animatable from 'react-native-animatable'

interface Props {
	animation?: string
	delay?: number
	useNativeDriver?: boolean
}

export const MotionBox: FC<Props> = ({
	children,
	animation = 'fadeIn',
	delay = 300,
	useNativeDriver = true,
}) => {
	return (
		<Animatable.View pointerEvents='box-none' {...{ animation, useNativeDriver, delay }}>
			{children}
		</Animatable.View>
	)
}
