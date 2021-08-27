import { CustomScreen, Header, Heading, Paragraph, Spacer, AppButton } from '@elements'
import { __COLORS } from '@utils/colors'

import React from 'react'

const TermsAndConditions = ({ onSubmit }: any) => {
	return (
		<CustomScreen px="xl">
			<Header title="Terms & Conditions" backIcon="close" />
			<Spacer />
			<Heading fontWeight="900">Payment</Heading>

			<Spacer />
			<Paragraph mt="md">
				By joining this savings group, you agree to 3KLE Terms & Conditions and Privacy Policy. Your data is
				secured & will not be shared with any third party.
			</Paragraph>

			<Paragraph mt="md">
				I authorize 3KLE to withdraw funds from and deposits funds into my linked bank account in accordance
				with the savings plan parameters provided to the Company. This payment authorization is valid and will
				remain effective unless I cancel this authorization by 3KLE Finance at support@3kle.com
			</Paragraph>

			<Spacer yMulitply={10} />
			<AppButton
				onPress={onSubmit}
				title="Accept and Continue"
				backgroundColor={__COLORS.PRIMARY}
				color={__COLORS.WHITE}
				noShadows
			/>
		</CustomScreen>
	)
}

export default TermsAndConditions
