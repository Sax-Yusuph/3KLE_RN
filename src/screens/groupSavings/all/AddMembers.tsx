import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import {
	CustomScreen,
	PickerWithLabel,
	Header,
	Padding,
	Spacer,
	Heading,
	Paragraph,
	AppButton,
} from '@elements'
import { Portal } from 'react-native-portalize'
import { openSelectMembersModal, SelectMembersModal } from 'components/modals/select-members'
import { __COLORS } from '@utils/colors'

export const AddMembers = ({ onSubmit }: any) => {
	const [members, setMembers] = useState<string[]>([])

	const onSelect = (val: string) => {
		if (!members.includes(val)) {
			setMembers((p) => [...p, val])
		} else {
			setMembers(members.filter((m) => m !== val))
		}
	}

	return (
		<CustomScreen>
			<Header title="" backIcon="close" />
			<ScrollView>
				<Padding>
					<Heading fontWeight="900">Add members</Heading>
					<Spacer yMulitply={0.3} />
					<Paragraph>Select contacts from your contact list or invite friends to join</Paragraph>
					<Spacer yMulitply={2} />
					<PickerWithLabel
						label="Select contacts"
						placeholder="Contacts"
						onPress={openSelectMembersModal}
						value={''}
					/>
					<Spacer />
					<AppButton
						onPress={() => onSubmit(members)}
						title="Next"
						backgroundColor={__COLORS.PRIMARY}
						color={__COLORS.WHITE}
						noShadows
					/>
				</Padding>

				<Portal>
					<SelectMembersModal onSelect={onSelect} selected={members.join(',')} />
				</Portal>
			</ScrollView>
		</CustomScreen>
	)
}
