import React from 'react'
import { SmallText } from '@elements'
import colors from 'components/themes/colors'

export function ErrorMessage(props: any) {
	if (!props.visible || !props.error) return null

	return (
		<SmallText color={colors.RED_COLOR} fontSize="md">
			{props.error}
		</SmallText>
	)
}
