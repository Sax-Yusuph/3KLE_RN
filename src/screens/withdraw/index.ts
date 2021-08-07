import { ComponentType } from 'react'
import ChooseWithdrawalAccount from './all/default'
import SavingsWithdrawal from './all/savings.withdrawal'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Options } from '../screenOptions'
import WithdrawalInfoCollector from './all/withdrawInfo.collector'
import ChangeWithdrawAccount from './all/change.account'

//<-- infer typings for navigation.. e.g createStackNavigation<WithdrawStackParms>()
// see https://reactnavigation.org/docs/typescript/#type-checking-the-navigator
export type WithdrawStackParams = {
	defaultWithdrawalScreen: undefined
	savingsWithdrawal: undefined
	WithdrawInfoCollector: { title: string; key: string }
	changeWithdrawAccount: undefined
}

interface StackType
	extends Record<
		keyof WithdrawStackParams,
		{ component: ComponentType<any | undefined>; options?: StackNavigationOptions }
	> {}

const WithdrawStack: StackType = Object.freeze({
	defaultWithdrawalScreen: { component: ChooseWithdrawalAccount, Options },
	savingsWithdrawal: { component: SavingsWithdrawal, options: Options },
	WithdrawInfoCollector: { component: WithdrawalInfoCollector, options: Options },
	changeWithdrawAccount: { component: ChangeWithdrawAccount, options: Options },
})

export default WithdrawStack
