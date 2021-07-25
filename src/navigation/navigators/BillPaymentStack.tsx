import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { BillPaymentScreens } from '@screens'
import { BillPaymentStackParams, BillPaymentStactEntries } from 'screens/billpayment'

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

const Stack = createStackNavigator<BillPaymentStackParams>()

const BillPaymentStack: React.FC = () => {
	const StackEntries = Object.entries(BillPaymentScreens) as BillPaymentStactEntries
	return (
		<Stack.Navigator screenOptions={SCREEN_OPTIONS}>
			{StackEntries.map(([name, props]) => {
				return <Stack.Screen key={name} name={name} {...props} />
			})}
		</Stack.Navigator>
	)
}

export default Object.freeze({
	billPayment: { component: BillPaymentStack },
})
