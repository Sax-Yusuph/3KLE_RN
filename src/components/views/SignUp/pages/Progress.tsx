import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Progress } from 'native-base'

import { ProgressCard, AppCustomFont as AppCustomText } from '@elements'
import routes from '../../../../navigation/navigators/routes'
import styles from '../style'
import colors from '../../../themes/colors'
import { AppButton, TransparentButton } from '@form'

export const ProgressPage = (props: any) => {
	const { navigation } = props
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row' }}>
				<AppCustomText style={localStyles.progressText}>PROGRESS</AppCustomText>
				<View style={{ flex: 1 }}></View>
				<AppCustomText style={localStyles.percentageText}>75% Done</AppCustomText>
			</View>
			<Progress size='sm' colorScheme='green' bg='white' mt={2} mb={4} value={75} />
			<ProgressCard text={'Full name'} isCompleted={true} />
			<ProgressCard text={'Email / Mobile number'} isCompleted={true} />
			<ProgressCard text={'FingerPrint'} isCompleted={false} />
			<ProgressCard text={'Secret Pin'} isCompleted={true} />
			<ProgressCard text={'Take a Selfie'} isCompleted={false} />
			<ProgressCard text={'Proof of Identity'} isCompleted={true} />
			<View style={{ width: '50%', alignSelf: 'flex-end' }}>
				<TransparentButton
					title={'Finish Registration'}
					marginTop={15}
					onPress={() => navigation.navigate(routes.REGISTER.STEP_TWO)}
					color={colors.DEEP_BLUE_COLOR}
				/>
			</View>
			<View style={styles.buttonBottom}>
				<AppButton
					title={'Proceed'}
					onPress={() => navigation.navigate(routes.REGISTER.STEP_TWO)}
					color={colors.DEEP_BLUE_COLOR}
				/>
			</View>
		</View>
	)
}

const localStyles = StyleSheet.create({
	progressText: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 18,
		lineHeight: 27,
		color: '#07486F',
	},
	percentageText: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 16,
		lineHeight: 24,
		color: 'rgba(0, 0, 0, 0.52)',
	},
})
