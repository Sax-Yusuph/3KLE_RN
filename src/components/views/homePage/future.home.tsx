import { Center, Heading, HStack, Paragraph, VirtualizedView, CustomImage, FadedText } from '@elements'
import {
	VictoryLine,
	VictoryChart,
	VictoryLegend,
	VictoryTooltip,
	VictoryAxis,
	VictoryLabel,
	VictoryContainer,
} from 'victory-native'
import { COLORS } from '@utils/colors'
import React, { FC, Suspense, useCallback, useEffect, useState } from 'react'
import { useWindowDimensions, Switch } from 'react-native'
import { Button, Div, Icon } from 'react-native-magnus'
import { Summary } from './extra/data'
import { Sleep } from '@utils/helpers'
import DividerLine from '@assets/svgs/Line.svg'

// const SPACING = 12

const MOCK_ITEM: Summary = {
	title: 'Future',
	route: 'FUTURE_SUMMARY',
	type: 'future',
	summary: {
		title: 'Hypothetical projection:',
		value: '0.00',
		extraData: '',
		// projectionSpan: 5,
		currency: '₦',
	},
	// summary: {
	// 	title: 'Hypothetical projection of',
	// 	value: '8,050,000',
	// 	extraData: 'in',
	// 	projectionSpan: 5,
	// 	currency: '₦',
	// },
}

const FutureSummary = () => {
	const { width } = useWindowDimensions()
	const [isEnabled, setIsEnabled] = useState(false)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

	const [showChart, setShowChart] = useState(false)

	const displayChart = useCallback(async () => {
		await Sleep(1000)
		setShowChart(true)
	}, [])

	useEffect(() => {
		displayChart()
	}, [])

	return (
		<Div flex={1} w={width} overflow="hidden" px="lg">
			<VirtualizedView>
				<Heading fontSize="2xl" textAlign="center">
					Future
				</Heading>
				<CardItem item={MOCK_ITEM} />
				<Center my="2xl">
					<DividerLine />
				</Center>
				<Div bg="screenBg" rounded="2xl" borderColor="divider" borderWidth={1} p="lg">
					<Section>
						<Title>Portfolio type</Title>
						<Item value="none" /** value="Moderate" */ />
					</Section>

					<Section noBorder>
						<Title>Recurring</Title>
						<Item value="none" /** value="$100 Every month" */ />
					</Section>
				</Div>

				<Button bg="secondary" alignSelf="flex-end" mb="2xl" mt="md">
					Start Investing
				</Button>

				<Div bg={COLORS.brandLighter} minH={400} roundedTop="lg" p="lg">
					<Div px="lg" pt="2xl">
						<Heading color="white" maxW="80%">
							Hypothetical projection of $12000 in 10 years
						</Heading>
						<Center flex={1}>
							<Suspense fallback={<Heading>Loading...</Heading>}>
								{showChart && (
									<VictoryChart
										containerComponent={<VictoryContainer responsive={false} />}
										domainPadding={38}
									>
										<VictoryLegend
											x={50}
											y={4}
											orientation="horizontal"
											symbolSpacer={5}
											gutter={60}
											colorScale={[COLORS.secondary, COLORS.secondary]}
											style={{
												labels: { fontSize: 12 },
											}}
											data={[
												{
													name: 'Investment: $0',
													labels: { fill: 'white' },
													symbol: { type: 'square' },
												},
												{
													name: 'Returns: $0',
													labels: { fill: 'white' },
													symbol: { type: 'square' },
												},
											]}
										/>

										<VictoryLine
											interpolation="natural"
											style={{
												data: { stroke: COLORS.secondary, strokeWidth: () => 3 },

												// parent: { border: '0px solid #ccc' },
											}}
											animate={{ duration: 2000, onLoad: { duration: 1000 } }}
											data={[
												// { x: 'Year 1', y: 2 },
												// { x: 'Year 3', y: 3 },
												// { x: 'Year 5', y: 5 },
												// { x: 'Year 7', y: 4 },
												// { x: 'Year 10', y: 7 },
												{ x: 'Year 1', y: 2 },
												{ x: 'Year 5', y: 3 },
												{ x: 'Year 10', y: 5 },
											]}
											labels={['$550', '', '$1200']}
											// labels={['$550', '', '', '', '$1200']}
											labelComponent={
												<VictoryTooltip
													dy={0}
													renderInPortal={false}
													active={true}
													style={{ fill: 'white' }}
													flyoutStyle={{ fill: COLORS.secondary, stroke: COLORS.secondary }}
												/>
											}
										/>
										<VictoryAxis
											axisLabelComponent={<VictoryLabel />}
											fixLabelOverlap={true}
											style={{
												parent: {
													fill: 'white',
												},
												axisLabel: {
													fontFamily: 'Poppins-Regular',
													letterSpacing: '1px',
													stroke: 'white',
													fontSize: 20,
													padding: 60,
												},
												tickLabels: {
													fontFamily: 'Poppins-Regular',
													fontWeight: 100,
													letterSpacing: '1px',
													fill: 'white',
													fontSize: 12,
													marginBlock: '20px',
												},
												axis: { stroke: 'transparent' },
												ticks: { stroke: 'transparent' },
												// tickLabels: { fill: 'transparent' },
												// grid: { stroke: 'lightgrey' },
											}}
										/>

										<VictoryAxis
											dependentAxis={true}
											axisLabelComponent={<VictoryLabel />}
											label={'Number of Commits'}
											fixLabelOverlap={true}
											style={{
												axisLabel: {
													fontFamily: 'inherit',
													fontWeight: 100,
													letterSpacing: '1px',
													stroke: 'white',
													fontSize: 20,
													padding: 60,
												},
												grid: { stroke: 'rgba(200,200,200,0.2)' },
												tickLabels: { fill: 'transparent' },
												axis: { stroke: 'transparent' },
											}}
										/>
									</VictoryChart>
								)}
							</Suspense>
						</Center>
					</Div>
				</Div>

				<Div bg="screenBg" roundedTop="2xl" p="xl" mt={-20}>
					<Div my="lg">
						<Section2>
							<Heading>Recurring</Heading>
							<Div p="lg">
								<Heading fontSize="md" fontWeight="normal">
									{/* $100 Every month */}
									none
								</Heading>
							</Div>
						</Section2>

						<Section2>
							<Heading>Round up</Heading>
							<Div p="lg">
								<Switch
									trackColor={{ false: '#655B5B', true: COLORS.secondary_light }}
									thumbColor={isEnabled ? COLORS.secondary : '#979797'}
									ios_backgroundColor="#3e3e3e"
									onValueChange={toggleSwitch}
									value={isEnabled}
								/>
							</Div>
						</Section2>
					</Div>
					<FadedText textAlign="center">
						This graphical illustration if for illustrative purposes only, interest is 8% annually. Investment
						is risky. Seek advice when necessary.
					</FadedText>
				</Div>

				<Div h={40} />
			</VirtualizedView>
		</Div>
	)
}

