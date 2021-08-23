import React, { FC } from 'react'
import { Div, DivProps, Text, TextProps } from 'react-native-magnus'
import TouchableScale, { TouchableScaleProps } from 'react-native-touchable-scale'

type Props = DivProps & TouchableScaleProps & TextProps
export const AnimatedPress: FC<Props> = (props) => {
	const { onPress, activeScale, children, ...rest } = props
	return (
		<TouchableScale
			onPress={onPress}
			activeScale={activeScale || 0.98} //0.9
			tension={200} //150
			friction={15} //3
			useNativeDriver
		>
			<Div {...rest}>{children}</Div>
		</TouchableScale>
	)
}

export const CustomButton: FC<Props> = (props) => {
	const { onPress, activeScale, children, color, fontSize, fontWeight, ...rest } = props
	return (
		<TouchableScale
			onPress={onPress}
			activeScale={activeScale || 0.9} //0.9
			tension={200} //150
			friction={15} //3
			useNativeDriver
		>
			<Div bg="brandDark" px={44} py={20} my="xl" rounded="xl" {...rest}>
				<Text color={color ?? 'textLight'} {...{ fontSize, fontWeight }}>
					{children}
				</Text>
			</Div>
		</TouchableScale>
	)
}
