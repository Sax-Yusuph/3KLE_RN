import * as React from 'react'
import { Div } from 'react-native-magnus'
import { StatusBarProps, StatusBar } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export const CustomStatusBar = ({ backgroundColor, ...props }: StatusBarProps) => {
	useFocusEffect(() => {
		StatusBar.setBarStyle('dark-content')
	})
	return (
		<Div bg={backgroundColor as string}>
			<StatusBar barStyle="dark-content" backgroundColor="rgba(255,255,255,0.5)" {...props} />
		</Div>
	)
}
