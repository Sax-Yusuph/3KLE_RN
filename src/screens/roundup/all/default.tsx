import React, { Dispatch, FC, SetStateAction, useCallback, useState } from 'react'
import {
	Center,
	CustomImage,
	CustomScreen,
	CustomSwitch,
	Divider,
	FadedText,
	Heading,
	HelpIcon,
	HStack,
	// MotionBox,
	Paragraph,
	ThreeColumnHeader,
	VirtualizedView,
	VStack,
} from '@elements'
import { Button, Div, Input } from 'react-native-magnus'
import LinkedCardsIcon from '@assets/svgs/roundups/linkedCards.svg'
import { FlatList, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RoundUpStackParams } from '..'

const CARDS_DATA = [
	{
		bankName: 'Zenith Bank',
		acctNumber: '0182128xxx',
		acctName: 'Okorie uche',
		logo: require('@assets/png/banklogos/zenith.png'),
	},
	{
		bankName: 'Access Bank',
		acctNumber: '0182128xxx',
		acctName: 'Okorie uche',
		logo: require('@assets/png/banklogos/access.png'),
	},
	{
		bankName: 'First Bank',
		acctNumber: '0182128xxx',
		acctName: 'Okorie uche',
		logo: require('@assets/png/banklogos/access.png'),
	},
]

const RoundupScreen: FC = () => {
	const [useRoundups, toggleRoundups] = useState(false)
	const [useMultiplier, toggleMultiplier] = useState(false)

	const navigation = useNavigation<StackNavigationProp<RoundUpStackParams>>()

	const addNewCard = useCallback(() => {
		navigation.navigate('addCardScreen', { type: 'card' })
	}, [navigation])

	const addNewBank = useCallback(() => {
		navigation.navigate('addCardScreen', { type: 'bank' })
	}, [navigation])

	return (
		<CustomScreen noGutter>
			<ThreeColumnHeader RightIconComponent={<HelpIcon />} backIcon="close" />
			<Div px="xl" mb={50}>
				<VirtualizedView>
					<Heading mt="lg" mb="xl" fontSize="3xl">
						Round Ups
					</Heading>
					<Settings title="Settings" {...{ useRoundups, useMultiplier, toggleMultiplier, toggleRoundups }} />
					{useMultiplier && <MultiplierComponent />}
					<WholeDollarRoundups title="Whole dollar Round-ups" />
					<CustomRoundups title="Custom Round-Up" />
					<LinkedCards {...{ addNewCard }} title="Linked Cards (3)" subtitle="Select a card to proceed" />
					<LinkedBanks
						{...{ addNewBank }}
						title="Linked Banks (2)"
						subtitle="Select a bank account to proceed"
					/>
					<Button alignSelf="center" block rounded={20} mb={30}>
						Save
					</Button>
					<Center>
						<Paragraph fontSize="md">Haven’t opened a 3KLE bank account yet?</Paragraph>
						<TouchableOpacity>
							<Paragraph fontSize="md" color="secondary">
								Start here
							</Paragraph>
						</TouchableOpacity>
					</Center>
				</VirtualizedView>
			</Div>
		</CustomScreen>
	)
}

export default RoundupScreen

interface SettingProps {
	title: string
	useRoundups: boolean
	useMultiplier: boolean
	toggleRoundups: Dispatch<SetStateAction<boolean>>
	toggleMultiplier: Dispatch<SetStateAction<boolean>>
}

const Settings: FC<SettingProps> = ({
	title,
	useRoundups,
	useMultiplier,
	toggleMultiplier,
	toggleRoundups,
}) => {
	return (
		<Div>
			<Heading fontWeight="500" fontSize="lg">
				{title}
			</Heading>
			<VStack alignItems="flex-start" bg="screenBg" rounded="2xl" borderColor="divider" borderWidth={1}>
				<SettingItem title="Round-Ups" active={useRoundups} onToggle={toggleRoundups} />
				<Divider />
				<SettingItem title="Multiplier" active={useMultiplier} onToggle={toggleMultiplier} />
			</VStack>
		</Div>
	)
}
interface SettingItemProps {
	title: string
	active: boolean
	onToggle: Dispatch<SetStateAction<boolean>>
}
const SettingItem: FC<SettingItemProps> = ({ title, active, onToggle }) => {
	return (
		<HStack p="xl" justifyContent="space-between" w="100%">
			<Paragraph>{title}</Paragraph>
			<HStack>
				<CustomSwitch {...{ active, onToggle }} />
				<FadedText ml="md">{active ? 'On' : 'Off'}</FadedText>
			</HStack>
		</HStack>
	)
}

