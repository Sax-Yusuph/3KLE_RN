import {
	AnimatedPress,
	Center,
	CustomImage,
	Divider,
	FadedText,
	Heading,
	HStack,
	Circle,
	Paragraph,
	VStack,
} from '@elements'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '@utils/colors'
import { showToast } from '@utils/helpers'
import React, { FC, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Button, Div, Icon, Image } from 'react-native-magnus'

const CARDS_DATA = [
	{
		bankName: 'Zenith Bank',
		acctNumber: '0182128xxx',
		acctName: 'Okorie uche',
		logo: require('@assets/png/banklogos/zenith.png'),
	},
	{
		bankName: 'Access Bank',
		acctNumber: '0182126xxx',
		acctName: 'Okorie uche',
		logo: require('@assets/png/banklogos/access.png'),
	},
	{
		bankName: 'First Bank',
		acctNumber: '018212128xxx',
		acctName: 'Okorie uche',
		logo: require('@assets/png/banklogos/access.png'),
	},
]

const ChangeWithdrawalAccount = () => {
	const [selected, setSelected] = useState(CARDS_DATA[0])
	const navigation = useNavigation()
	const handleConfirmation = () => {
		showToast('Account changed succesfully')
		navigation.goBack()
	}
	return (
		<Div px="xl">
			<Heading>Change withdrawal account</Heading>

			<DestinationBox title="Current withdrawal account:" description="33782789390 access bank" />

			<Heading mt="xl">Select withdrawal account</Heading>

			<Div bg="transparent" p="lg" rounded="lg" mt="sm" mb="xl" borderColor="divider" borderWidth={1}>
				<FlatList
					listKey="user_cards_data"
					data={CARDS_DATA}
					ItemSeparatorComponent={() => <Divider />}
					keyExtractor={(_, i) => i.toString()}
					renderItem={({ item }) => (
						<HStack m="lg">
							<Center w={40} h={40} mr="lg" rounded="md" overflow="hidden">
								<CustomImage key={item.logo} source={item.logo} style={styles.logo__image} />
							</Center>
							<VStack alignItems="flex-start" flex={1}>
								<Heading fontSize="md">
									{item.bankName} - {item.acctNumber}
								</Heading>

								<FadedText>{item.acctName}</FadedText>
							</VStack>
							<AnimatedPress onPress={() => setSelected(item)}>
								{selected.acctNumber === item.acctNumber ? (
									<Icon name="checkcircle" fontSize={30} color="brandDark" />
								) : (
									<Circle size={20} borderWidth={1} borderColor="brandDark">
										<Heading />
									</Circle>
								)}
							</AnimatedPress>
						</HStack>
					)}
				/>
			</Div>

			<Button onPress={handleConfirmation} alignSelf="center" mt={20} w={220} py={15} rounded={20}>
				Confirm
			</Button>
			<Button
				onPress={navigation.goBack}
				alignSelf="center"
				bg="transparent"
				color="brandDark"
				borderWidth={1}
				w={220}
				py={15}
				rounded={20}
				my={10}
				underlayColor="divider"
			>
				Cancel
			</Button>
		</Div>
	)
}

export default ChangeWithdrawalAccount

interface ItemProps {
	title: string
	description: string
}

const DestinationBox: FC<ItemProps> = ({ title, description }) => {
	return (
		<Div
			my="lg"
			roundedLeft="2xl"
			roundedBottomRight="2xl"
			p="lg"
			pb="2xl"
			borderColor="textDark"
			borderWidth={1}
		>
			<Paragraph color={COLORS.purple}>{title}</Paragraph>
			<Paragraph fontWeight="bold" color={COLORS.purple}>
				{description}
			</Paragraph>
			<Div position="absolute" top={10} right={20}>
				<Image source={require('@assets/png/banklogos/access.png')} w={40} h={40} />
			</Div>
		</Div>
	)
}

const styles = StyleSheet.create({
	logo__image: {
		width: '100%',
		height: '100%',
	},
})
