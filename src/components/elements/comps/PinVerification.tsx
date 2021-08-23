// import { COLORS } from '@utils/colors'
import { COLORS } from '@utils/colors'
import React, { Dispatch } from 'react'
import { SetStateAction } from 'react'
import { useRef } from 'react'
import { View, StyleSheet, TextInput, Dimensions } from 'react-native'

interface Props {
	num1: string
	num2: string
	num3: string
	num4: string
	num5?: string
	num6?: string
	setNum1: Dispatch<SetStateAction<string>>
	setNum2: Dispatch<SetStateAction<string>>
	setNum3: Dispatch<SetStateAction<string>>
	setNum4: Dispatch<SetStateAction<string>>
	setNum5?: Dispatch<SetStateAction<string>>
	setNum6?: Dispatch<SetStateAction<string>>
	handleSubmit: () => void
}

export const PinVerification = (props: Props) => {
	// INPUT STATES
	const {
		num1,
		num2,
		num3,
		num4,
		setNum1,
		setNum2,
		setNum3,
		setNum4,

		handleSubmit,
	} = props

	// INPUT REFS
	const inputRef1 = useRef<TextInput>(null)
	const inputRef2 = useRef<TextInput>(null)
	const inputRef3 = useRef<TextInput>(null)
	const inputRef4 = useRef<TextInput>(null)
	// const inputRef5 = useRef<TextInput>(null)
	// const inputRef6 = useRef<TextInput>(null)

	// HANDLE NUMBER 1
	const handleNum1 = async (v: string) => {
		setNum1(v)
		v !== '' ? inputRef2.current?.focus() : inputRef1.current?.focus()
	}

	// HANDLE NUMBER 2
	const handleNum2 = (v: string) => {
		setNum2(v)
		v !== '' ? inputRef3.current?.focus() : inputRef1.current?.focus()
	}

	// HANDLE NUMBER 3
	const handleNum3 = (v: string) => {
		setNum3(v)
		v !== '' ? inputRef4.current?.focus() : inputRef2.current?.focus()
	}

	// HANDLE NUMBER 4
	const handleNum4 = (v: string) => {
		setNum4(v)
		// v !== '' ? inputRef5.current?.focus() : inputRef3.current?.focus()
	}

	// // HANDLE NUMBER 5
	// const handleNum5 = (v: string) => {
	// 	setNum5(v)
	// 	v !== '' ? inputRef6.current?.focus() : inputRef4.current?.focus()
	// }

	// // HANDLE NUMBER 6
	// const handleNum6 = (v: string) => {
	// 	setNum6(v)
	// 	v === '' && inputRef5.current?.focus()
	// }

	return (
		<View style={styles.main}>
			<View style={styles.inputView}>
				<TextInput
					autoFocus
					ref={inputRef1}
					style={styles.input}
					keyboardType="number-pad"
					maxLength={1}
					value={num1}
					onChangeText={handleNum1}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					ref={inputRef2}
					style={styles.input}
					keyboardType="number-pad"
					maxLength={1}
					value={num2}
					onChangeText={handleNum2}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					ref={inputRef3}
					style={styles.input}
					keyboardType="number-pad"
					maxLength={1}
					value={num3}
					onChangeText={handleNum3}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					ref={inputRef4}
					style={styles.input}
					keyboardType="number-pad"
					maxLength={1}
					value={num4}
					onChangeText={handleNum4}
					onSubmitEditing={handleSubmit}
				/>
			</View>
			{/* <View style={styles.inputView}>
				<TextInput
					ref={inputRef5}
					style={styles.input}
					keyboardType="number-pad"
					maxLength={1}
					value={num5}
					onChangeText={handleNum5}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					ref={inputRef6}
					style={styles.input}
					keyboardType="number-pad"
					maxLength={1}
					value={num6}
					onChangeText={handleNum6}
					onSubmitEditing={handleSubmit}
					returnKeyType="done"
				/>
			</View> */}
		</View>
	)
}
const INPUT_SIZE = Dimensions.get('screen').width / 8
const styles = StyleSheet.create({
	main: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 30,
		marginBottom: 30,
	},
	inputView: {
		width: INPUT_SIZE, //50
		height: INPUT_SIZE, //50
		marginHorizontal: 5,
		backgroundColor: '#fff',
		borderRadius: INPUT_SIZE / 2.8, //20
		justifyContent: 'center',
		alignItems: 'center',
		// overflow: 'hidden',

		// ...QuiteShadowed,
	},
	input: {
		// fontWeight: '600',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		borderBottomColor: COLORS.black,
		borderBottomWidth: 1,
		// fontSize: '500',
		width: '100%',
		height: '100%',
		// fontFamily: appFontRegular,
	},
})
