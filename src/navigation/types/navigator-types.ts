import { SavingsGroup } from 'screens/groupSavings/all/mock_data'
import { __NAVIGATORS, __SCREENS } from './routes'

export type __ROOT_SCREENS = {
	[__SCREENS.VERIFY_IDENTITY]: { callbackRoute: { parent: __NAVIGATORS; screen: __SCREENS } }
	[__NAVIGATORS.SELF_TRADE]: undefined
}

export type __SELF_TRADE_SCREENS = {
	[__SCREENS.SELF_TRADE_INTRO]: undefined
	[__SCREENS.SELF_TRADE_DASHBOARD]: undefined
	[__SCREENS.STOCK_DETAILS]: { stock: any }
}

export type __GROUP_SAVINGS_SCREENS = {
	[__SCREENS.GROUP_SAVINGS_INTRO]: undefined
	[__SCREENS.GROUP_SAVINGS_DASHBOARD]: undefined
	[__SCREENS.GROUP_SAVINGS_CREATE_GROUP]: undefined
	[__SCREENS.GROUP_SAVINGS_VIEW_GROUP]: { groupInfo: SavingsGroup }
	[__SCREENS.GROUP_SAVINGS_RECENT_PAYOUTS]: undefined
	[__SCREENS.GROUP_SAVINGS_ALL_PAYMENTS_COLLECTED]: undefined
	[__SCREENS.GROUP_SAVINGS_UPCOMMING_PAYMENTS]: undefined
	[__SCREENS.GROUP_SAVINGS_PAYMENT_HISTORY]: undefined
	[__SCREENS.GROUP_SAVINGS_COLLECT_INFO_1]: undefined
	[__SCREENS.GROUP_SAVINGS_COLLECT_INFO_2]: undefined
	[__SCREENS.GROUP_SAVINGS_COLLECT_INFO_3]: undefined
	[__SCREENS.GROUP_SAVINGS_TERMS_AND_CONDITIONS]: undefined
	[__SCREENS.GROUP_SAVINGS_ALL_PAYMENTS_COLLECTED]: undefined
}
