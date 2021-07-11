import { Heading, SmallText, HStack } from '@elements'
import React, { FC } from 'react'
import { Div } from 'react-native-magnus'
import { RECENT_TRANSACTIONS } from './data'
import SpikeIcon from '@assets/svgs/spike.svg'
import CardIcon from '@assets/svgs/card.svg'

export const Section2 = () => {
	return (
		<Div m='xl' mx='lg' pointerEvents='none'>
			<Heading>Recent transactions</Heading>

			<Div my='lg'>
				<SmallText>Today</SmallText>
				<Div bg='screenBg' px='lg' py='lg' rounded='xl'>
					{RECENT_TRANSACTIONS.map((item, i) => (
						<RecentItem key={i.toString()} index={i} {...item} />
					))}
				</Div>
			</Div>
		</Div>
	)
}
interface RecentItemProps {
	title: string
	time: string
	amount: number
	sold?: boolean
	index: number
}

const RecentItem: FC<RecentItemProps> = ({ sold, title, time, amount, index }) => {
	const isFirstItem = index === 0
	return (
		<HStack
			py='lg'
			borderBottomColor={isFirstItem ? 'divider' : undefined}
			borderBottomWidth={isFirstItem ? 1 : undefined}
		>
			<Div p='lg' bg='#F9FAFB' rounded='md' mr='md'>
				{sold ? <SpikeIcon /> : <CardIcon />}
			</Div>
			<Div flex={1}>
				<Heading fontSize='sm' color='brandDark'>
					{title}
				</Heading>
				<SmallText color='textFade'>{time}</SmallText>
			</Div>

			<Heading color={amount > 300 ? 'secondary' : 'warning'} fontSize='md'>
				${amount}
			</Heading>
		</HStack>
	)
}
