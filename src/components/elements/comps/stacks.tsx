//i defined custom layout styles here...
//you might want to take a look
// i used the primitives from magnus ui.. to avoid repititve styles

import React, { FC } from 'react'
import { DivProps, BoxProps, Div, Text, TextProps } from 'react-native-magnus'

//Hstack --> horizontally place items with align center
export const HStack: FC<DivProps> = props => {
	return <Div flexDir='row' alignItems='center' {...props} />
}

//Vstack --> vertically place items with align center
export const VStack: FC<BoxProps> = props => {
	return <Div alignItems='center' {...props} />
}

// Center --> a  container with centered contents
export const Center: FC<BoxProps> = props => {
	return <Div alignItems='center' flex={1} justifyContent='center' {...props} />
}

//Heading --> Modification of the TextProp to have a fontweight bold for headings..
//font sizes could be customized as need.
// the props could easily override any of the settings
export const Heading: FC<TextProps> = props => <Text fontWeight='bold' fontSize='xl' {...props} />

//heading --> Modification of the TextProp to have a fontweight bold for headings..
//font sizes could be customized as need.
// the props could easily override any of the settings

export const SmallText: FC<TextProps> = props => <Text fontSize='sm' {...props} />
