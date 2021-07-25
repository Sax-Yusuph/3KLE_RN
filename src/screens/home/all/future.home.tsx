import React, { FC } from 'react'
import { FutureSummaryPage as ContentView } from '@views'
import { CustomScreen, Header } from '@elements'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {
	navigation: StackNavigationProp<any, any>
}
const FutureSummary: FC<Props> = ({ navigation }) => {
	return (
		<CustomScreen>
			<Header title="Home" profileImg="uche" handleBackPress={navigation.goBack} />
			<ContentView />
		</CustomScreen>
	)
}

export default FutureSummary
