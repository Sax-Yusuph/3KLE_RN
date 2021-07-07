import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { AppCustomFont as AppCustomText } from '@elements'
import colors from '../../themes/colors'

export function TransparentButton({
	title = '',
	fontSize = 13,
	marginTop = 0,
	marginBottom = 0,
	onPress = () => console.log('Clicked'),
	color = colors.WHITE_COLOR,
}) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<AppCustomText style={[styles.text, , { color, fontSize, marginTop, marginBottom }]}>
				{title}
			</AppCustomText>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'flex-end',
		borderRadius: 0,
		borderColor: 'transparent',
		backgroundColor: 'rgba(0, 0, 0, 0)',
	},
	text: {
		fontSize: 13,
		fontWeight: 'bold',
	},
})
