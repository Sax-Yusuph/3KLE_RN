import { HStack, SmallText, Circle, IconButton } from '@elements'
import { __COLORS } from '@utils/colors'
import React from 'react'
import { Icon } from 'react-native-magnus'

export const CreateGroupIcon = (
	<HStack>
		<SmallText color={__COLORS.SECONDARY}>New Group</SmallText>
		<Circle size={26} bg="rgba(1, 173, 239, 0.13)">
			<Circle size={24} borderColor={__COLORS.SECONDARY} borderWidth={1}>
				<Icon name="plus" color={__COLORS.BUTTON_BRAND} />
			</Circle>
		</Circle>
	</HStack>
)

export const CloseIcon = (
	<IconButton onPress={() => undefined} rounded="circle">
		<Icon name="close" fontSize={24} color="brandDark" />
	</IconButton>
)
