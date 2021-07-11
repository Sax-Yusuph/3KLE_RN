import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-magnus'

import { AppCustomFont as AppCustomText } from '@elements'
import colors from '../../themes/colors'

export function EmptyPicker(props: any) {
	return (
		<>
			<TouchableWithoutFeedback onPress={props.onPress}>
				<View style={[styles.container, { width: props.width }]}>
					{props.selectedItem ? (
						<AppCustomText style={styles.text}>{props.selectedItem.label}</AppCustomText>
					) : (
						<AppCustomText style={styles.placeholder}>{props.placeholder}</AppCustomText>
					)}
					<Icon
						name='chevron-down'
						fontFamily='MaterialCommunityIcons'
						fontSize={22}
						color={colors.MEDIUM_COLOR}
					/>
				</View>
			</TouchableWithoutFeedback>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.WHITE_COLOR,
		borderRadius: 15,
		flexDirection: 'row',
		padding: 15,
		paddingLeft: 25,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	placeholder: {
		color: colors.MEDIUM_COLOR,
		flex: 1,
		fontSize: 16,
	},
	text: {
		flex: 1,
		color: colors.BLACK_COLOR,
	},
})
