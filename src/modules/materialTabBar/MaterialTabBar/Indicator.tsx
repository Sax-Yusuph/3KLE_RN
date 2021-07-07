import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	interpolate,
} from 'react-native-reanimated'

import { IndicatorProps } from './types'

const Indicator: React.FC<IndicatorProps> = ({
	indexDecimal,
	itemsLayout,
	style,
	fadeIn = false,
}) => {
	const opacity = useSharedValue(fadeIn ? 0 : 1)

	const { width: WINDOW_WIDTH } = useWindowDimensions()

	const stylez = useAnimatedStyle(() => {
		const isLandScape = WINDOW_WIDTH > 500

		const A = isLandScape ? 80 : 20
		const B = isLandScape ? 300 : 124 // 3
		const C = isLandScape ? 530 : 232 // 1.5

		const transform =
			itemsLayout.length > 1
				? [
						{
							translateX: interpolate(
								indexDecimal.value,
								itemsLayout.map((_, i) => i),
								[A, B, C]
								// itemsLayout.map(v => v.x)
							),
						},
				  ]
				: undefined

		return {
			transform,
			// width: 30,
			opacity: withTiming(opacity.value),
		}
	}, [indexDecimal, itemsLayout])

	React.useEffect(() => {
		if (fadeIn) {
			opacity.value = 1
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fadeIn])

	return <Animated.View style={[stylez, styles.indicator, style]} />
}

const styles = StyleSheet.create({
	indicator: {
		height: 2,
		backgroundColor: '#2196f3',
		position: 'absolute',
		bottom: 0,
	},
})

export { Indicator }
