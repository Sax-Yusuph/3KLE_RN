import { appFontBold, appFontSemiBold, small } from '@utils/Fonts'
import { Shadowed, RIPPLE_CONFIG, DEFAULT_SPACING } from '@utils/util'
import React, { ReactNode } from 'react'
import {
	Text,
	View,
	ActivityIndicator,
	Platform,
	Pressable,
	StyleProp,
	StyleSheet,
	ViewStyle,
} from 'react-native'
import TouchableScale from 'react-native-touchable-scale'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface Props {
	title: string
	onPress: () => void
	backgroundColor: string
	color: string
	disabled?: boolean
	isRequestPending?: boolean
	isBold?: boolean
	fontSize?: number
	borderColor?: string
	style?: StyleProp<ViewStyle>
	noShadows?: boolean
	rightIcon?: ReactNode
	isSmall?: boolean
}

const AppButton = (props: Props) => {
	const {
		title,
		onPress,
		backgroundColor,
		color,
		disabled,
		isBold,
		fontSize,
		isRequestPending,
		borderColor,
		style,
		noShadows,
		rightIcon,
	} = props
	const fontFamily = isBold ? appFontBold : appFontSemiBold
	const fSize = fontSize ? fontSize : small

	const borderStyles = {
		borderColor,
		borderWidth: 1.2,
	}

	if (Platform.OS === 'android') {
		return (
			<View
				style={[
					{ ...styles.appBtnTouchable, backgroundColor },
					borderColor ? borderStyles : null,
					!noShadows && Shadowed,
					style,
				]}
			>
				<Pressable
					android_ripple={RIPPLE_CONFIG}
					style={styles.pressable}
					onPress={onPress}
					disabled={disabled || isRequestPending}
				>
					{isRequestPending ? (
						<ActivityIndicator size={30} color={Colors.White} />
					) : (
						<Text
							style={{
								color,
								fontFamily,
								fontSize: fSize,
							}}
						>
							{title} {rightIcon}
						</Text>
					)}
				</Pressable>
			</View>
		)
	}

	return (
		<View>
			<TouchableScale
				activeScale={0.9} //0.9
				tension={200} //150
				friction={15} //3
				useNativeDriver
				style={[
					{ ...styles.appBtnTouchable, backgroundColor },
					borderColor ? borderStyles : null,
					!noShadows && Shadowed,
					(disabled || isRequestPending) && styles.disabled,
					style,
				]}
				onPress={onPress}
				disabled={disabled || isRequestPending}
			>
				{isRequestPending ? (
					<ActivityIndicator size={30} color={Colors.White} />
				) : (
					<Text
						style={{
							...styles.appBtnText,
							color,
							fontFamily,
							fontSize: fSize,
						}}
					>
						{title} {rightIcon}
					</Text>
				)}
			</TouchableScale>
		</View>
	)
}

const styles = StyleSheet.create({
	appBtnTouchable: {
		paddingVertical: 15,
		marginVertical: DEFAULT_SPACING,
		height: 60,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 0,
		borderRadius: 15,
		...(Platform.OS === 'android' && { overflow: 'hidden' }),
	},
	appBtnText: {},
	pressable: {
		height: 60,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	disabled: {
		backgroundColor: '#5A4EEF',
	},
})

export default AppButton
