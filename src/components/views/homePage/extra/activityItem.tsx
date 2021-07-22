import { VStack, Paragraph } from '@elements'
import { useNavigation } from '@react-navigation/native'
import React, { FC, memo } from 'react'
import { Pressable } from 'react-native'
import { Div } from 'react-native-magnus'
import { Activity } from './data'

export const ActivityItem: FC<{ item: Activity }> = memo(({ item }) => {
	const ICON_SIZE = 70

	const navigation = useNavigation()
	const handleNavigation = () => {
		if (!item.navRoute) return

		if (item.parentRoute) {
			navigation.navigate(item.parentRoute, { screen: item.navRoute })
		} else {
			navigation.navigate(item.navRoute)
		}
	}

	return (
		<VStack m="xs" w={ICON_SIZE + 10}>
			<Pressable onPress={handleNavigation}>
				{({ pressed }) => (
					<Div
						justifyContent="center"
						alignItems="center"
						w={ICON_SIZE}
						h={ICON_SIZE}
						bg={pressed ? 'gray300' : 'gray200'}
						overflow="hidden"
						rounded="2xl"
					>
						{item.icon}
					</Div>
				)}
			</Pressable>

			<Paragraph textAlign="center" fontSize="xs" adjustsFontSizeToFit>
				{item.title}
			</Paragraph>
		</VStack>
	)
})
