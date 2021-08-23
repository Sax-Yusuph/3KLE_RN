import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '@utils/util'
import { __COLORS } from '@utils/colors'

export type HeaderButton = {
	text?: string
	child: JSX.Element
	onclick(): void
}

export type HeaderProps = {
	leftButton?: HeaderButton
	rightButton?: HeaderButton
	showLogo?: boolean
	customMiddleIcon?: JSX.Element
	showBottomBorder?: boolean
	customHeaderStyles?: ViewStyle
}

export const NavHeader = (props: HeaderProps) => {
	const {
		leftButton,
		rightButton,
		// showLogo,
		showBottomBorder,
		customMiddleIcon,
		customHeaderStyles,
	} = props

	return (
		<View
			style={[
				styles.header,
				showBottomBorder ? styles.bottomBorder : null,
				customHeaderStyles ? customHeaderStyles : null,
			]}
		>
			{leftButton && (
				<TouchableOpacity style={styles.leftButton} onPress={() => leftButton?.onclick()} activeOpacity={1}>
					{leftButton.child}
				</TouchableOpacity>
			)}
			{/* {showLogo && (
        <View style={styles.logoContainer}>
          <Image
            style={[styles.headerIcon, styles.logo]}
            source={require('../../assets/img/logo_black.png')}
          />
        </View>
      )} */}
			{customMiddleIcon && <View style={styles.customMiddleIcon}>{customMiddleIcon}</View>}
			{rightButton && (
				<TouchableOpacity style={styles.rightButton} onPress={() => rightButton?.onclick()} activeOpacity={0}>
					{rightButton.child}
				</TouchableOpacity>
			)}
		</View>
	)
}

const headerImageSize = DEVICE_HEIGHT / 8
const height = DEVICE_HEIGHT / 16

const styles = StyleSheet.create({
	header: {
		height: height,
		flexDirection: 'row',
		alignItems: 'center',
		width: DEVICE_WIDTH,
	},
	leftButton: {
		position: 'absolute',
		left: 15,
		zIndex: 1,
	},
	headerIcon: {
		height: headerImageSize,
		width: headerImageSize,
	},
	logoContainer: {
		flex: 1,
		alignItems: 'center',
	},
	customMiddleIcon: {
		alignItems: 'center',
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		justifyContent: 'center',
	},
	logo: {
		resizeMode: 'contain',
		borderRadius: 5,
	},
	bottomBorder: {
		borderBottomWidth: 0.5,
		borderBottomColor: __COLORS.LIGHTER_GREY,
	},
	rightButton: {
		position: 'absolute',
		right: 15,
		alignItems: 'flex-end',
	},
})
