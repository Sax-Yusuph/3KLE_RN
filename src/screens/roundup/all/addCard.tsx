import {
	CustomScreen,
	ThreeColumnHeader,
	HelpIcon,
	VirtualizedView,
	Heading,
	HStack,
	Paragraph,
	SuccessIcon,
	Center,
	CustomImage,
} from '@elements'
import React, { FC, useState } from 'react'
import { Button, Div, Icon, Input, InputProps, Overlay } from 'react-native-magnus'
import CardIcon from '@assets/svgs/roundups/card.svg'
import BankIcon from '@assets/svgs/linkBank/bankIcon.svg'
import { TouchableOpacity } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RoundUpStackParams } from '..'

const AddCard = () => {
	const [showAlert, setAlert] = useState(false)
	const navigation = useNavigation<StackNavigationProp<RoundUpStackParams>>()
	const route = useRoute<RouteProp<RoundUpStackParams, 'addCardScreen'>>()
	const { type } = route.params
	const [isBank, setIsBank] = useState(type === 'bank')

	const handlePress = async () => {
		navigation.navigate('roundupBalance')
	}

	const buttonProps = {
		underlayColor: 'rgba(96,96,96,0.1)',
		color: 'brandDark',
		bg: 'transparent',
		borderColor: 'brandDark',
		borderWidth: 1,
	}

	const activeProps = {
		bg: 'brandDark',
	}

	const handleNextAction = () => {
		if (!isBank) {
			setAlert(true)
		} else {
			//@ts-ignore
			navigation.navigate('linkBankAccount', { screen: 'availableBankListScreen' })
		}
	}

	return (
		<CustomScreen noGutter>
			<ThreeColumnHeader RightIconComponent={<HelpIcon />} backIcon="arrowleft" />
			<Div px="xl" mb={50}>
				<VirtualizedView>
					<Heading mt="lg" mb="xl" fontSize="3xl">
						{!isBank ? 'Add Card' : 'Add Bank account'}
					</Heading>

					<InfoItem isBank />

					<Div bg="screenBg" rounded="2xl" p="lg" py="xl" mt="3xl" mb="xl">
						<HStack justifyContent="space-between">
							<Button {...(!isBank ? activeProps : buttonProps)} onPress={() => setIsBank(false)}>
								Add Card
							</Button>
							<Button {...(isBank ? activeProps : buttonProps)} onPress={() => setIsBank(true)}>
								Add Bank
							</Button>
						</HStack>
						{!isBank ? (
							<Div mt="lg">
								<CustomInput placeholder="Select Bank" />
								<CustomInput placeholder="First Name" />
								<CustomInput placeholder="Last Name" />
								<HStack>
									<CustomInputAlt label="CVV" keyboardType="numeric" maxLength={3} secureTextEntry />
									<Div w={20} />
									<CustomInputAlt label="Expiry Date" />
								</HStack>
							</Div>
						) : (
							<Div mt="lg">
								<Heading fontSize="md">Link your bank account</Heading>
								<Paragraph fontSize="sm">
									3KLE connects to your bank account, so you can start investing automatically and securely.
								</Paragraph>
								<Center my="xl" rounded="xl" h={180} overflow="hidden">
									<CustomImage
										source={require('@assets/png/addBank/bankimage.png')}
										style={{ width: '100%', height: '100%' }}
									/>
									<Div position="absolute" bottom={20} right={20}>
										<TouchableOpacity>
											<Icon
												fontSize={24}
												color="white"
												name="arrow-right-circle"
												fontFamily="SimpleLineIcons"
											/>
										</TouchableOpacity>
									</Div>
								</Center>
							</Div>
						)}
					</Div>
					<Button alignSelf="center" px={50} onPress={handleNextAction}>
						{isBank ? 'Next' : 'Add card'}
					</Button>
				</VirtualizedView>
			</Div>
			<Overlay rounded="2xl" visible={showAlert}>
				<Center pt="2xl">
					<SuccessIcon />
					<Heading my="xl">Done!</Heading>
					<Paragraph textAlign="center">You have successfully added a debit card to your account.</Paragraph>
					<TouchableOpacity onPress={handlePress}>
						<Paragraph color="secondary" fontWeight="500" my="2xl">
							Ok
						</Paragraph>
					</TouchableOpacity>
				</Center>
			</Overlay>
		</CustomScreen>
	)
}

export default AddCard

const InfoItem: FC<{ isBank: boolean }> = ({ isBank }) => {
	return (
		<HStack rounded="2xl" borderColor="brandDark" borderWidth={1} p="lg">
			{!isBank ? <CardIcon /> : <BankIcon />}
			<Paragraph ml="lg" flex={1} fontSize="md">
				{!isBank
					? `Add as many cards as you want into your 3KLE account and easily transact and manage your funds in one
				place.`
					: 'Add as many bank as you want into your 3KLE account and easily transact and manage your funds in one place.'}
			</Paragraph>
		</HStack>
	)
}

const CustomInput: FC<InputProps> = (props) => {
	return <Input my="lg" borderWidth={0} rounded={0} h={70} {...props} />
}

interface AltInputProps extends InputProps {
	label: string
}

const CustomInputAlt: FC<AltInputProps> = ({ label, ...props }) => {
	return (
		<Div bg="card" my="lg" flex={1}>
			<Div position="absolute" zIndex={200} left={10} top={6}>
				<Heading fontSize="md">{label}</Heading>
			</Div>
			<Input mt="sm" pt="md" h={70} borderWidth={0} {...props} />
		</Div>
	)
}
