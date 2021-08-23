import { IntroScreen } from './all/introScreen'
import { ComponentType } from 'react'
import { Entries } from '@types'
import { __SELF_TRADE_SCREENS } from '@navigation/types/navigator-types'
import { __SCREENS } from '@navigation/types/routes'
import { SelfTradeDashboard } from './all/dashboard'
import { StockDetails } from './all/stock.details'

interface StackType
	extends Record<keyof __SELF_TRADE_SCREENS, { component: ComponentType<any | undefined> }> {}

// this helps to infer correct typings for the nested Object.entries in respective Stack Navigator file
export type SelfTradeStackEntries = Entries<StackType>

const SelfTradeScreens: StackType = Object.freeze({
	[__SCREENS.SELF_TRADE_INTRO]: { component: IntroScreen },
	[__SCREENS.SELF_TRADE_DASHBOARD]: { component: SelfTradeDashboard },
	[__SCREENS.STOCK_DETAILS]: { component: StockDetails },
})

export default SelfTradeScreens
