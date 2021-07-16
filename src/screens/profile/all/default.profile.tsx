import { Center, CustomScreen, Heading, ThreeColumnHeader } from '@elements'
import { DefaultProfilePage as ContentView } from '@views'
import React from 'react'

const DefaultProfileScreen = () => {
	return (
		<CustomScreen>
			<ThreeColumnHeader
				title="My Account"
				subtitle="Okorie Uche Emmanuel"
				profileImg=""
				backIcon="arrowleft"
			/>
			<ContentView />
		</CustomScreen>
	)
}

export default DefaultProfileScreen
