import React, { useState, useEffect } from 'react'
import { Image, FlatList, View } from 'react-native'

import styles from './style'
import colors from '../../themes/colors'
import { AppButton, TransparentButton } from '@form'
import { AppCustomFont as AppCustomText } from '@elements'
import routes from '@navigation/navigators/routes'

export default function SplashScreen(props: any) {
	const { navigation } = props
<<<<<<< HEAD
	const [images, setImages] = useState([
=======
	const [images] = useState([
>>>>>>> dev/setup
		require('@assets/png/Splash-WithGrad-One.png'),
		require('@assets/png/Splash-WithGrad-Two.png'),
		require('@assets/png/Splash-WithGrad-Three.png'),
		require('@assets/png/Splash-WithGrad-Four.png'),
		require('@assets/png/Splash-WithGrad-Five.png'),
		require('@assets/png/Splash-WithGrad-Six.png'),
	])
	const [index, setIndex] = useState(0)

	const imageSlider = () => {
		if (index === images.length - 1) {
			setIndex(0)
		} else {
			setIndex(index + 1)
		}
	}

	const renderRowItem = (item: any) => {
		return (
			<View
				style={[
					styles.littleDots,
<<<<<<< HEAD
					item.index === index ? styles.backgroundThreeKleBlue : styles.backgrndWhite,
				]}
			></View>
=======
					item.index === index
						? styles.backgroundThreeKleBlue
						: styles.backgrndWhite,
				]}
			/>
>>>>>>> dev/setup
		)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			imageSlider()
		}, 6000)
		return () => clearInterval(interval)
	}, [index])

	return (
		<View style={styles.container}>
			<Image style={styles.slider} source={images[index]} />
			<View style={{ position: 'absolute', height: '100%', width: '100%' }}>
				<View style={styles.textContainer}>
					{index === 0 && (
						<View style={styles.splashBottom}>
							<AppCustomText style={styles.header}>
								3kle<AppCustomText style={styles.threeKleBlue}>.</AppCustomText>
							</AppCustomText>
<<<<<<< HEAD
							<AppCustomText style={styles.textDesc}>{slideText[index]}</AppCustomText>
=======
							<AppCustomText style={styles.textDesc}>
								{slideText[index]}
							</AppCustomText>
>>>>>>> dev/setup
						</View>
					)}
					{index === 1 && (
						<View style={styles.splashTop}>
							<AppCustomText style={styles.smallFont}>
<<<<<<< HEAD
								3KLE FAMILY<AppCustomText style={styles.threeKleBlue}> + </AppCustomText>PLAN
							</AppCustomText>
							<AppCustomText style={styles.textDesc}>{slideText[index]}</AppCustomText>
=======
								3KLE FAMILY
								<AppCustomText style={styles.threeKleBlue}> + </AppCustomText>
								PLAN
							</AppCustomText>
							<AppCustomText style={styles.textDesc}>
								{slideText[index]}
							</AppCustomText>
>>>>>>> dev/setup
						</View>
					)}
					{index === 2 && (
						<View style={styles.splashTop}>
<<<<<<< HEAD
							<AppCustomText style={styles.smallFont}>LINK EXTERNAL ACCOUNTS</AppCustomText>
							<AppCustomText style={styles.textDesc}>{slideText[index]}</AppCustomText>
=======
							<AppCustomText style={styles.smallFont}>
								LINK EXTERNAL ACCOUNTS
							</AppCustomText>
							<AppCustomText style={styles.textDesc}>
								{slideText[index]}
							</AppCustomText>
>>>>>>> dev/setup
						</View>
					)}
					{index === 3 && (
						<View style={styles.splashTop}>
<<<<<<< HEAD
							<AppCustomText style={styles.smallFont}>WHAT ARE ROUND-UPS?</AppCustomText>
							<AppCustomText style={styles.textDesc}>{slideText[index]}</AppCustomText>
=======
							<AppCustomText style={styles.smallFont}>
								WHAT ARE ROUND-UPS?
							</AppCustomText>
							<AppCustomText style={styles.textDesc}>
								{slideText[index]}
							</AppCustomText>
>>>>>>> dev/setup
						</View>
					)}
					{index === 4 && (
						<View style={styles.splashTop}>
							<AppCustomText style={styles.smallFont}>
								PAY BILLS{' '}
<<<<<<< HEAD
								<AppCustomText style={[styles.threeKleBlue, { fontSize: 20 }]}>AND</AppCustomText>{' '}
								MERCHANTS
							</AppCustomText>
							<AppCustomText style={styles.textDesc}>{slideText[index]}</AppCustomText>
=======
								<AppCustomText style={[styles.threeKleBlue, { fontSize: 20 }]}>
									AND
								</AppCustomText>{' '}
								MERCHANTS
							</AppCustomText>
							<AppCustomText style={styles.textDesc}>
								{slideText[index]}
							</AppCustomText>
>>>>>>> dev/setup
						</View>
					)}
					{index === 5 && (
						<View style={styles.splashTop}>
							<AppCustomText style={styles.smallFont}>
								PEER
								<AppCustomText style={[styles.threeKleBlue, { fontSize: 20 }]}>
									{' '}
									2{' '}
								</AppCustomText>{' '}
								PEER PLAN
							</AppCustomText>
<<<<<<< HEAD
							<AppCustomText style={styles.textDesc}>{slideText[index]}</AppCustomText>
=======
							<AppCustomText style={styles.textDesc}>
								{slideText[index]}
							</AppCustomText>
>>>>>>> dev/setup
						</View>
					)}
				</View>
				<View style={styles.buttonContainer}>
					<FlatList
						data={slideText}
						numColumns={6}
						extraData={index}
						keyExtractor={item => item}
						renderItem={renderRowItem}
					/>
					<AppButton
						width={'70%'}
						title={'Get Started'}
						onPress={() => navigation.navigate(routes.REGISTER.STEP_ONE)}
						color={colors.THREEKLE_BLUE_COLOR}
					/>
					<TransparentButton
						title={'Log In'}
						marginTop={8}
						onPress={() => console.log('Function of Parent!')}
						color={colors.WHITE_COLOR}
					/>
				</View>
			</View>
		</View>
	)
}

const slideText: string[] = [
	'Open your bank account in minutes. Link your debit and credit cards from other banks and grow your money with us.',
	'Our Family plus account allow parents to save money and invest and maintain full control until their child is an adult.',
	'Link external bank accounts to 3KLE and manage all your money in one place.',
	'When you purchase with any of your Link card, we round up your transaction and invest the change into your account portfolio.',
	'Easily Pay bills, scan to pay. Pay for goods and service bank to bank. Airtime & bills payment, Fund transfers Pay Salary, Event tickets, embassy, etc.',
	'Borrowers apply online for fixed-rate, fixed-term loans, Flexible interest rate Low monthly repayment plan.',
]
