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
import { VStack, FocusAwareStatusBar, Dot, Center } from '@elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Slide from '../../elements/comps/Slide'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import routes from '@navigation/navigators/routes'

// range added because of inconsistensies on Android
const RANGE = 5

interface Props {
	navigation: StackNavigationProp<any, any>
}

export default () => {
	const [slideNo, setSlideNo] = useState(0)
	useTransparentBar()
	const ref = useRef<ScrollView>(null)
	const { width, height } = useWindowDimensions()

	const navigation = useNavigation()

	const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
		const offset = Math.round(e.nativeEvent.contentOffset.x)
		const roundedWidth = Math.round(width)
		const index = Math.round(offset / roundedWidth)
		const remainder = Math.round(offset % roundedWidth)

		if (remainder < roundedWidth * (index - 1) - RANGE && remainder > roundedWidth * index + RANGE) {
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
		navigation.navigate('Home', { screen: routes.HOME.DEFAULT_HOME })
	}

	const BOX_HEIGHT = height / 2.3

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Div flex={1} alignItems="center" bg="white" style={StyleSheet.absoluteFill}>
				<FocusAwareStatusBar hidden />
				<ImageBackground
					source={Data[slideNo].image}
					style={[{ justifyContent: 'flex-end' }, StyleSheet.absoluteFill]}
				>
					{slideNo === 0 && (
						<Div position="absolute" bottom={0}>
							<Animatable.View animation="fadeIn" delay={200}>
								<Image source={require('@assets/png/blur.png')} h={height / 1.5} w={width} />
							</Animatable.View>
						</Div>
					)}

					<Animatable.View animation="fadeIn" delay={500}>
						<Div
							h={slideNo === 0 ? BOX_HEIGHT : height}
							justifyContent="center"
							alignItems="center"
							zIndex={200}
						>
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
									<Center key={slideItem.title + index}>
										{slideItem.Heading}
										<Slide title={slideItem.title} />
									</Center>
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
