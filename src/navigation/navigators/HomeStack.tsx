// import { createStackNavigator } from '@react-navigation/stack'
// import React from 'react'
// import { HomeScreen } from '@screens'
import {
	CardStyleInterpolators,
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'
import React from 'react'
import { HomeScreen, HomeScreens } from '@screens'
import { Dummy } from '../../screens'

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

const HomeStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={SCREEN_OPTIONS}>
			{Object.entries(HomeScreens).map(([name, props]) => {
				return <Stack.Screen key={name} name={name} {...props} />
			})}
		</Stack.Navigator>
	)
}

export default HomeStack

// const RouterHomeStack = createStackNavigator()

// const HomeStack: React.FC = () => {
// 	return (
// 		<RouterHomeStack.Navigator
// 			screenOptions={{
// 				headerShown: false,
// 				safeAreaInsets: {
// 					bottom: 0,
// 					top: 0,
// 					right: 0,
// 					left: 0,
// 				},
// 			}}
// 		>
// 			<RouterHomeStack.Screen name='Home' component={HomeScreen} />
// 		</RouterHomeStack.Navigator>
// 	)
// }

// export default HomeStack
