import React, { FC } from 'react'
import { TextProps } from 'react-native'
import { Text } from 'react-native-magnus'

export const AppCustomFont: FC<TextProps> = props => {
	// so here i used the Text from magnus Ui..
	//by default, it has all the props out of the box..
	// the colors we have defined in src/themes.ts can also be applied directly
	// fontsizes can be a number or prefined sizes such as xs, sm, md, lg, xl, up to 6xl
	return (
		<Text color='textLight' fontSize={14}>
			{props.children}
		</Text>
	)
}
