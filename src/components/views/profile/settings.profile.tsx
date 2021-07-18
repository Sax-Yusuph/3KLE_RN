import React, { FC } from 'react'
import { VirtualizedView, Center, Heading, HStack } from '@elements'
import { Div, Input, Icon } from 'react-native-magnus'
import { showToast } from '@utils/helpers'
import { Pressable } from 'react-native'

import ProductPreferenceIcon from '@assets/svgs/myAccouts/product_preferences.svg'
import NotificationIcon from '@assets/svgs/myAccouts/product_preferences.svg'
import ShieldIcon from '@assets/svgs/myAccouts/shield.svg'

interface Props {}

const DefaultProfilePage: FC<Props> = () => {
	return (
		<Div>
			<VirtualizedView>
				<Center px="xl">
					<Input
						placeholder="Search in settings"
						fontSize="lg"
						prefix={<Icon name="search1" fontSize="3xl" mr="md" />}
						focusBorderColor="brandDark"
						my="xl"
						rounded="xl"
					/>
					<Div alignSelf="flex-start">
						<Heading>Profile</Heading>

						<SettingItem
							title="Personal Information"
							action={showToast}
							IconComponent={<Icon name="person" fontFamily="Ionicons" color="brandDark" fontSize={26} />}
						/>
						<SettingItem
							title="Notification Settings"
							action={showToast}
							IconComponent={<NotificationIcon />}
						/>
						<SettingItem
							title="Product Preferences"
							action={showToast}
							IconComponent={<ProductPreferenceIcon />}
						/>
						<SettingItem title="Security settings" action={showToast} IconComponent={<ShieldIcon />} />
					</Div>
				</Center>
			</VirtualizedView>
		</Div>
	)
}

export default DefaultProfilePage

const SettingItem = ({ title, IconComponent }: any) => {
	const ICON_SIZE = 60
	return (
		<Pressable>
			{({ pressed }) => (
				<HStack py="lg">
					<Div
						mr="lg"
						justifyContent="center"
						alignItems="center"
						w={ICON_SIZE}
						h={ICON_SIZE}
						bg={pressed ? 'gray300' : 'gray200'}
						overflow="hidden"
						rounded="2xl"
					>
						{IconComponent}
					</Div>
					<Heading fontWeight="normal" fontSize="lg">
						{title}
					</Heading>
				</HStack>
			)}
		</Pressable>
	)
}
