import React, { FC } from 'react'
import { StatusBarStyle, useColorScheme, StyleProp, StatusBar } from 'react-native'
import { BLACK, WHITE } from '@utils/colors'
import { DivProps, Div } from 'react-native-magnus'
import { Center, VStack } from './stacks'
import { CustomStatusBar } from './statusbar'
import { SafeAreaView } from 'react-native-safe-area-context'

// import StatusBar from './StatusBar';

interface Props extends DivProps {
	statusBarStyle?: StatusBarStyle | null
	statusBarColor?: string
}

const CustomScreen: FC<Props> = ({ statusBarStyle, statusBarColor, ...props }) => {
	const isDarkMode = useColorScheme() === 'dark'
	const barStyle = isDarkMode ? 'light-content' : 'dark-content'
	const barColor = isDarkMode ? BLACK : WHITE

	return (
		<>
			<CustomStatusBar
				barStyle={statusBarStyle || barStyle}
				backgroundColor={statusBarColor || barColor}
			/>
			<SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
				<Div bg={isDarkMode ? BLACK : WHITE} flex={1} {...props} />
				<Div h={50} />
			</SafeAreaView>
		</>
	)
}

export default CustomScreen
