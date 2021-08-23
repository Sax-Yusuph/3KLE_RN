import { Platform, ToastAndroid } from 'react-native'
import { Alert } from 'react-native-normalized'

export const showToast = (message?: string) => {
	const _message = message && typeof message === 'string' ? message : 'not yet implemented 🤓 👋'

	if (Platform.OS === 'android') {
		ToastAndroid.showWithGravityAndOffset(_message, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50)
	} else {
		Alert.alert('Message', message, [{ text: 'OK' }])
	}
}
