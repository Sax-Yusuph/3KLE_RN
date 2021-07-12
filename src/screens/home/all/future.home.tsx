import React, { FC } from 'react'
import { FutureSummaryPage as ContentView } from '@views'
import { CustomScreen, Header } from '@elements'

const FutureSummary: FC = () => {
	return (
		<CustomScreen>
			<Header title='Uche' profileImg='uche' />
			<ContentView />
		</CustomScreen>
	)
}

export default FutureSummary
