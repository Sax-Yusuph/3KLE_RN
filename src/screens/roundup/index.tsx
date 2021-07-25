import DefaultRoundupScreen from './all/default'
import AddCardScreen from './all/addCard'
import RoundupBalance from './all/roundup.balance'
import { ComponentType } from 'react'
import { Entries } from '@types'

export type RoundUpStackParams = {
	defaultRoundupScreen: undefined
	addCardScreen: { type: 'bank' | 'card' }
	roundupBalance: undefined
} //<-- infer typings for navigation.. e.g createStackNavigation<RoundUpStackParms>()
// see https://reactnavigation.org/docs/typescript/#type-checking-the-navigator

interface StackType extends Record<keyof RoundUpStackParams, { component: ComponentType<any | undefined> }> {}

export type RoundupStackEntries = Entries<StackType> //<-- this helps to infer correct typings for the nested Object.entries in BankStack Navigator file

const RoundUpStack: StackType = Object.freeze({
	defaultRoundupScreen: { component: DefaultRoundupScreen },
	addCardScreen: { component: AddCardScreen },
	roundupBalance: { component: RoundupBalance },
})

export default RoundUpStack
