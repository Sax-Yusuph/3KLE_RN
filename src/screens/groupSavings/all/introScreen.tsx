import { Center, CustomButton, CustomScreen, Header, Heading, Paragraph } from '@elements'
import { __SCREENS } from '@navigation/types/routes'
import { useGroupSavingsNavigator } from '@navigation/types/use-navigation'
import { __IMAGE_STYLES } from '@utils/constants'
import React, { useCallback } from 'react'
import { Div, Image } from 'react-native-magnus'

export const IntroScreen = () => {
	const navigation = useGroupSavingsNavigator<__SCREENS.GROUP_SAVINGS_INTRO>()

	const getStarted = useCallback(() => {
		navigation.navigate(__SCREENS.GROUP_SAVINGS_DASHBOARD)
	}, [navigation])

	return (
		<CustomScreen px="xl">
			<Header title="" backIcon="close" />
			<Heading fontWeight="900">Rotational Group Savings</Heading>
			<Center mt={30}>
				<Div w={400} h={200} my={20}>
					<Image
						source={require('@assets/png/groupSavings/groupSavings.png')}
						style={__IMAGE_STYLES}
						resizeMode="contain"
					/>
				</Div>

				<Heading fontWeight="800">What is rotational group savings?</Heading>

				<Paragraph textAlign="center" mt="md">
					This is a unique savings plan that allows you to meet personal financial goals, access huge capital
					and grow your credit score by leveraging on a systematic community of like-minded people to save
					toward a goal and get bulk payout
				</Paragraph>

				<Paragraph textAlign="center" m="xl" fontWeight="600">
					Create a group & start inviting friends!
				</Paragraph>

				<CustomButton onPress={getStarted}>Okay, Continue</CustomButton>
			</Center>
		</CustomScreen>
	)
}
