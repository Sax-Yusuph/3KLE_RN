import React from 'react'
import { PastSummaryPage as ContentView } from '@views'
import { CustomScreen, Header } from '@elements'
const PastSummary = () => {
	return (
		<CustomScreen>
			<Header title='Home' profileImg='sax' />
			<ContentView />
		</CustomScreen>
	)
}

export default PastSummary
