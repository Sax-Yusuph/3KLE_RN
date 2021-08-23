import {
	CustomScreen,
	Header,
	Heading,
	Padding,
	VirtualizedView,
	Spacer,
	MediumText,
	HStack,
	UserAvatar,
	RegularText,
	AppButton,
} from '@elements'
import { __NAVIGATORS } from '@navigation/types/routes'
import { useGroupSavingsNavigator } from '@navigation/types/use-navigation'
import { __COLORS } from '@utils/colors'
import { DEFAULT_BORDER_RADIUS, DEFAULT_PADDING } from '@utils/util'
import React, { FC, useCallback } from 'react'
import { FlatList } from 'react-native'
import { Div } from 'react-native-magnus'

interface Entity {
	name: string
	amount: number
	status: 'pending' | 'complete'
}

const DUMMY_GROUP_LIST: Entity[] = [
	{ name: 'Chinedu madi', amount: 50, status: 'pending' },
	{ name: 'Chinedu madi', amount: 50, status: 'pending' },
	{ name: 'Chinedu madi', amount: 50, status: 'pending' },
	{ name: 'Chinedu madi', amount: 50, status: 'pending' },
	{ name: 'Chinedu madi', amount: 50, status: 'pending' },
	{ name: 'Chinedu madi', amount: 50, status: 'pending' },
]

const UpcommingPayments = () => {
	const navigation = useGroupSavingsNavigator()
	const gotTODahsboard = useCallback(() => {
		// @ts-ignore
		navigation.navigate(__NAVIGATORS.HOME)
	}, [navigation])
	return (
		<CustomScreen>
			<VirtualizedView>
				<Header title="" backIcon="close" />
				<Padding>
					<Heading fontSize="3xl" fontWeight="900">
						Upcoming Payments
					</Heading>
					<Spacer yMulitply={3} />

					<MediumText>Friday 24th September 2021</MediumText>
					<Spacer />
					<FlatList
						data={DUMMY_GROUP_LIST}
						keyExtractor={(_, i) => i.toString()}
						ItemSeparatorComponent={() => <Spacer yMulitply={0.6} />}
						renderItem={({ item }) => <EntityCard {...item} />}
					/>
				</Padding>

				<Padding>
					<AppButton
						onPress={gotTODahsboard}
						backgroundColor={__COLORS.BUTTON_BRAND}
						color={__COLORS.WHITE}
						title="Dashboard"
					/>
				</Padding>
			</VirtualizedView>
		</CustomScreen>
	)
}

export default UpcommingPayments

export const EntityCard: FC<Entity> = ({ name, amount, status }) => {
	const color = status === 'complete' ? __COLORS.SECONDARY : __COLORS.GREY
	return (
		<HStack
			justifyContent="space-between"
			p={DEFAULT_PADDING}
			bg={__COLORS.Background}
			rounded={DEFAULT_BORDER_RADIUS}
		>
			<UserAvatar />
			<Div alignSelf="flex-start" flex={1} pt={DEFAULT_PADDING}>
				<MediumText numberOfLines={1}>{name}</MediumText>
			</Div>
			<Div alignItems="center">
				<MediumText>${amount}</MediumText>
				<RegularText color={color}>{status}</RegularText>
			</Div>
		</HStack>
	)
}
