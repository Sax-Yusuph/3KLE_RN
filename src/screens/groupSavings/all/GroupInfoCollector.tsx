import { CustomScreen, Padding, AppButton, Spacer, MediumText, Header } from '@elements'
import { showToast } from '@helpers/show-toast'
import { __SCREENS } from '@navigation/types/routes'
import { useGroupSavingsNavigator } from '@navigation/types/use-navigation'
import { __COLORS } from '@utils/colors'
import AppInput, { AppInputProps } from 'components/elements/comps/AppInput'
import WithInputViewWrapper from 'components/elements/comps/WithInputViewWrapper'

import React, { FC, useRef, useState } from 'react'
import { TextInput } from 'react-native'
import { Div } from 'react-native-magnus'

const GroupInfoCollector = () => {
	const navigation = useGroupSavingsNavigator<__SCREENS.GROUP_SAVINGS_COLLECT_INFO_1>()

	const [groupInfo, setInfo] = useState({
		goalAmount: 0,
		amountToSave: 0,
		NumberOfMembers: '',
		reasonForSaving: '',
	})

	const setGroupInfo = (info: keyof typeof groupInfo, value: string) => {
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

		navigation.navigate(__SCREENS.GROUP_SAVINGS_COLLECT_INFO_2)
	}

	// GOAL AMOUNT REF
	const goalAmountRef = useRef<TextInput | null>(null)

	// AMOUNT TO SAVE REF
	const amountToSaveRef = useRef<TextInput | null>(null)

	// NUMBER OF MEMBERS
	const numberOfMembersRef = useRef<TextInput | null>(null)

	// REASON FOR SAVING
	const reasonRef = useRef<TextInput | null>(null)

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
						onSubmitEditing={() => {
							numberOfMembersRef.current?.focus()
						}}
					/>

					<Spacer />

					{/* NUMBER OF MEMBERS */}
					<InputWithLabel
						setRef={(ref) => {
							numberOfMembersRef.current = ref
						}}
						label="Number of Members"
						placeholder="Enter here"
						handleChange={(val: string) => setGroupInfo('reasonForSaving', val)}
						value={groupInfo.reasonForSaving}
						onSubmitEditing={() => {
							reasonRef.current?.focus()
						}}
					/>

					<Spacer />

					{/* WHAT ARE YOU SAVING FOR */}
					<InputWithLabel
						setRef={(ref) => {
							reasonRef.current = ref
						}}
						label="What are you saving for?"
						placeholder="Investment"
						handleChange={(val: string) => setGroupInfo('NumberOfMembers', val)}
						value={groupInfo.NumberOfMembers}
						isFinal
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
