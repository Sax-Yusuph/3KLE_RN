import {
	Center,
	CustomImage,
	Divider,
	FadedText,
	Heading,
	HStack,
	Paragraph,
	VirtualizedView,
	VStack,
} from '@elements'
import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Button, Div } from 'react-native-magnus'

const QUICK_ACTIONS = [
	{ label: 'Request a 3KLE card' },
	{ label: 'Cardless withdrawal' },
	{ label: 'Activate Card' },
	{ label: 'Track Card Request' },
	{ label: 'Virtual card' },
	{ label: 'Block card' },
]

const CARDS_DATA = [
	{
		bankName: 'Zenith Bank',
		acctNumber: '0182128xxx',
		acctName: 'Okorie uche',
		logo: require('@assets/png/banklogos/zenith.png'),
	},
	{
		bankName: 'Access Bank',
		acctNumber: '0182128xxx',
		acctName: 'Okorie uche',
		logo: require('@assets/png/banklogos/access.png'),
	},
	{
		bankName: 'First Bank',
		acctNumber: '0182128xxx',
		acctName: 'Okorie uche',
		logo: require('@assets/png/banklogos/access.png'),
	},
]


const AllCards = () => {
	return (
		<VirtualizedView>
			<VStack alignItems='flex-start' w='100%' px='xl'>
				<Heading fontSize='3xl'>All Cards</Heading>
				<Paragraph textAlign='left' fontSize='md' mt={-5}>
					{CARDS_DATA.length ? 'Cards added by you' : 'Add your debit/credit card'}
				</Paragraph>
			</VStack>

			<Button alignSelf='center' bg='secondary' py='md' my='xl'>
				Add card
			</Button>
			<Div m='lg' bg='screenBg' p='lg' rounded='lg' my='xl' borderColor='divider' borderWidth={1}>
				<FlatList
					listKey='user_cards_data'
					data={CARDS_DATA}
					ItemSeparatorComponent={() => <Divider />}
					keyExtractor={(_, i) => i.toString()}
					ListEmptyComponent={<EmptyCardBox />}
					renderItem={({ item }) => (
						<HStack m='lg'>
							<Center w={40} h={40} mr='lg' rounded='md' overflow='hidden'>
								<CustomImage key={item.logo} source={item.logo} style={styles.logo__image} />
							</Center>
							<VStack alignItems='flex-start'>
								<Heading fontSize='md'>
									{item.bankName} - {item.acctNumber}
								</Heading>

								<FadedText>{item.acctName}</FadedText>
							</VStack>
						</HStack>
					)}
				/>
			</Div>

			<Center mb='xl'>
				{QUICK_ACTIONS.map(item => (
					<Button
						alignSelf='center'
						my='md'
						bg='gray200'
						borderColor='gray400'
						borderWidth={1}
						color='brandDark'
						fontSize='md'
						shadow='xs'
						fontWeight='500'
					>
						{item.label}
					</Button>
				))}
			</Center>
		</VirtualizedView>
	)
}

export default AllCards

const EmptyCardBox = () => (
	<Center my='xl' h={150} bg='gray200' w='80%' rounded='lg' borderColor='gray400' borderWidth={1}>
		<Heading fontSize='sm' color='textFade'>
			Your cards will show here
		</Heading>
	</Center>
)

const styles = StyleSheet.create({
	logo__image: {
		width: '100%',
		height: '100%',
	},
})
