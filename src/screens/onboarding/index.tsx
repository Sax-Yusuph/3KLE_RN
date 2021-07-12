import Onboarding from './onBoarding'

export const OnboardingScreenRoutes = {
	ONBOARDING: 'Onboarding',
}
export type OnboardingRoutes = keyof typeof OnboardingScreenRoutes

export default Object.freeze({
	Onboarding: { component: Onboarding, options: { headerShown: false } },
})
