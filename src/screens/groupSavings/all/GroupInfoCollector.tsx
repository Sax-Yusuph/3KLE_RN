import { CustomScreen, Padding, AppButton, Spacer, MediumText, Header, MotionBox, Picker } from '@elements'
import { showToast } from '@helpers/show-toast'
import { __NAVIGATORS, __SCREENS } from '@navigation/types/routes'
import { useGroupSavingsNavigator } from '@navigation/types/use-navigation'
import { __COLORS } from '@utils/colors'
import AppInput, { AppInputProps } from 'components/elements/comps/AppInput'
import WithInputViewWrapper from 'components/elements/comps/WithInputViewWrapper'
import NumberOfMembersModal, { openNumOfMembersModal } from 'components/modals/num-of-members'
import WhatareYouSavingFor, {
	openReasonsForSavingModal,
	TReason,
} from 'components/modals/what-are-you-saving-for'
import React, { FC, useRef, useState } from 'react'
import { TextInput } from 'react-native'
import { Div } from 'react-native-magnus'
import { Portal } from 'react-native-portalize'
import { AddMembers } from './AddMembers'
import { SavingsPlan } from './CreateGroup'
import InfoCollector2 from './InfoCollector2'
import TermsAndConditions from './TermsAndConditions'

const GroupInfoCollector = () => {
	const navigation = useGroupSavingsNavigator<__SCREENS.GROUP_SAVINGS_COLLECT_INFO_1>()
	const [currentIndex, setCurrentIndex] = useState(0)
	const [groupInfo, setInfo] = useState({
		goalAmount: 0,
		amountToSave: 0,
		NumberOfMembers: 2,
		reasonForSaving: '',
	})

	const setGroupInfo = (info: keyof typeof groupInfo, value: string | number) => {
		setInfo((p) => ({
			...p,
			[info]: value,
		}))
	}

	const onSubmit = () => {
		for (const item in groupInfo) {
			//@ts-ignore
			if (groupInfo[item] === '') {
				return showToast('All fields must not be blank')
			}
		}

		if (currentIndex !== 3) {
			return setCurrentIndex((P) => P + 1)
		}

		const data = {
			headingText: 'Success',
			descriptionText:
				'You have successfully created a group “Young investor” with a pending status. If  you have completed group membership, you can start saving.',
			callbackRoute: __NAVIGATORS.GROUP_SAVINGS,
			callbackScreen: __SCREENS.GROUP_SAVINGS_DASHBOARD,
			callbackText: 'Dashboard',
		}
		// @ts-ignore
		navigation.navigate(__SCREENS.SUCCESS, data)
	}

	const selectReasonForInvestment = () => {
		openReasonsForSavingModal()
	}

	const onSelectReason = (reason: TReason) => {
		setGroupInfo('reasonForSaving', reason.title)
	}

	const onSelectMembers = (member: SavingsPlan) => {
		setGroupInfo('NumberOfMembers', member.members)
	}

	// GOAL AMOUNT REF
	const goalAmountRef = useRef<TextInput | null>(null)

	// AMOUNT TO SAVE REF
	const amountToSaveRef = useRef<TextInput | null>(null)

	if (currentIndex === 3) {
		return (
			<MotionBox style={{ flex: 1 }} animation="fadeInRight">
				<TermsAndConditions onSubmit={onSubmit} />
			</MotionBox>
		)
	}

	if (currentIndex === 2) {
		return (
			<MotionBox style={{ flex: 1 }} animation="fadeInRight">
				<AddMembers onSubmit={onSubmit} />
			</MotionBox>
		)
	}
	if (currentIndex === 1) {
		return (
			<MotionBox style={{ flex: 1 }} animation="fadeInRight">
				<InfoCollector2 onSubmit={onSubmit} />
			</MotionBox>
		)
	}

	return (
		<CustomScreen>
			<Header title="" backIcon="close" />
			<WithInputViewWrapper>
				<Padding>
					{/* GOAL AMOUNT */}
					<InputWithLabel
						setRef={(ref) => {
							goalAmountRef.current = ref
						}}
						autoFocus
						label="Goal Amount"
						placeholder="Enter the amount"
						handleChange={(val: string) => setGroupInfo('goalAmount', val)}
						value={groupInfo.goalAmount?.toString()}
						isPriceInput
						onSubmitEditing={() => {
							amountToSaveRef.current?.focus()
						}}
					/>
					<Spacer />

					{/* AMOUNT TO SAVE */}
					<InputWithLabel
						setRef={(ref) => {
							amountToSaveRef.current = ref
						}}
						label="Amount to save (Per member)"
						isPriceInput
						placeholder="Enter the amount"
						handleChange={(val: string) => setGroupInfo('amountToSave', val)}
						value={groupInfo.amountToSave?.toString()}
					/>

					<Spacer />

					{/* NUMBER OF MEMBERS */}
					<Picker
						placeholder="Select Reason"
						value={'' + groupInfo.NumberOfMembers}
						onPress={openNumOfMembersModal}
					/>

					<Spacer />

					{/* WHAT ARE YOU SAVING FOR */}
					<Picker
						placeholder="Investment"
						value={groupInfo.reasonForSaving}
						onPress={selectReasonForInvestment}
					/>

					<Spacer />
					<AppButton
						onPress={onSubmit}
						title="Next"
						backgroundColor={__COLORS.PRIMARY}
						color={__COLORS.WHITE}
						noShadows
					/>
				</Padding>
			</WithInputViewWrapper>

			<Portal>
				<WhatareYouSavingFor selected={groupInfo.reasonForSaving} onSelect={onSelectReason} />
				<NumberOfMembersModal selected={groupInfo.NumberOfMembers} onSelect={onSelectMembers} />
			</Portal>
		</CustomScreen>
	)
}

export default GroupInfoCollector

export const InputWithLabel: FC<AppInputProps & { label: string }> = ({ label, ...rest }) => {
	return (
		<Div>
			<MediumText>{label}</MediumText>
			<Spacer yMulitply={0.3} />
			<AppInput noShadows {...rest} />
		</Div>
	)
}
