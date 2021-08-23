import { Center, CustomButton, CustomScreen, Header, Heading, Paragraph, SmallText } from '@elements'
import { __SCREENS } from '@navigation/types/routes'
import { useRootNavigation, useRootRoute } from '@navigation/types/use-navigation'
import { PinVerification } from 'components/elements/comps/PinVerification'
import React, { useState } from 'react'
import { Div } from 'react-native-magnus'

const IdentityVerificationScreen = () => {
	const route = useRootRoute<__SCREENS.VERIFY_IDENTITY>()
	const navigation = useRootNavigation<__SCREENS.VERIFY_IDENTITY>()

	const { callbackRoute } = route.params

	const [num1, setNum1] = useState('')
	const [num2, setNum2] = useState('')
	const [num3, setNum3] = useState('')
	const [num4, setNum4] = useState('')

	const handleSubmit = () => {
		if (!(num1 && num2 && num3 && num4)) {
			// return showToast('You have not entered any code')
		}
		// @ts-ignore
		navigation.navigate(callbackRoute.parent, { screen: callbackRoute.screen })
	}

	return (
		<CustomScreen>
			<Header title="" backIcon="close" />
			<Center px="xl" mt="xl">
				<Heading fontWeight="800" fontSize="3xl">
					Hi, Uche
				</Heading>

				<Paragraph color="textDark" textAlign="center" mt="lg" px="lg">
					Provide your 4-digit secret pin or gain access with your fingerprint
				</Paragraph>

				<PinVerification
					{...{
						num1,
						num2,
						num3,
						num4,
						setNum1,
						setNum2,
						setNum3,
						setNum4,
						handleSubmit,
					}}
				/>
				<Div alignSelf="flex-end" mr={20}>
					<SmallText textAlign="right"> Input Secrete Pin</SmallText>
				</Div>

				<CustomButton onPress={handleSubmit}>Next</CustomButton>

				<Paragraph> Use Fingerprint</Paragraph>
			</Center>
		</CustomScreen>
	)
}

export default IdentityVerificationScreen
