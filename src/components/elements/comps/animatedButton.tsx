import React, { FC } from 'react'
import { Div, DivProps } from 'react-native-magnus'
import TouchableScale, { TouchableScaleProps } from 'react-native-touchable-scale'

type Props = DivProps & TouchableScaleProps
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
