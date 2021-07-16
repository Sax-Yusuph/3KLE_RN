import { CustomScreen, Header } from '@elements'
import { DefaultCardPage } from '@views'
import React from 'react'
import { Div } from 'react-native-magnus'

const DefaultCardScreen = () => {
	return (
		<CustomScreen>
			<Header title='' profileImg='' backIcon='arrowleft' />

			<DefaultCardPage />
		</CustomScreen>
	)
}

export default DefaultCardScreen
