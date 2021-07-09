import React from 'react'
import { useFormikContext } from 'formik'
import { StyleSheet, TouchableHighlight } from 'react-native'

import colors from '../../themes/colors'
import { AppCustomFont } from 'components/elements'

export function FormButton({
	title = '',
	width = '100%',
	color = colors.THREEKLE_BLUE_COLOR,
}) {
	const { handleSubmit } = useFormikContext<any>()

	return (
		<TouchableHighlight
			style={[styles.button, { backgroundColor: color, width }]}
			onPress={e => handleSubmit(e as any)}
		>
			<AppCustomFont style={styles.text}>{title}</AppCustomFont>
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
