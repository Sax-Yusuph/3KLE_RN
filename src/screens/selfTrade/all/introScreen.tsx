import { Center, CustomButton, CustomScreen, Header, Heading, Paragraph } from '@elements'
import { __NAVIGATORS, __SCREENS } from '@navigation/types/routes'
import { useRootNavigation } from '@navigation/types/use-navigation'
import { __IMAGE_STYLES } from '@utils/constants'
import React, { useCallback } from 'react'
import { Div, Image } from 'react-native-magnus'

export const IntroScreen = () => {
	const navigation = useRootNavigation()

	const getStarted = useCallback(() => {
		navigation.navigate(__SCREENS.VERIFY_IDENTITY, {
			callbackRoute: { parent: __NAVIGATORS.SELF_TRADE, screen: __SCREENS.SELF_TRADE_DASHBOARD },
		})
	}, [navigation])

	return (
		<CustomScreen px="xl">
			<Header title="" backIcon="close" />
			<Center mt={30}>
				<Div w={300} h={300}>
					<Image source={require('@assets/svgs/selftrade/selftrade.png')} style={__IMAGE_STYLES} />
				</Div>

				<Heading fontWeight="500">Welcome to</Heading>
				<Heading fontWeight="900" fontSize="5xl">
					SELF TRADE
				</Heading>
				<Paragraph textAlign="center" color="textDark" px="xl" mt="md">
					Access the stock market instantly, easily pick a stock & start investing. Buy and sell global &
					local stocks in bulk or just a fraction . Start investing now.
				</Paragraph>

				<CustomButton onPress={getStarted}>Get Started</CustomButton>
			</Center>
		</CustomScreen>
	)
}
