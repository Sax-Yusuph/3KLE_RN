import { Center, CustomImage, CustomScreen, Dot, Header, Heading, MotionBox, Paragraph } from '@elements'
import { useNavigation } from '@react-navigation/native'
import React, { FC, useRef, useState } from 'react'
import {
	NativeScrollEvent,
	NativeSyntheticEvent,
	Platform,
	StyleSheet,
	useWindowDimensions,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Div } from 'react-native-magnus'
import BankRoutes from './routes'

const DATA = [
	{
		image: require('@assets/png/linkBankAccount/onboarding1.png'),
		title: 'View and manage your accounts with other banks on the 3KLE app',
		description:
			'You can now see all your bank accounts in one place. Easily view account information, balances and transactions. ',
	},
	{
		image: require('@assets/png/linkBankAccount/onboarding2.png'),
		title: 'Is this a secure way to manage my bank accounts?',
		description:
			'3KLE Open banking presents a secure way to put you in control of your data and finances. You can add or remove accounts anytime. Remember, it is completely secure.',
	},
]

// range added because of inconsistensies on Android
const RANGE = 2

const OnboardingScreen = () => {
	const [slideNo, setSlideNo] = useState(0)

	const { width, height } = useWindowDimensions()
	const ref = useRef<ScrollView>(null)

	const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
		const offset = Math.round(e.nativeEvent.contentOffset.x)
		const roundedWidth = Math.round(width)
		const index = Math.round(offset / roundedWidth)
		const remainder = Math.round(offset % roundedWidth)

		if (remainder < roundedWidth * (index - 1) - RANGE && remainder > roundedWidth * index + RANGE) {
			return
		}
		// setSlideNo(offset < width ? 0 : index)
		setSlideNo(Math.abs(index))
	}

	const navigation = useNavigation()

	const handleNavigation = () => {
		navigation.navigate(BankRoutes.LINK_BANK.AVAILABLE_BANKS_LIST_SCREEN)
	}

	const Indicator = () => (
		<Div
			row
			alignItems="center"
			justifyContent="center"
			mb={Platform.select({
				ios: 'xs',
				android: 'lg',
			})}
		>
			{[...new Array(DATA.length)].map((_, index) => (
				<Dot key={`dot_${index}`} selected={index === slideNo} />
			))}
		</Div>
	)

	return (
		<CustomScreen noGutter>
			<Header title="" backIcon="close" />
			<Heading px="2xl" mt="xl">
				Add External Bank account
			</Heading>

			<ScrollView
				snapToInterval={width}
				decelerationRate="fast"
				scrollEventThrottle={16}
				horizontal
				showsHorizontalScrollIndicator={false}
				{...{ onScroll, ref }}
			>
				{DATA.map((onBoardingItem, index) => (
					<Onboarding key={onBoardingItem.title + index} {...onBoardingItem} />
				))}
			</ScrollView>
			<Div h={height / 5} mt="2xl">
				<Indicator />
				{slideNo === 1 && (
					<MotionBox>
						<Button
							onPress={handleNavigation}
							rounded="2xl"
							px="2xl"
							bg="brandDark"
							alignSelf="center"
							my="2xl"
						>
							Okay, Continue
						</Button>
					</MotionBox>
				)}
			</Div>
		</CustomScreen>
	)
}

export default OnboardingScreen

interface OnboardingProps {
	image: number
	title: string
	description: string
}

const Onboarding: FC<OnboardingProps> = (props) => {
	const { width } = useWindowDimensions()
	const IMAGE_SIZE = 300
	return (
		<Center w={width} p="xl">
			<Center w={IMAGE_SIZE} h={IMAGE_SIZE}>
				<CustomImage
					source={props.image}
					style={styles.onboarding__image}
					resizeMode={FastImage.resizeMode.contain}
				/>
			</Center>
			<Heading textAlign="center" my="xl">
				{props.title}
			</Heading>
			<Paragraph fontSize="md" mx="lg" textAlign="center">
				{props.description}
			</Paragraph>
		</Center>
	)
}

const styles = StyleSheet.create({
	onboarding__image: {
		width: '100%',
		height: '100%',
	},
})
