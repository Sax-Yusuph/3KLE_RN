import { CustomScreen, Header } from '@elements'

import { ChooseWithdrawAccountView as ContentView } from 'components/views/withdrawal'
import React from 'react'
import { ScrollDiv } from 'react-native-magnus'

const ChooseWithdrawalAccount = () => {
	return (
		<CustomScreen noGutter>
			<ScrollDiv>
				<Header title="" backIcon="close" />
				<ContentView />
			</ScrollDiv>
		</CustomScreen>
	)
}

export default ChooseWithdrawalAccount
