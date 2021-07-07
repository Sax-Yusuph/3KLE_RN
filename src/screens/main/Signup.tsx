import React, { FC } from 'react'
import { CountrySelector as ContentView } from '@views'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {
	navigation: StackNavigationProp<any, any>
}

const CountrySelector: FC<Props> = ({ navigation }) => {
	return <ContentView {...{ navigation }} />
}

export default CountrySelector
