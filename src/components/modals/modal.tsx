import { __COLORS } from '@utils/colors'
import { __WINDOW_HEIGHT, horizontalPadding } from '@utils/constants'
import React, { forwardRef, ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { Modalize, ModalizeProps } from 'react-native-modalize'

const Inner: React.ForwardRefRenderFunction<
	{},
	{
		children: ReactNode
	} & ModalizeProps
> = ({ children, ...rest }, ref) => (
	<Modalize
		ref={ref}
		scrollViewProps={{ showsVerticalScrollIndicator: false }}
		modalHeight={__WINDOW_HEIGHT / 2}
		snapPoint={__WINDOW_HEIGHT / 3}
		modalStyle={styles.ModalStyle}
		{...rest}
	>
		{children}
	</Modalize>
)

export const BottomSheet = forwardRef(Inner)

const styles = StyleSheet.create({
	ModalStyle: {
		backgroundColor: __COLORS.Background,
		...horizontalPadding,
		zIndex: 1,
	},
})
