import { CardItem, Center, CustomImage, Heading, HStack, Paragraph, VStack } from '@elements'
import { useFocusEffect } from '@react-navigation/native'
import React, { FC, forwardRef, useEffect, useRef, useState } from 'react'
import { Animated, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Div, Icon, Image } from 'react-native-magnus'
import { DATA, DATA2, Summary } from './data'
import * as Animatable from 'react-native-animatable'

import { HomeRoutes } from 'screens/home'

const SPACING = 12
const TITLE_SPACING = 6
interface Props {
	viewDetails: (route: HomeRoutes) => void
}

const HeroSection: FC<Props> = ({ viewDetails }) => {
	const [activeIndex, setActiveIndex] = useState(1)
	const { width } = useWindowDimensions()
	const cardRef = useRef<FlatList<Summary> | null>(null)
	const titleRef = useRef<FlatList<Summary> | null>(null)

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

	return (
		<Div>
			{/* title */}
			<FlatList
				ref={(ref) => (titleRef.current = ref)}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ alignItems: 'flex-end' }}
				horizontal
				data={DATA}
				keyExtractor={(i) => i.title}
				renderItem={({ item, index }) => {
					const showLeftIcon = activeIndex === 1 && index === 0
					const showRightIcon = activeIndex === 1 && index === 2
					return (
						<TouchableOpacity onPress={() => scrolltoActiveIndex(index)}>
							<Div
								w={width / 1.5}
								justifyContent="flex-end"
								alignItems={index === 0 ? 'flex-end' : index === 1 ? 'center' : 'flex-start'}
							>
								<Heading
									textAlign={index === 0 ? 'right' : index === 1 ? 'center' : 'left'}
									fontWeight={index === activeIndex ? 'bold' : 'normal'}
									fontSize={index === activeIndex ? 'xl' : 'md'}
								>
									{showLeftIcon && <Icon name="left" color="brandDark" mb={-5} />}
									{item.title}
									{showRightIcon && <Icon name="right" color="brandDark" mb={-5} />}
								</Heading>
							</Div>
						</TouchableOpacity>
					)
				}}
			/>

			{/* card */}
			<FlatList
				ref={(ref) => (cardRef.current = ref)}
				showsHorizontalScrollIndicator={false}
				data={DATA}
				onMomentumScrollEnd={(ev) => {
					const offset = ev.nativeEvent.contentOffset.x
					scrolltoActiveIndex(Math.floor(offset / width), offset)
				}}
				horizontal
				pagingEnabled
				keyExtractor={(i) => i.title}
				renderItem={({ item }) => <CardItem {...{ item, viewDetails, SPACING }} />}
			/>

			<HStack alignSelf="center">
				<Indicator active={activeIndex === 0} />
				<Indicator active={activeIndex === 1} />
				<Indicator active={activeIndex === 2} />
			</HStack>
		</Div>
	)
}

const Indicator: FC<{ active: boolean }> = ({ active }) => {
	return <Div h={3} w={40} rounded="lg" bg={active ? 'blue600' : 'gray300'} m="sm" />
}

export default HeroSection
