import { combineReducers } from 'redux'
import configureStore from '../createStore'
import global from './global'
import signUp from './signUp'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
	enrollUser: signUp,
	global,
})

export default (helpersConfig: any) => {
	const finalReducers = reducers
	const { store } = configureStore(finalReducers, helpersConfig)

	return store
}
