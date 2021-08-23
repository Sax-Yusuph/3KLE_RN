import React, { useState } from 'react'
import { KeyboardTypeOptions, ReturnKeyTypeOptions, ViewStyle } from 'react-native'
import { StyleSheet, View, TextInput } from 'react-native'
import TextInputMask from 'react-native-text-input-mask'
import { TextStyle } from 'react-native'
import CurrencyInput from 'react-native-currency-input'
import { QuiteShadowed } from '@utils/util'
import { appFontRegular, smaller } from '@utils/Fonts'

export interface AppInputProps {
	setRef?(ref: TextInput): void
	placeholder?: string
	value: string
	handleChange?: any
	leftIcon?: AppInputLeftIcon
	rightIcon?: AppInputLeftIcon
	keyboardType?: KeyboardTypeOptions
	maxLength?: number
	autoFocus?: boolean
	isPhoneNumber?: boolean
	defaultValue?: string
	editable?: boolean
	returnKeyType?: ReturnKeyTypeOptions
	onSubmitEditing?(): void
	autoCorrect?: boolean
	autoCapitalize?: string
	containerStyles?: ViewStyle
	textInputStyles?: TextStyle
	isEIN?: boolean
	returnKeyLabel?: string
	enablesReturnKeyAutomatically?: boolean
	onFocus?(): void
	mask?: string
	onKeyPress?(): void
	isPriceInput?: boolean
	isFinal?: boolean
	noShadows?: boolean
}

export type AppInputLeftIcon = JSX.Element

const AppInput = (props: AppInputProps) => {
	const {
		setRef,
		placeholder,
		value,
		handleChange,
		leftIcon,
		rightIcon,
		keyboardType,
		maxLength,
		autoFocus = false,
		isPhoneNumber,
		defaultValue,
		editable = true,
		onSubmitEditing,
		autoCorrect,
		autoCapitalize = 'sentences',
		containerStyles,
		textInputStyles,
		onFocus,
		mask,
		onKeyPress,
		isPriceInput,
		isFinal,
		noShadows,
	} = props

	const [val, setVal] = useState(value)

	const handlePhoneUpdate = (formattedNumber: string, extractedNumber?: string) => {
		handleChange(formattedNumber, extractedNumber)
		if (extractedNumber) {
			setVal(formattedNumber)
		}
	}

	const handleInputChange = (newVal: string) => {
		setVal(newVal)
		handleChange(newVal)
	}

	const renderTextInput = () => {
		if (mask || isPhoneNumber) {
			return (
				<TextInputMask
					ref={(ref) => {
						if (ref && setRef) {
							// @ts-ignore
							setRef(ref)
						}
					}}
					mask={mask ?? '+1-[000]-[000]-[0000]'}
					maxLength={maxLength}
					placeholder={placeholder}
					placeholderTextColor="grey"
					style={[styles.textInput, textInputStyles]}
					value={val}
					onChangeText={(formatted, extracted) => handlePhoneUpdate(formatted, extracted)}
					keyboardType={keyboardType}
					autoFocus={autoFocus}
					onFocus={onFocus}
					editable={editable}
					returnKeyLabel={isFinal ? 'Done' : 'Next'}
					returnKeyType={isFinal ? 'done' : 'next'}
					enablesReturnKeyAutomatically
					onKeyPress={onKeyPress}
					onSubmitEditing={() => {
						if (onSubmitEditing) {
							onSubmitEditing()
						}
					}}
				/>
			)
		}

		if (isPriceInput) {
			return (
				<CurrencyInput
					ref={(ref) => {
						if (ref && setRef) {
							// @ts-ignore
							setRef(ref)
						}
					}}
					//@ts-ignore
					value={val ?? 0}
					//@ts-ignore
					onChangeValue={handleInputChange}
					prefix="₦ "
					delimiter=","
					separator="."
					precision={2}
					placeholder={placeholder}
					style={styles.textInput}

					// onChangeText={formattedValue => {
					// console.log(formattedValue); // $2,310.46
					// }}
				/>
			)
		}
		return (
			<TextInput
				ref={(ref) => {
					if (ref && setRef) {
						setRef(ref)
					}
				}}
				maxLength={maxLength}
				placeholder={placeholder}
				placeholderTextColor="grey"
				style={styles.textInput}
				value={val}
				onChangeText={handleInputChange}
				keyboardType={keyboardType}
				autoFocus={autoFocus}
				defaultValue={defaultValue}
				multiline={false}
				editable={editable}
				returnKeyLabel={isFinal ? 'Done' : 'Next'}
				returnKeyType={isFinal ? 'done' : 'next'}
				enablesReturnKeyAutomatically
				onSubmitEditing={() => {
					if (onSubmitEditing) {
						onSubmitEditing()
					}
				}}
				// @ts-ignore
				autoCapitalize={autoCapitalize}
				autoCorrect={autoCorrect}
			/>
		)
	}

	return (
		<View style={[styles.textInputView, containerStyles, !noShadows && QuiteShadowed]}>
			{leftIcon && <View style={styles.leftButton}>{leftIcon}</View>}
			{renderTextInput()}
			{rightIcon && <View style={styles.leftButton}>{rightIcon}</View>}
		</View>
	)
}

const styles = StyleSheet.create({
	textInputView: {
		paddingVertical: 5,
		width: '100%',
		height: 80,
		backgroundColor: '#EAEAEA',
		borderRadius: 15,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	leftButton: {
		marginRight: 10,
	},
	rightButton: {
		marginLeft: 10,
	},
	textInput: {
		fontSize: smaller,
		fontFamily: appFontRegular,
		flex: 1,
	},
})

export default AppInput
