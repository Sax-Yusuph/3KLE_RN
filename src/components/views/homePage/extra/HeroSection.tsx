import { Center, CustomImage, Heading, HStack, Paragraph, VStack } from '@elements'
import { useFocusEffect } from '@react-navigation/native'
import React, { FC, forwardRef, useEffect, useRef, useState } from 'react'
import { Animated, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Div, Icon, Image } from 'react-native-magnus'
import { DATA, Summary } from './data'
import * as Animatable from 'react-native-animatable'

const SPACING = 12
const TITLE_SPACING = 6

const HeroSection = () => {
	const [activeIndex, setActiveIndex] = useState(1)
	const { width } = useWindowDimensions()
	const cardRef = useRef<FlatList<Summary> | null>(null)
	const titleRef = useRef<FlatList<Summary> | null>(null)

	// Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
	// 	useNativeDriver: true,
	// })
	// useFocusEffect(() => {
	// 	const offset = activeIndex * width - SPACING / 2

	// 	cardRef.current?.scrollToOffset({ offset })
	// })

	useEffect(() => {
		const offset = activeIndex * width

		cardRef.current?.scrollToOffset({ offset })

		titleRef.current?.scrollToOffset({ offset: width / 2 })
	}, [])

	const scrolltoActiveIndex = (index: number, offset?: number) => {
		//setIndex
		setActiveIndex(index)
		cardRef.current?.scrollToOffset({ offset: index * width ?? offset })

		const titleRefOffset = index === 0 ? width / 8 : index === 1 ? width / 2 : width - 20

		titleRef.current?.scrollToOffset({ offset: titleRefOffset })
		//scroll flatlist
	}

	// mx={45}
	return (
		<Div h={250}>
			{/* title */}
			<FlatList
				ref={ref => (titleRef.current = ref)}
				showsHorizontalScrollIndicator={false}
				horizontal
				data={DATA}
				keyExtractor={i => i.title}
				renderItem={({ item, index }) => {
					const showLeftIcon = activeIndex === 1 && index === 0
					const showRightIcon = activeIndex === 1 && index === 2
					return (
						<TouchableOpacity onPress={() => scrolltoActiveIndex(index)}>
							<Div
								w={width / 1.5}
								alignItems={index === 0 ? 'flex-end' : index === 1 ? 'center' : 'flex-start'}
							>
								<Heading
									textAlign={index === 0 ? 'right' : index === 1 ? 'center' : 'left'}
									fontWeight={index === activeIndex ? 'bold' : 'normal'}
									fontSize={index === activeIndex ? 'xl' : 'md'}
								>
									{showLeftIcon && <Icon name='left' color='brandDark' mb={-5} />}
									{item.title}
									{showRightIcon && <Icon name='right' color='brandDark' mb={-5} />}
								</Heading>
							</Div>
						</TouchableOpacity>
					)
				}}
			/>

			{/* card */}
			<FlatList
				ref={ref => (cardRef.current = ref)}
				showsHorizontalScrollIndicator={false}
				data={DATA}
				onMomentumScrollEnd={ev => {
					const offset = ev.nativeEvent.contentOffset.x
					scrolltoActiveIndex(Math.floor(offset / width), offset)
				}}
				horizontal
				pagingEnabled
				keyExtractor={i => i.title}
				renderItem={({ item }) => <CardItem {...{ item }} />}
			/>

			<HStack alignSelf='center'>
				<Indicator active={activeIndex === 0} />
				<Indicator active={activeIndex === 1} />
				<Indicator active={activeIndex === 2} />
			</HStack>
		</Div>
	)
}

const Indicator: FC<{ active: boolean }> = ({ active }) => {
	return <Div h={3} w={40} rounded='lg' bg={active ? 'blue600' : 'gray300'} m='sm' />
}

export default HeroSection

const CardItem: FC<{ item: Summary }> = ({ item }) => {
	const { width } = useWindowDimensions()
	const {
		title,
		currency,
		cardName,
		cardNumber,
		cardType,
		value,
		extraData,
		projectionSpan,
	} = item.summary

	const CARD_WIDTH = width * 0.95
	const CARD_HEIGHT = CARD_WIDTH * 0.6
	return (
		<Div p={SPACING} h={CARD_HEIGHT} w={width}>
			<Center w='100%' h='100%' rounded='2xl' bg='brandDark' justifyContent='flex-start'>
				<Paragraph color='textLight' mt='2xl'>
					{title}
				</Paragraph>
				<HStack>
					<Heading color='textLight' fontSize='2xl' mr='md'>
						{currency}
					</Heading>
					<Heading color='textLight' fontSize='5xl'>
						{value}
					</Heading>
				</HStack>
				{extraData ? <Paragraph color='textLight'>{extraData}</Paragraph> : null}
				{projectionSpan ? <Heading color='textLight'>{projectionSpan} years time.</Heading> : null}

				{cardNumber ? (
					<VStack position='absolute' bottom={3} alignItems='flex-start' w={CARD_WIDTH} px='xl'>
						<Paragraph color='textLight'>{cardNumber}</Paragraph>

						<HStack w='100%' justifyContent='space-between'>
							<Paragraph color='rgba(255,255,255,0.8)' mt='lg'>
								{cardName}
							</Paragraph>
							<CustomImage
								source={require('@assets/png/homePage/visa.png')}
								style={{ width: 36, height: 16 }}
								resizeMode={FastImage.resizeMode.contain}
							/>
						</HStack>
					</VStack>
				) : null}

				<Div position='absolute' w='100%' h='100%'>
					{POLYGONS.map(({ source, style }) => (
						// @ts-ignore
						<CustomImage key={source} source={source} style={style} />
					))}
				</Div>
			</Center>
		</Div>
	)
}

const POLYGONS = [
	{
		source: require('@assets/png/homePage/Polygon1.png'),
		style: {
			width: 32,
			height: 32,
			top: 50,
			left: 260,
		},
	},
	{
		source: require('@assets/png/homePage/Polygon2.png'),
		style: { width: 18, height: 18, left: 150, top: 140, position: 'absolute' },
	},
	{
		source: require('@assets/png/homePage/Polygon3.png'),
		style: { width: 16, height: 16, left: 250, top: 140, position: 'absolute' },
	},
	{
		source: require('@assets/png/homePage/Polygon4.png'),
		style: { width: 16, height: 16, left: 310, top: 80, position: 'absolute' },
	},
	{
		source: require('@assets/png/homePage/Polygon5.png'),
		style: { width: 16, height: 16, left: 310, top: 110, position: 'absolute' },
	},
]
