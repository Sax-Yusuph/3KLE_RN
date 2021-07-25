import React from 'react'
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { RoundUpScreens } from '@screens'
import { RoundupStackEntries, RoundUpStackParams } from 'screens/roundup'

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

const Stack = createStackNavigator<RoundUpStackParams>()

const RoundUpStack: React.FC = () => {
	const StackEntries = Object.entries(RoundUpScreens) as RoundupStackEntries
	return (
		<Stack.Navigator screenOptions={SCREEN_OPTIONS}>
			{StackEntries.map(([name, props]) => {
				return <Stack.Screen key={name} name={name} {...props} />
			})}
		</Stack.Navigator>
	)
}

export default Object.freeze({
	roundUp: { component: RoundUpStack },
})
