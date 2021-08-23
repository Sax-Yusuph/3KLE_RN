import { HStack, IconButton, VStack } from '@elements'
import { showToast } from '@utils/helpers'
import React, { FC } from 'react'
import { ImageBackground, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollDiv, Div, Text, Icon } from 'react-native-magnus'
import AvatarImg from '@assets/svgs/header/avatar.svg'
import BellIcon from '@assets/svgs/header/Notification.svg'
import UpIcon from '@assets/svgs/up.svg'
import DepositIcon from '@assets/svgs/deposit.svg'
import DepositUpIcon from '@assets/svgs/depositUp.svg'
import Effects from '@assets/svgs/effect.svg'
import { Circle } from '@elements'
import * as Animatable from 'react-native-animatable'
import { styles } from './styles'
import { CARDS_DATA } from './data'
import { Section2 } from './transactions'

export const Header = () => {
	return (
		<View pointerEvents="box-none">
			<HStack justifyContent="space-between" p="lg">
				<HStack>
					<IconButton onPress={showToast} rounded="circle">
						<AvatarImg width={32} height={32} />
					</IconButton>
					<Text ml="md" fontSize="md" fontWeight="bold">
						My Profile
					</Text>
				</HStack>

				<IconButton onPress={showToast} p="md" rounded="circle" mx="lg" pointerEvents="none">
					<BellIcon width={22} height={22} />
					<Circle bg="#E44228" size={10} position="absolute" right={4} top={4} />
				</IconButton>
			</HStack>

			<Banner />

			<Animatable.View animation="fadeIn" delay={400} useNativeDriver pointerEvents="box-none">
				<ScrollDiv horizontal mx="lg" mt="xl">
					{CARDS_DATA?.map((cardItem, i) => (
						<Card key={i.toString()} {...cardItem} />
					))}
				</ScrollDiv>
				{/* <Section2 /> */}
			</Animatable.View>
		</View>
	)
}

const Banner = () => {
	/**background: linear-gradient(256.7deg,
	 *  #263974 2.53%, rgba(36, 59, 128, 0.87) 96.93%);
	 */
	return (
		<Div
			// bg=''
			h={200}
			rounded="xl"
			m="lg"
			justifyContent="center"
			alignItems="center"
			pointerEvents="none"
			overflow="hidden"
		>
			<LinearGradient
				colors={['rgba(38, 57, 116, 1)', 'rgba(36, 59, 128, 0.87)']}
				style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
			>
				<Animatable.View animation="fadeIn" useNativeDriver delay={100} pointerEvents="box-none">
					<VStack alignItems="flex-start">
						<HStack>
							<Text color="textLight" mr="sm" fontSize="xl">
								$
							</Text>

							<Text color="textLight" fontSize={36} fontWeight="bold">
								1290.00
							</Text>
						</HStack>

						<HStack mt={-6}>
							<Text color="rgba(255,255,255,0.9)" fontSize="lg">
								Portfolio Value
							</Text>
							<HStack ml="md">
								<UpIcon width={26} height={26} />
								<Text color="secondary">up</Text>
							</HStack>
						</HStack>
					</VStack>
				</Animatable.View>

				<Animatable.View animation="fadeIn" delay={300} useNativeDriver pointerEvents="box-none">
					<HStack mt="2xl">
						<Depositboxes text="Deposit" />
						<Depositboxes text="WithDraw" up />
					</HStack>
				</Animatable.View>
				<Div position="absolute" bottom={-20}>
					<Effects />
				</Div>
			</LinearGradient>
		</Div>
	)
}

const Depositboxes: FC<{ up?: true; text: string }> = ({ up, text }) => {
	return (
		<VStack px="lg">
			{up ? <DepositUpIcon /> : <DepositIcon />}
			<Text fontSize="xs" color="textLight" mt="sm">
				{text}
			</Text>
		</VStack>
	)
}

const Card: FC<{ title: string; image: number }> = ({ title, image }) => {
	const { width } = useWindowDimensions()
	const CARD_WIDTH = width / 2.3
	return (
		<TouchableOpacity activeOpacity={0.89}>
			<Div rounded="xl" w={CARD_WIDTH} h={CARD_WIDTH / 2} mr="xl" overflow="hidden" pointerEvents="box-none">
				<ImageBackground source={image} style={styles.image}>
					<Text color="textLight" fontSize="md">
						{title}
					</Text>
					<Div position="absolute" top={5} right={5}>
						<IconButton activeBg="rgba(0,0,0,0.3)" rounded="circle" onPress={showToast}>
							<Icon name="close" fontFamily="Ionicons" color="white" />
						</IconButton>
					</Div>
				</ImageBackground>
			</Div>
		</TouchableOpacity>
	)
}
