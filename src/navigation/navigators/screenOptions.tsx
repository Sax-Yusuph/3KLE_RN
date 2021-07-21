import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack'
import { COLORS } from '@utils/colors'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

const CardOverlay: FC = () => <View style={styles.cardOverlay} />

//custom screen options
export const Options: StackNavigationOptions = {
	headerShown: false,
	cardOverlay: () => <CardOverlay />,
	...TransitionPresets.SlideFromRightIOS,
}

const styles = StyleSheet.create({
	cardOverlay: { backgroundColor: COLORS.brandDark, flex: 1 },
})
