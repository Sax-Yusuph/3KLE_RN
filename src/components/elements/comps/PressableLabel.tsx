import { RegularText } from '@elements'
import { __COLORS } from '@utils/colors'
import React from 'react'
import { FC } from 'react'

import { TouchablePress } from './Pressable'

interface Props {
	title: string
	onPress: () => void
	color?: string
	disabled?: boolean
	isBold?: boolean
	fontSize?: number
	secondary?: boolean
	underlined?: boolean
}

export const PressableLabel: FC<Props> = ({
	title,
	onPress,
	color,
	disabled,
	fontSize,
	secondary,
	underlined,
}) => {
	const __color = secondary ? __COLORS.BLACK : __COLORS.BUTTON_BRAND
	return (
		<TouchablePress {...{ onPress, disabled }}>
			<RegularText
				color={color ?? __color}
				textDecorationLine={underlined ? 'underline' : 'none'}
				// fontFamily={isBold ? Fonts.appFontBold : Fonts.appFontRegular}
				fontSize={fontSize}
			>
				{title}
			</RegularText>
		</TouchablePress>
	)
}
