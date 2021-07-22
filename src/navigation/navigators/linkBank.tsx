import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { LinkBankScreens } from '@screens'
import { BankStackEntries, LinkBankStackParams } from 'screens/linkBank'

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

const Stack = createStackNavigator<LinkBankStackParams>()

const LinkBankStack: React.FC = () => {
	const StackEntries = Object.entries(LinkBankScreens) as BankStackEntries
	return (
		<Stack.Navigator screenOptions={SCREEN_OPTIONS}>
			{StackEntries.map(([name, props]) => {
				return <Stack.Screen key={name} name={name} {...props} />
			})}
		</Stack.Navigator>
	)
}

export default Object.freeze({
	linkBankAccount: { component: LinkBankStack },
})
