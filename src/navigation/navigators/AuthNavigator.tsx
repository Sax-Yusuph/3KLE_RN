import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashScreen, CountrySelector } from '@screens'
import colors from 'components/themes/colors'
import ConfirmPin from 'components/views/SignUp/pages/ConfirmPin'
import CreateAccont from 'components/views/SignUp/pages/CreateAccount'
import OTP from 'components/views/SignUp/pages/OTP'
import { ProgressPage } from 'components/views/SignUp/pages/Progress'
import { ProofOfidentity } from 'components/views/SignUp/pages/ProofOfIdentity'
import SecretPin from 'components/views/SignUp/pages/SecretPin'
import SecurityQuestions from 'components/views/SignUp/pages/SecurityQuestions'
import { TakeSelfie } from 'components/views/SignUp/pages/TakeSelfie'

const Stack = createStackNavigator()

const AuthNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: colors.BACKGROUND_COLOR,
				elevation: 0,
			},
		}}
	>
		<Stack.Screen
			name="splashScreen"
			component={SplashScreen}
			options={{
				headerShown: false,
			}}
		/>
		<Stack.Screen
			name="stepOne"
			component={CountrySelector}
			options={{
				title: '',
				// headerStyle: {
				//     backgroundColor: colors.BACKGROUND_COLOR,
				//     elevation: 0
				// }
			}}
		/>
		<Stack.Screen
			name="stepTwo"
			component={OTP}
			options={{
				title: '',
				// headerStyle: {
				//     backgroundColor: colors.BACKGROUND_COLOR,
				//     elevation: 0
				// }
			}}
		/>
		<Stack.Screen
			name="stepThree"
			component={CreateAccont}
			options={{
				title: '',
				// headerStyle: {
				//     backgroundColor: colors.BACKGROUND_COLOR,
				//     elevation: 0
				// }
			}}
		/>
		<Stack.Screen
			name="stepFour"
			component={SecurityQuestions}
			options={{
				title: '',
				// headerStyle: {
				//     backgroundColor: colors.BACKGROUND_COLOR,
				//     elevation: 0
				// }
			}}
		/>
		<Stack.Screen
			name="stepFive"
			component={SecretPin}
			options={{
				title: '',
				// headerStyle: {
				//     backgroundColor: colors.WHITE_COLOR,
				//     elevation: 0
				// }
			}}
		/>
		<Stack.Screen
			name="stepSix"
			component={ConfirmPin}
			options={{
				title: '',
				// headerStyle: {
				//     backgroundColor: colors.WHITE_COLOR,
				//     elevation: 0
				// }
			}}
		/>
		<Stack.Screen
			name="stepSeven"
			component={TakeSelfie}
			options={{
				title: '',
				// headerStyle: {
				//     backgroundColor: colors.WHITE_COLOR,
				//     elevation: 0
				// }
			}}
		/>
		<Stack.Screen
			name="stepEight"
			component={ProofOfidentity}
			options={{
				title: '',
				// headerStyle: {
				//     backgroundColor: colors.WHITE_COLOR,
				//     elevation: 0
				// }
			}}
		/>
		<Stack.Screen
			name="stepNine"
			component={ProgressPage}
			options={{
				title: '',
				// headerStyle: {
				//     backgroundColor: colors.WHITE_COLOR,
				//     elevation: 0
				// }
			}}
		/>
	</Stack.Navigator>
)

export default AuthNavigator
