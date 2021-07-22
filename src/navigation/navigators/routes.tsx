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

//i dont want us to rely on typescript for defining routes.. because
//its a tedious process when defining types for deeply nested routes.
// so we would just create a constant like this... and use it like
// @usage
// navigation.navigate(ROUTES.HOME.DEFAULT_HOMESCREEN)
// navigation.navigate(ROUTES.INVESTMENTS.DEFAULT_HOMESCREEN) etc
