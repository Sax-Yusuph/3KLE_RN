<<<<<<< HEAD
import * as React from 'react'
import { StatusBar, Div } from 'react-native-magnus'
import { useIsFocused } from '@react-navigation/native'
import { VariantPropsType } from 'react-native-magnus/lib/typescript/src/types'
import { StatusBarProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = StatusBarProps & VariantPropsType

export const FocusAwareStatusBar = (props: Props) => {
	const isFocused = useIsFocused()

	return isFocused ? (
		<StatusBar
			backgroundColor='transparent'
			barStyle='dark-content'
			animated
			hidden={false}
			{...props}
		/>
	) : null
}

export const CustomStatusBar = ({ backgroundColor, ...props }: StatusBarProps) => {
	const { top } = useSafeAreaInsets()

	return (
		<Div pt={top} bg={backgroundColor as string}>
			<StatusBar animated translucent backgroundColor={backgroundColor} {...props} />
		</Div>
	)
}
=======
import * as React from 'react';
import {StatusBar, Div} from 'react-native-magnus';
import {useIsFocused} from '@react-navigation/native';
import {VariantPropsType} from 'react-native-magnus/lib/typescript/src/types';
import {StatusBarProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = StatusBarProps & VariantPropsType;

export const FocusAwareStatusBar = (props: Props) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      backgroundColor="transparent"
      barStyle="dark-content"
      animated
      hidden={false}
      {...props}
    />
  ) : null;
};

export const CustomStatusBar = ({
  backgroundColor,
  ...props
}: StatusBarProps) => {
  const {top} = useSafeAreaInsets();

  return (
    <Div pt={top} bg={backgroundColor as string}>
      <StatusBar
        animated
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
    </Div>
  );
};
>>>>>>> dev/setup
