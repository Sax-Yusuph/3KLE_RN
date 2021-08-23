import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { thousands } from '../helpers/thousand'
import { Regular } from '../ui/core/Typography'
import { SPACING } from '../ui/theme/layout'

export const HighLowContainer = styled(View)`
	height: 30px;
	width: 300px;
	align-items: center;
	margin-left: -150px;
	justify-content: center;
`

export const HighLowTextArea: React.FC<{
	val: number
	left: number
	maxWidth: number
}> = ({ val, left, maxWidth }) => {
	return (
		<HighLowContainer
			style={{
				left: Math.min(maxWidth - SPACING * 3, Math.max(left, SPACING * 4)),
			}}
		>
			<Regular size="s" style={{ color: 'white' }}>
				${thousands(Number(val.toFixed(2)), "'")}
			</Regular>
		</HighLowContainer>
	)
}
