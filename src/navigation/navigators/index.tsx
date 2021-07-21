import MainTabs from '@navigation/tabs/MainTabs'
import LinkBankAccountScreens from './linkBank'
import { CommonScreens } from '@screens'
import { Options } from './screenOptions'
//we would nest navigators in their respective objects
//it allows us to be able to group navigators properly

export const userScreens = {
	Home: { component: MainTabs, options: Options },
	...LinkBankAccountScreens, //navigation.navigate('linkBankAccount',{screen, params})
	...CommonScreens,
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
