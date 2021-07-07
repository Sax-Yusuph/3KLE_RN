import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import colors from '../../themes/colors'

import { AppCustomFont as AppText } from '@elements'

export function PickerItem(props: any) {
	return (
		<TouchableOpacity style={styles.container} onPress={props.onPress}>
			<AppText style={styles.text}>{props.item.label}</AppText>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.WHITE_COLOR,
	},
	text: {
		padding: 5,
		color: 'rgba(0, 0, 0, 0.5)',
		fontSize: 13,
	},
})
