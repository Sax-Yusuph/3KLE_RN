import {
	CustomScreen,
	Heading,
	HStack,
	MediumText,
	NavHeader,
	Padding,
	Paragraph,
	SmallText,
	Spacer,
	UserAvatar,
	CreateGroupIcon,
	CloseIcon,
} from '@elements'
import { __SCREENS } from '@navigation/types/routes'
import { useGroupSavingsNavigator } from '@navigation/types/use-navigation'
import { __COLORS } from '@utils/colors'
import { DEFAULT_PADDING } from '@utils/util'
import RoundButton from 'components/elements/comps/RoundButton'
import React, { FC, useCallback } from 'react'
import { FlatList } from 'react-native'
import { Div } from 'react-native-magnus'
import { SavingsGroup, __GROUP_SAVINGS_MOCK_DATA } from './mock_data'

const Dashboard = () => {
	const navigation = useGroupSavingsNavigator()

	const createGroup = useCallback(() => {
		navigation.navigate(__SCREENS.GROUP_SAVINGS_CREATE_GROUP)
	}, [navigation])

	const goBack = useCallback(() => {
		navigation.goBack()
	}, [navigation])

	return (
		<CustomScreen>
			<NavHeader
				leftButton={{ child: CloseIcon, onclick: goBack }}
				rightButton={{ child: CreateGroupIcon, onclick: createGroup }}
			/>
			<Padding>
				<Heading fontWeight="900">My Groups</Heading>
			</Padding>
			<FlatList
				data={__GROUP_SAVINGS_MOCK_DATA}
				keyExtractor={(_, i) => i.toString()}
				ItemSeparatorComponent={() => <Spacer yMulitply={0.6} />}
				renderItem={({ item }) => <GroupSavingsCard {...item} />}
			/>
		</CustomScreen>
	)
}

export default Dashboard

const GroupSavingsCard: FC<SavingsGroup> = (groupInfo) => {
	const { title, status, deadline, description } = groupInfo
	const navigation = useGroupSavingsNavigator<__SCREENS.GROUP_SAVINGS_DASHBOARD>()

	const viewGroup = useCallback(
		() => navigation.navigate(__SCREENS.GROUP_SAVINGS_VIEW_GROUP, { groupInfo }),
		[navigation, groupInfo],
	)

	const color =
		status === 'Active' ? __COLORS.SECONDARY : status === 'Pending' ? __COLORS.GREY : __COLORS.BLACK

	return (
		<Div bg={__COLORS.Background} mx="lg" shadow="xs" rounded="lg">
			<Padding>
				<MediumText>{title.toUpperCase()}</MediumText>
				<HStack>
					<SmallText color={color} mr="sm">
						{status}:
					</SmallText>
					<SmallText>Group ends on {deadline}</SmallText>
				</HStack>
				<Spacer />

				<HStack>
					<UserAvatar stacked />
				</HStack>
				<Spacer />

				<Paragraph numberOfLines={2} maxW="75%">
					{description}
				</Paragraph>
			</Padding>
			<Div h={60} w={30} bg={__COLORS.SECONDARY} position="absolute" right={DEFAULT_PADDING} top={0} />
			<RoundButton onPress={viewGroup} />
		</Div>
	)
}
