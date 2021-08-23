import { HStack } from '@elements'
import React from 'react'
import { FC } from 'react'
import UserAvatar from './UserAvatar'

interface Props {
	images?: string[]
	size?: number
}
const StackedAvatar: FC<Props> = ({ images, size }) => {
	const DEFAULT_STACK = images?.length ? images : Array(5).fill('https://i.pravatar.cc/500')
	return (
		<HStack>
			{DEFAULT_STACK.map((image, i) => (
				<UserAvatar size={size} userImage={image} key={i} disableEditing />
			))}
		</HStack>
	)
}

export default StackedAvatar
