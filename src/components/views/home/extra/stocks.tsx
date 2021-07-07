import { HStack, VStack, Heading, SmallText } from '@elements'
import React, { FC } from 'react'
import { Button, Div, Icon } from 'react-native-magnus'
import { STOCK_DATA, Stock } from './data'
import GainSparkLine from '@assets/svgs/sparklineA.svg'
import LoseSparkLine from '@assets/svgs/sparklineB.svg'
import { showToast } from '@utils/helpers'

export const Section3 = () => {
	return (
		<Div>
			<StockView />
			<Button
				//@ts-ignore
				onPress={showToast}
				alignSelf='center'
				my='lg'
				bg='secondary'
				px='xl'
				py='md'
				fontSize='sm'
			>
				See All
			</Button>
		</Div>
	)
}

const StockView = () => {
	return (
		<Div>
			{STOCK_DATA.map((stock, i) => (
				<StockItem key={i.toString()} {...stock} />
			))}
		</Div>
	)
}

const StockItem: FC<Stock> = props => {
	const gained = props.stats === 'gain'
	const color = gained ? 'secondary' : 'warning'
	return (
		<HStack px='xl' borderBottomColor='divider' borderBottomWidth={1} py='sm'>
			<VStack alignItems='flex-start' mr='lg' w={80}>
				<Heading fontSize='md'>{props.alias}</Heading>
				<SmallText fontSize='xs'>{props.name}</SmallText>
			</VStack>
			<Div flex={1}>{gained ? <GainSparkLine /> : <LoseSparkLine />}</Div>

			<VStack alignItems='flex-end'>
				<Heading fontSize='md' fontWeight='500'>
					{props.price}
				</Heading>

				<HStack>
					<Icon name={gained ? 'arrow-up' : 'arrow-down'} fontFamily='Ionicons' {...{ color }} />
					<SmallText {...{ color }}>{props.percentage}%</SmallText>
				</HStack>
			</VStack>
		</HStack>
	)
}
