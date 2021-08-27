import { Heading, HStack, Paragraph, Spacer, TouchablePress, UserAvatar } from '@elements'
import { __COLORS } from '@utils/colors'
import { DEFAULT_PADDING, DEVICE_HEIGHT } from '@utils/util'
import React, { createRef, FC } from 'react'
import { Div, Icon } from 'react-native-magnus'
import { Modalize } from 'react-native-modalize'
import HeaderComponent from './header-component'
import { BottomSheet } from './modal'

type Contact = {
	name: string
	accountNumber: string
}

const __FAKE_CONTACTS: Contact[] = [
	{
		name: 'Jessica Olaoluwa',
		accountNumber: '101-800-1447',
	},
	{
		name: 'Chinedu madi',
		accountNumber: '101-800-1447',
	},
	{
		name: 'Babatunde fashola',
		accountNumber: '101-800-1447',
	},
	{
		name: 'Erica asemota',
		accountNumber: '101-800-1447',
	},
	{
		name: 'Hauwa abdulazeez',
		accountNumber: '101-800-1447',
	},
]

export const SelectMembersRef = createRef<Modalize>()
export const openSelectMembersModal = () => SelectMembersRef?.current?.open()
export const closeSelectMembersModal = () => SelectMembersRef?.current?.close()

export const SelectMembersModal: FC<{ onSelect(r: string): void; selected: string }> = ({
	onSelect,
	selected,
}) => {
	return (
		<BottomSheet
			modalHeight={DEVICE_HEIGHT / 1.3}
			HeaderComponent={<HeaderComponent title="Select Members" />}
			ref={SelectMembersRef}
			handlePosition="inside"
		>
			{__FAKE_CONTACTS.map((contact) => (
				<Members key={contact.name} selected={selected.includes(contact.name)} {...{ contact, onSelect }} />
			))}
		</BottomSheet>
	)
}

const Members: FC<{ contact: Contact; onSelect(r: string): void; selected: boolean }> = ({
	contact,
	onSelect,
	selected,
}) => {
	const { name, accountNumber } = contact

	return (
		<>
			<TouchablePress
				onPress={() => {
					onSelect(contact.name)
				}}
				rounded="lg"
				bg={selected ? __COLORS.SECONDARY : __COLORS.WHITE}
				py={DEFAULT_PADDING * 0.5}
				px={DEFAULT_PADDING * 0.5}
			>
				<HStack justifyContent="space-between">
					<UserAvatar />
					<Spacer xMultiply={0.5} />
					<Div flex={1}>
						<Heading color={selected ? __COLORS.WHITE : __COLORS.BUTTON_BRAND}>{name}</Heading>
						<Spacer yMulitply={0.5} />
						<Paragraph color={selected ? __COLORS.WHITE : __COLORS.BUTTON_BRAND}>{accountNumber}</Paragraph>
					</Div>
					<Icon
						name={selected ? 'check-circle' : 'check-circle-outline'}
						fontFamily="MaterialCommunityIcons"
						fontSize={24}
						color={__COLORS.SECONDARY}
					/>
				</HStack>
			</TouchablePress>
			<Spacer yMulitply={0.4} />
		</>
	)
}
