import { COLORS } from '@utils/colors'
import React, { FC } from 'react'
import { Switch } from 'react-native'

interface Props {
	active: boolean
	onToggle(value: boolean): void
}
const CustomSwitch: FC<Props> = ({ active, onToggle }) => {
	return (
		<Switch
			trackColor={{ false: COLORS.screen, true: COLORS.secondary_light }}
			thumbColor={active ? COLORS.secondary : '#f4f3f4'}
			ios_backgroundColor={COLORS.screen}
			onValueChange={onToggle}
			value={active}
		/>
	)
}

export default CustomSwitch
