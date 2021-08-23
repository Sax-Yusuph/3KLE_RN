import React, { useMemo } from 'react'
import { Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { KeyboardAwareFlatList, KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface Props {
	children: JSX.Element
	isFlatlist?: boolean
}

const WithInputViewWrapper = ({ children, isFlatlist }: Props) => {
	const Content = useMemo(
		() => <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>,
		[children],
	)

	if (isFlatlist) {
		return (
			<KeyboardAwareFlatList
				data={[]}
				style={styles.main}
				ListEmptyComponent={null}
				keyExtractor={() => 'dummy'}
				renderItem={null}
				ListHeaderComponent={Content}
				keyboardShouldPersistTaps="handled"
				showsVerticalScrollIndicator={false}
			/>
		)
	}

	return (
		<KeyboardAwareScrollView
			style={styles.main}
			keyboardShouldPersistTaps="handled"
			showsVerticalScrollIndicator={false}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
		</KeyboardAwareScrollView>
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
})

export default WithInputViewWrapper
