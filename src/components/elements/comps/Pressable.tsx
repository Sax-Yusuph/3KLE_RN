import { RIPPLE_CONFIG } from '@utils/util'
import React, { FC } from 'react'
import { Platform, Pressable } from 'react-native'
import { DivProps, Div } from 'react-native-magnus'
import TouchableScale, { TouchableScaleProps } from 'react-native-touchable-scale'

type Props = DivProps & TouchableScaleProps

export const TouchablePress: FC<Props> = (props) => {
	const { onPress, activeScale, bg, disabled, children, ...rest } = props
	if (Platform.OS === 'android') {
		return (
			<Div {...rest}>
				<Pressable
					onPress={onPress}
					disabled={disabled}
					style={{ backgroundColor: bg }}
					android_ripple={RIPPLE_CONFIG}
				>
					{children}
				</Pressable>
			</Div>
		)
	}

	return (
		<TouchableScale
			onPress={onPress}
			disabled={disabled}
			activeScale={activeScale || 0.9} //0.9
			tension={200} //150
			friction={15} //3
			useNativeDriver
		>
			<Div {...rest} bg={bg}>
				{children}
			</Div>
		</TouchableScale>
	)
}
