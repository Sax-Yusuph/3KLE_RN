import * as React from 'react'
import { StatusBar, Div } from 'react-native-magnus'
import { useIsFocused } from '@react-navigation/native'
import { VariantPropsType } from 'react-native-magnus/lib/typescript/src/types'
import { StatusBarProps } from 'react-native'

type Props = StatusBarProps & VariantPropsType

export const FocusAwareStatusBar = (props: Props) => {
	const isFocused = useIsFocused()

	return isFocused ? (
		<StatusBar backgroundColor="transparent" barStyle="dark-content" animated hidden={false} {...props} />
	) : null
}

export const CustomStatusBar = ({ backgroundColor, ...props }: StatusBarProps) => {
	return (
		<Div bg={backgroundColor as string}>
			<StatusBar animated translucent barStyle="dark-content" backgroundColor={backgroundColor} {...props} />
		</Div>
	)
}
