import { TouchablePress, Circle } from '@elements'
import { __COLORS } from '@utils/colors'
import { DEFAULT_PADDING } from '@utils/util'
import React, { FC } from 'react'
import { DivProps, Icon } from 'react-native-magnus'

const RoundButton: FC<DivProps & { onPress(): void }> = ({ onPress, ...props }) => {
	return (
		<TouchablePress onPress={onPress}>
			<Circle
				position="absolute"
				bg="transparent"
				size={50}
				borderColor={__COLORS.BUTTON_BRAND}
				borderWidth={1.4}
				bottom={DEFAULT_PADDING}
				right={DEFAULT_PADDING}
				{...props}
			>
				<Icon name="right" color={__COLORS.BUTTON_BRAND} fontSize="xl" />
			</Circle>
		</TouchablePress>
	)
}

export default RoundButton
