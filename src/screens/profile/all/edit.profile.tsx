import { CustomScreen, Header } from '@elements'
import { EditProfilePage as ContentView } from '@views'
import React from 'react'

const EditProfile = () => {
	return (
		<CustomScreen>
			<Header title="Contact Information" backIcon="arrowleft" isCentered />
			<ContentView />
		</CustomScreen>
	)
}

export default EditProfile
