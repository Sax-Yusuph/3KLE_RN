import { Center, Circle, CustomButton, Heading, HStack, SmallText } from '@elements'
import { useRoute } from '@react-navigation/native'
import { __COLORS } from '@utils/colors'
import React from 'react'
import { Div, Icon, ScrollDiv } from 'react-native-magnus'
import { Stock } from '../extra'
import AAPL from '@assets/svgs/selftrade/apple.svg'
import { TopNews } from 'components/views/home/extra'

export const StockDetails = () => {
	const routes = useRoute()
	const { stock } = routes.params as { stock: Stock }
	const gained = stock.stats === 'gain'
	const color = gained ? 'secondary' : 'warning'

	return (
		<ScrollDiv>
			<Center>
				<Div h={400} w={400} bg="gray600" />
			</Center>

			<Div px="xl" mt="xl">
				<HStack>
					<Div flex={1}>
						<HStack alignItems="flex-end" mb="md">
							<AAPL />
							<Heading ml="sm" color="textDark" fontWeight="800">
								{stock.alias}
							</Heading>
						</HStack>
						<HStack>
							<Icon name={gained ? 'arrow-up' : 'arrow-down'} fontFamily="Ionicons" {...{ color }} />
							<SmallText {...{ color }}>{stock.percentage}%</SmallText>
							<SmallText> Today</SmallText>
						</HStack>

						<HStack my="lg">
							<Circle size={20} bg={__COLORS.NEGATIVE_LIGHT}>
								<Circle size={15} bg={__COLORS.NEGATIVE} />
							</Circle>
							<Heading fontSize="md" color={__COLORS.NEGATIVE}>
								Market Closed
							</Heading>
						</HStack>
					</Div>

					<HStack>
						<CustomButton fontWeight="600" bg={__COLORS.NEGATIVE} px="xl">
							Sell
						</CustomButton>
						<Div w={10} />
						<CustomButton fontWeight="600" bg={__COLORS.SECONDARY} px="xl">
							Buy
						</CustomButton>
					</HStack>
				</HStack>

				<SmallText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sapien donec nulla netus amet. Diam
					metus molestie at urna, morbi scelerisque. Commodo curabitur neque dictumst nullam vel ultricies
					duis. Est et quisque adipiscing viverra. Lectus elit arcu varius aliquet nunc mauris. Dictum
					ultrices pharetra parturient euismod id tristique morbi. Consectetur cursus urna donec.
				</SmallText>
			</Div>
			<Div mt="2xl">
				<TopNews />
			</Div>
		</ScrollDiv>
	)
}
