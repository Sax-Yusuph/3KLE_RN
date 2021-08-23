import { AnimatedPress, Center, Heading, HStack, Paragraph, VStack } from '@elements'
import React, { FC, memo, useCallback } from 'react'
import { FlatList } from 'react-native'
import { Div } from 'react-native-magnus'
import Emoji from '@assets/svgs/homepage/Emoji.svg'
import { ProductListItem, PRODUCTS } from './data'
import { useNavigation } from '@react-navigation/native'

export const ProductListSection: FC<{ title: string }> = ({ title }) => {
	return (
		<Center alignItems="flex-start" p="xl" alignSelf="center">
			<Heading color="brandDark">
				{title}
				<Emoji />
			</Heading>

			<FlatList
				listKey="TopProducts"
				data={PRODUCTS}
				keyExtractor={(i) => i.title}
				renderItem={({ item }) => <ProductItem {...{ item }} />}
			/>
		</Center>
	)
}

const ProductItem: FC<{ item: ProductListItem }> = memo(({ item }) => {
	const navigation = useNavigation()

	const handlePress = useCallback(() => {
		if (item.parentRoute && item.screenRoute) {
			navigation.navigate(item.parentRoute, { screen: item.screenRoute })
		}
	}, [item.parentRoute, item.screenRoute, navigation])

	return (
		<AnimatedPress onPress={handlePress}>
			<HStack borderColor="divider" borderWidth={1} p="lg" rounded="lg" my="md">
				{item.Icon}

				<VStack alignItems="flex-start" px="lg" maxW="80%">
					<Heading fontSize="md">{item.title}</Heading>
					<Div flexDir="row" w="100%">
						<Paragraph fontSize="sm">{item.description}</Paragraph>
					</Div>
				</VStack>
			</HStack>
		</AnimatedPress>
	)
})
