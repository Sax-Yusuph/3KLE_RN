import ActivateFingerPrint from './all/fingerPrint.setting'
import SuccessScreen from './all/success.screen'

export const CommonScreenRoutes = {
	ACTIVATE_FINGERPRINT: 'activateFingerprint',
	SUCCESS_SCREEN: 'successScreen',
}
export type CommonRoutes = keyof typeof CommonScreenRoutes

export default Object.freeze({
	activateFingerprint: { component: ActivateFingerPrint },
	successScreen: { component: SuccessScreen },
})
