import React, { useRef, useState } from 'react'
import {
	ScrollView,
	Platform,
	useWindowDimensions,
	NativeScrollEvent,
	NativeSyntheticEvent,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from 'react-native'
import { Button, Div, Image, Text } from 'react-native-magnus'
import Data from './extra/data'
import * as Animatable from 'react-native-animatable'
import { useTransparentBar } from '../../../hooks/comps/useAndroidBarBg'
import { Heading, HStack, VStack, FocusAwareStatusBar, Dot } from '@elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Slide from '../../elements/comps/Slide'
import { StackNavigationProp } from '@react-navigation/stack'

// range added because of inconsistensies on Android
const RANGE = 5

interface Props {
	navigation: StackNavigationProp<any, any>
}

export default ({ navigation }: Props) => {
	const [slideNo, setSlideNo] = useState(0)
	useTransparentBar()
	const ref = useRef<ScrollView>(null)
	const { width, height } = useWindowDimensions()

	const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
		const offset = Math.round(e.nativeEvent.contentOffset.x)
		const roundedWidth = Math.round(width)
		const index = Math.round(offset / roundedWidth)
		const remainder = Math.round(offset % roundedWidth)

		if (
			remainder < roundedWidth * (index - 1) - RANGE &&
			remainder > roundedWidth * index + RANGE
		) {
			return
		}
		setSlideNo(offset < width ? 0 : index)
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
			{[...new Array(Data.length)].map((_, index) => (
				<Dot key={`dot_${index}`} selected={index === slideNo} />
			))}
		</Div>
	)

	const handleLogin = () => {
		navigation.navigate('Login')
	}

	const BOX_HEIGHT = height / 2.3

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Div
				flex={1}
				alignItems="center"
				bg="white"
				style={StyleSheet.absoluteFill}
			>
				<FocusAwareStatusBar hidden />
				<ImageBackground
					source={require('@assets/png/splash.png')}
					style={[{ justifyContent: 'flex-end' }, StyleSheet.absoluteFill]}
				>
					<Div position="absolute" bottom={0}>
						<Animatable.View animation="fadeIn" delay={200}>
							<Image
								source={require('@assets/png/blur.png')}
								h={height / 1.5}
								w={width}
							/>
						</Animatable.View>
					</Div>

					<Animatable.View animation="fadeIn" delay={500}>
						<Div
							h={BOX_HEIGHT}
							justifyContent="center"
							alignItems="center"
							zIndex={200}
						>
							<HStack justifyContent="flex-end" mb="lg">
								<Heading
									color="card"
									fontSize="6xl"
									fontFamily="Montserrat-Bold"
								>
									3kle
								</Heading>
								<Div w={10} h={10} bg="brand" ml="sm" bottom={-6} />
							</HStack>
							<ScrollView
								horizontal
								snapToInterval={width}
								decelerationRate="fast"
								showsHorizontalScrollIndicator={false}
								scrollEventThrottle={0}
								onScrollAnimationEnd={() => setSlideNo(1)}
								{...{ onScroll, ref }}
							>
								{Data.map((slideItem, index) => (
									<Slide
										title={slideItem.title}
										key={slideItem.title + index}
										{...{ Indicator, index }}
									/>
								))}
							</ScrollView>

							<Indicator />
							<VStack mb={59}>
								<Button
									block
									my="lg"
									mx="xl"
									py={16}
									rounded="2xl"
									onPress={handleLogin}
									color="textLight"
									bg="brand"
								>
									Get Started
								</Button>

								<TouchableOpacity onPress={handleLogin}>
									<Text color="textLight">Login</Text>
								</TouchableOpacity>
							</VStack>
						</Div>
					</Animatable.View>
				</ImageBackground>
			</Div>
		</SafeAreaView>
	)
}
