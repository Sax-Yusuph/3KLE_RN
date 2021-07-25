import React from 'react'
import FastImage, { FastImageProps } from 'react-native-fast-image'

interface Props extends FastImageProps {}

const CustomImage = ({ source, style, ...props }: Props) => (
	<FastImage key={source + ''} resizeMode={FastImage.resizeMode.cover} {...{ source, style, ...props }} />
)

export default CustomImage
