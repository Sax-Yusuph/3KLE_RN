import React, { FC } from 'react'
import { Home as ContentView } from '@views'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {
	navigation: StackNavigationProp<any, any>
}

const HomeScreen: FC<Props> = ({ navigation }) => {
	return <ContentView />
}

// HomeScreen.whyDidYouRender = true
export default HomeScreen
