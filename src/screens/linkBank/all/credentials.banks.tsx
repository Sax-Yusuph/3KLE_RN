import {
	Center,
	CustomScreen,
	FadedText,
	Heading,
	HStack,
	Paragraph,
	ThreeColumnHeader,
	VStack,
} from '@elements'
import React, { FC, useCallback } from 'react'
import YapilyIcon from '@assets/svgs/linkBank/yapilyIcon.svg'
import UBAIcon from '@assets/svgs/bankLogos/uba.svg'
import LockIcon from '@assets/svgs/linkBank/lockIcon.svg'
import { Button, Div, Input, InputProps } from 'react-native-magnus'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { LinkBankStackParams } from '..'

const SUCCESS_TEXT = {
	headingText: 'Bank Account Linked!',
	descriptionText:
		'You have successfully linked your UBA Bank account to 3KLE, You can now view and manage your account.',
	callbackRoute: 'Home',
	callbackText: 'Continue',
}

const EnterCrendentials = () => {
	const navigation = useNavigation<StackNavigationProp<LinkBankStackParams>>()

	const handleNavigation = useCallback(() => {
		//@ts-ignore
		navigation.navigate('successScreen', SUCCESS_TEXT)
	}, [navigation])

	return (
		<CustomScreen>
			<ThreeColumnHeader
				closeIcon="close"
				backIcon="arrowleft"
				TitleComponent={
					<HStack>
						<YapilyIcon />
						<Heading color="textDark">Yapily</Heading>
					</HStack>
				}
			/>
			<Div px="xl">
				<HStack my="lg">
					<Center mr="lg" borderWidth={1} w={40} h={40} rounded="lg" borderColor="divider" p="sm">
						<UBAIcon />
					</Center>
					<VStack alignItems="flex-start">
						<Paragraph fontWeight="500">United Bank for Africa</Paragraph>
						<FadedText>uba.com</FadedText>
					</VStack>
				</HStack>

				<CredentialManager title="Enter Credentials" />

				<Button onPress={handleNavigation} alignSelf="center" my="xl" px={100} rounded={24}>
					Submit
				</Button>
				<Div alignItems="center">
					<TouchableOpacity>
						<Paragraph>Reset Password</Paragraph>
					</TouchableOpacity>
				</Div>
			</Div>
		</CustomScreen>
	)
}

export default EnterCrendentials

interface CredentialManagerProps {
	title: string
}

const CredentialManager: FC<CredentialManagerProps> = ({ title }) => {
	return (
		<Div mt={30}>
			<Heading my="xl" mb="md" color="textDark" fontWeight="500" fontSize="3xl">
				{title.toUpperCase()}
			</Heading>
			<OutlineInput placeholder="Email Address" />
			<OutlineInput placeholder="Password" />
		</Div>
	)
}

const OutlineInput: FC<InputProps> = (props) => {
	return <Input my="md" borderColor="brandDark" suffix={<LockIcon />} {...props} />
}
