import React, { FC } from 'react'
import { Center, Paragraph, VirtualizedView, ImageOverlay, AppLogo } from '@elements'
import HeroSection from './extra/HeroSection'

import { FlatList, StyleSheet, useWindowDimensions } from 'react-native'
import { Button, Div, Icon } from 'react-native-magnus'
import { ProductListSection } from './extra/ProductListSection'
import { ACTIVITIES } from './extra/data'
import { ActivityItem } from './extra/activityItem'
import { HomeRoutes } from 'screens/home'

interface Props {
	viewDetails: (route: HomeRoutes) => void
}
const DefaultHome: FC<Props> = ({ viewDetails }) => {
	const { width } = useWindowDimensions()
	const CARD_WIDTH = width * 0.95
	const CARD_HEIGHT = CARD_WIDTH * 0.6

	const overlayImageLayout = {
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
	}

	return (
		<Center w="100%">
			<VirtualizedView>
				<HeroSection {...{ viewDetails }} />

				<Center flex={1} w={width} my="xl">
					<FlatList
						listKey="activitiesList"
						numColumns={4}
						data={ACTIVITIES}
						keyExtractor={(i) => i.title}
						renderItem={({ item }) => <ActivityItem {...{ item }} />}
					/>
					<ImageOverlay
						source={require('@assets/png/homePage/productsBanner.png')}
						style={[styles.image__overlay, overlayImageLayout]}
					>
						<AppLogo />
						<Paragraph color="textLight" maxW="80%" fontSize="md" textAlign="center">
							Our products were specifically designed to cater for all financial needs and risk appetite.
							Start exploring now!.
						</Paragraph>

						<Button
							mt="md"
							mx="xl"
							px="xl"
							py="lg"
							bg="transparent"
							borderWidth={1}
							borderColor="card"
							color="textLight"
							underlayColor="rgba(0,0,0,0.5)"
							alignSelf="flex-end"
						>
							<Icon name="arrowright" color="white" />
						</Button>
					</ImageOverlay>

					<ProductListSection title="Top Products this week" />
					<Button
						mt="md"
						mx="xl"
						px="xl"
						py="lg"
						bg="transparent"
						borderWidth={1}
						borderColor="brandDark"
						color="brandDark"
						underlayColor="blue100"
						alignSelf="center"
					>
						Select your plan
					</Button>

					<Div h={60} />
				</Center>
			</VirtualizedView>
		</Center>
	)
}

export default DefaultHome

const styles = StyleSheet.create({
	image__overlay: {
		borderRadius: 16,
		overflow: 'hidden',
		marginVertical: 18,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
})
