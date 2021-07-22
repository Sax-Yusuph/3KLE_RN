import {
	Center,
	CustomScreen,
	Header,
	Heading,
	HStack,
	MotionBox,
	Paragraph,
	VirtualizedView,
} from '@elements'
import { Sleep } from '@utils/helpers'
import React, { useState, useCallback } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Button, Div, Icon, Modal } from 'react-native-magnus'
import RedirectingIcon from '@assets/svgs/linkBank/redirecting.svg'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { LinkBankStackParams } from '..'
const OPTIONS = [
	{
		title: 'Account Name',
	},
	{
		title: 'Account Balance',
	},
	{
		title: 'Sort code & account number',
	},
	{
		title: 'Account transactions',
	},
]

const AgreementPolicyScreen = () => {
	const [loading, setLoading] = useState(false)
	const navigation = useNavigation<StackNavigationProp<LinkBankStackParams>>()
	const Routes = useRoute()

	const { bankName } = Routes.params as Record<string, string>

	const acceptAgreement = useCallback(async () => {
		setLoading(true)
		await Sleep(3000)
		setLoading(false)
		//navigate
		navigation.navigate('enterCrendentials', { bankName })
	}, [navigation, bankName])

	return (
		<CustomScreen>
			<VirtualizedView>
				<Header title="" backIcon="arrowleft" />
				<Div px="xl">
					<Heading fontSize="3xl">Add Bank account</Heading>
					<Paragraph mb="xl" fontSize="md">
						Agree to the terms below to add your account
					</Paragraph>
					<Div bg="gray300" p="lg">
						<Paragraph fontSize="md">
							By adding your account from GT Bank, you are authorising 3KLE to access necessary data required
							to complete this process.
						</Paragraph>
					</Div>
					<Div my="xl">
						<FlatList
							data={OPTIONS}
							keyExtractor={(t, i) => t.title + i}
							renderItem={({ item }) => (
								<HStack my="lg">
									<Div bg="brandDark" w={8} h={8} mr="lg" />
									<Paragraph fontSize="md">{item.title}</Paragraph>
								</HStack>
							)}
						/>
					</Div>

					<TouchableOpacity>
						<Heading fontWeight="500" fontSize="md">
							View Privacy Policy
						</Heading>
					</TouchableOpacity>

					<HStack bg="gray300" p="lg" alignItems="flex-start" my="2xl">
						<Icon name="infocirlceo" mr="md" fontSize="2xl" color="brandDark" />
						<Paragraph fontSize="md" flex={1}>
							Note that you will be asked to provide consent with your other bank using your mobile app or
							online banking details
						</Paragraph>
					</HStack>

					<MotionBox>
						<Button onPress={acceptAgreement} alignSelf="center" bg="brandDark" rounded="2xl">
							Accept and Continue
						</Button>
					</MotionBox>
				</Div>
			</VirtualizedView>

			<Modal isVisible={loading}>
				<LoadingScreen />
			</Modal>
		</CustomScreen>
	)
}

export default AgreementPolicyScreen

const LoadingScreen = () => {
	return (
		<Center flex={1}>
			<Heading mb="3xl" fontWeight="500">
				Redirecting
			</Heading>
			<RedirectingIcon />
		</Center>
	)
}
