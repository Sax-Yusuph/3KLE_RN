import { CustomScreen, Padding, AppButton, Spacer, MediumText, Header } from '@elements'
import { __COLORS } from '@utils/colors'
import AppInput, { AppInputProps } from 'components/elements/comps/AppInput'
import WithInputViewWrapper from 'components/elements/comps/WithInputViewWrapper'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Dayjs from 'dayjs'

import React, { FC, useRef, useState } from 'react'
import { TextInput } from 'react-native'
import { Div } from 'react-native-magnus'
import { Portal } from 'react-native-portalize'
import { openFrequencyModal, PaymentFrequecy } from 'components/modals/payment-frequency'
import { PickerWithLabel } from 'components/elements/comps/PickerWithLabel'

interface GroupState {
	startDate: Date
	paymentFrequency: string
	NumberOfMembers: string
	reasonForSaving: string
}

const InfoCollector2 = ({ onSubmit }: any) => {
	const [showDate, setShowDate] = useState(false)
	const [groupInfo, setInfo] = useState<GroupState>({
		startDate: new Date(),
		paymentFrequency: '',
		NumberOfMembers: '',
		reasonForSaving: '',
	})

	const setGroupInfo = (info: keyof typeof groupInfo, value: string | Date) => {
		setInfo((p) => ({
			...p,
			[info]: value,
		}))
	}

	// NUMBER OF MEMBERS
	const numberOfMembersRef = useRef<TextInput | null>(null)

	// REASON FOR SAVING
	const reasonRef = useRef<TextInput | null>(null)

	return (
		<CustomScreen>
			<Header title="" backIcon="close" />
			<WithInputViewWrapper>
				<Padding>
					{/* START DATE */}

					<PickerWithLabel
						label="Start Date"
						placeholder="Start Date"
						icon="calendar"
						onPress={() => setShowDate(true)}
						value={Dayjs(groupInfo.startDate).format('DD/MM/YYYY')}
					/>

					<Spacer />

					{/* PAYMENT FREQUENCY */}

					<PickerWithLabel
						label="Payment Frequency"
						placeholder="Monthly"
						onPress={openFrequencyModal}
						value={groupInfo.paymentFrequency}
					/>

					<Spacer />

					{/* PAYMENT SOURCE */}
					<InputWithLabel
						setRef={(ref) => {
							numberOfMembersRef.current = ref
						}}
						label="Payment Source"
						placeholder="Enter here"
						handleChange={(val: string) => setGroupInfo('reasonForSaving', val)}
						value={groupInfo.reasonForSaving}
						onSubmitEditing={() => {
							reasonRef.current?.focus()
						}}
					/>

					<Spacer />

					{/* REFERRAL CODE*/}
					<InputWithLabel
						setRef={(ref) => {
							reasonRef.current = ref
						}}
						label="Referral Code"
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

			<DateTimePickerModal
				isVisible={showDate}
				mode="date"
				minimumDate={new Date()}
				onConfirm={(date) => {
					setGroupInfo('startDate', date)
					setShowDate(false)
				}}
				onCancel={() => setShowDate(false)}
			/>

			<Portal>
				<PaymentFrequecy
					onSelect={(val) => setGroupInfo('paymentFrequency', val)}
					selected={groupInfo.paymentFrequency}
				/>
			</Portal>
		</CustomScreen>
	)
}

export default InfoCollector2

export const InputWithLabel: FC<AppInputProps & { label: string }> = ({ label, ...rest }) => {
	return (
		<Div>
			<MediumText>{label}</MediumText>
			<Spacer yMulitply={0.3} />
			<AppInput noShadows {...rest} />
		</Div>
	)
}
