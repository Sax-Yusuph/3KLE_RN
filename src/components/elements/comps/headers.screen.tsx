import React, { FC } from 'react'
import { showToast } from '@utils/helpers'
import { HStack, VStack } from './stacks'
import { Circle } from './Dot'
import { IconButton } from './iconBtn'
import { Heading, Paragraph } from './AppText'
import AvatarImg from '@assets/svgs/header/avatar.svg'
import BellIcon from '@assets/svgs/header/Notification.svg'
import { StatusBar, useColorScheme, useWindowDimensions } from 'react-native'
import { DivProps, Icon } from 'react-native-magnus'
import { COLORS } from '@utils/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

interface Props extends DivProps {
	title: string
	profileImg: string | number
	handleBackPress?: () => void
	backIcon?: string
}
export const HomeScreenHeader: FC<Props> = ({ title, profileImg, ...props }) => {
	const { width } = useWindowDimensions()
	const { top } = useSafeAreaInsets()
	const darkMode = useColorScheme() === 'dark'
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

export const Header: FC<Props> = ({ title, profileImg, backIcon, handleBackPress, ...props }) => {
	const { width } = useWindowDimensions()
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
			bg={darkMode ? 'gray900' : 'card'}
			{...props}
		>
			<HStack>
				<IconButton onPress={goBack} rounded="circle">
					<Icon name={backIcon ?? 'left'} fontSize={24} color="brandDark" />
				</IconButton>
				<HStack>
					<Heading ml="md" fontSize="xl" fontWeight="500" color="brandDark">
						{title}
					</Heading>
				</HStack>
			</HStack>
		</HStack>
	)
}

interface ThreeColumnProps extends Props {
	subtitle: string
}
export const ThreeColumnHeader: FC<ThreeColumnProps> = ({
	title,
	profileImg,
	backIcon,
	handleBackPress,
	subtitle,
	...props
}) => {
	const { width } = useWindowDimensions()
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
			bg={darkMode ? 'gray900' : 'card'}
			{...props}
		>
			<HStack w="100%" justifyContent="space-between">
				<IconButton onPress={goBack} rounded="circle">
					<Icon name={backIcon ?? 'left'} fontSize={24} color="brandDark" />
				</IconButton>
				<VStack>
					<Heading ml="md" fontSize="xl" color="brandDark">
						{title}
					</Heading>
					<Paragraph fontSize="sm" mt={-5} color="textDark">
						{subtitle}
					</Paragraph>
				</VStack>

				<IconButton onPress={showToast} rounded="circle">
					<AvatarImg width={32} height={32} />
				</IconButton>
			</HStack>
		</HStack>
	)
}
