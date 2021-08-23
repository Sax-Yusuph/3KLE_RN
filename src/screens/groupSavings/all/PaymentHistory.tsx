import {
	CustomScreen,
	VirtualizedView,
	Header,
	Padding,
	Heading,
	Spacer,
	SmallText,
	Divider,
	HStack,
	MediumText,
	TouchablePress,
	RegularText,
} from '@elements'
import { __COLORS } from '@utils/colors'
import { DEFAULT_PADDING } from '@utils/util'
import React, { FC } from 'react'
import { FlatList } from 'react-native'

interface PaymentHistory {
	date: string
	status: 'Pending' | 'Complete'
	amount: number
}

const MOCK_DATA: PaymentHistory[] = [
	{
		date: '23/09/21',
		status: 'Pending',
		amount: 50,
	},
	{
		date: '23/09/21',
		status: 'Complete',
		amount: 50,
	},
	{
		date: '23/09/21',
		status: 'Complete',
		amount: 50,
	},
]

const PaymentHistory = () => {
	return (
		<CustomScreen>
			<VirtualizedView>
				<Header title="" backIcon="close" />
				<Padding>
					<Heading fontSize="3xl" fontWeight="900">
						My Payment History
					</Heading>
					<Spacer yMulitply={0.5} />

					<SmallText>All your Pay-ins and group cycle payments</SmallText>
					<Spacer />
				</Padding>
				<FlatList
					data={MOCK_DATA}
					keyExtractor={(_, i) => i.toString()}
					ItemSeparatorComponent={Divider}
					renderItem={({ item }) => <HistoryCard {...item} />}
				/>
				<Divider />
			</VirtualizedView>
		</CustomScreen>
	)
}

export default PaymentHistory

export const HistoryCard: FC<PaymentHistory> = ({ date, status, amount }) => {
	const color = status === 'Complete' ? __COLORS.SECONDARY : __COLORS.GREY
	return (
		<TouchablePress>
			<HStack justifyContent="space-between" p={DEFAULT_PADDING}>
				<MediumText>{date}</MediumText>
				<HStack>
					<RegularText {...{ color }} mr={10}>
						{status}
					</RegularText>
					<RegularText>${amount}</RegularText>
				</HStack>
			</HStack>
		</TouchablePress>
	)
}
