//i defined custom layout styles here...
//you might want to take a look
// i used the primitives from magnus ui.. to avoid repititve styles

import React, { FC } from 'react'
import { DivProps, Div } from 'react-native-magnus'

//Hstack --> horizontally place items with align center
export const HStack: FC<DivProps> = ({ children, ...props }) => {
	return (
		<Div flexDir="row" alignItems="center" {...props}>
			{children}
		</Div>
	)
}

//Vstack --> vertically place items with align center
export const VStack: FC<DivProps> = ({ children, ...props }) => {
	return (
		<Div alignItems="center" {...props}>
			{children}
		</Div>
	)
}

// Center --> a  container with centered contents
export const Center: FC<DivProps> = ({ children, ...props }) => {
	return (
		<Div alignItems="center" justifyContent="center" {...props}>
			{children}
		</Div>
	)
}

export const Divider: FC<DivProps> = (props) => <Div h={2} w="100%" bg="divider" {...props} />