const DOLLAR_RANGE = ['0.0', '0.25', '0.5', '0.75', '1.00']

const WholeDollarRoundups: FC<{ title: string }> = ({ title }) => {
	const [selectedRange, setRange] = useState<string>(DOLLAR_RANGE[0])

	const CIRCLE_SIZE = 15
	const ACTIVE_CIRCLE_SIZE = 20

	const handleSelection = (range: string) => {
		console.log('pressed')
		setRange(range)
	}
	const Dot = ({ range }: { range: string }) => {
		console.log(range)
		return (
			<Pressable onPress={() => handleSelection(range)}>
				<Center
					h={CIRCLE_SIZE}
					rounded="circle"
					w={CIRCLE_SIZE}
					bg="card"
					borderColor="secondary"
					borderWidth={2}
				/>
			</Pressable>
		)
	}

	const ActiveDot = () => (
		<Pressable>
			<Center h={ACTIVE_CIRCLE_SIZE} rounded="circle" w={ACTIVE_CIRCLE_SIZE} bg="secondary" />
		</Pressable>
	)

	return (
		<Div my="xl">
			<Heading fontWeight="500" fontSize="lg">
				{title}
			</Heading>
			<HStack h={ACTIVE_CIRCLE_SIZE * 5} bg="screenBg" rounded="xl">
				<Div alignSelf="center" w="80%" ml={32} position="absolute" h={3} bg="secondary" />
				{DOLLAR_RANGE.map((range) => (
					<Center flex={1} h="100%" key={range}>
						{range === selectedRange ? <ActiveDot /> : <Dot {...{ range }} />}
						<Div position="absolute" bottom={5}>
							<FadedText mt="lg">${range}</FadedText>
						</Div>
					</Center>
				))}
			</HStack>
			<FadedText mt="md">
				Be in control of the amount rounded up and invested on whole dollar transactions by changing the
				value.
			</FadedText>
		</Div>
	)
}

const CustomRoundups: FC<{ title: string }> = ({ title }) => {
	return (
		<Div my="xl">
			<Heading fontWeight="500" fontSize="lg">
				{title}
			</Heading>
			<Div my="lg" bg="screenBg" p="xl" rounded={20}>
				<Paragraph fontSize="md" textAlign="center">
					You can manually choose the amount you want to round-up and we will save and invest that for you
					automatically.
				</Paragraph>
				<HStack mt="xl">
					<Input
						flex={1}
						keyboardType="numeric"
						bg="gray300"
						borderWidth={0}
						placeholder="Enter amount"
						fontSize="md"
						mr="md"
						rounded={20}
						textAlign="center"
					/>
					<Button w={130} ml="md" rounded={20} bg="secondary">
						Round-Up
					</Button>
				</HStack>
			</Div>
		</Div>
	)
}

const LinkedCards: FC<{ title: string; subtitle: string; addNewCard(): void }> = ({
	title,
	subtitle,
	addNewCard,
}) => {
	return (
		<Div my="xl">
			<Heading fontWeight="500" fontSize="lg">
				{title}
			</Heading>
			<FadedText>{subtitle}</FadedText>

			<Div h={150} overflow="hidden" justifyContent="flex-start">
				<LinkedCardsIcon height={300} width={300} style={{ marginTop: -70 }} />
			</Div>

			<Div bg="screenBg" p="lg" rounded={20} my="xl" borderColor="divider" borderWidth={1}>
				<FlatList
					listKey="user_cards_data"
					data={CARDS_DATA}
					ItemSeparatorComponent={() => <Divider />}
					keyExtractor={(_, i) => i.toString()}
					// ListEmptyComponent={<EmptyCardBox />}
					renderItem={({ item }) => (
						<HStack m="lg">
							<Center w={40} h={40} mr="lg" rounded="md" overflow="hidden">
								<CustomImage key={item.logo} source={item.logo} style={styles.logo__image} />
							</Center>
							<VStack alignItems="flex-start">
								<Heading fontSize="md">
									{item.bankName} - {item.acctNumber}
								</Heading>

								<FadedText>{item.acctName}</FadedText>
							</VStack>
						</HStack>
					)}
				/>
				<Divider />
				<VStack my="md">
					<TouchableOpacity onPress={addNewCard}>
						<Heading fontWeight="500">+ Add Card</Heading>
					</TouchableOpacity>
				</VStack>
			</Div>
		</Div>
	)
}

