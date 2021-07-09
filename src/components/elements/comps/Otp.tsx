<<<<<<< HEAD
import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { AppTextInput } from '@form'
export const Otp = () => {
	return (
		<View>
			<AppTextInput></AppTextInput>
=======
import React, { FC } from 'react'
import { View /* StyleSheet, Platform*/ } from 'react-native'

// eslint-disable-next-line import/no-cycle
import { AppTextInput } from '@form'

export const Otp: FC = () => {
	return (
		<View>
			<AppTextInput />
>>>>>>> dev/setup
		</View>
	)
}

<<<<<<< HEAD
const styles = StyleSheet.create({
	normal: {
		width: 40,
		height: 40,
		borderWidth: 0.5,
		borderColor: '#D5D5D5',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 2,
		borderRadius: 20,
	},
	focus: {
		width: 40,
		height: 40,
		borderWidth: 0.5,
		borderColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 2,
		borderRadius: 20,
		...Platform.select({
			ios: {
				shadowOffset: { width: 0, height: 1 },
				shadowRadius: 2,
				shadowOpacity: 0.5,
				shadowColor: 'red',
			},
			android: {
				elevation: 4,
			},
		}),
	},
	blur: {
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 2,
	},
})
=======
// const styles = StyleSheet.create({
// 	normal: {
// 		width: 40,
// 		height: 40,
// 		borderWidth: 0.5,
// 		borderColor: '#D5D5D5',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		margin: 2,
// 		borderRadius: 20,
// 	},
// 	focus: {
// 		width: 40,
// 		height: 40,
// 		borderWidth: 0.5,
// 		borderColor: 'red',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		margin: 2,
// 		borderRadius: 20,
// 		...Platform.select({
// 			ios: {
// 				shadowOffset: { width: 0, height: 1 },
// 				shadowRadius: 2,
// 				shadowOpacity: 0.5,
// 				shadowColor: 'red',
// 			},
// 			android: {
// 				elevation: 4,
// 			},
// 		}),
// 	},
// 	blur: {
// 		width: 40,
// 		height: 40,
// 		borderRadius: 20,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		margin: 2,
// 	},
// })
>>>>>>> dev/setup
