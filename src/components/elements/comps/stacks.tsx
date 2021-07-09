//i defined custom layout styles here...
//you might want to take a look
// i used the primitives from magnus ui.. to avoid repititve styles

import React, { FC } from 'react'
import { DivProps, Div, Text, TextProps } from 'react-native-magnus'

//Hstack --> horizontally place items with align center
export const HStack: FC<DivProps> = props => {
	return <Div flexDir="row" alignItems="center" {...props} />
}

//Vstack --> vertically place items with align center
export const VStack: FC<DivProps> = props => {
	return <Div alignItems="center" {...props} />
}

// Center --> a  container with centered contents
export const Center: FC<DivProps> = props => {
	return <Div alignItems="center" flex={1} justifyContent="center" {...props} />
}
