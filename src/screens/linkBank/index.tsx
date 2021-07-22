import DefaultLinkBankScreen from './all/default'
import AvailableBanks from './all/available.banks'
import { ComponentType } from 'react'
import { Entries } from '@types'

export type LinkBankStackParams = {
	availableBankListScreen: undefined
	defaultAddBankScreen: undefined
} //<-- infer typings for navigation.. e.g createStackNavigation<LinkBankStackParms>()
// see https://reactnavigation.org/docs/typescript/#type-checking-the-navigator

interface StackType
	extends Record<keyof LinkBankStackParams, { component: ComponentType<any | undefined> }> {}

export type BankStackEntries = Entries<StackType> //<-- this helps to infer correct typings for the nested Object.entries in BankStack Navigator file

const BankStack: StackType = Object.freeze({
	defaultAddBankScreen: { component: DefaultLinkBankScreen },
	availableBankListScreen: { component: AvailableBanks },
})

export default BankStack
