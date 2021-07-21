import DefaultLinkBankScreen from './all/default'
import AvailableBanks from './all/available.banks'

export const LinkBankScreenRoutes = {
	PARENT_SCREEN: 'linkBankAccount',
	DEFAULT_SCREEN: 'defaultAddBankScreen',
	AVAILABLE_BANKS_LIST_SCREEN: 'availableBankListScreen',
}
export type LinkBankRoutes = keyof typeof LinkBankScreenRoutes

export default Object.freeze({
	defaultLinkBankScreen: { component: DefaultLinkBankScreen },
	availableBankListScreen: { component: AvailableBanks },
})
