import { AnimatedPress, FadedText, Heading, HStack, IconButton, Paragraph, SmallText } from '@elements'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { FC, useState } from 'react'
import { Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Button, Div, Input, InputProps } from 'react-native-magnus'

import EyeIcon from '@assets/svgs/eye.svg'
import OpenedEyeIcon from '@assets/svgs/open_eye.svg'

const WithdrawInfoCollectorView = () => {
	const [secureTextEntry, setSecureTextEntry] = useState(true)
	const [showConfirmationPopup, setPopup] = useState(false)
	const route = useRoute()
	const {
		//@ts-ignore
		data: { title /*,key*/ },
	} = route.params

	const changeWithdrawAccount = () => {
		navigation.navigate('changeWithdrawAccount')
	}
	const navigation = useNavigation()

	const confirmDetails = () => {
		//show popup
		//TODO make APi calls

		//
		setPopup(false)
		navigation.navigate('successScreenTwo', {
			headingText: 'Success!',
			descriptionText: 'You have successfully withdrawn N10,000 from your emergency savings account',
			callbackRoute: 'Home',
			callbackText: 'See Dashboard',
		})
	}

	return (
		<Div px="xl">
			<Heading>{title}</Heading>

			<DestinationBox
				onPress={changeWithdrawAccount}
				title="Withdrawals will be sent to:"
				description="33782789390 access bank"
			/>
			<InputBox
				label="Amount"
				returnKeyLabel="Next"
				descriptionText="(minimum amount N2000)"
				placeholder="e.g  2,000"
				autoFocus
			/>
			<InputBox label="Purpose of withdrawal" descriptionText="(optional)" placeholder="e.g  Foodstuff" />
			<InputBox
				label="Secret Pin"
				keyboardType="numeric"
				descriptionText="(For security reasons)"
				secureTextEntry={secureTextEntry}
				suffix={
					<IconButton rounded="circle" onPress={() => setSecureTextEntry((p) => !p)}>
						{secureTextEntry ? <OpenedEyeIcon width={16} height={16} /> : <EyeIcon />}
					</IconButton>
				}
			/>

			<Button onPress={() => setPopup(true)} alignSelf="center" mt={20} w={220} py={15} rounded={20}>
				Withdraw
			</Button>
			<Button
				onPress={navigation.goBack}
				alignSelf="center"
				bg="transparent"
				color="brandDark"
				borderWidth={1}
				w={220}
				py={15}
				rounded={20}
				my={10}
				underlayColor="divider"
			>
				Cancel
			</Button>

			<ConfirmationPopup
				visible={showConfirmationPopup}
				closeModal={() => {
					console.log('workee')
					setPopup(false)
				}}
			>
				<Div>
					<Heading color="rgba(14, 91, 246, 1)">Uche Please confirm details!</Heading>
					<SmallText color="textDark">
						Are you sure the amount you entered for withdrawal is correct?
					</SmallText>
				</Div>
				<HStack alignSelf="flex-end">
					<AnimatedPress
						mx="xl"
						onPress={() => {
							console.log('workee')
							setPopup(false)
						}}
					>
						<Heading color="rgba(14, 91, 246, 1)">No, Back</Heading>
					</AnimatedPress>
					<AnimatedPress onPress={confirmDetails}>
						<Heading color="rgba(14, 91, 246, 1)">Yes, Continue</Heading>
					</AnimatedPress>
				</HStack>
			</ConfirmationPopup>
		</Div>
	)
}

export default WithdrawInfoCollectorView

interface ItemProps {
	title: string
	description: string
	onPress(): void
}

const DestinationBox: FC<ItemProps> = ({ title, description, onPress }) => {
	return (
		<Div
			my="lg"
			roundedLeft="2xl"
			roundedBottomRight="2xl"
			p="lg"
			pb="2xl"
			borderColor="textDark"
			borderWidth={1}
		>
			<Paragraph>{title}</Paragraph>
			<Paragraph fontWeight="bold" color="textDark">
				{description}
			</Paragraph>
			<Div position="absolute" bottom={10} right={20}>
				<TouchableOpacity onPress={onPress}>
					<FadedText>Change</FadedText>
				</TouchableOpacity>
			</Div>
		</Div>
	)
}

interface InputBoxProps extends InputProps {
	label: string
	descriptionText: string
}

const InputBox: FC<InputBoxProps> = ({ label, descriptionText, ...props }) => {
	return (
		<Div my="lg">
			<Paragraph>
				{label} <SmallText color="warning">{descriptionText}</SmallText>
			</Paragraph>
			<Input borderColor="textDark" mt="xs" rounded="xl" {...props} />
		</Div>
	)
}

interface Props {
	proceedToScanBag(): void
}

const ConfirmationPopup: FC<{ visible: boolean; closeModal(): void }> = ({
	visible,
	closeModal,
	children,
}) => {
	return (
		<Modal visible={visible} transparent={true} animationType="fade" statusBarTranslucent>
			<TouchableWithoutFeedback onPress={closeModal}>
				<Div flex={1} bg="rgba(196, 196, 196, 0.6)" justifyContent="center" alignItems="center">
					<Div bg="card" w="90%" h={200} p={20} justifyContent="space-between">
						{children}
					</Div>
				</Div>
			</TouchableWithoutFeedback>
		</Modal>
	)
}
