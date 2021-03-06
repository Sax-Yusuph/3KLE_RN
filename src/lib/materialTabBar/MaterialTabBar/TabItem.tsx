import React from 'react'
import { StyleSheet, Pressable, Platform } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { Div } from 'react-native-magnus'
import { TabName } from '../types'
import { MaterialTabItemProps } from './types'
import StarIcon from '@assets/svgs/star.svg'
export const TABBAR_HEIGHT = 48
const DEFAULT_COLOR = 'rgba(0, 0, 0, 1)'

/**
 * Any additional props are passed to the pressable component.
 */
export const MaterialTabItem = <T extends TabName = any>({
	name,
	index,
	onPress,
	onLayout,
	scrollEnabled,
	indexDecimal,
	label,
	style,
	labelStyle,
	activeColor = DEFAULT_COLOR,
	inactiveColor = DEFAULT_COLOR,
	inactiveOpacity = 0.7,
	pressColor = '#DDDDDD',
	pressOpacity = Platform.OS === 'ios' ? 0.2 : 1,
	...rest
}: MaterialTabItemProps<T>): React.ReactElement => {
	const stylez = useAnimatedStyle(() => {
		return {
			opacity: interpolate(
				indexDecimal.value,
				[index - 1, index, index + 1],
				[inactiveOpacity, 1, inactiveOpacity],
				Animated.Extrapolate.CLAMP
			),
			color: Math.abs(index - indexDecimal.value) < 0.5 ? activeColor : inactiveColor,
		}
	})

	return (
		<Pressable
			onLayout={onLayout}
			style={({ pressed }) => [
				{ opacity: pressed ? pressOpacity : 1 },
				!scrollEnabled && styles.grow,
				styles.item,
				style,
			]}
			onPress={() => onPress(name)}
			android_ripple={{
				borderless: true,
				color: pressColor,
			}}
			{...rest}
		>
			<Div>
				<Animated.Text style={[styles.label, stylez, labelStyle]}>{label}</Animated.Text>
				{label.includes('TOP STOCKS') ? (
					<Div position='absolute' top={-3} right={-3}>
						<StarIcon width={10} height={10} />
					</Div>
				) : null}
			</Div>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	grow: {
		flex: 1,
	},
	item: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		height: TABBAR_HEIGHT,
	},
	label: {
		margin: 4,
		marginBottom: 0,
		fontFamily: 'Poppins-Medium',
		fontSize: 13,
	},
})
