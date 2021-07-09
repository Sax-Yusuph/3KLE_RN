import React from 'react'
import CustomText from 'components/CustomText'
import WifiOff from 'assets/wifi-off.svg'
import CustomScreen from './CustomScreen'
import { Center } from './stacks'
import { Heading, Paragraph } from './AppText'

const NetworkError = () => (
	<CustomScreen justifyContent={'space-around'}>
		<Center maxW={294}>
			<WifiOff />
			<Heading mt={60} mb={20}>
				No internet connection
			</Heading>
			<Paragraph>
				Please check your internet connection settings and try again.
			</Paragraph>
		</Center>
	</CustomScreen>
)

export default NetworkError
