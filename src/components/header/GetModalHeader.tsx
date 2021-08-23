import { TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
// import { ModalHeaderTitle } from '../../modal/ModalHeaderTitle'
import { HeaderLeft } from './HeaderLeft'

export const getModalHeader = (backgroundColor: string, title: string, subtitle: string) => ({
	...TransitionPresets.ModalSlideFromBottomIOS,
	animationEnabled: true,
	gestureEnabled: true,
	headerLeft: () => <HeaderLeft modal />,
	headerTitle: () => <ModalHeaderTitle title={title} subtitle={subtitle} />,
	headerRight: () => null,
	headerStyle: {
		backgroundColor,
		shadowColor: 'transparent',
	},
	cardStyle: {
		backgroundColor: 'transparent',
	},
})

export const getModalHeaderWithGoBack = (backgroundColor: string, title: string, subtitle: string) => ({
	animationEnabled: true,
	gestureEnabled: true,
	headerLeft: () => <HeaderLeft />,
	headerTitle: () => <ModalHeaderTitle title={title} subtitle={subtitle} />,
	headerRight: () => null,
	headerStyle: {
		backgroundColor,
		shadowColor: 'transparent',
	},
	cardStyle: {
		backgroundColor: 'transparent',
	},
})

export const getNoBackHeader = (backgroundColor: string) => ({
	animationEnabled: false,
	gestureEnabled: false,
	headerLeft: () => <View />,
	headerTitle: () => <View />,
	headerRight: () => <View />,
	headerStyle: {
		backgroundColor,
		shadowColor: 'transparent',
	},
	cardStyle: {
		backgroundColor: 'transparent',
	},
})
