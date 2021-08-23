import { DEFAULT_PADDING, makeSpacing } from '@utils/util'
import React, { FC } from 'react'
import { Div } from 'react-native-magnus'

export const Padding: FC = ({ children }) => {
	return <Div p={DEFAULT_PADDING}>{children}</Div>
}

export const Spacer = ({ yMulitply, xMultiply }: { yMulitply?: number; xMultiply?: number }) => {
	return <Div px={makeSpacing(xMultiply)} py={makeSpacing(yMulitply)} />
}
