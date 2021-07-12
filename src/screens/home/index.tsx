import HomeScreen from './all/default.home'
import FutureSummary from './all/future.home'
import PastSummary from './all/past.home'

export const HomeScreenRoutes = {
	DEFAULT_HOME: 'defaultHome',
	FUTURE_SUMMARY: 'futureSummary',
	PAST_SUMMARY: 'pastSummary',
}
export type HomeRoutes = keyof typeof HomeScreenRoutes

export default Object.freeze({
	defaultHome: { component: HomeScreen },
	futureSummary: { component: FutureSummary },
	pastSummary: { component: PastSummary },
})
