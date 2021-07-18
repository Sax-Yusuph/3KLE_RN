import React, { FC } from 'react'
import { DefaultHomePage as ContentView } from '@views'
import { CustomScreen, HomeScreenHeader } from '@elements'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeRoutes, HomeScreenRoutes } from '..'

interface Props {
	navigation: StackNavigationProp<any, 'defaultHome'>
}

const DefaultHome: FC<Props> = ({ navigation }) => {
	const viewDetails = (route: HomeRoutes) => {
		navigation.navigate(HomeScreenRoutes[route])
	}

	return (
		<CustomScreen>
			<HomeScreenHeader title="Uche" profileImg="uche" />
			<ContentView {...{ viewDetails }} />
		</CustomScreen>
	)
}

export default DefaultHome
