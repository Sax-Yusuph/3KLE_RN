import { AnimatedPress, Heading, HStack } from '@elements'
import React, { FC, ReactNode } from 'react'
import { Div } from 'react-native-magnus'
import PeerIcon from '@assets/svgs/homepage/peer.svg'
import SavingsIcon from '@assets/svgs/savings/savings.svg'
import InvestmentIcon from '@assets/svgs/investment/investment.svg'
import { COLORS } from '@utils/colors'
import { useNavigation } from '@react-navigation/native'
const ChooseWithdrawAccountView = () => {
	const navigation = useNavigation()
	const handlePress = (route: string) => {
		navigation.navigate(route)
	}
	return (
		<Div flex={1} px={20}>
			<Heading>Choose Withdrawal Account</Heading>
			<Div mt={20}>
				<CustomButton
					onPress={() => handlePress('savingsWithdrawal')}
					name="Savings"
					icon={<SavingsIcon />}
				/>
				<CustomButton
					onPress={() => handlePress('investmentWithdrawals')}
					name="Investments"
					icon={<InvestmentIcon />}
				/>
				<CustomButton
					onPress={() => handlePress('PeerWithdrawals')}
					name="Peer to Peer Loans"
					icon={<PeerIcon color={COLORS.purple} />}
				/>
			</Div>
		</Div>
	)
}

export default ChooseWithdrawAccountView

interface CustomButtonProps {
	name: string
	icon: ReactNode
	onPress(): void
}
export const CustomButton: FC<CustomButtonProps> = ({ name, icon, onPress }) => {
	return (
		<AnimatedPress {...{ onPress }}>
			<HStack
				my="md"
				p="xl"
				bg="card"
				borderColor="brandDark"
				borderWidth={1}
				roundedTopRight={20}
				roundedBottomLeft={20}
				justifyContent="space-between"
			>
				<Heading fontSize="lg" fontWeight="500">
					{name}
				</Heading>
				{icon}
			</HStack>
		</AnimatedPress>
	)
}
