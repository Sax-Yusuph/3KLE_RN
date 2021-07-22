import {
	CustomScreen,
	Heading,
	VirtualizedView,
	Header,
	HStack,
	Paragraph,
	SearchInput,
	Center,
} from '@elements'
import React, { useCallback } from 'react'
import { Div } from 'react-native-magnus'
import BankIcon from '@assets/svgs/linkBank/bankIcon.svg'
import { FlatList, TouchableOpacity } from 'react-native'
import { BANK_LIST } from './bankList'
import { useNavigation } from '@react-navigation/native'
import { LinkBankStackParams } from '..'
import { StackNavigationProp } from '@react-navigation/stack'

const AvailableBanks = () => {
	const navigation = useNavigation<StackNavigationProp<LinkBankStackParams>>()

	const handleNavigation = useCallback(
		(bankName: string) => {
			navigation.navigate('agreementPolicyScreen', { bankName })
		},
		[navigation],
	)

	return (
		<CustomScreen noGutter>
			<VirtualizedView>
				<Header title="" backIcon="arrowleft" />
				<Div px="xl">
					<Heading fontSize="3xl" mb="xl">
						Link Your Bank Account
					</Heading>

					<HStack my="xl" p="lg" borderColor="divider" borderWidth={2} rounded="xl">
						<Div>
							<BankIcon />
						</Div>
						<Div flex={1} ml="lg">
							<Paragraph fontSize="md" color="textDark">
								Select the bank you will like to connect to your 3KLE account and start transacting.
							</Paragraph>
						</Div>
					</HStack>

					<SearchInput shadow="md" placeholder="Search for bank" />

					<Div>
						<FlatList
							data={BANK_LIST}
							showsVerticalScrollIndicator={false}
							keyExtractor={(_, i) => i.toString()}
							renderItem={({ item }) => (
								<TouchableOpacity onPress={() => handleNavigation(item.name)}>
									<HStack my="lg">
										<Center borderWidth={1} w={40} h={40} rounded="lg" borderColor="divider" p="sm">
											{item.image}
										</Center>
										<Paragraph ml="lg" fontSize="md">
											{item.name}
										</Paragraph>
									</HStack>
								</TouchableOpacity>
							)}
						/>
					</Div>
				</Div>
			</VirtualizedView>
		</CustomScreen>
	)
}

export default AvailableBanks
