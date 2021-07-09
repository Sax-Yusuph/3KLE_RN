import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createHelpers from './createHelpers'

// creates the store
export default (rootReducer: any, helpersConfig: any) => {
	/* ------------- Redux Configuration ------------- */

	const middleware = []
	const enhancers = []

	/* ------------- Thunk Middleware ------------- */
	const helpers = createHelpers(helpersConfig)
	middleware.push(thunk.withExtraArgument(helpers))

	/* ------------- Assemble Middleware ------------- */
	enhancers.push(applyMiddleware(...middleware))

	// if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
	// const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
	const store = createStore(rootReducer, compose(...enhancers))
	return {
		store,
	}
}
