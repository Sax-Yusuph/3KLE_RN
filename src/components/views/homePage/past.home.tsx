import {
	Center,
	CustomImage,
	Header,
	Heading,
	HStack,
	Paragraph,
	RecentItem,
	VirtualizedView,
	VStack,
} from '@elements'
import React, { FC } from 'react'
import { FlatList, useWindowDimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Div } from 'react-native-magnus'
import { Summary } from './extra/data'

const SPACING = 12

const MOCK_ITEM: Summary = {
	title: 'Past',
	route: 'PAST_SUMMARY',
	type: 'past',
	summary: {
		title: 'Total Invested',
		value: '750,000',
		currency: '₦',
		// cardNumber: 'xxxx xxxx xxxx 333',
		// cardName: 'Okorie Uche Emmanuel',
	},
}

type Summary_Item = { title: string; value: number; currency: string }

const MOCK_SUMMARY: Summary_Item[] = [
	{ title: 'Total Gain/Loss', value: 120000, currency: '$ ' },
	{ title: 'Total Saved', value: 120000, currency: '$ ' },
	{ title: 'Amount Withdrawn', value: 120000, currency: '$ ' },
	{ title: 'Self Investment', value: 120000, currency: '$ ' },
	{ title: 'Family Plus', value: 120000, currency: '$ ' },
	{ title: 'Foreign Currency Savings', value: 120000, currency: '$ ' },
]

export const RECENT_TRANSACTIONS = [
	{ sold: true, title: 'You sold 2 AAPL shares', time: '1 mins ago', currency: '$', amount: 262 },
	{ title: 'Received money from Dayo Aigbe', time: '20 mins ago', currency: '$', amount: 250 },
	{ title: 'Received money from Dayo Aigbe', time: '20 mins ago', currency: '$', amount: 250 },
	{ title: 'Received money from Dayo Aigbe', time: '20 mins ago', currency: '$', amount: 250 },
	{ title: 'Funded your Self direct account', time: '20 mins ago', currency: '$', amount: 1500 },
]

const PastSummary = () => {
	return (
		<Center flex={1} w='100%'>
			<VirtualizedView>
				<Heading fontSize='2xl' textAlign='center'>
					Past
				</Heading>
				<CardItem item={MOCK_ITEM} />

				<VStack m='sm' alignItems='flex-start' p={SPACING}>
					<Heading>Past Summary</Heading>

					<FlatList
						data={MOCK_SUMMARY}
						style={{ width: '100%' }}
						keyExtractor={i => i.title}
						listKey='total past Summary'
						renderItem={({ item }) => <SummaryItem {...{ item }} />}
					/>

					<Heading color='textFade' fontWeight='bold' fontSize='md' mt='3xl' mb='lg'>
						Recent Transactions
					</Heading>
					<Div bg='screenBg' px='xl' py='lg' rounded='xl' w='100%'>
						<FlatList
							data={RECENT_TRANSACTIONS}
							style={{ width: '100%' }}
							keyExtractor={(_, i) => i.toString()}
							listKey='recent Transactions'
							renderItem={({ item }) => <RecentItem {...item} />}
						/>
					</Div>
				</VStack>
			</VirtualizedView>
		</Center>
	)
}

export default PastSummary

interface CardProps {
	item: Summary
}

export const CardItem: FC<CardProps> = ({ item }) => {
	const { width } = useWindowDimensions()
	const { title, currency, value } = item.summary

	const CARD_WIDTH = width * 0.95
	const CARD_HEIGHT = CARD_WIDTH * 0.6

	return (
		<Div p={12} h={CARD_HEIGHT} w={width}>
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

export const SummaryItem: FC<{ item: Summary_Item }> = ({ item }) => {
	return (
		<HStack p='xl' shadow='xs' rounded='lg' bg='card' my='lg' justifyContent='space-between'>
			<Heading fontSize='lg' maxW={160}>
				{item.title}
			</Heading>
			<HStack>
				<Paragraph>{item.currency}</Paragraph>
				<Paragraph>{item.value}</Paragraph>
			</HStack>
		</HStack>
	)
}
