import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { __GROUP_SAVINGS_SCREENS } from '@navigation/types/navigator-types'
import { __NAVIGATORS } from '@navigation/types/routes'
import GroupSavingScreens, { GroupSavingsStackEntries } from 'screens/groupSavings'

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

const Stack = createStackNavigator<__GROUP_SAVINGS_SCREENS>()

const GroupSavingStack: React.FC = () => {
	const StackEntries = Object.entries(GroupSavingScreens) as GroupSavingsStackEntries

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
	[__NAVIGATORS.GROUP_SAVINGS]: { component: GroupSavingStack },
})
