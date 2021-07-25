import {
	Center,
	CustomScreen,
	Divider,
	Heading,
	HelpIcon,
	HStack,
	MotionBox,
	Paragraph,
	ThreeColumnHeader,
	VirtualizedView,
	VStack,
} from '@elements'
import React, { FC } from 'react'
import { Button, Div, Text } from 'react-native-magnus'
import DollarSign from '@assets/svgs/roundups/dollar_sign.svg'
//@ts-ignore
import ProgressBar from 'react-native-animated-progress'
import { COLORS } from '@utils/colors'
import { FlatList } from 'react-native'

const RoundupBalance = () => {
	return (
		<CustomScreen>
			<ThreeColumnHeader RightIconComponent={<HelpIcon />} backIcon="menu-outline" iconFamily="Ionicons" />
			<VirtualizedView>
				<Div px="xl" mb={50}>
					<Header title="Round-Up Balance" subtitle="Total amount available from Round-ups" />
					<Banner title="Invested from round-ups" balance="$1500" />
					<Status remainder="$2.12" goal="$5.00" />
					<Button my="xl" alignSelf="flex-end">
						Invest Now
					</Button>
				</Div>
				<AllRoundUps title="All Round-Ups" />
			</VirtualizedView>
		</CustomScreen>
	)
}

export default RoundupBalance

const Header: FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
	<>
		<Heading mt="lg" fontSize="3xl">
			{title}
		</Heading>
		<Paragraph fontSize="md" color="textDark">
			{subtitle}
		</Paragraph>
	</>
)

const Banner: FC<{ title: string; balance: string }> = ({ title, balance }) => (
	<Div bg="brandDark" p="xl" rounded="lg" my="xl">
		<MotionBox>
			<Heading color="white" fontWeight="500">
				{title}
			</Heading>
			<Heading color="white" mt="lg" fontSize="6xl">
				{balance}
			</Heading>
		</MotionBox>
		<Div position="absolute" bottom={10} right={10}>
			<DollarSign />
		</Div>
	</Div>
)

const Status: FC<{ remainder: string; goal: string }> = ({ remainder, goal }) => (
	<Div>
		<Heading fontSize="md" mb="md">
			{remainder} remaining to reach <Text color="secondary">{goal}</Text>
		</Heading>
		<ProgressBar progress={60} height={10} backgroundColor={COLORS.secondary} trackColor="#C7C7C7" />
	</Div>
)

const MOCK_DATA = [
	{ expense: 'Uber ride', value: '-$23.80', roundUp: '$1.20' },
	{ expense: 'Dominos ', value: '-$3.70', roundUp: '$0.30' },
	{ expense: 'Burger', value: '-$14.00', roundUp: '$1.00' },
]

const AllRoundUps: FC<{ title: string }> = ({ title }) => {
	return (
		<Div>
			<Center p="lg" bg="screenBg">
				<Heading>{title}</Heading>
			</Center>
			<Divider />
			<FlatList
				data={MOCK_DATA}
				keyExtractor={(_, i) => i.toString()}
				ItemSeparatorComponent={Divider}
				renderItem={({ item }) => (
					<HStack justifyContent="space-between" py="lg" px="xl">
						<VStack alignItems="flex-start">
							<Heading fontSize="lg" fontWeight="500">
								Expense: {item.expense}
							</Heading>
							<Heading color="warning">{item.value}</Heading>
						</VStack>
						<VStack alignItems="flex-start">
							<Heading fontSize="lg" fontWeight="500">
								Round-up Saved
							</Heading>
							<Heading color="secondary">{item.roundUp}</Heading>
						</VStack>
					</HStack>
				)}
			/>
		</Div>
	)
}
