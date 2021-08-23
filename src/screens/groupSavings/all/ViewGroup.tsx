import {
	Center,
	Circle,
	CustomScreen,
	Divider,
	Header,
	Heading,
	HStack,
	Padding,
	Paragraph,
	RegularText,
	SmallText,
	Spacer,
	TouchablePress,
	VirtualizedView,
} from '@elements'
import { __SCREENS } from '@navigation/types/routes'
import { useGroupSavingsNavigator, useGroupSavingsRoute } from '@navigation/types/use-navigation'
import { __COLORS } from '@utils/colors'
import { DEFAULT_AVATAR } from '@utils/constants'
import { DEFAULT_PADDING } from '@utils/util'
import RoundButton from 'components/elements/comps/RoundButton'
import UserAvatar from 'components/elements/comps/UserAvatar'
import * as Progress from 'react-native-progress'
import React, { FC, useCallback } from 'react'
import { Div, Icon } from 'react-native-magnus'
import { __GROUP_SAVINGS_SCREENS } from '@navigation/types/navigator-types'

const ViewSavingsGroup = () => {
	const route = useGroupSavingsRoute<__SCREENS.GROUP_SAVINGS_VIEW_GROUP>()
	const navigation = useGroupSavingsNavigator<__SCREENS.GROUP_SAVINGS_VIEW_GROUP>()
	const { groupInfo } = route.params

	const navigateToScreen = useCallback(
		(screenName: keyof __GROUP_SAVINGS_SCREENS) => {
			navigation.navigate(screenName)
		},
		[navigation],
	)

	const color =
		groupInfo.status === 'Active'
			? __COLORS.SECONDARY
			: groupInfo.status === 'Pending'
			? __COLORS.GREY
			: __COLORS.BLACK

	return (
		<CustomScreen>
			<Header title="" backIcon="close" />
			<VirtualizedView>
				<Center>
					<UserAvatar size={80} />
					<Heading fontWeight="900">{groupInfo.title}</Heading>
					<Spacer yMulitply={0.3} />
					<Paragraph textAlign="center">{groupInfo.description}</Paragraph>
					<Padding>
						<UserAvatar stacked images={Array(6).fill(DEFAULT_AVATAR)} />
					</Padding>

					<Div position="absolute" bottom={DEFAULT_PADDING * 1.6} right={DEFAULT_PADDING}>
						<RoundButton onPress={() => undefined} bottom={0} right={0} />
					</Div>
				</Center>

				<Center m="lg" p={DEFAULT_PADDING} bg={__COLORS.Background} rounded="xl" shadow="sm">
					<HStack justifyContent="space-between" position="absolute" top={0} w="100%" py={DEFAULT_PADDING}>
						<HStack>
							<Circle size={10} bg={__COLORS.SECONDARY} />
							<SmallText color={color}>{groupInfo.status}</SmallText>
						</HStack>
						<SmallText>cycles: 6</SmallText>
					</HStack>

					<Center>
						<Progress.Circle
							size={200}
							thickness={10}
							color={__COLORS.SECONDARY}
							unfilledColor={__COLORS.LIGHT_GREY}
							progress={0.9}
						/>
						<Center position="absolute">
							<Heading fontSize="4xl" color={__COLORS.SECONDARY} fontWeight="900">
								$2000
							</Heading>
							<Heading fontWeight="800" color={__COLORS.GREY}>
								Savings Goal
							</Heading>
						</Center>
					</Center>
				</Center>

				<Div m="lg" bg={__COLORS.Background} rounded="xl" shadow="sm">
					<ListItem title="Auto Payment Date" rightText="19th July" />
					<Divider />
					<ListItem
						title="Upcoming Payments"
						rightText="View"
						onPress={() => navigateToScreen(__SCREENS.GROUP_SAVINGS_UPCOMMING_PAYMENTS)}
					/>
					<Divider />
					<ListItem
						title="Recent Payouts"
						rightText="View"
						onPress={() => navigateToScreen(__SCREENS.GROUP_SAVINGS_RECENT_PAYOUTS)}
					/>
					<Divider />
					<ListItem
						title="My Payments to this Group"
						rightText="View"
						onPress={() => navigateToScreen(__SCREENS.GROUP_SAVINGS_PAYMENT_HISTORY)}
					/>
					<Divider />
					<ListItem
						title="All Payments to this Group"
						rightText="View"
						onPress={() => navigateToScreen(__SCREENS.GROUP_SAVINGS_ALL_PAYMENTS_COLLECTED)}
					/>
					<Divider />
					<ListItem title="All Payouts Collected" rightText="View" onPress={() => undefined} />
					<Divider />
					<ListItem title="Archive Group" color={__COLORS.MESSAGE_BLUE} />
				</Div>
			</VirtualizedView>
		</CustomScreen>
	)
}

export default ViewSavingsGroup

const ListItem: FC<{ title: string; rightText?: string; onPress?(): void; color?: string }> = ({
	title,
	rightText,
	onPress,
	color,
}) => {
	return (
		<HStack p={DEFAULT_PADDING} justifyContent="space-between">
			<RegularText color={color}>{title}</RegularText>
			<TouchablePress disabled={Boolean(!onPress)} onPress={onPress}>
				<HStack>
					<RegularText color={__COLORS.GREY}>{rightText}</RegularText>

					{onPress ? <Icon name="right" fontSize="xl" color={__COLORS.GREY} /> : null}
				</HStack>
			</TouchablePress>
		</HStack>
	)
}
