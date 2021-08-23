import React, { FC } from 'react'
import { OnBoarding as ContentView } from '@views'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {
	navigation: StackNavigationProp<any, any>
}
const OnboardScreen: FC<Props> = () => {
	return <ContentView />
}

export default OnboardScreen
