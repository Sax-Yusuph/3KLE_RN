import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types'
import { __COLORS } from '@utils/colors'
import React from 'react'


export const getOnboardedHeader = (title: string): StackHeaderOptions => ({
	headerLeft: () => <OnboardedHeaderLeft title={title} />,
	headerRight: () => <OnboardedHeaderRight />,
	headerTitle: () => null,
	headerStyle: {
		backgroundColor: __COLORS.WHITE,
		shadowColor: 'transparent',
	},
})
