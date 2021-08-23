import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { AppCustomFont as AppCustomText } from '@elements'
import colors from '../../themes/colors'

export function AppButton({
	title = '',
	width = '100%',
	onPress = () => console.log('Clicked'),
	color = colors.THREEKLE_BLUE_COLOR,
}) {
	return (
		<TouchableHighlight style={[styles.button, { backgroundColor: color, width }]} onPress={onPress}>
			<AppCustomText style={styles.text}>{title}</AppCustomText>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.THREEKLE_BLUE_COLOR,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		width: '100%',
		marginVertical: 0,
		// shadowColor: 'rgba(0, 0, 0, 0.9)',
		shadowOpacity: 0.5,
		elevation: 2,
	},
	text: {
		color: colors.WHITE_COLOR,
		fontSize: 14,
		fontWeight: 'bold',
	},
})
