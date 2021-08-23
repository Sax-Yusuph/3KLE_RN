import { IntroScreen } from './all/introScreen'
import { ComponentType } from 'react'
import { Entries } from '@types'
import { __GROUP_SAVINGS_SCREENS } from '@navigation/types/navigator-types'
import { __SCREENS } from '@navigation/types/routes'
import CreateGroup from './all/CreateGroup'
import GroupInfoCollector from './all/GroupInfoCollector'
import InfoCollector2 from './all/InfoCollector2'
import Dashboard from './all/Dashboard'
import ViewSavingsGroup from './all/ViewGroup'
import RecentPayouts from './all/RecentPayouts'
import AllPaymentsCollected from './all/PaymentsCollected'
import UpcommingPayments from './all/UpcommingPayments'
import PaymentHistory from './all/PaymentHistory'

interface StackType
	extends Record<keyof __GROUP_SAVINGS_SCREENS, { component: ComponentType<any | undefined> }> {}

// this helps to infer correct typings for the nested Object.entries in respective Stack Navigator file
export type GroupSavingsStackEntries = Entries<StackType>

const GroupSavingScreens: StackType = Object.freeze({
	[__SCREENS.GROUP_SAVINGS_INTRO]: { component: IntroScreen },
	[__SCREENS.GROUP_SAVINGS_DASHBOARD]: { component: Dashboard },
	[__SCREENS.GROUP_SAVINGS_RECENT_PAYOUTS]: { component: RecentPayouts },
	[__SCREENS.GROUP_SAVINGS_ALL_PAYMENTS_COLLECTED]: { component: AllPaymentsCollected },
	[__SCREENS.GROUP_SAVINGS_UPCOMMING_PAYMENTS]: { component: UpcommingPayments },
	[__SCREENS.GROUP_SAVINGS_PAYMENT_HISTORY]: { component: PaymentHistory },
	[__SCREENS.GROUP_SAVINGS_VIEW_GROUP]: { component: ViewSavingsGroup },
	[__SCREENS.GROUP_SAVINGS_CREATE_GROUP]: { component: CreateGroup },
	[__SCREENS.GROUP_SAVINGS_COLLECT_INFO_1]: { component: GroupInfoCollector },
	[__SCREENS.GROUP_SAVINGS_COLLECT_INFO_2]: { component: InfoCollector2 },
	[__SCREENS.GROUP_SAVINGS_COLLECT_INFO_3]: { component: GroupInfoCollector },
	[__SCREENS.GROUP_SAVINGS_TERMS_AND_CONDITIONS]: { component: GroupInfoCollector },
})

export default GroupSavingScreens
