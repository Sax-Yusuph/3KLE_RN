import { __SCREENS } from '@navigation/types/routes'
import ActivateFingerPrint from './all/fingerPrint.setting'
import SuccessScreen from './all/success.screen'
import SuccessScreenTwo from './all/sucess2.screen'
import VerifyIdentity from './all/identity.verification'

export const CommonScreenRoutes = {
	ACTIVATE_FINGERPRINT: 'activateFingerprint',
	SUCCESS_SCREEN: 'successScreen',
}
export type CommonRoutes = keyof typeof CommonScreenRoutes

export default Object.freeze({
	[__SCREENS.ACTIVATE_FINGERPRINT]: { component: ActivateFingerPrint },
	[__SCREENS.SUCCESS]: { component: SuccessScreen },
	[__SCREENS.SUCCESS_ALT]: { component: SuccessScreenTwo },
	[__SCREENS.VERIFY_IDENTITY]: { component: VerifyIdentity },
})
