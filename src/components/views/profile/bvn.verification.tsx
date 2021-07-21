import { Header, Heading, Paragraph } from '@elements'
import Routes from '@navigation/navigators/routes'
import { useNavigation } from '@react-navigation/native'
import { Sleep } from '@utils/helpers'
import React, { FC, useCallback, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Button, Div, Input, Overlay } from 'react-native-magnus'
import { SUCCESS_TEXT } from './data'
//temporary logic
let count = 0

const BankVerificationScreen: FC = () => {
	const [bvn, setBvn] = useState('')
	const [overlayVisible, setOverlayVisible] = useState(false)
	const navigation = useNavigation()

	const onSubmit = useCallback(async () => {
		if (count > 0) {
			count--
			//proceed to success page
			navigation.navigate(Routes.COMMON_SCREENS.SUCCESS_SCREEN, {
				...SUCCESS_TEXT,
			})
		} else {
			count++
			setOverlayVisible(true)
			await Sleep(2000)
			setOverlayVisible(false)
		}
	}, [setOverlayVisible, navigation])

	return (
		<>
			<Div>
				<Header title="" backIcon="arrowleft" />
				<Div alignSelf="flex-start" px="xl">
					<Heading>Bank Verification Number</Heading>
					<Paragraph color="textDark" fontSize="md">
						Quickly add your BVN to complete your profile set-up
					</Paragraph>
					<Paragraph mt="3xl">Enter BVN</Paragraph>
					<Input rounded="xl" mt="sm" onChangeText={setBvn} value={bvn} />
				</Div>
			</Div>
			<Div position="absolute" alignSelf="center" bottom={120}>
				<Button onPress={onSubmit} bg="brandDark" px={100} rounded="2xl" fontSize="md" py={20}>
					Submit
				</Button>
			</Div>

			<Overlay
				onBackdropPress={() => setOverlayVisible(false)}
				onDismiss={() => setOverlayVisible(false)}
				visible={overlayVisible}
				px="xl"
				pb="2xl"
				rounded="xl"
				alignItems="center"
			>
				<ActivityIndicator />
				<Heading mt="md" color="textDark">
					Something is no right!
				</Heading>
				<Paragraph mt="md" color="textDark">
					Please try again
				</Paragraph>
			</Overlay>
		</>
	)
}

export default BankVerificationScreen
