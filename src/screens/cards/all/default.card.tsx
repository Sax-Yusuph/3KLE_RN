import { CustomScreen, Header } from '@elements'
import { DefaultCardPage } from '@views'
import React from 'react'

const DefaultCardScreen = () => {
	return (
		<CustomScreen>
			<Header title="" profileImg="" backIcon="arrowleft" />

			<DefaultCardPage />
		</CustomScreen>
	)
}

export default DefaultCardScreen
