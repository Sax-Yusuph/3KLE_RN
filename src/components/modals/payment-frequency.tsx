import { HStack, RegularText, SemiBoldtext, Spacer, TouchablePress } from '@elements'
import { __COLORS } from '@utils/colors'
// import { __COLORS } from '@utils/colors'
import { DEFAULT_PADDING, DEVICE_HEIGHT } from '@utils/util'
import React, { createRef, FC } from 'react'
import { Icon } from 'react-native-magnus'
import { Modalize } from 'react-native-modalize'
import HeaderComponent from './header-component'
import { BottomSheet } from './modal'

export const frequecyModalRef = createRef<Modalize>()
export const openFrequencyModal = () => frequecyModalRef?.current?.open()
export const closeFrequencyModal = () => frequecyModalRef?.current?.close()

const __FREQUENCY = [{ frequency: 'Weekly' }, { frequency: 'Monthly' }, { frequency: 'Yearly' }]

export const PaymentFrequecy: FC<{ onSelect(r: string): void; selected: string }> = ({
	onSelect,
	selected,
}) => {
	return (
		<BottomSheet
			modalHeight={DEVICE_HEIGHT / 1.3}
			HeaderComponent={<HeaderComponent title="Select Members" />}
			ref={frequecyModalRef}
			handlePosition="inside"
		>
			{__FREQUENCY.map((plan) => (
				<FrequencyItem key={plan.frequency} selected={plan.frequency === selected} {...{ plan, onSelect }} />
			))}
		</BottomSheet>
	)
}

const FrequencyItem: FC<{
	plan: { frequency: string }
	onSelect(r: string): void
	selected: boolean
}> = ({ plan, onSelect, selected }) => {
	const { frequency } = plan

	return (
		<>
			<TouchablePress
				onPress={() => {
					onSelect(frequency)
					closeFrequencyModal()
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
						<SemiBoldtext fontSize="2xl">{frequency}</SemiBoldtext>
					) : (
						<RegularText>{frequency}</RegularText>
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
