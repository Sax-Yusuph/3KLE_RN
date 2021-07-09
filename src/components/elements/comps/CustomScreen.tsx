import React, { FC } from 'react'
import {
	StatusBarStyle,
	useColorScheme,
	StyleProp,
	StatusBar,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BLACK, WHITE } from '@utils/colors'
import { DivProps } from 'react-native-magnus'
import { Center } from './stacks'

// import StatusBar from './StatusBar';

interface Props extends DivProps {
	statusBarStyle?: StatusBarStyle | null
	statusBarColor?: string
}

const CustomScreen: FC<Props> = ({
	statusBarStyle,
	statusBarColor,
	...props
}) => {
	const isDarkMode = useColorScheme() === 'dark'
	const barStyle = isDarkMode ? 'light-content' : 'dark-content'
	const barColor = isDarkMode ? BLACK : WHITE
	return (
		<>
			<StatusBar
				barStyle={statusBarStyle || barStyle}
				backgroundColor={statusBarColor || barColor}
			/>
			<Center bg={isDarkMode ? BLACK : WHITE} {...props} />
		</>
	)
}

export default CustomScreen