export default FutureSummary

interface CardProps {
	item: Summary
}

export const CardItem: FC<CardProps> = ({ item }) => {
	const { width } = useWindowDimensions()
	const { title, currency, value, extraData, projectionSpan } = item.summary

	const CARD_WIDTH = width * 0.95
	const CARD_HEIGHT = CARD_WIDTH * 0.5

	return (
		<Div h={CARD_HEIGHT}>
			<Center w="100%" h="100%" rounded="2xl" bg="brandDark" justifyContent="flex-start">
				<Paragraph color="textLight" mt="2xl">
					{title}
				</Paragraph>
				<HStack>
					<Heading color="textLight" fontSize="2xl" mr="md">
						{currency}
					</Heading>
					<Heading color="textLight" fontSize="5xl">
						{value}
					</Heading>
				</HStack>
				<Paragraph color="textLight">{extraData}</Paragraph>
				{projectionSpan ? <Heading color="textLight">{projectionSpan} years time.</Heading> : null}

				<Div position="absolute" w="100%" h="100%">
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

const Section: FC<{ noBorder?: true }> = ({ children, noBorder, ...props }) => {
	return (
		<HStack
			// my="lg"
			borderBottomColor={noBorder ? undefined : 'divider'}
			borderBottomWidth={noBorder ? undefined : 1}
			py="xl"
			justifyContent="space-between"
			{...props}
		>
			{children}
		</HStack>
	)
}

const Title: FC = ({ children }) => (
	<Heading fontSize="lg" fontWeight="500">
		{children}
	</Heading>
)

const Item: FC<{ value: string }> = ({ value }) => (
	<HStack alignSelf="flex-end" justifyContent="space-between" maxW="50%">
		<Heading fontSize="lg" mr="lg">
			{value ?? 'none'}
		</Heading>
		<Icon name="right" color="brandDark" fontSize={20} />
	</HStack>
)

const Section2: FC<{ noBorder?: true }> = ({ children, noBorder }) => {
	return (
		<HStack py="lg" justifyContent="space-between" borderTopColor="divider" borderTopWidth={1}>
			{children}
		</HStack>
	)
}
