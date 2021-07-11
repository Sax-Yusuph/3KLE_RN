import { VStack, Paragraph } from '@elements'
import React, { FC, memo } from 'react'
import { Pressable, useWindowDimensions } from 'react-native'
import { Div } from 'react-native-magnus'
import { Activity } from './data'

export const ActivityItem: FC<{ item: Activity }> = memo(({ item }) => {
	const { width } = useWindowDimensions()
	const ICON_SIZE = 70
	return (
		<VStack m='xs' w={ICON_SIZE + 10}>
			<Pressable>
				{({ pressed }) => (
					<Div
						justifyContent='center'
						alignItems='center'
						w={ICON_SIZE}
						h={ICON_SIZE}
						bg={pressed ? 'gray300' : 'gray200'}
						overflow='hidden'
						rounded='2xl'
					>
						{item.icon}
					</Div>
				)}
			</Pressable>

			<Paragraph textAlign='center' fontSize='xs' adjustsFontSizeToFit>
				{item.title}
			</Paragraph>
		</VStack>
	)
})
