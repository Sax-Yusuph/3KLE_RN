import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { SelfTradeScreens } from '@screens'
import { SelfTradeStackEntries } from 'screens/selfTrade'
import { __SELF_TRADE_SCREENS } from '@navigation/types/navigator-types'
import { __NAVIGATORS } from '@navigation/types/routes'

const SCREEN_OPTIONS: StackNavigationOptions = {
	headerShown: false,
	safeAreaInsets: {
		bottom: 0,
		top: 0,
		right: 0,
		left: 0,
	},
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

const Stack = createStackNavigator<__SELF_TRADE_SCREENS>()

const SelfTradeStack: React.FC = () => {
	const StackEntries = Object.entries(SelfTradeScreens) as SelfTradeStackEntries

	return (
		<Stack.Navigator screenOptions={SCREEN_OPTIONS}>
			{/* @ts-ignore */}
			{StackEntries.map(([name, props]) => {
				// console.log({ name_2: name })
				return <Stack.Screen key={name} name={name} {...props} />
			})}
		</Stack.Navigator>
	)
}

export default Object.freeze({
	[__NAVIGATORS.SELF_TRADE]: { component: SelfTradeStack },
})
