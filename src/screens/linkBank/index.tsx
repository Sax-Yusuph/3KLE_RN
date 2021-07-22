import DefaultLinkBankScreen from './all/default'
import AvailableBanks from './all/available.banks'
import { ComponentType } from 'react'
import { Entries } from '@types'
import AgreementPolicyScreen from './all/agreement.policy'
import EnterCrendentials from './all/credentials.banks'

export type LinkBankStackParams = {
	availableBankListScreen: undefined
	defaultAddBankScreen: undefined
	agreementPolicyScreen: { bankName: string }
	enterCrendentials: { bankName: string }
} //<-- infer typings for navigation.. e.g createStackNavigation<LinkBankStackParms>()
// see https://reactnavigation.org/docs/typescript/#type-checking-the-navigator

interface StackType
	extends Record<keyof LinkBankStackParams, { component: ComponentType<any | undefined> }> {}

export type BankStackEntries = Entries<StackType> //<-- this helps to infer correct typings for the nested Object.entries in BankStack Navigator file

const BankStack: StackType = Object.freeze({
	defaultAddBankScreen: { component: DefaultLinkBankScreen },
	availableBankListScreen: { component: AvailableBanks },
	agreementPolicyScreen: { component: AgreementPolicyScreen },
	enterCrendentials: { component: EnterCrendentials },
})

export default BankStack
