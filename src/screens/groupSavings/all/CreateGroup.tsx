import {
	BigText,
	CustomScreen,
	Header,
	HStack,
	Paragraph,
	TouchablePress,
	Padding,
	Spacer,
	MediumText,
	SmallText,
	SemiBoldtext,
	Center,
	RegularText,
	AppButton,
} from '@elements'
import { __COLORS } from '@utils/colors'
import { DEFAULT_PADDING } from '@utils/util'
import AppInput from 'components/elements/comps/AppInput'
import WithInputViewWrapper from 'components/elements/comps/WithInputViewWrapper'
import { showToast } from '@helpers/show-toast'

import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Div } from 'react-native-magnus'
import { useGroupSavingsNavigator } from '@navigation/types/use-navigation'
import { __SCREENS } from '@navigation/types/routes'

const __SAVINGS_CHART = [
	{ members: 2, months: '2, 4, 6, 8, 10, 12 months' },
	{ members: 3, months: '3, 6, 9, 12 months' },
	{ members: 4, months: '4, 8, 12 months' },
	{ members: 5, months: '6, 10 months' },
	{ members: 6, months: '6, 12 months' },
	{ members: 7, months: '7 months' },
	{ members: 8, months: '8 months' },
	{ members: 9, months: '9 months' },
	{ members: 10, months: '10 months' },
	{ members: 11, months: '11 months' },
	{ members: 12, months: '12 months' },
]

const CreateGroup = () => {
	const [groupName, setGroupName] = useState('')
	const navigation = useGroupSavingsNavigator<__SCREENS.GROUP_SAVINGS_CREATE_GROUP>()

	const handlePress = () => {
		if (!groupName) {
			return showToast('You Must have a Group Name to Continue')
		}

		if (groupName.length < 6) {
			return showToast('Group name too short')
			//allow them to generate random names.
		}

		navigation.navigate(__SCREENS.GROUP_SAVINGS_COLLECT_INFO_1)
	}

	return (
		<CustomScreen>
			<Header title="" backIcon="close" />
			<WithInputViewWrapper isFlatlist>
				<Padding>
					<BigText fontWeight="900">Create group</BigText>
					<Spacer />
					<Paragraph>
						You can create a group of up to 12 members at one time. Easily add from your contacts or invite
						friends outside 3KLE.
					</Paragraph>

					<Spacer />
					<KYCBanner onPress={() => undefined} />

					<Spacer />

					<MediumText h3>Savings Chart</MediumText>

					<Spacer yMulitply={0.5} />
					<Paragraph>
						See the chart below to select the number of members and duration per saving group.
					</Paragraph>

					<Spacer yMulitply={2} />
					<SavingsChart />

					<Spacer />
					<MediumText h3>Group Name</MediumText>

					<Spacer />
					<AppInput
						handleChange={setGroupName}
						placeholder="Give the group a unique name"
						value={groupName}
						noShadows
					/>
					<Spacer />
					<AppButton
						onPress={handlePress}
						title="Next"
						backgroundColor={__COLORS.PRIMARY}
						color={__COLORS.WHITE}
						noShadows
					/>
				</Padding>
			</WithInputViewWrapper>
		</CustomScreen>
	)
}

export default CreateGroup

export const KYCBanner = ({ onPress }: { onPress(): void }) => {
	return (
		<HStack p="xl" justifyContent="space-between" bg={__COLORS.SECONDARY} rounded="xl" shadow="xs">
			<Paragraph color={__COLORS.WHITE} flex={1}>
				For security reasons, Complete your KYC.
			</Paragraph>

			<TouchablePress
				onPress={onPress}
				px="md"
				py="md"
				borderColor={__COLORS.WHITE}
				borderWidth={1}
				rounded="xl"
			>
				<SmallText color={__COLORS.WHITE}>Continue</SmallText>
			</TouchablePress>
		</HStack>
	)
}

export const SavingsChart = () => {
	return (
		<Div>
			<HStack
				borderColor={__COLORS.GREY}
				borderWidth={1}
				justifyContent="space-between"
				bg="rgba(196, 196, 196, 0.36)"
				h={60}
			>
				<Center h="100%" w={'30%'} borderRightColor={__COLORS.GREY} borderRightWidth={1}>
					<SemiBoldtext color={__COLORS.SECONDARY}>Members</SemiBoldtext>
				</Center>
				<Center h="100%" flex={1}>
					<SemiBoldtext textAlign="center" color={__COLORS.SECONDARY}>
						Duration of Savings (Months)
					</SemiBoldtext>
				</Center>
			</HStack>

			<FlatList
				bounces={false}
				data={__SAVINGS_CHART}
				keyExtractor={(_, i) => i.toString()}
				renderItem={({ item }) => <SavingsInfo {...item} />}
			/>
		</Div>
	)
}

export const SavingsInfo = ({ members, months }: any) => {
	return (
		<Pressable>
			{({ pressed }) => (
				<HStack
					borderColor={__COLORS.GREY}
					bg={pressed ? __COLORS.LIGHTER_GREY : undefined}
					borderLeftWidth={1}
					borderBottomWidth={1}
					borderRightWidth={1}
					justifyContent="space-between"
					h={60}
				>
					<Center h="100%" w={'30%'} borderRightColor={__COLORS.GREY} borderRightWidth={1}>
						<RegularText color={__COLORS.PRIMARY}>{members}</RegularText>
					</Center>
					<Center alignItems="flex-start" h="100%" flex={1} pl={DEFAULT_PADDING * 2}>
						<RegularText textAlign="center" color={__COLORS.PRIMARY}>
							{months}
						</RegularText>
					</Center>
				</HStack>
			)}
		</Pressable>
	)
}
