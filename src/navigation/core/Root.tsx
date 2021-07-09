<<<<<<< HEAD
import React from 'react'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import RNBootSplash from 'react-native-bootsplash'
import { ThemeProvider } from 'react-native-magnus'
import { lightTheme } from '@utils/themes'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View } from 'react-native'
import MainTabs from '../tabs/MainTabs'
import { SignIn, OnBoarding } from '@screens'
import { navigationRef } from '@navigation/navigation.hooks'

const RouterMainStack = createStackNavigator()

const linking: LinkingOptions = {
	prefixes: ['helloworld://'],
	config: {
		screens: {},
	},
}

const Root: React.FC = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer
				linking={linking}
				ref={navigationRef}
				onReady={() => RNBootSplash.hide({ fade: true })}
			>
				<ThemeProvider theme={lightTheme}>
					<RouterMainStack.Navigator
						screenOptions={{
							cardStyle: { backgroundColor: '#243B80' },
							safeAreaInsets: {
								bottom: 0,
								top: 0,
								right: 0,
								left: 0,
							},
						}}
					>
						{/* This is the entry point to your work.  you toggle it to see
						 apologies in advance if some stylings are disrupted..
						*/}

						{/* <RouterMainStack.Screen
=======
import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'react-native-magnus';
import {lightTheme} from '@utils/themes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import MainTabs from '../tabs/MainTabs';
import {SignIn, OnBoarding} from '@screens';
import {navigationRef} from '@navigation/navigation.hooks';

const RouterMainStack = createStackNavigator();

const linking: LinkingOptions = {
  prefixes: ['helloworld://'],
  config: {
    screens: {},
  },
};

const Root: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        linking={linking}
        ref={navigationRef}
        onReady={() => RNBootSplash.hide({fade: true})}>
        <ThemeProvider theme={lightTheme}>
          <RouterMainStack.Navigator
            screenOptions={{
              cardStyle: {backgroundColor: '#243B80'},
              safeAreaInsets: {
                bottom: 0,
                top: 0,
                right: 0,
                left: 0,
              },
            }}>
            {/* This is the entry point to your work.  you toggle it to see
						 apologies in advance if some stylings are disrupted..
						*/}

            {/* <RouterMainStack.Screen
>>>>>>> dev/setup
							name='Auth'
							component={AuthNavigator}
							options={{
								headerShown: false,
								cardOverlay: props => <View style={{ backgroundColor: '#243B80', flex: 1 }} />,
								...TransitionPresets.SlideFromRightIOS,
							}}
						/> */}

<<<<<<< HEAD
						{/* ?this onboarding is like the splash screen 
						you can merge the screen in your work .. 
						there shouldnt be any errors.
						you can trace the component to checkit out */}
						<RouterMainStack.Screen
							name='OnBoarding'
							component={OnBoarding}
							options={{
								headerShown: false,
								cardOverlay: props => <View style={{ backgroundColor: '#243B80', flex: 1 }} />,
								...TransitionPresets.SlideFromRightIOS,
							}}
						/>
						<RouterMainStack.Screen
							name='Login'
							component={SignIn}
							options={{
								title: 'Log in',
								headerShown: false,
								cardOverlay: props => <View style={{ backgroundColor: '#243B80', flex: 1 }} />,
								...TransitionPresets.SlideFromRightIOS,
							}}
						/>

						<RouterMainStack.Screen
							name='MainTabs'
							component={MainTabs}
							options={{
								headerShown: false,
								...TransitionPresets.SlideFromRightIOS,
							}}
						/>
					</RouterMainStack.Navigator>
				</ThemeProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default Root
//
=======
            {/* ?this onboarding is like the splash screen
						you can merge the screen in your work ..
						there shouldnt be any errors.
						you can trace the component to checkit out */}
            <RouterMainStack.Screen
              name="OnBoarding"
              component={OnBoarding}
              options={{
                headerShown: false,
                cardOverlay: () => CardOverlay,
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
            <RouterMainStack.Screen
              name="Login"
              component={SignIn}
              options={{
                title: 'Log in',
                headerShown: false,
                cardOverlay: () => CardOverlay,
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />

            <RouterMainStack.Screen
              name="MainTabs"
              component={MainTabs}
              options={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
          </RouterMainStack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Root;
//

const styles = StyleSheet.create({
  cardOverlay: {backgroundColor: '#243B80', flex: 1},
});

const CardOverlay = () => <View style={styles.cardOverlay} />;
>>>>>>> dev/setup
