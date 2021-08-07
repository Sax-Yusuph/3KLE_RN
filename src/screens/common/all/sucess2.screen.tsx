import React from 'react'
import { Center, CustomScreen, Heading, HStack, IconButton, MotionBox, Paragraph } from '@elements'
import { Button, Div, Icon } from 'react-native-magnus'
import { useNavigation } from '@react-navigation/core'
import { showToast } from '@utils/helpers'
import { useCustomBackBehaviour } from '@hooks'

/**
 * 
 * @param 
 * const route.params = {
	headingText: 'BVN updated successfully',
	descriptionText: 'Proceed to complete your sign-up process',
	callbackRoute: 'navighate to somwhere', <-- Routes.COMMON_SCREENS.

    see implementation in @link BankVerificationScreen
}
 * @returns 
 */
const SuccessScreenTwo = ({ route }: any) => {
	const { headingText, descriptionText, callbackRoute, callbackText } = route.params
	const navigation = useNavigation()

	const handleCallback = () => {
		callbackRoute ? navigation.navigate(callbackRoute) : showToast('callback route is not provided')
	}

	useCustomBackBehaviour(handleCallback)
	return (
		<CustomScreen>
			<IconButton alignSelf="flex-start" ml="xl" rounded="circle" onPress={handleCallback}>
				<Icon fontSize={30} name="arrowleft" color="textDark" />
			</IconButton>

			<Center flex={1} px="xl">
				<HStack>
					<Heading fontSize="5xl" mr="md">
						{headingText}
					</Heading>
					<MotionBox animation="bounceIn" delay={1000}>
						<Heading fontSize="5xl" mt={-5}>
							👍
						</Heading>
					</MotionBox>
				</HStack>
				<Paragraph fontWeight="500" textAlign="center">
					{descriptionText}
				</Paragraph>
				<Div h={200} />
				<Button
					onPress={handleCallback}
					alignSelf="center"
					px={100}
					bg="transparent"
					color="brandDark"
					borderWidth={1}
					fontWeight="500"
					rounded={15}
					py={20}
				>
					{callbackText ?? 'Proceed'}
				</Button>
			</Center>
		</CustomScreen>
	)
}

export default SuccessScreenTwo
