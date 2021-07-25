import React, { FC } from 'react'
import { Icon, IconProps } from 'react-native-magnus'
import { MotionBox } from './motionBox'
import Success from '@assets/svgs/success.svg'

export const HelpIcon: FC<Omit<IconProps, 'name'>> = (props) => {
	return <Icon name="questioncircleo" color="brandDark" fontSize="3xl" {...props} />
}

export const SuccessIcon = () => (
	<MotionBox animation="bounceIn" delay={1000}>
		<Success />
	</MotionBox>
)
