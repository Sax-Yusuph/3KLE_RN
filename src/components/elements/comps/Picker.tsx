import { TouchablePress, HStack, MediumText, IconButton } from '@elements'
import { __COLORS } from '@utils/colors'
import { DEFAULT_PADDING } from '@utils/util'
import React, { FC } from 'react'
import { Icon } from 'react-native-magnus'

export interface PickerProps {
	value: string
	placeholder?: string
	onPress(): void
	icon?: string
}

export const Picker: FC<PickerProps> = ({ value, placeholder, onPress, icon }) => {
	return (
		<TouchablePress onPress={onPress}>
			<HStack
				justifyContent="space-between"
				py={5}
				w="100%"
				h={80}
				bg="#EAEAEA"
				rounded={15}
				px={DEFAULT_PADDING}
			>
				<MediumText color={!value ? __COLORS.GREY : __COLORS.BUTTON_BRAND}>{value || placeholder}</MediumText>
				<IconButton onPress={onPress} activeBg={__COLORS.LIGHT_GREY} rounded="circle">
					<Icon name={icon ?? 'down'} fontSize={20} color={__COLORS.BUTTON_BRAND} />
				</IconButton>
			</HStack>
		</TouchablePress>
	)
}
