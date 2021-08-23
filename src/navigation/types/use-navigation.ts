import { __GROUP_SAVINGS_SCREENS, __ROOT_SCREENS } from './navigator-types'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'

export const useRootNavigation = <T extends keyof __ROOT_SCREENS>() =>
	useNavigation<NavigationProp<__ROOT_SCREENS, T>>()

export const useRootRoute = <T extends keyof __ROOT_SCREENS>() => useRoute<RouteProp<__ROOT_SCREENS, T>>()
export const useGroupSavingsNavigator = <T extends keyof __GROUP_SAVINGS_SCREENS>() =>
	useNavigation<NavigationProp<__GROUP_SAVINGS_SCREENS, T>>()

export const useGroupSavingsRoute = <T extends keyof __GROUP_SAVINGS_SCREENS>() =>
	useRoute<RouteProp<__GROUP_SAVINGS_SCREENS, T>>()
