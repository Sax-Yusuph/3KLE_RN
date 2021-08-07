import { AnimatedPress, Heading, Paragraph } from '@elements'
import { COLORS } from '@utils/colors'
import React, { FC, ReactNode } from 'react'
import { Div } from 'react-native-magnus'
import EmergencySavingsIcon from '@assets/svgs/savings/emergeny_savings.svg'
import GoalSavingsIcon from '@assets/svgs/savings/goalSavings.svg'
import SpendSmartSave from '@assets/svgs/savings/spendSmartSave.svg'
import FixedSavingsIcon from '@assets/svgs/savings/fixed_savings.svg'
import ForeignCurrencyIcon from '@assets/svgs/savings/foreignCurrency.svg'
import { useNavigation } from '@react-navigation/native'

const SavingsWithdrawalView = () => {
	const navigation = useNavigation()
	const handleNavigation = (data: { title: string; key: string }) => {
		navigation.navigate('WithdrawInfoCollector', { data })
	}

	return (
		<Div px="xl">
			<Heading>All Savings</Heading>
			<Div my={40}>
				<WithdrawalType
					title="Emergency Savings"
					description="interest rate: 0% per annum"
					color={COLORS.black}
					icon={<EmergencySavingsIcon />}
					onPress={() =>
						handleNavigation({
							title: 'Withdraw from emergency savings',
							key: 'EmergencySavingsWithdrawal',
						})
					}
				/>
				<WithdrawalType
					title="Goal Savings"
					description="Have you reached your goal? Congrats!"
					color={COLORS.secondary}
					icon={<GoalSavingsIcon />}
					onPress={() =>
						handleNavigation({
							title: 'Withdraw from Goal Savings',
							key: 'GoalSavingsWithdrawal',
						})
					}
				/>
				<WithdrawalType
					title="Fixed Savings"
					description="interest rate: 8% per annum"
					color={COLORS.brand}
					icon={<FixedSavingsIcon />}
					onPress={() =>
						handleNavigation({
							title: 'Withdraw from Fixed Savings',
							key: 'FixedSavingsWithdrawal',
						})
					}
				/>
				<WithdrawalType
					title="Foreign Currency Savings"
					description="interest rate: 8% per annum"
					color={COLORS.purple}
					icon={<ForeignCurrencyIcon />}
					onPress={() =>
						handleNavigation({
							title: 'Withdraw from Foreign Currency Savings',
							key: 'ForeignCurrencyIconWithdrawal',
						})
					}
				/>
				<WithdrawalType
					title="SpendSmart + Save"
					description="withdraw with ease anytime"
					color={COLORS.brandDark}
					icon={<SpendSmartSave />}
					onPress={() =>
						handleNavigation({
							title: 'Withdraw from Withdraw from SpendSmart + Save',
							key: 'SpendSmartSaveWithdrawal',
						})
					}
				/>
			</Div>
			<Div alignSelf="center" mb="xl">
				<AnimatedPress
					onPress={navigation.goBack}
					borderColor="brandDark"
					px={80}
					py={20}
					rounded={20}
					borderWidth={1}
				>
					<Paragraph>Cancel</Paragraph>
				</AnimatedPress>
			</Div>
		</Div>
	)
}

export default SavingsWithdrawalView

interface ItemProps {
	title: string
	description: string
	color: string
	icon: ReactNode
	onPress(): void
}

const WithdrawalType: FC<ItemProps> = ({ title, description, color, icon, onPress }) => {
	return (
		<AnimatedPress {...{ onPress }}>
			<Div
				my="lg"
				roundedLeft="2xl"
				roundedBottomRight="2xl"
				p="lg"
				pb="2xl"
				borderColor={color}
				borderWidth={1}
			>
				<Heading>{title}</Heading>
				<Paragraph>{description}</Paragraph>
				<Div position="absolute" right={20} top={20}>
					{icon}
				</Div>
			</Div>
		</AnimatedPress>
	)
}
