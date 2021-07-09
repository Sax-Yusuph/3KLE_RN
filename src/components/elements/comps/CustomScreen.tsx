<<<<<<< HEAD
import React from 'react'
import { StatusBarStyle, useColorScheme } from 'react-native'
import { NativeSafeAreaViewProps, SafeAreaView } from 'react-native-safe-area-context'
import { BLACK, WHITE } from '@utils/colors'
import styled from 'styled-components/native'
import {
	compose,
	space,
	layout,
	color,
	flexbox,
	SpaceProps,
	LayoutProps,
	ColorProps,
	FlexboxProps,
} from 'styled-system'
// import StatusBar from './StatusBar';

interface StyleProps
	extends SpaceProps,
		LayoutProps,
		ColorProps,
		FlexboxProps,
		NativeSafeAreaViewProps {}

const Container = styled(SafeAreaView)<StyleProps>`
	flex: 1;
	align-items: center;
	justify-content: center;
	${compose(space, layout, color, flexbox)};
`

type Props = StyleProps & {
=======
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
>>>>>>> dev/setup
	statusBarStyle?: StatusBarStyle | null
	statusBarColor?: string
}

<<<<<<< HEAD
export default function CustomScreen({
	children,
	statusBarStyle,
	statusBarColor,
	...props
}: Props) {
=======
const CustomScreen: FC<Props> = ({
	statusBarStyle,
	statusBarColor,
	...props
}) => {
>>>>>>> dev/setup
	const isDarkMode = useColorScheme() === 'dark'
	const barStyle = isDarkMode ? 'light-content' : 'dark-content'
	const barColor = isDarkMode ? BLACK : WHITE
	return (
		<>
<<<<<<< HEAD
			{/* <StatusBar barStyle={statusBarStyle || barStyle} backgroundColor={statusBarColor || barColor} /> */}
			<Container backgroundColor={isDarkMode ? BLACK : WHITE} {...props}>
				{children}
			</Container>
		</>
	)
}
=======
			<StatusBar
				barStyle={statusBarStyle || barStyle}
				backgroundColor={statusBarColor || barColor}
			/>
			<Center bg={isDarkMode ? BLACK : WHITE} {...props} />
		</>
	)
}

export default CustomScreen
>>>>>>> dev/setup
