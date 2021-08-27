import { MediumText, Picker, PickerProps, Spacer } from '@elements'
import React, { FC } from 'react'
import { Div } from 'react-native-magnus'

export const PickerWithLabel: FC<PickerProps & { label: string }> = ({ label, ...rest }) => {
	return (
		<Div>
			<MediumText>{label}</MediumText>
			<Spacer yMulitply={0.3} />
			<Picker {...rest} />
		</Div>
	)
}
