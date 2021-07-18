import React from 'react'
import { Center, CustomScreen, Heading, MotionBox, Paragraph } from '@elements'
import { Button, Div } from 'react-native-magnus'
import SuccessIcon from '@assets/svgs/success.svg'
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
const SuccessScreen = ({ route }: any) => {
	const { headingText, descriptionText, callbackRoute } = route.params
	const navigation = useNavigation()

	const handleCallback = () => {
		callbackRoute ? navigation.navigate(callbackRoute) : showToast('callback route is not provided')
	}

	useCustomBackBehaviour(handleCallback)

	console.log(route.params)
	return (
		<CustomScreen>
			<Center flex={1}>
				<Heading>{headingText}</Heading>
				<Paragraph>{descriptionText}</Paragraph>
				<Div my="2xl">
					<MotionBox animation="bounceIn" delay={1000}>
						<SuccessIcon />
					</MotionBox>
				</Div>
				<Div h={200} />
				<Button onPress={handleCallback} alignSelf="center" px={100} bg="brandDark" rounded="xl" py={20}>
					Proceed
				</Button>
			</Center>
		</CustomScreen>
	)
}

export default SuccessScreen
