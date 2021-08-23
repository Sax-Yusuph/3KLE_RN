import React, { FC, ReactElement } from 'react'
import { showToast } from '@utils/helpers'
import { HStack, VStack } from './stacks'
import { Circle } from './Dot'
import { IconButton } from './iconBtn'
import { Heading, Paragraph } from './AppText'
import AvatarImg from '@assets/svgs/header/avatar.svg'
import BellIcon from '@assets/svgs/header/Notification.svg'
import { useColorScheme } from 'react-native'
import { DivProps, Icon } from 'react-native-magnus'
import { COLORS } from '@utils/colors'

import { useNavigation } from '@react-navigation/native'

interface Props extends DivProps {
	title?: string
	profileImg?: string | number
	handleBackPress?: () => void
	backIcon?: string
	isCentered?: boolean
	TitleComponent?: ReactElement
	RightIconComponent?: ReactElement
}
export const HomeScreenHeader: FC<Props> = ({ title, profileImg, ...props }) => {
	const darkMode = useColorScheme() === 'dark'
	// console.log({ profileImg })
	return (
		<HStack
			justifyContent="space-between"
			px="lg"
			pb="xs"
			mb="xs"
			// mt={top}
			// w={width}
			bg={darkMode ? 'gray900' : 'card'}
			{...props}
		>
			<HStack>
				<IconButton onPress={showToast} rounded="circle">
					<AvatarImg width={32} height={32} />
				</IconButton>
				<HStack>
					<Heading ml="md" fontSize="lg" fontWeight="normal" color="brandDark">
						Hello,
					</Heading>
					<Heading ml="xs" fontSize="md" color="brandDark">
						{title}
					</Heading>
				</HStack>
			</HStack>

			<HStack w={60} justifyContent="center">
				<IconButton onPress={() => showToast()} p="md" rounded="circle" pointerEvents="none">
					<Icon name="search1" color="brandDark" fontSize={24} />
				</IconButton>

				<IconButton onPress={() => showToast()} p="md" rounded="circle" pointerEvents="none">
					<BellIcon width={22} height={22} color={COLORS.brandDark} />
					<Circle bg="#E44228" size={10} position="absolute" right={4} top={4} />
				</IconButton>
			</HStack>
		</HStack>
	)
}

export const Header: FC<Props> = ({ title, backIcon, isCentered, ...props }) => {
	const darkMode = useColorScheme() === 'dark'
	const navigation = useNavigation()

	const goBack = () => {
		navigation.canGoBack() && navigation.goBack()
	}

	return (
		<HStack
			justifyContent="space-between"
			px="lg"
			pb="xs"
			mb="xs"
			// mt={top}
			// bg={darkMode ? 'gray900' : 'card'}
			{...props}
		>
			<HStack>
				<IconButton onPress={goBack} rounded="circle">
					<Icon name={backIcon ?? 'left'} fontSize={24} color="brandDark" />
				</IconButton>
				<HStack flex={1} justifyContent={isCentered ? 'center' : undefined}>
					<Heading fontSize="xl" fontWeight="500" color="brandDark" ml={isCentered ? -14 : 'md'}>
						{title}
					</Heading>
				</HStack>
			</HStack>
		</HStack>
	)
}

interface ThreeColumnProps extends Props {
	subtitle?: string
	rightIcon?: ReactElement
	closeIcon?: string
	iconFamily?: string
}
export const ThreeColumnHeader: FC<ThreeColumnProps> = ({
	title,
	profileImg,
	backIcon,
	subtitle,
	rightIcon,
	closeIcon,
	TitleComponent,
	RightIconComponent,
	iconFamily,
	...props
}) => {
	const darkMode = useColorScheme() === 'dark'
	const navigation = useNavigation()

	const goBack = () => {
		// console.log(profileImg)
		navigation.canGoBack() && navigation.goBack()
	}

	return (
		<HStack
			justifyContent="space-between"
			px="lg"
			pb="xs"
			mb="xs"
			// mt={top}
			bg={darkMode ? 'gray900' : 'card'}
			{...props}
		>
			<HStack w="100%" justifyContent="space-between">
				<IconButton onPress={goBack} rounded="circle">
					<Icon
						name={backIcon ?? 'left'}
						fontSize={24}
						color="brandDark"
						//@ts-ignore
						fontFamily={iconFamily ?? 'AntDesign'}
					/>
				</IconButton>
				<VStack>
					{TitleComponent ? (
						TitleComponent
					) : (
						<Heading ml="md" fontSize="xl" color="brandDark">
							{title}
						</Heading>
					)}

					{subtitle ? (
						<Paragraph fontSize="sm" mt={-5} color="textDark">
							{subtitle}
						</Paragraph>
					) : null}
				</VStack>

				{RightIconComponent ? (
					<IconButton onPress={showToast} rounded="circle">
						{RightIconComponent}
					</IconButton>
				) : rightIcon ? (
					<IconButton onPress={showToast} rounded="circle">
						{/* for svg icons */}
						{rightIcon}
					</IconButton>
				) : closeIcon ? (
					<IconButton onPress={showToast} rounded="circle">
						<Icon name={closeIcon} color="brandDark" fontSize="3xl" />
					</IconButton>
				) : (
					<IconButton onPress={showToast} rounded="circle">
						<AvatarImg width={32} height={32} />
					</IconButton>
				)}
			</HStack>
		</HStack>
	)
}
