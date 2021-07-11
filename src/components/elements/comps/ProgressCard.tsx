import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppCustomFont as AppCustomText } from './AppText'
import colors from '../../themes/colors'

export function ProgressCard({ text = '', isCompleted = true }) {
	return (
		<View style={styles.cardContainer}>
			<View style={{ flexDirection: 'row', padding: 10 }}>
				<AppCustomText style={{ color: colors.DEEP_BLUE_COLOR, fontSize: 13 }}>
					{text}
					{isCompleted ? (
						<AppCustomText style={{ color: colors.RED_COLOR, fontSize: 17 }}>*</AppCustomText>
					) : (
						''
					)}
				</AppCustomText>
				<View style={{ flex: 1 }}></View>
				{isCompleted ? (
					<View style={styles.isHighlighted}></View>
				) : (
					<View style={styles.isNotHighlighted}></View>
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		shadowColor: colors.BLACK_COLOR,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4.84,
		elevation: 5,
		width: '100%',
		backgroundColor: colors.WHITE_COLOR,
		borderRadius: 20,
		height: 60,
		marginTop: 12,
		padding: 5,
	},
	isHighlighted: {
		height: 34,
		width: 34,
		borderRadius: 17,
		backgroundColor: '#1BF316',
		borderColor: '#ECEBEB',
		borderWidth: 3,
	},
	isNotHighlighted: {
		height: 34,
		width: 34,
		borderRadius: 17,
		backgroundColor: '#ECEBEB',
	},
})
