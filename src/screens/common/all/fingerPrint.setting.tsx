import { Center, CustomScreen, Header, Heading, HStack, Paragraph, VirtualizedView } from '@elements'
import { COLORS } from '@utils/colors'
import React, { FC, useState } from 'react'
import { Switch } from 'react-native'
import { Div } from 'react-native-magnus'

const ActivateFingerPrint = () => {
	const [enableFingerprint, setEnableFingerprint] = useState(false)

	return (
		<CustomScreen>
			<VirtualizedView>
				<Center>
					<Header title="" backIcon="arrowleft" />
					<Div alignSelf="flex-start" px="xl" w="100%">
						<Heading>Hello Fingerprint</Heading>
						<Paragraph>Activiate or deactivate fingerprint</Paragraph>

						<SettingItem
							title="Turn On/Off Fingerprint"
							active={enableFingerprint}
							onToggle={setEnableFingerprint}
							subtitle="Add an extra layer of security to your 3KLE account by activating your fingerprint"
						/>
						<Paragraph fontSize="sm">
							Add an extra layer of security to your 3KLE account by activating your fingerprint
						</Paragraph>
					</Div>
				</Center>
			</VirtualizedView>
		</CustomScreen>
	)
}

export default ActivateFingerPrint

interface OptionProps {
	title: string
	active: boolean
	onToggle: (val: boolean) => void
	subtitle: string
}

const SettingItem: FC<OptionProps> = ({ title, active, onToggle }) => {
	return (
		<HStack py="3xl" pb="lg" justifyContent="space-between">
			<Heading fontSize="lg" fontWeight="500">
				{title}
			</Heading>
			<Switch
				trackColor={{ false: '#767577', true: COLORS.secondary_light }}
				thumbColor={active ? COLORS.secondary : '#f4f3f4'}
				ios_backgroundColor="#3e3e3e"
				onValueChange={onToggle}
				value={active}
			/>
		</HStack>
	)
}
