import { HStack } from '@elements'
import React, { FC } from 'react'
import { DivProps, Text } from 'react-native-magnus'
import ChatIcon from '@assets/svgs/chat.svg'

export const ChatWithUs: FC<DivProps> = (props) => {
	return (
		<HStack justifyContent="center" {...props}>
			<Text fontSize="sm" color="textFade" mr="md">
				Chat With us
			</Text>
			<ChatIcon />
		</HStack>
	)
}
