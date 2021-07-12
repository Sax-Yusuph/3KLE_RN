import React, { FC } from 'react'
import { PastSummaryPage as ContentView } from '@views'
import { CustomScreen, Header } from '@elements'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {
	navigation: StackNavigationProp<any, any>
}
const PastSummary: FC<Props> = ({ navigation }) => {
	return (
		<CustomScreen>
			<Header title='Home' profileImg='sax' handleBackPress={navigation.goBack} />
			<ContentView />
		</CustomScreen>
	)
}

export default PastSummary
