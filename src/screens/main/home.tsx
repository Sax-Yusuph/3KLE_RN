import React, { FC } from 'react'
import { Home as ContentView } from '@views'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text, Div } from 'react-native-magnus'
interface Props {
	navigation: StackNavigationProp<any, any>
}

const HomeScreen: FC<Props> = ({ navigation }) => {
	return (
		<Div justifyContent='center'>
			<Text>Hello World</Text>
		</Div>
	)
	// return <ContentView />
}

export default HomeScreen
