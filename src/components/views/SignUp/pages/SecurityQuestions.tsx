import React, { useState } from 'react'
import { View } from 'react-native'
import { AppTextInput as AppCustomInput, AppPicker as Picker, AppButton, PickerItem } from '@form'
import { AppCustomFont as AppCustomText } from '@elements'
import colors from '../../../themes/colors'
import routes from '../../../../navigation/navigators/routes'
import styles from '../style'

export default function SecurityQuestions(props: any) {
	const { navigation } = props

	return (
		<View style={styles.container}>
			<AppCustomText style={[styles.header, { fontFamily: 'Poppins_900Black' }]}>
				PICK YOUR SECURITY QUESTIONS
			</AppCustomText>
			<AppCustomText style={styles.subText}>
				Pick 3 easy to remember questions below to help recover your account securely incase of
				information loss.
			</AppCustomText>

			<View style={{ marginTop: 20 }}>
				<AppCustomText
					style={{
						marginTop: 30,
						marginLeft: 20,
						fontSize: 14,
						fontWeight: 'bold',
						color: colors.BLACK_COLOR,
					}}
				>
					Question 1
				</AppCustomText>
				<Picker
					items={listOfQuestions}
					name='selectedQuestionOne'
					numberOfColumns={1}
					PickerItemComponent={PickerItem}
					placeholder='What is the name of your Boss?'
					width='100%'
					placeholderStyle={{ fontSize: 12 }}
					textStyle={{ fontSize: 12 }}
					iconSize={14}
				/>
				<AppCustomInput marginTop={-2} placeholder={'Answer'} fontSize={12} height={45} />
				<AppCustomText
					style={{
						marginTop: 20,
						marginLeft: 20,
						fontSize: 14,
						fontWeight: 'bold',
						color: colors.BLACK_COLOR,
					}}
				>
					Question 2
				</AppCustomText>
				<Picker
					items={listOfQuestions}
					name='selectedQuestionTwo'
					numberOfColumns={1}
					PickerItemComponent={PickerItem}
					placeholder='What is the name of the Town you grew?'
					width='100%'
					placeholderStyle={{ fontSize: 12 }}
					textStyle={{ fontSize: 12 }}
					iconSize={14}
				/>
				<AppCustomInput marginTop={-2} placeholder={'Answer'} fontSize={12} height={45} />
				<AppCustomText
					style={{
						marginTop: 20,
						marginLeft: 20,
						fontSize: 14,
						fontWeight: 'bold',
						color: colors.BLACK_COLOR,
					}}
				>
					Question 3
				</AppCustomText>
				<Picker
					items={listOfQuestions}
					name='selectedQuestionThree'
					numberOfColumns={1}
					PickerItemComponent={PickerItem}
					placeholder='What is the name of the Town you grew?'
					width='100%'
					placeholderStyle={{ fontSize: 12 }}
					textStyle={{ fontSize: 12 }}
					iconSize={14}
				/>
				<AppCustomInput marginTop={-2} placeholder={'Answer'} fontSize={12} height={45} />
			</View>
			<View style={styles.buttonBottom}>
				<AppButton
					title={'Next'}
					onPress={() => navigation.navigate(routes.REGISTER.STEP_FIVE)}
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

const listOfQuestions = [
	{ id: 1, value: 'First Question', label: 'First Question' },
	{ id: 1, value: 'Second Question', label: 'Second Question' },
	{ id: 1, value: 'Third Question', label: 'Third Question' },
	{ id: 1, value: 'Fourth Question', label: 'Fourth Question' },
	{ id: 1, value: 'Fifth Question', label: 'Fifth Question' },
]
