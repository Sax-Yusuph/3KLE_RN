import { StackNavigationProp, useHeaderHeight } from '@react-navigation/stack'
<<<<<<< HEAD
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
=======
import React, {
	forwardRef,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
>>>>>>> dev/setup
import {
	ActivityIndicator,
	KeyboardAvoidingView,
	Platform,
	TouchableOpacity,
	TextInput,
} from 'react-native'
import { Button, Div, Icon, Input, InputProps } from 'react-native-magnus'
import { SafeAreaView } from 'react-native-safe-area-context'
<<<<<<< HEAD
import { FocusAwareStatusBar, IconButton, Heading, HStack, SmallText, VStack } from '@elements'
=======
import {
	FocusAwareStatusBar,
	IconButton,
	Heading,
	HStack,
	SmallText,
	VStack,
} from '@elements'
>>>>>>> dev/setup
import { useTransparentBar } from '../../hooks/comps/useAndroidBarBg'
import EyeIcon from '@assets/svgs/eye.svg'
import FingerPrintIcon from '@assets/svgs/fingerprint.svg'
import { showToast, Sleep } from '@utils/helpers'
import * as Animatable from 'react-native-animatable'

const FADE_TEXT_ALT = 'rgba(255, 255, 255, 0.85)'

interface Props {
	navigation: StackNavigationProp<any, any>
}

const SignIn: React.FC<Props> = ({ navigation }) => {
	const headerHeight = useHeaderHeight()
	const inputRef = useRef<TextInput>()

	useTransparentBar()

	useEffect(() => {
		const func = async () => {
			await Sleep(2000)
			inputRef.current?.focus()
		}

		// const unsubscribe = navigation.addListener('beforeRemove', e => {
		// 	useHideAndroidBar()
		// 	// Prevent default action
		// 	// e.preventDefault()
		// })

		func()

		// return unsubscribe
	}, [])

	const [isLoading, setLoading] = useState(false)

	const handleLogin = useCallback(async () => {
		setLoading(true)

		await Sleep(100)

		setLoading(false)
		navigation.navigate('MainTabs')
	}, [isLoading])

	const handlePress = () => {
		showToast()
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
<<<<<<< HEAD
			<Div flex={1} bg='rgba(36, 59, 128, 1)'>
=======
			<Div flex={1} bg="rgba(36, 59, 128, 1)">
>>>>>>> dev/setup
				<FocusAwareStatusBar hidden />
				<KeyboardAvoidingView
					style={{ flex: 1, justifyContent: 'center' }}
					behavior={Platform.select({
						ios: 'padding',
						android: undefined,
					})}
					keyboardVerticalOffset={headerHeight}
				>
<<<<<<< HEAD
					<Animatable.View animation='fadeInUp' delay={200} useNativeDriver>
						<VStack mb='3xl'>
							<Heading color='textLight' fontSize='5xl'>
								Welcome back!
							</Heading>
							<SmallText color={FADE_TEXT_ALT} fontSize='md'>
=======
					<Animatable.View animation="fadeInUp" delay={200} useNativeDriver>
						<VStack mb="3xl">
							<Heading color="textLight" fontSize="5xl">
								Welcome back!
							</Heading>
							<SmallText color={FADE_TEXT_ALT} fontSize="md">
>>>>>>> dev/setup
								Please login to your account
							</SmallText>
						</VStack>
					</Animatable.View>

<<<<<<< HEAD
					<Animatable.View animation='fadeIn' delay={500} useNativeDriver>
						<HStack m='lg'>
							<StyledInput
								placeholder='Username or email'
								placeholderTextColor='rgba(7, 72, 110, 0.38)'
=======
					<Animatable.View animation="fadeIn" delay={500} useNativeDriver>
						<HStack m="lg">
							<StyledInput
								placeholder="Username or email"
								placeholderTextColor="rgba(7, 72, 110, 0.38)"
>>>>>>> dev/setup
								// @ts-ignore
								ref={inputRef}
							/>
						</HStack>
<<<<<<< HEAD
						<HStack m='lg'>
							<StyledInput placeholder='Password' flex={1} />
							<Div position='absolute' right={20}>
								<IconButton onPress={handlePress} rounded='circle'>
=======
						<HStack m="lg">
							<StyledInput placeholder="Password" flex={1} />
							<Div position="absolute" right={20}>
								<IconButton onPress={handlePress} rounded="circle">
>>>>>>> dev/setup
									<EyeIcon />
								</IconButton>
							</Div>
						</HStack>
						<TouchableOpacity>
<<<<<<< HEAD
							<SmallText textAlign='right' mr='xl' color={FADE_TEXT_ALT}>
=======
							<SmallText textAlign="right" mr="xl" color={FADE_TEXT_ALT}>
>>>>>>> dev/setup
								Forgot password?
							</SmallText>
						</TouchableOpacity>
						<VStack mb={'md'} mx={'lg'}>
							<Button
								block
<<<<<<< HEAD
								my='3xl'
								py={16}
								rounded='2xl'
								onPress={handleLogin}
								color='rgba(7, 72, 110, 1)'
								bg='rgba(246, 245, 245, 1)'
=======
								my="3xl"
								py={16}
								rounded="2xl"
								onPress={handleLogin}
								color="rgba(7, 72, 110, 1)"
								bg="rgba(246, 245, 245, 1)"
>>>>>>> dev/setup
							>
								Log in
							</Button>

							<TouchableOpacity onPress={handlePress}>
								<HStack>
									<FingerPrintIcon />
<<<<<<< HEAD
									<SmallText ml='md' textAlign='right' mr='xl' color={FADE_TEXT_ALT}>
=======
									<SmallText
										ml="md"
										textAlign="right"
										mr="xl"
										color={FADE_TEXT_ALT}
									>
>>>>>>> dev/setup
										Fingerprint
									</SmallText>
								</HStack>
							</TouchableOpacity>

<<<<<<< HEAD
							<HStack mt='xl'>
								<SmallText ml='md' textAlign='right' color={FADE_TEXT_ALT}>
=======
							<HStack mt="xl">
								<SmallText ml="md" textAlign="right" color={FADE_TEXT_ALT}>
>>>>>>> dev/setup
									Don't have any account?
								</SmallText>

								<TouchableOpacity onPress={handlePress}>
<<<<<<< HEAD
									<SmallText ml='md' textAlign='right' color={FADE_TEXT_ALT} fontWeight='500'>
=======
									<SmallText
										ml="md"
										textAlign="right"
										color={FADE_TEXT_ALT}
										fontWeight="500"
									>
>>>>>>> dev/setup
										Sign Up
									</SmallText>
								</TouchableOpacity>
							</HStack>
						</VStack>
					</Animatable.View>
				</KeyboardAvoidingView>

<<<<<<< HEAD
				<Div position='absolute' top={15} right={15}>
					{isLoading ? (
						<ActivityIndicator animating={isLoading} size='large' color='rgba(255,255,255,0.5)' />
					) : (
						<Animatable.View animation='fadeIn' delay={700} useNativeDriver>
							<IconButton onPress={handlePress} activeBg='rgba(0,0,0,0.1)' rounded='circle' p='md'>
								<Icon name='questioncircle' color='textLight' fontSize='3xl' />
=======
				<Div position="absolute" top={15} right={15}>
					{isLoading ? (
						<ActivityIndicator
							animating={isLoading}
							size="large"
							color="rgba(255,255,255,0.5)"
						/>
					) : (
						<Animatable.View animation="fadeIn" delay={700} useNativeDriver>
							<IconButton
								onPress={handlePress}
								activeBg="rgba(0,0,0,0.1)"
								rounded="circle"
								p="md"
							>
								<Icon name="questioncircle" color="textLight" fontSize="3xl" />
>>>>>>> dev/setup
							</IconButton>
						</Animatable.View>
					)}
				</Div>
			</Div>
		</SafeAreaView>
	)
}

export default SignIn

type Ref = TextInput

/** custom text input for the signup */
const StyledInput = forwardRef<Ref, InputProps>((props, ref) => (
	<Input
		ref={ref}
<<<<<<< HEAD
		color='rgba(7, 72, 110, 1)' //<-- these colors should actually be defined in the themse.. i was lazy about it
		bg='rgba(246, 245, 245, 1)'
		rounded='2xl'
		py={16}
		placeholderTextColor='rgba(7, 72, 110, 0.38)'
		fontSize='md'
=======
		color="rgba(7, 72, 110, 1)" //<-- these colors should actually be defined in the themse.. i was lazy about it
		bg="rgba(246, 245, 245, 1)"
		rounded="2xl"
		py={16}
		placeholderTextColor="rgba(7, 72, 110, 0.38)"
		fontSize="md"
>>>>>>> dev/setup
		{...props}
	/>
))
