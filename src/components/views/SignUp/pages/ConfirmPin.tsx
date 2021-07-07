import React, { useRef, useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { AppCustomFont as AppCustomText } from '@elements'
// import { Option } from '../../../types/General' <-- cant find this file.
import { AppButton } from '@form'
import routes from '../../../../navigation/navigators/routes'
import colors from '../../../themes/colors'
import styles from '../style'

export default function ConfirmPin(props: any) {
	const { navigation } = props
	const inputRef = useRef<any>([])
	const [otp, setOTP] = useState<any[]>([])

	const handleInputChange = (e: string, index: number) => {
		if (e.length > 0 && index < 3) {
			setOTP(otp => [...otp.filter(obj => obj.id !== index), { id: index, value: e }])
			inputRef.current[index + 1].focus()
		}
	}

	return (
		<View style={[styles.container, { backgroundColor: colors.WHITE_COLOR }]}>
			<View style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '20%' }}>
				<AppCustomText style={styles.pin}>Confirm Pin</AppCustomText>
				<View style={{ height: 70, marginTop: 10, flexDirection: 'row' }}>
					{[1, 2, 3, 4].map((el, i) => (
						<View style={styl.container} key={el}>
							<TextInput
								placeholderTextColor={colors.GRAY_COLOR}
								style={styl.text}
								keyboardType='numeric'
								onChangeText={text => handleInputChange(text, i)}
								ref={ref => inputRef.current.push(ref)}
								maxLength={1}
							/>
						</View>
					))}
				</View>
			</View>
			<View style={styles.buttonBottom}>
				<AppButton
					title={'Next'}
					width={'90%'}
					onPress={() => navigation.navigate(routes.REGISTER.STEP_SEVEN)}
					color={colors.DEEP_BLUE_COLOR}
				/>
				<View style={styles.alignCenter}>
					<AppCustomText style={styles.loginText}>Already have an account?</AppCustomText>
					<AppCustomText style={styles.loginBtn}>Login</AppCustomText>
				</View>
			</View>
		</View>
	)
}

const styl = StyleSheet.create({
	container: {
		backgroundColor: colors.BACKGROUND_COLOR,
		borderRadius: 20,
		flexDirection: 'row',
		padding: 0,
		paddingLeft: 20,
		width: '22%',
		margin: 4,
	},
	icon: {
		marginRight: 10,
		marginTop: 3,
	},
	text: {
		fontSize: 18,
		width: '100%',
		color: colors.ASHBLUE_COLOR,
		marginLeft: 0,
		marginRight: 0,
	},
})
