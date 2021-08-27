import { HStack, RegularText, SemiBoldtext, Spacer, TouchablePress } from '@elements'
import { __COLORS } from '@utils/colors'
// import { __COLORS } from '@utils/colors'
import { DEFAULT_PADDING, DEVICE_HEIGHT } from '@utils/util'
import React, { createRef, FC } from 'react'
import { Icon } from 'react-native-magnus'
import { Modalize } from 'react-native-modalize'
import { SavingsPlan, __SAVINGS_CHART } from 'screens/groupSavings/all/CreateGroup'
import HeaderComponent from './header-component'
import { BottomSheet } from './modal'

export const numOfMemberRef = createRef<Modalize>()
export const openNumOfMembersModal = () => numOfMemberRef?.current?.open()
export const closeNumOfMembersModal = () => numOfMemberRef?.current?.close()

const NumberOfMembersModal: FC<{ onSelect(r: SavingsPlan): void; selected: number }> = ({
	onSelect,
	selected,
}) => {
	return (
		<BottomSheet
			modalHeight={DEVICE_HEIGHT / 1.3}
			HeaderComponent={<HeaderComponent title="Select Members" />}
			ref={numOfMemberRef}
			handlePosition="inside"
		>
			{__SAVINGS_CHART.map((plan) => (
				<Members
					key={plan.members + plan.months}
					selected={plan.members === selected}
					{...{ plan, onSelect }}
				/>
			))}
		</BottomSheet>
	)
}

export default NumberOfMembersModal

const Members: FC<{ plan: SavingsPlan; onSelect(r: SavingsPlan): void; selected: boolean }> = ({
	plan,
	onSelect,
	selected,
}) => {
	const { members } = plan

	return (
		<>
			<TouchablePress
				onPress={() => {
					onSelect(plan)
					closeNumOfMembersModal()
				}}
				rounded="lg"
				bg={selected ? __COLORS.SECONDARY : __COLORS.WHITE}
				borderColor={selected ? __COLORS.SECONDARY : __COLORS.GREY}
				borderWidth={1}
				py={DEFAULT_PADDING}
				px={DEFAULT_PADDING * 0.5}
			>
				<HStack justifyContent="space-between">
					{selected ? (
						<SemiBoldtext fontSize="2xl">{members}</SemiBoldtext>
					) : (
						<RegularText>{members}</RegularText>
					)}

					{selected && (
						<Icon
							name="check-circle"
							fontFamily="MaterialCommunityIcons"
							fontSize={24}
							color={__COLORS.WHITE}
						/>
					)}
				</HStack>
			</TouchablePress>
			<Spacer yMulitply={0.5} />
		</>
	)
}
