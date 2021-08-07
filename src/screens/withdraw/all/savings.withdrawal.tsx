import { CustomScreen, Header } from '@elements'
import { SavingsWithdrawalView as ContentView } from 'components/views/withdrawal'
import React from 'react'
import { ScrollDiv } from 'react-native-magnus'

const SavingsWithdrawals = () => {
	return (
		<CustomScreen noGutter>
			<ScrollDiv>
				<Header title="" backIcon="close" />
				<ContentView />
			</ScrollDiv>
		</CustomScreen>
	)
}

export default SavingsWithdrawals
