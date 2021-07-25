import { CustomScreen, Heading, Paragraph, ThreeColumnHeader, VirtualizedView } from '@elements'
import React, { FC } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Div, Icon } from 'react-native-magnus'

interface BillingItemProps {
	billName: string
}

const MOCK_DATA: BillingItemProps[] = [
	{ billName: 'Send Money' },
	{ billName: 'Buy Airtime' },
	{ billName: 'Buy Mobile Data' },
	{ billName: 'Mobile Recharge' },
	{ billName: 'Utilities' },
	{ billName: 'Payment Links' },
	{ billName: 'Web Payment' },
	{ billName: 'Internet Services' },
	{ billName: 'Pay for NECO, WAEC, JAMB etc.' },
	{ billName: 'Travel and Hotel' },
	{ billName: 'Cable TV' },
	{ billName: 'School and Exam fees' },
	{ billName: 'Transport and Toll payment' },
	{ billName: 'Betting Lottery and Gambling' },
	{ billName: 'Products and Services' },
	{ billName: 'Financial Services' },
	{ billName: 'Pay Salaries' },
	{ billName: 'Mobile Money Wallet' },
	{ billName: 'Associations and Societies' },
	{ billName: 'Dealer Payments' },
	{ billName: 'Embassies Payments' },
	{ billName: 'Pay Choice' },
	{ billName: 'Event Tickets' },
	{ billName: 'Invoice Payments' },
	{ billName: 'Aid, Grants and Donations' },
	{ billName: 'Pay Merchants' },
	{ billName: 'Religious Institutions' },
	{ billName: 'Pay TV' },
	{ billName: 'International Airtime' },
	{ billName: 'Prepaid Card Services' },
	{ billName: 'Credit and Loans' },
	{ billName: 'Government and State Payments' },
	{ billName: 'Online Shopping' },
	{ billName: 'Quickteller Business' },
	{ billName: 'Nestle Distributors' },
	{ billName: 'BankOne MFBs' },
	{ billName: 'Insurance Payment' },
	{ billName: 'Dues and Service Charge' },
	{ billName: 'Tax Payment' },
]

const BillingCategory = () => {
	return (
		<CustomScreen noGutter>
			<ThreeColumnHeader
				backIcon="close"
				RightIconComponent={<Icon name="search1" fontSize="3xl" color="brandDark" />}
			/>
			<VirtualizedView>
				<Div px="xl">
					<Heading fontSize="3xl">Billing Category</Heading>
					<Paragraph color="textDark" fontSize="sm">
						Select a billing category to continue
					</Paragraph>
					<Div my="xl" />
					<FlatList
						data={MOCK_DATA}
						keyExtractor={(i) => i.billName}
						renderItem={({ item }) => <BillingItem {...item} />}
					/>
				</Div>
			</VirtualizedView>
		</CustomScreen>
	)
}

export default BillingCategory

const BillingItem: FC<BillingItemProps> = ({ billName }) => {
	return (
		<TouchableOpacity>
			<Div
				my="md"
				p="xl"
				bg="card"
				borderColor="brandDark"
				borderWidth={1}
				roundedTopRight={20}
				roundedBottomLeft={20}
			>
				<Heading fontSize="lg" fontWeight="500">
					{billName}
				</Heading>
			</Div>
		</TouchableOpacity>
	)
}
