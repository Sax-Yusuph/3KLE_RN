import React from 'react'
import { Dimensions } from 'react-native'
import { Button, Div, DivProps, Image, Text } from 'react-native-magnus'

const { width, height } = Dimensions.get('screen')

type Props = {
	title: string
	Indicator?: React.FC<DivProps>
	index?: number
}

const Slide: React.FC<Props> = ({ title, index, Indicator }) => {
	return (
		<Div w={width} flex={1}>
			<Text fontSize='md' mx='xl' color='#fff' textAlign='center'>
				{title}
			</Text>
		</Div>
	)
}

export default Slide
