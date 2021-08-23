import { Sleep } from '@helpers/sleep'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { StatusBar } from 'react-native'
import changeNavigationBarColor, {
	hideNavigationBar,
	showNavigationBar,
} from 'react-native-navigation-bar-color'

export const useAndroidBarBg = (color: string, delay?: number, lightMode?: boolean) => {
	const testSetTranslucent = useCallback(async () => {
		if (delay) {
			await Sleep(delay)
		}
		showNavigationBar()
		changeNavigationBarColor(color || '#F4F7F9', lightMode ?? false, true)
	}, [delay, lightMode, color])

	useFocusEffect(() => {
		testSetTranslucent()
	})

	return color
}

export const useFullScreenMode = () => {
	const hideNavigation = () => {
		hideNavigationBar()
		StatusBar.setHidden(true)
	}

	useFocusEffect(() => {
		hideNavigation()
	})

	return
}
export const useHideAndroidBar = () => {
	const hideNavigation = async () => {
		// await Sleep(1000)
		hideNavigationBar()
	}

	useFocusEffect(() => {
		hideNavigation()
	})

	return
}

export const useTransparentBar = (delay?: number) => {
	const hideNavigation = () => {
		showNavigationBar()
		changeNavigationBarColor('transparent', true, true)
	}

	useFocusEffect(() => {
		if (delay) {
			Sleep(300).then(hideNavigation)
		} else {
			hideNavigation()
		}
	})

	return
}

export const useShowAndroidBar = (delay?: number) => {
	const hideNavigation = () => {
		hideNavigationBar()
	}

	useFocusEffect(() => {
		if (delay) {
			Sleep(300).then(hideNavigation)
		} else {
			hideNavigation()
		}
	})

	return
}
