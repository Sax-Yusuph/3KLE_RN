import { CardScreenRoutes, CommonScreenRoutes, HomeScreenRoutes, ProfileScreenRoutes } from '@screens'
import { OnboardingScreenRoutes } from '@screens'

const Routes = Object.freeze({
	LOGIN: 'login',
	REGISTER: {
		STEP_ONE: 'stepOne',
		STEP_TWO: 'stepTwo',
		STEP_THREE: 'stepThree',
		STEP_FOUR: 'stepFour',
		STEP_FIVE: 'stepFive',
		STEP_SIX: 'stepSix',
		STEP_SEVEN: 'stepSeven',
		STEP_EIGHT: 'stepEight',
		STEP_NINE: 'stepNine',
	},
	HOME: HomeScreenRoutes,
	ONBOARDING: OnboardingScreenRoutes,
	CARDS: CardScreenRoutes,
	MY_ACCOUNT: ProfileScreenRoutes,
	COMMON_SCREENS: CommonScreenRoutes,
})

export default Routes
export type RoutesType = keyof typeof Routes
