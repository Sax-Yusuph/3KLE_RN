import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { AppCustomFont as AppCustomText } from '@elements'
import { AppButton } from '@form'
import routes from '@navigation/navigators/routes'
import styles from '../style'
import colors from '../../../themes/colors'

export const TakeSelfie = (props: any) => {
	const { navigation } = props
	// const [modalVisible, setModalVisible] = useState<boolean>(false);
	return (
		<View style={styles.container}>
			<AppCustomText style={[styles.header, { fontSize: 23 }]}>Take a Selfie</AppCustomText>
			<AppCustomText style={[styles.subText, { fontSize: 13 }]}>
				Take a clear picture of your face. This will help verify your identity. You can change the
				photo later.
			</AppCustomText>
			<View style={styles.centerItem}>
				<View style={[styles.centerItem, localStyles.cameraCircle]}>
					<Image source={require('@assets/png/camera-icon.png')} />
					<AppCustomText style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 10, textAlign: 'center' }}>
						Take Photo
					</AppCustomText>
				</View>
				<View style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
					<View style={{ flexDirection: 'column', marginRight: 30 }}>
						<Image
							style={{ marginLeft: 25, marginBottom: 10 }}
							source={require('@assets/png/check-good-icon.png')}
						/>
						<Image
							style={{ width: 70, height: 70 }}
							source={require('@assets/png/good-pic-sample.png')}
						/>
					</View>
					<View style={{ flexDirection: 'column', marginLeft: 30, marginTop: 6 }}>
						<Image
							style={{ marginLeft: 25, marginBottom: 10 }}
							source={require('@assets/png/check-fail-icon.png')}
						/>
						<Image
							style={{ width: 70, height: 70 }}
							source={require('@assets/png/bad-pic-sample.png')}
						/>
					</View>
				</View>
			</View>
			<View style={styles.buttonBottom}>
				<View style={[styles.centerItem, { width: '75%', marginBottom: 20 }]}>
					<AppCustomText style={{ color: colors.RED_COLOR, fontSize: 18 }}>
						*
						<AppCustomText style={{ color: colors.BLACK_COLOR, fontSize: 11 }}>
							Note that photos taken with dark eyewares and face coverings may not be accepted.
						</AppCustomText>
					</AppCustomText>
				</View>
				<AppButton
					title={'Continue'}
					onPress={() => navigation.navigate(routes.REGISTER.STEP_EIGHT)}
					color={colors.DEEP_BLUE_COLOR}
				/>
			</View>
		</View>
	)
}

const localStyles = StyleSheet.create({
	cameraCircle: {
		flexDirection: 'column',
		marginTop: 30,
		height: 120,
		width: 120,
		borderRadius: 60,
		backgroundColor: colors.LIGHT_GRAY_COLOR,
	},
})
