import BillingCategory from './all/billing.category'
import { ComponentType } from 'react'
import { Entries } from '@types'

export type BillPaymentStackParams = {
	BillingCategory: undefined
} //<-- infer typings for navigation.. e.g createStackNavigation<LinkBankStackParms>()
// see https://reactnavigation.org/docs/typescript/#type-checking-the-navigator

interface StackType
	extends Record<keyof BillPaymentStackParams, { component: ComponentType<any | undefined> }> {}

export type BillPaymentStactEntries = Entries<StackType> //<-- this helps to infer correct typings for the nested Object.entries in BankStack Navigator file

const BillPaymentStack: StackType = Object.freeze({
	BillingCategory: { component: BillingCategory },
})

export default BillPaymentStack
