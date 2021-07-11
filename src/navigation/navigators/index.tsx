import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import HomeStack from './HomeStack'

const BRAND_COLOR = '#243B80'

const styles = StyleSheet.create({
	cardOverlay: { backgroundColor: BRAND_COLOR, flex: 1 },
})

const CardOverlay: FC = () => <View style={styles.cardOverlay} />

//custom screen options
const Options: StackNavigationOptions = {
	headerShown: false,
	cardOverlay: () => CardOverlay,
	...TransitionPresets.SlideFromRightIOS,
}

//we would nest navigators in their respective objects
//it allows us to be able to group navigators properly

export const userScreens = {
	Home: { component: HomeStack, options: Options },
}

// export const commonScreens = {
// 	NetworkError: { component: NetworkError, options },
// 	WebView: { component: CustomWebView },
// }

// export const OnboardingScreens = {
// 	Signin: { component: SignIn, options },
// 	WebView: { component: CustomWebView },
// }

// export const AuthScreens = {
// 	Signin: { component: SignIn, options },
// 	WebView: { component: CustomWebView },
// }
