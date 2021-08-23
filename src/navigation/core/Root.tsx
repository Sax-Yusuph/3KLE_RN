import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import RNBootSplash from 'react-native-bootsplash'
import { ThemeProvider } from 'react-native-magnus'
import { Host } from 'react-native-portalize'
import { lightTheme } from '../../themes'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { userScreens } from '@navigation/navigators'
import { OnboardingScreens } from '@screens'
const MainStack = createStackNavigator()

// const linking: LinkingOptions = {
// 	prefixes: ['helloworld://'],
// 	config: {
// 		screens: {},
// 	},
// }

const Root: React.FC = () => {
	return (
		<NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
			<Host>
				<SafeAreaProvider>
					<ThemeProvider theme={lightTheme}>
						<MainStack.Navigator
							mode="modal"
							screenOptions={{
								cardStyle: { backgroundColor: '#243B80' },
								headerShown: false,
								...TransitionPresets.ModalSlideFromBottomIOS,
							}}
						>
							{/* {Object.entries({
							// Use some screens conditionally based on some condition
							...(isLoggedIn ? userScreens : authScreens),
							// Use the screens normally
							...commonScreens,
						}).map(([name, props]) => {
							return <MainStack.Screen key={name} name={name as keyof ParamList} {...props} />
						})} */}

							{Object.entries({ ...OnboardingScreens, ...userScreens }).map(([name, props]) => {
								// uncomment for debugging
								// console.log({ name })
								return <MainStack.Screen key={name} {...{ name, ...props }} />
							})}
						</MainStack.Navigator>
					</ThemeProvider>
				</SafeAreaProvider>
			</Host>
		</NavigationContainer>
	)
}

export default Root
//
