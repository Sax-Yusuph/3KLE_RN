import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchablePress } from './Pressable'
import { PressableLabel } from './PressableLabel'
import { Center, HStack } from './stacks'
import { Div } from 'react-native-magnus'
import { Circle } from './Dot'
import { __COLORS } from '@utils/colors'

interface Props {
	userImage?: string
	setUserImage?: Dispatch<SetStateAction<string | undefined>>
	disableEditing?: boolean
	showLabel?: boolean
	size?: number
	images?: string[]
	stacked?: boolean
}

const IMAGE_OPTIONS: ImageLibraryOptions = {
	mediaType: 'photo',
}

const UserAvatar: FC<Props> = ({
	userImage,
	images,
	stacked,
	size,
	disableEditing,
	showLabel,
	setUserImage,
}) => {
	const onPress = useCallback(() => {
		launchImageLibrary(IMAGE_OPTIONS, (response) => {
			if (response.assets?.length) {
				setUserImage?.(response.assets[0].uri)
			}
		})
	}, [setUserImage])

	if (stacked) {
		const DEFAULT_STACK = images?.length ? images : Array(5).fill('https://i.pravatar.cc/500')
		return (
			<HStack flexWrap="wrap" justifyContent="center">
				{DEFAULT_STACK.map((image, i) => (
					<Center key={i} my={10}>
						<Div mb={5} rounded={80} overflow="hidden">
							<TouchablePress disabled={disableEditing} {...{ onPress }}>
								<Circle size={size ?? 50} bg={__COLORS.LIGHTER_GREY} overflow="hidden">
									<Image source={{ uri: image ?? 'https://i.pravatar.cc/500' }} style={styles.userImage} />
								</Circle>
							</TouchablePress>
						</Div>
						{showLabel && <PressableLabel onPress={onPress} title="Change Photo" secondary />}
					</Center>
				))}
			</HStack>
		)
	}
	return (
		<Center my={10}>
			<Div mb={5} rounded={80} overflow="hidden">
				<TouchablePress disabled={disableEditing} {...{ onPress }}>
					<Circle size={size ?? 50} bg={__COLORS.LIGHTER_GREY} overflow="hidden">
						<Image source={{ uri: userImage ?? 'https://i.pravatar.cc/500' }} style={styles.userImage} />
					</Circle>
				</TouchablePress>
			</Div>
			{showLabel && <PressableLabel onPress={onPress} title="Change Photo" secondary />}
		</Center>
	)
}

export default UserAvatar

const styles = StyleSheet.create({
	userImage: {
		width: '100%',
		height: '100%',
	},
})