const LinkedBanks: FC<{ title: string; subtitle: string; addNewBank(): void }> = ({
	title,
	subtitle,
	addNewBank,
}) => {
	return (
		<Div my="xl">
			<Heading fontWeight="500" fontSize="lg">
				{title}
			</Heading>
			<FadedText>{subtitle}</FadedText>

			<Div h={150} overflow="hidden" justifyContent="flex-start">
				<LinkedCardsIcon height={300} width={300} style={{ marginTop: -70 }} />
			</Div>

			<Div bg="screenBg" p="lg" rounded={20} my="xl" borderColor="divider" borderWidth={1}>
				<FlatList
					listKey="user_Banks_data"
					data={CARDS_DATA}
					ItemSeparatorComponent={() => <Divider />}
					keyExtractor={(_, i) => i.toString()}
					// ListEmptyComponent={<EmptyCardBox />}
					renderItem={({ item }) => (
						<HStack m="lg">
							<Center w={40} h={40} mr="lg" rounded="md" overflow="hidden">
								<CustomImage key={item.logo} source={item.logo} style={styles.logo__image} />
							</Center>
							<VStack alignItems="flex-start">
								<Heading fontSize="md">
									{item.bankName} - {item.acctNumber}
								</Heading>

								<FadedText>{item.acctName}</FadedText>
							</VStack>
						</HStack>
					)}
				/>
				<Divider />
				<VStack my="md">
					<TouchableOpacity onPress={addNewBank}>
						<Heading fontWeight="500">+ Add Bank</Heading>
					</TouchableOpacity>
				</VStack>
			</Div>
		</Div>
	)
}

const styles = StyleSheet.create({
	logo__image: {
		width: '100%',
		height: '100%',
	},
})
interface MultiplierItem {
	label: '2X' | '5X' | '10X'
	multiplier: number
	active: boolean
}

let MULTIPLIER_DATA: MultiplierItem[] = [
	{
		label: '2X',
		multiplier: 1,
		active: true,
	},
	{
		label: '5X',
		multiplier: 5,
		active: false,
	},
	{
		label: '10X',
		multiplier: 10,
		active: false,
	},
]

const MultiplierComponent = () => {
	const [selected, setSelected] = useState<MultiplierItem>(MULTIPLIER_DATA[0])

	const handleSelect = useCallback((multiplier: MultiplierItem) => {
		// reset the MULTIPLIER_DATA
		setSelected(multiplier)
	}, [])

	return (
		<Div w="100%">
			<HStack>
				{MULTIPLIER_DATA.map((multiplier) => {
					const isActive = multiplier.label === selected.label
					return (
						<Pressable key={multiplier.label} style={{ flex: 1 }} onPress={() => handleSelect(multiplier)}>
							{({ pressed }) => (
								<Center
									flex={1}
									// w={60}
									h={60}
									rounded="xl"
									m="lg"
									shadow="sm"
									bg={isActive ? 'brandDark' : pressed ? 'blue800' : 'card'}
								>
									<Heading fontWeight="500" color={isActive ? 'white' : 'brandDark'}>
										{multiplier.label}
									</Heading>
								</Center>
							)}
						</Pressable>
					)
				})}
			</HStack>

			<FadedText textAlign="center">
				Boost the rate at which you save with the round-up multiplier, You can change this setting at anytime.{' '}
			</FadedText>
		</Div>
	)
}
