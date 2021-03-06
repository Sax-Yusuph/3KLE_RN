import React, { FC, useState } from 'react'
import {
	VStack,
	VirtualizedView,
	Heading,
	HStack,
	FadedText,
	IconButton,
	ChatWithUs,
	CustomSwitch,
} from '@elements'

import { FlatList, StyleSheet } from 'react-native'
import { Div, Icon } from 'react-native-magnus'
import { showToast } from '@utils/helpers'
import { useNavigation } from '@react-navigation/native'
import routes from '@navigation/navigators/routes'

type DetailType = {
	title: string
	value: string | number
	currency?: string
}

const SHORT_DETAILS: DetailType[] = [
	{ title: '3KLE Account number', value: '23445261566' },
	{ title: 'Referral Earnings', value: 7000, currency: '₦' },
	{ title: '3KLE I.D', value: 'uche.okorie1#' },
	{ title: '', value: '' },
]

interface Props {}

const DefaultProfilePage: FC<Props> = () => {
	const [enableFingerprint, setEnableFingerprint] = useState(false)
	const [displayDashboardBalances, setDashbaordBalances] = useState(false)
	const navigation = useNavigation()

	const gotToEditProfile = () => {
		navigation.navigate(routes.MY_ACCOUNT.EDIT_PROFILE)
	}

	const goToAccountSettings = () => {
		navigation.navigate(routes.MY_ACCOUNT.SETTINS)
	}

	const goToBVNSettings = () => {
		navigation.navigate(routes.MY_ACCOUNT.BVN_VALIDATION)
	}

	return (
		<Div>
			<VirtualizedView>
				<Option title="Enable Fingerprint" active={enableFingerprint} onToggle={setEnableFingerprint} />
				<Option
					title="Display dashboard balances"
					active={displayDashboardBalances}
					onToggle={setDashbaordBalances}
				/>
				<FlatList
					style={styles.flatlist}
					listKey="Short details"
					key="Short detail"
					numColumns={2}
					data={SHORT_DETAILS}
					keyExtractor={(_, i) => i.toString()}
					renderItem={({ item }) => <DetailItem {...item} />}
				/>
				<Div my="xl">
					<Action title="Contact Information" action={gotToEditProfile} />
					<Action title="Account Settings" action={goToAccountSettings} />
					<Action title="KYC Update" action={goToBVNSettings} />
					<Action title="Refer & Earn N1000" action={showToast} />
					<Action title="Contact Us" action={showToast} />
					<Action title="Log Out" titleColor="red600" action={showToast} />

					<ChatWithUs alignSelf="flex-end" m="xl" />
				</Div>
				<Div h={80} />
			</VirtualizedView>
		</Div>
	)
}

export default DefaultProfilePage

interface OptionProps {
	title: string
	active: boolean
	onToggle: (val: boolean) => void
}

const Option: FC<OptionProps> = ({ title, active, onToggle }) => {
	return (
		<HStack px="lg" py="lg" w="100%" justifyContent="space-between">
			<Heading fontSize="lg" fontWeight="500">
				{title}
			</Heading>

			<CustomSwitch {...{ active, onToggle }} />
		</HStack>
	)
}

const DetailItem: FC<DetailType> = ({ title, value }) => {
	const showBorder = title ? true : false
	return (
		<VStack
			flex={1}
			borderColor={showBorder ? 'gray400' : undefined}
			rounded="xl"
			borderWidth={showBorder ? 1 : undefined}
			m="lg"
			p="lg"
		>
			<FadedText>{title}</FadedText>
			<Heading>{value}</Heading>
		</VStack>
	)
}

const Action: FC<{ title: string; action(): void; titleColor?: string }> = ({
	title,
	action,
	titleColor,
}) => {
	return (
		<HStack justifyContent="space-between" p="lg" borderColor="brandDark" borderWidth={1} rounded="xl" m="lg">
			<Heading color={titleColor ?? 'brandDark'} fontSize="md" fontWeight="500">
				{title}
			</Heading>
			<IconButton rounded="circle" onPress={action}>
				<Icon name="right" color={titleColor ?? 'brandDark'} fontSize="xl" />
			</IconButton>
		</HStack>
	)
}

const styles = StyleSheet.create({
	flatlist: { justifyContent: 'center', marginVertical: 10 },
})
