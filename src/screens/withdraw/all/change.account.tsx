import { CustomScreen, Header, VirtualizedView } from '@elements'
import { ChangeWithdrawalAccount as ContentView } from 'components/views/withdrawal'
import React from 'react'

const ChangeWithdrawAccount = () => {
	return (
		<CustomScreen noGutter>
			<VirtualizedView>
				<Header title="" backIcon="close" />
				<ContentView />
			</VirtualizedView>
		</CustomScreen>
	)
}

export default ChangeWithdrawAccount
