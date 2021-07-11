import React, { FC } from 'react'
import { showToast } from '@utils/helpers'
import { HStack } from './stacks'
import { Circle } from './Dot'
import { IconButton } from './iconBtn'
import { Heading } from './AppText'
import AvatarImg from '@assets/svgs/header/avatar.svg'
import BellIcon from '@assets/svgs/header/Notification.svg'
import { StatusBar, useColorScheme, useWindowDimensions } from 'react-native'
import { DivProps, Icon } from 'react-native-magnus'
import { COLORS } from '@utils/colors'

interface Props extends DivProps {
	title: string
	profileImg: string | number
}
export const HomeScreenHeader: FC<Props> = ({ title, profileImg, ...props }) => {
	const { width } = useWindowDimensions()
	const darkMode = useColorScheme() === 'dark'
	return (
		<HStack
			justifyContent='space-between'
			p='lg'
			pb='xs'
			w={width}
			bg={darkMode ? 'gray900' : 'card'}
			{...props}
		>
			<HStack>
				<IconButton onPress={showToast} rounded='circle'>
					<AvatarImg width={32} height={32} />
				</IconButton>
				<HStack>
					<Heading ml='md' fontSize='lg' fontWeight='normal' color='brandDark'>
						Hello,
					</Heading>
					<Heading ml='xs' fontSize='md' color='brandDark'>
						{title}
					</Heading>
				</HStack>
			</HStack>

			<HStack w={60} justifyContent='center'>
				<IconButton onPress={() => showToast()} p='md' rounded='circle' pointerEvents='none'>
					<Icon name='search1' color='brandDark' fontSize={24} />
				</IconButton>

				<IconButton onPress={() => showToast()} p='md' rounded='circle' pointerEvents='none'>
					<BellIcon width={22} height={22} color={COLORS.brandDark} />
					<Circle bg='#E44228' size={10} position='absolute' right={4} top={4} />
				</IconButton>
			</HStack>
		</HStack>
	)
}
