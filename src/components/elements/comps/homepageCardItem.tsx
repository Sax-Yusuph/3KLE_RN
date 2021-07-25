import { Center, CustomImage, Heading, HStack, MotionBox, Paragraph, VStack } from '@elements'
import { COLORS } from '@utils/colors'
import { showToast } from '@utils/helpers'
import { Summary } from 'components/views/homePage/extra/data'
import React, { Props, FC } from 'react'
import { TouchableOpacity, useWindowDimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Div, Icon } from 'react-native-magnus'
import { HomeRoutes } from 'screens/home'

interface CardProps {
	item: Summary
	viewDetails: (route: HomeRoutes) => void
	SPACING?: number
}

export const CardItem: FC<CardProps> = ({ item, viewDetails, SPACING }) => {
	const { width } = useWindowDimensions()
	const { title, currency, cardName, cardNumber, cardType, value, extraData, projectionSpan } = item.summary

	const CARD_WIDTH = width * 0.95
	const CARD_HEIGHT = CARD_WIDTH * 0.5

	return (
		<Div p={SPACING} h={CARD_HEIGHT} w={width}>
			<Center h="100%" rounded="2xl" bg="brandDark" justifyContent="flex-start">
				<MotionBox>
					<Paragraph color="textLight" mt="2xl">
						{title}
					</Paragraph>
				</MotionBox>

				<MotionBox delay={600}>
					<HStack>
						<Heading color="textLight" fontSize="2xl" mr="md">
							{currency}
						</Heading>
						<Heading color="textLight" fontSize="5xl">
							{value}
						</Heading>
					</HStack>
				</MotionBox>

				<MotionBox>
					{extraData ? (
						<Paragraph color="textLight" textAlign="center">
							{extraData}
						</Paragraph>
					) : null}
					{projectionSpan ? (
						<Heading color="textLight" textAlign="center">
							{projectionSpan} years time.
						</Heading>
					) : null}
				</MotionBox>
				{cardNumber ? (
					<VStack position="absolute" bottom={3} alignItems="flex-start" w={CARD_WIDTH} px="xl">
						<MotionBox>
							<Paragraph color="textLight">{cardNumber}</Paragraph>

							<HStack w="100%" justifyContent="space-between">
								<Paragraph color="rgba(255,255,255,0.8)" mt="lg">
									{cardName}
								</Paragraph>
								<CustomImage
									source={require('@assets/png/homePage/visa.png')}
									style={{ width: 36, height: 16 }}
									resizeMode={FastImage.resizeMode.contain}
								/>
							</HStack>
						</MotionBox>
					</VStack>
				) : null}

				<Div position="absolute" w="100%" h="100%">
					{POLYGONS.map(({ source, style }) => (
						<MotionBox key={source} delay={200}>
							{/*  @ts-ignore */}
							<CustomImage source={source} style={style} />
						</MotionBox>
					))}
				</Div>

				{!item.title.includes('Present') ? (
					<Div position="absolute" bottom={10} right={20}>
						<TouchableOpacity onPress={() => viewDetails(item.route)}>
							<Heading color="green500" fontSize="md">
								View
							</Heading>
						</TouchableOpacity>
					</Div>
				) : null}

				{!cardNumber && item.title.includes('Present') ? (
					<Div position="absolute" bottom={30} left={0}>
						<TouchableOpacity onPress={() => showToast()}>
							<HStack bg={COLORS.secondary_deep} px="lg" py="xs" roundedRight="lg">
								<Icon name="plus" color="textLight" mr="sm" />
								<Paragraph color="textLight" fontSize="sm">
									Add Card
								</Paragraph>
							</HStack>
						</TouchableOpacity>
					</Div>
				) : null}
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
