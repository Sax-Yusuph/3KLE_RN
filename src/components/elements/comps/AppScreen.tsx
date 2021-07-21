import React, { FC } from 'react'
import { StatusBarStyle, useColorScheme } from 'react-native'
import { BLACK, WHITE } from '@utils/colors'
import { DivProps, Div } from 'react-native-magnus'
import { CustomStatusBar } from './statusbar'
import { SafeAreaView } from 'react-native-safe-area-context'

// import StatusBar from './StatusBar';

interface Props extends DivProps {
	statusBarStyle?: StatusBarStyle | null
	statusBarColor?: string
	noGutter?: boolean
}

const CustomScreen: FC<Props> = ({ statusBarStyle, statusBarColor, noGutter, ...props }) => {
	const isDarkMode = useColorScheme() === 'dark'
	const barStyle = isDarkMode ? 'light-content' : 'dark-content'
	const barColor = isDarkMode ? BLACK : WHITE

	return (
		<>
			<CustomStatusBar barStyle={statusBarStyle || barStyle} backgroundColor={statusBarColor || barColor} />
			<SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
				<Div bg={isDarkMode ? BLACK : WHITE} flex={1} {...props} />
				{!noGutter && <Div h={50} />}
			</SafeAreaView>
		</>
	)
}

export default CustomScreen
