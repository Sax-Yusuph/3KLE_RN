import React, { useState } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { CountryPickerWithName, TransparentButton } from '@form'
import { AppCustomFont as AppCustomText } from '@elements'
import colors from '../../themes/colors'
import styles from './style'

import routes from '../../../navigation/navigators/routes'

export const CountrySelector = (props: any) => {
	const { navigation } = props
	return (
		<View style={[styles.container, { padding: 20 }]}>
			<AppCustomText style={[styles.header, { fontSize: 23 }]}>PROOF OF IDENTITY</AppCustomText>
			<AppCustomText style={[styles.subText, { fontSize: 13 }]}>
				This is to help us verify that you are a legitimate citizen of your country of choice.
			</AppCustomText>
			<View style={{ marginTop: 25 }}>
				<AppCustomText
					style={{
						fontSize: 18,
						color: colors.BLACK_COLOR,
						marginTop: 20,
						fontFamily: 'Poppins_600SemiBold',
					}}
				>
					Country
				</AppCustomText>
				<CountryPickerWithName />
				<AppCustomText style={localStyles.header}>Required for Nigerians</AppCustomText>
				<View style={localStyles.card}>
					<View style={localStyles.cardRow}>
						<View style={localStyles.cardIcon}>
							<Image
								style={localStyles.cardIconStyle}
								source={require('@assets/png/bvn-logo.png')}
							/>
						</View>
						<AppCustomText style={localStyles.cardText}>
							Bank Verification Number (BVN)
						</AppCustomText>
					</View>
					<View style={localStyles.cardRow}>
						<View style={localStyles.cardIcon}>
							<Image
								style={localStyles.cardIconStyle}
								source={require('@assets/png/int-passport-logo.png')}
							/>
						</View>
						<AppCustomText style={localStyles.cardText}>International Passport</AppCustomText>
					</View>
					<View style={localStyles.cardRow}>
						<View style={localStyles.cardIcon}>
							<Image
								style={localStyles.cardIconStyle}
								source={require('@assets/png/driver-license-logo.png')}
							/>
						</View>
						<AppCustomText style={localStyles.cardText}>Driver's License</AppCustomText>
					</View>
					<View style={localStyles.cardRow}>
						<View style={localStyles.cardIcon}>
							<Image
								style={localStyles.cardIconStyle}
								source={require('@assets/png/nin-logo.png')}
							/>
						</View>
						<AppCustomText style={localStyles.cardText}>National Identity Card</AppCustomText>
					</View>
				</View>
			</View>
			<View style={styles.buttonBottom}>
				<TransparentButton
					fontSize={14}
					marginBottom={15}
					title={'Skip for Now'}
					onPress={() => navigation.navigate(routes.REGISTER.STEP_TWO)}
					color={'#0A5D87'}
				/>
			</View>
		</View>
	)
}

const localStyles = StyleSheet.create({
	card: {
		backgroundColor: colors.WHITE_COLOR,
		borderRadius: 15,
		padding: 20,
	},
	cardRow: {
		flexDirection: 'row',
	},
	header: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 16,
		lineHeight: 24,
		letterSpacing: -0.3,
		marginTop: 30,
		marginBottom: 10,
		color: 'rgba(0, 0, 0, 0.8)',
	},
	cardIcon: {
		marginRight: 8,
		margin: 5,
		marginLeft: 0,
		height: 30,
		width: 30,
	},
	cardIconStyle: {
		alignSelf: 'center',
	},
	cardText: {
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 21,
		letterSpacing: -0.3,
		color: 'rgba(0, 0, 0, 0.6)',
		marginTop: 7,
	},
})
