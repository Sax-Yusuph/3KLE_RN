import { HomeScreenRoutes } from '@screens'

export default Object.freeze({
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
})

//i dont want us to rely on typescript for defining routes.. because
//its a tedious process when defining types for deeply nested routes.
// so we would just create a constant like this... and use it like
// @usage
// navigation.navigate(ROUTES.HOME.DEFAULT_HOMESCREEN)
// navigation.navigate(ROUTES.INVESTMENTS.DEFAULT_HOMESCREEN) etc

export const ROUTES = Object.freeze({
	HOME: HomeScreenRoutes,
})
