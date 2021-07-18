import { COLORS } from '@utils/colors'
import React, { FC, ReactElement } from 'react'
import { SvgProps } from 'react-native-svg'
import OpenAccountIcon from '@assets/svgs/homepage/open_account.svg'
import SendMoneyIcon from '@assets/svgs/homepage/purple_wallet.svg'
import WidthdrawIcon from '@assets/svgs/homepage/wallet.svg'
import BillPaymentIcon from '@assets/svgs/homepage/Document.svg'
import FingerprintIcon from '@assets/svgs/homepage/fingerprint.svg'
import AddMoneyIcon from '@assets/svgs/homepage/money.svg'
import BankIcon from '@assets/svgs/homepage/bank.svg'
// import Emoji from '@assets/svgs/homepage/Emoji.svg'
import PeerIcon from '@assets/svgs/homepage/peer.svg'
import GoalIcon from '@assets/svgs/homepage/goal.svg'
import FamilyPlusIcon from '@assets/svgs/homepage/people.svg'
import InvestNowIcon from '@assets/svgs/homepage/chart_alt.svg'
import RotateIcon from '@assets/svgs/homepage/rotate.svg'

import { Center } from '@elements'
import { showToast } from '@utils/helpers'
import { HomeRoutes } from 'screens/home'
import Routes from '@navigation/navigators/routes'

export type ProductListItem = {
	title: string
	description: string
	Icon: JSX.Element
}

export const RenderIcon = (Icon: FC<SvgProps>, color: string) => {
	const SIZE = 70
	return (
		<Center bg={color} w={SIZE} h={SIZE} rounded="2xl">
			<Icon />
		</Center>
	)
}

export const PRODUCTS: ProductListItem[] = [
	{
		title: 'Peer 2 Peer Loans',
		description: 'Have access to a pool of available lenders and trustworthy borrowers.',
		Icon: RenderIcon(PeerIcon, COLORS.peer2Peer),
	},
	{
		title: 'Goal Savings',
		description: 'Easily save for specific personal goals with our Goal saving plan, without risks.',
		Icon: RenderIcon(GoalIcon, COLORS.goalSavings),
	},
	{
		title: 'Family Plus',
		description: 'Save towards the future of your kids and other family members',
		Icon: RenderIcon(FamilyPlusIcon, COLORS.familyPlus),
	},
	{
		title: 'Invest Now (Auto Manage)',
		description: 'Investments are chosen and managed automatically with huge returns.',
		Icon: RenderIcon(InvestNowIcon, COLORS.investNow),
	},
]

export type Activity = {
	icon: ReactElement
	title: string
	action: unknown
	navRoute?: string
}

const ICON_WIDTH = 24

export const ACTIVITIES: Activity[] = [
	{
		icon: <OpenAccountIcon width={ICON_WIDTH} height={ICON_WIDTH} />,
		title: 'Open Account',
		action: showToast,
		// navRoute:Routes
	},
	{
		icon: <SendMoneyIcon width={ICON_WIDTH} height={ICON_WIDTH} />,
		title: 'Send Money',
		action: showToast,
	},
	{
		icon: <WidthdrawIcon width={ICON_WIDTH} height={ICON_WIDTH} />,
		title: 'Withdraw',
		action: showToast,
	},
	{
		icon: <BillPaymentIcon width={ICON_WIDTH} height={ICON_WIDTH} />,
		title: 'Bill Payment',
		action: showToast,
	},
	{
		icon: <FingerprintIcon width={ICON_WIDTH} height={ICON_WIDTH} color={COLORS.brandDark} />,
		title: 'Fingerprint',
		action: showToast,
		navRoute: Routes.COMMON_SCREENS.ACTIVATE_FINGERPRINT,
	},
	{
		icon: <AddMoneyIcon width={ICON_WIDTH} height={ICON_WIDTH} />,
		title: 'Add Money',
		action: showToast,
	},
	{
		icon: <BankIcon width={ICON_WIDTH} height={ICON_WIDTH} />,
		title: 'Link bank Account',
		action: showToast,
	},
	{
		icon: <RotateIcon width={ICON_WIDTH} height={ICON_WIDTH} />,
		title: 'Round-Up Settings',
		action: showToast,
	},
]

export type Summary = {
	title: string
	route: HomeRoutes
	type: 'present' | 'future' | 'past'
	summary: {
		title: string
		value: string | number //must be a number
		extraData?: string
		currency: '₦' | '$'
		projectionSpan?: number
		cardNumber?: string
		cardName?: string
		cardType?: string
	}
}

export const DATA: Summary[] = [
	{
		title: 'Past',
		route: 'PAST_SUMMARY',
		type: 'past',
		summary: {
			title: 'Total Invested',
			value: '750,000',
			currency: '₦',
			// cardNumber: 'xxxx xxxx xxxx 333',
			// cardName: 'Okorie Uche Emmanuel',
		},
	},
	{
		title: 'Present',
		route: 'DEFAULT_HOME',
		type: 'present',
		summary: {
			title: 'current balance',
			value: '750,000',
			currency: '₦',
			cardNumber: 'xxxx xxxx xxxx 333',
			cardName: 'Okorie Uche Emmanuel',
			cardType: 'Visa',
		},
	},
	{
		title: 'Future',
		route: 'FUTURE_SUMMARY',
		type: 'future',
		summary: {
			title: 'Hypothetical projection of',
			value: '8,050,000',
			extraData: 'in',
			projectionSpan: 5,
			currency: '₦',
			// cardNumber: 'xxxx xxxx xxxx 333',
			// cardName: 'Okorie Uche Emmanuel',
			// cardType: 'Visa',
		},
	},
]
export const DATA2: Summary[] = [
	{
		title: 'Past',
		route: 'PAST_SUMMARY',
		type: 'past',
		summary: {
			title: 'Total Invested',
			value: '0.00',
			currency: '₦',
			// cardNumber: 'xxxx xxxx xxxx 333',
			// cardName: 'Okorie Uche Emmanuel',
		},
	},
	{
		title: 'Present',
		route: 'DEFAULT_HOME',
		type: 'present',
		summary: {
			title: 'current balance',
			value: '0.00',
			currency: '₦',
		},
	},
	{
		title: 'Future',
		route: 'FUTURE_SUMMARY',
		type: 'future',
		summary: {
			title: 'Hypothetical projection of',
			value: '0.00',
			extraData: 'in',
			projectionSpan: 5,
			currency: '₦',
		},
	},
]
