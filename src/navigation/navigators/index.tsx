import MainTabs from '@navigation/tabs/MainTabs'
import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack'
import { COLORS } from '@utils/colors'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

const CardOverlay: FC = () => <View style={styles.cardOverlay} />

//custom screen options
const Options: StackNavigationOptions = {
	headerShown: false,
	cardOverlay: () => <CardOverlay />,
	...TransitionPresets.SlideFromRightIOS,
}

//we would nest navigators in their respective objects
//it allows us to be able to group navigators properly

export const userScreens = {
	Home: { component: MainTabs, options: Options },
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

const styles = StyleSheet.create({
	cardOverlay: { backgroundColor: COLORS.brandDark, flex: 1 },
})
