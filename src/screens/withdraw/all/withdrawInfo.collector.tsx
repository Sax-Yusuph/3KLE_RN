import { CustomScreen, Header } from '@elements'
import { WithdrawInfoCollectorView as ContentView } from 'components/views/withdrawal'
import React from 'react'
import { ScrollDiv } from 'react-native-magnus'

const WithdrawalInfoCollector = () => {
	return (
		<CustomScreen noGutter>
			<ScrollDiv>
				<Header title="" backIcon="close" />
				<ContentView />
			</ScrollDiv>
		</CustomScreen>
	)
}

export default WithdrawalInfoCollector
