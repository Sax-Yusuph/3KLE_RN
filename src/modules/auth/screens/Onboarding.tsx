import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
<<<<<<< HEAD
import CustomText from 'components/CustomText'
=======
>>>>>>> dev/setup
import { CustomScreen } from '@elements'
import useKeychainBiometrics from '../hooks/useKeychainBiometrics'
import useKeychainCredentials from '../hooks/useKeychainCredentials'
import useStore from '../store'
import { useNavigation } from '@react-navigation/core'

const Onboaring = () => {
	const { t } = useTranslation('onboarding')
	const { navigate } = useNavigation()
	const { setStoreCredentials } = useKeychainBiometrics({
		username: '@username',
		password: 'Pass1234',
	})

	const { userCredentials } = useKeychainCredentials()

	const setToken = useStore(state => state.setToken)

	useEffect(() => {
		if (userCredentials) {
			// Authentificate .then setToken
			setToken('blabla')
		}
	}, [userCredentials])

	return (
		<CustomScreen justifyContent={'space-evenly'} testID={'OnboardingScreen'}>
<<<<<<< HEAD
			<CustomText
=======
			{/* <CustomText
>>>>>>> dev/setup
				fontWeight={'700'}
				testID={'btnSign'}
				onPress={() => {
					// Authentificate .then setToken .then setStoreCredentials
					setToken('blabla')
					setStoreCredentials(true)
				}}
			>
				{t('sign')}
			</CustomText>
			<CustomText
				fontWeight={'700'}
				testID={'btnForgot'}
				onPress={() => {
					// Send reset email and then deeplink to ResetPassword
					navigate('ResetPassword')
				}}
			>
				{t('forgot')}
<<<<<<< HEAD
			</CustomText>
=======
			</CustomText> */}
>>>>>>> dev/setup
		</CustomScreen>
	)
}

<<<<<<< HEAD
Onboaring.whyDidYouRender = true

=======
>>>>>>> dev/setup
export default Onboaring
