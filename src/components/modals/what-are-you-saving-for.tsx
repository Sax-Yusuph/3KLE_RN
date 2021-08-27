import { Heading, HStack, Paragraph, Spacer, TouchablePress } from '@elements'
import { __COLORS } from '@utils/colors'
import { DEFAULT_PADDING, DEVICE_HEIGHT } from '@utils/util'
import React, { createRef, FC } from 'react'
import { Div, Icon } from 'react-native-magnus'
import { Modalize } from 'react-native-modalize'
import HeaderComponent from './header-component'
import { BottomSheet } from './modal'
export interface TReason {
	title: string
	description: string
}

const REASONS_FOR_SAVINGS: TReason[] = [
	{
		title: 'For Investment',
		description: 'Select contacts from your contact list or invite friends to join',
	},
	{
		title: 'For Building Credit',
		description: 'Select contacts from your contact list or invite friends to join',
	},
	{
		title: 'For Emergency',
		description: 'Select contacts from your contact list or invite friends to join',
	},
	{
		title: 'For Debt Repayment',
		description: 'Select contacts from your contact list or invite friends to join',
	},
]

export const reasonsForSavingRef = createRef<Modalize>()
export const openReasonsForSavingModal = () => reasonsForSavingRef?.current?.open()
export const closeReasonsForSavingModal = () => reasonsForSavingRef?.current?.close()

const WhatareYouSavingFor: FC<{ onSelect(r: TReason): void; selected: string }> = ({
	onSelect,
	selected,
}) => {
	return (
		<BottomSheet
			modalHeight={DEVICE_HEIGHT / 1.3}
			HeaderComponent={<HeaderComponent title="What are you saving for?" />}
			ref={reasonsForSavingRef}
			handlePosition="inside"
		>
			{REASONS_FOR_SAVINGS.map((reason, index) => (
				<Reason key={index} selected={selected === reason.title} {...{ reason, onSelect }} />
			))}
		</BottomSheet>
	)
}

export default WhatareYouSavingFor

const Reason: FC<{ reason: TReason; onSelect(r: TReason): void; selected: boolean }> = ({
	reason,
	onSelect,
	selected,
}) => {
	const { title, description } = reason
	return (
		<>
			<TouchablePress
				onPress={() => {
					onSelect(reason)
					closeReasonsForSavingModal()
				}}
				rounded="lg"
				bg={selected ? __COLORS.SECONDARY : __COLORS.WHITE}
				py={DEFAULT_PADDING}
				px={DEFAULT_PADDING * 0.5}
			>
				<HStack>
					<Div>
						<Heading color={selected ? __COLORS.WHITE : __COLORS.BUTTON_BRAND}>{title}</Heading>
						<Spacer yMulitply={0.5} />
						<Paragraph color={selected ? __COLORS.WHITE : __COLORS.BUTTON_BRAND}>{description}</Paragraph>
					</Div>
				</HStack>

				{selected && (
					<Icon
						position="absolute"
						top={DEFAULT_PADDING * 0.5}
						right={DEFAULT_PADDING * 0.5}
						name="check-circle"
						fontFamily="MaterialCommunityIcons"
						fontSize={24}
						color={__COLORS.WHITE}
					/>
				)}
			</TouchablePress>
			<Spacer />
		</>
	)
}
