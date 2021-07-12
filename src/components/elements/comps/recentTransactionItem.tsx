import React, { FC } from 'react'
import SpikeIcon from '@assets/svgs/spike.svg'
import CardIcon from '@assets/svgs/card.svg'
import { HStack, Heading, SmallText } from '@elements'
import { Div } from 'react-native-magnus'

interface RecentItemProps {
	title: string
	time: string
	amount: number
	sold?: boolean
}

export const RecentItem: FC<RecentItemProps> = ({ sold, title, time, amount }) => {
	return (
		<HStack py='lg' borderBottomColor={'divider'} borderBottomWidth={1}>
			<Div p='lg' bg='#F9FAFB' rounded='md' mr='md'>
				{sold ? <SpikeIcon /> : <CardIcon />}
			</Div>
			<Div flex={1}>
				<Heading fontSize='sm' color='brandDark' maxW='80%'>
					{title}
				</Heading>
				<SmallText color='textFade'>{time}</SmallText>
			</Div>

			<Heading color={!sold ? 'secondary' : 'warning'} fontSize='md'>
				${amount}
			</Heading>
		</HStack>
	)
}
