import ActivateFingerPrint from './all/fingerPrint.setting'

export const CommonScreenRoutes = {
	ACTIVATE_FINGERPRINT: 'activateFingerprint',
}
export type CommonRoutes = keyof typeof CommonScreenRoutes

export default Object.freeze({
	activateFingerprint: { component: ActivateFingerPrint },
})
