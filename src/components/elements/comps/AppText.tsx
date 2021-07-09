import React, { FC } from 'react'
import { Text, TextProps } from 'react-native-magnus'

export const AppCustomFont: FC<TextProps> = props => {
	// so here i used the Text from magnus Ui..
	//by default, it has all the props out of the box..
	// the colors we have defined in src/themes.ts can also be applied directly
	// fontsizes can be a number or prefined sizes such as xs, sm, md, lg, xl, up to 6xl
	return (
		<Text color="textLight" fontSize={14}>
			{props.children}
		</Text>
	)
}

//Heading --> Modification of the TextProp to have a fontweight bold for headings..
//font sizes could be customized as need.
// the props could easily override any of the settings
export const Heading: FC<TextProps> = props => (
	<Text fontWeight="bold" fontSize="xl" {...props} />
)

//heading --> Modification of the TextProp to have a fontweight bold for headings..
//font sizes could be customized as need.
// the props could easily override any of the settings

export const SmallText: FC<TextProps> = props => (
	<Text fontSize="sm" {...props} />
)

export const FadedText: FC<TextProps> = props => (
	<Text fontSize="sm" color="textFade" {...props} />
)

export const Paragraph: FC<TextProps> = props => (
	<Text fontSize="md" {...props} />
)
