import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { ProfileScreens } from '@screens'

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

const Stack = createStackNavigator()

const ProfileStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={SCREEN_OPTIONS}>
			{Object.entries(ProfileScreens).map(([name, props]) => {
				return <Stack.Screen key={name} name={name} {...props} />
			})}
		</Stack.Navigator>
	)
}

export default ProfileStack
