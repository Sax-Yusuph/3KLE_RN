import React from 'react'
import { Dimensions } from 'react-native'
import { Div, Text } from 'react-native-magnus'

const { width } = Dimensions.get('screen')

type Props = {
	title: string
}

const Slide: React.FC<Props> = ({ title }) => {
	return (
		<Div w={width} flex={1}>
			<Text fontSize="md" mx="xl" color="#fff" textAlign="center">
				{title}
			</Text>
		</Div>
	)
}

export default Slide
