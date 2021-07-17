import React, { FC, useCallback, useRef, useState } from 'react'
import { Center, ImageOverlay, Paragraph, VirtualizedView } from '@elements'

import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TextInputProps,
	TouchableOpacity,
	TextInput,
} from 'react-native'
import { Div, Icon } from 'react-native-magnus'

// import { useNavigation } from '@react-navigation/native'
// import routes from '@navigation/navigators/routes'
import { useHeaderHeight } from '@react-navigation/stack'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { COLORS } from '@utils/colors'

interface Props {}

const EditProfilePage: FC<Props> = () => {
	// const navigation = useNavigation()
	const headerHeight = useHeaderHeight()

	// const gotToEditProfile = () => {
	// 	navigation.navigate(routes.MY_ACCOUNT.EDIT_PROFILE)
	// }

	const overlayImageLayout = {
		width: '100%',
		height: '100%',
		overlayColor: 'rgba(200,200,200,0.4)',
	}

	return (
		<Div>
			<VirtualizedView>
				<KeyboardAvoidingView
					style={{ flex: 1, justifyContent: 'center' }}
					behavior={Platform.select({
						ios: 'padding',
						android: undefined,
					})}
					keyboardVerticalOffset={headerHeight}
				>
					<Center alignSelf="center">
						<TouchableOpacity>
							<Center w={120} h={120} alignSelf="center" rounded="circle" overflow="hidden">
								<ImageOverlay
									source={require('@assets/png/dummy_avatar.png')}
									style={[styles.image__overlay, overlayImageLayout]}
								/>
								<Icon
									name="edit-2"
									fontFamily="Feather"
									fontSize={32}
									color="textLight"
									position="absolute"
								/>
							</Center>
						</TouchableOpacity>
						<TouchableOpacity>
							<Paragraph mt="md" fontSize="md">
								Change profile photo
							</Paragraph>
						</TouchableOpacity>
					</Center>

					<Div mt="3xl">
						<FloatingTextInput placeholder="Name" defaultValue="Okorie Uche Emmanuella" />
						<FloatingTextInput placeholder="Date of Birth" defaultValue="6th september 1967" />
						<FloatingTextInput placeholder="Email Address" defaultValue="contactuchenow@gmail.com" />
						<FloatingTextInput placeholder="Phone Number" defaultValue="+234704443333" />
						<FloatingTextInput placeholder="Address" defaultValue="Ogunjobi Adejumo, Lagos Nigeria" />
					</Div>
				</KeyboardAvoidingView>
				<Div h={80} />
			</VirtualizedView>
		</Div>
	)
}

export default EditProfilePage

const styles = StyleSheet.create({
	image__overlay: {
		borderRadius: 16,
		overflow: 'hidden',
		marginVertical: 18,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	floating__input: {
		borderWidth: 0,
		margin: 16,
		borderBottomWidth: 1,
		borderColor: COLORS.brandDark,
	},
	label__styles: {
		fontWeight: 'bold',
		fontFamily: 'Poppins-Bold',
		fontSize: 18,
	},
})

const FloatingTextInput: FC<TextInputProps> = ({ placeholder, defaultValue }) => {
	const [value, setValue] = useState(defaultValue)
	const [canEdit, setCanEdit] = useState(false)

	const inputRef = useRef<TextInput>(null)
	const toggleEditable = useCallback(() => {
		setCanEdit((p) => !p)
		canEdit && inputRef.current?.focus()
	}, [canEdit])

	return (
		<FloatingLabelInput
			ref={inputRef}
			label={placeholder}
			{...{ value }}
			onChangeText={setValue}
			containerStyles={styles.floating__input}
			labelStyles={styles.label__styles}
			// editable={canEdit}
			rightComponent={
				<TouchableOpacity onPress={toggleEditable}>
					<Paragraph fontSize="xs" color="secondary">
						Change
					</Paragraph>
				</TouchableOpacity>
			}
		/>
	)
}
