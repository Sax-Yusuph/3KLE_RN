import DefaultCardScreen from './all/default.card'

export const CardScreenRoutes = {
	DEFAULT_CARD_SCREEN: 'defaultCardScreen',
}
export type CardRoutes = keyof typeof CardScreenRoutes

export default Object.freeze({
	defaultCardScreen: { component: DefaultCardScreen },
})
