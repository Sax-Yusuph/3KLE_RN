import React, { FC } from 'react'
import { StatusBarStyle, useColorScheme } from 'react-native'
import { __COLORS } from '@utils/colors'
import { DivProps, Div } from 'react-native-magnus'
import { CustomStatusBar } from './statusbar'
import { SafeAreaView } from 'react-native-safe-area-context'

// import StatusBar from './StatusBar';

interface Props extends DivProps {
	statusBarStyle?: StatusBarStyle | null
	statusBarColor?: string
	Gutter?: boolean
}

const CustomScreen: FC<Props> = ({ /*statusBarStyle, */ statusBarColor, Gutter, ...props }) => {
	const isDarkMode = useColorScheme() === 'dark'
	// const barStyle = isDarkMode ? 'light-content' : 'dark-content'
	const barColor = isDarkMode ? __COLORS.BLACK : __COLORS.WHITE

	return (
		<>
			<CustomStatusBar barStyle="dark-content" backgroundColor={statusBarColor || barColor} />
			<SafeAreaView style={{ flex: 1, backgroundColor: __COLORS.WHITE }}>
				<Div bg={isDarkMode ? __COLORS.BLACK : __COLORS.WHITE} flex={1} {...props} />
				{Gutter && <Div h={50} />}
			</SafeAreaView>
		</>
	)
}

export default CustomScreen
