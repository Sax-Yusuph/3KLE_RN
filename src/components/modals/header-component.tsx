import { Spacer, SemiBoldtext } from '@elements'
import { __COLORS } from '@utils/colors'
import React from 'react'

const HeaderComponent = ({ title }: { title: string }) => {
	return (
		<>
			<Spacer yMulitply={2} />
			<SemiBoldtext color={__COLORS.GREY} h5>
				{title}
			</SemiBoldtext>
			<Spacer />
		</>
	)
}

export default HeaderComponent
