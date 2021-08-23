import { HStack } from '@elements'
import React, { FC } from 'react'
import { Div, Text, TextProps } from 'react-native-magnus'

export type TextSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
export type TextSizeProps = Record<TextSizes, boolean>

export const AppCustomFont: FC<TextProps> = (props) => {
	// so here i used the Text from magnus Ui..
	//by default, it has all the props out of the box..
	// the colors we have defined in src/themes.ts can also be applied directly
	// fontsizes can be a number or prefined sizes such as xs, sm, md, lg, xl, up to 6xl
	return (
		<Text color="textLight" fontSize={14}>
			{props.children}
		</Text>
	)
}

//Heading --> Modification of the TextProp to have a fontweight bold for headings..
//font sizes could be customized as need.
// the props could easily override any of the settings
export const Heading: FC<TextProps> = ({ children, ...props }) => (
	<Text fontWeight="bold" color="brandDark" fontSize="xl" {...props}>
		{children}
	</Text>
)

export const BigText: FC<TextProps> = ({ children, ...props }) => (
	<Text fontWeight="bold" color="brandDark" fontSize="3xl" {...props}>
		{children}
	</Text>
)

//heading --> Modification of the TextProp to have a fontweight bold for headings..
//font sizes could be customized as need.
// the props could easily override any of the settings

export const SmallText: FC<TextProps> = ({ children, ...props }) => (
	<Text fontSize="sm" {...props}>
		{children}
	</Text>
)

export const FadedText: FC<TextProps> = ({ children, ...props }) => (
	<Text fontSize="sm" color="textFade" {...props}>
		{children}
	</Text>
)

export const Paragraph: FC<TextProps> = ({ children, ...props }) => (
	<Text fontSize="md" color="brandDark" {...props}>
		{children}
	</Text>
)

export const SemiBoldtext: FC<TextProps & Partial<TextSizeProps>> = ({
	children,
	h1,
	h2,
	h3,
	h4,
	...props
}) => {
	const size = h1 ? '4xl' : h2 ? '3xl' : h3 ? '2xl' : h4 ? 'xl' : 'lg'
	return (
		<Text fontSize={size} color="brandDark" {...props} fontFamily="Poppins-SemiBold">
			{children}
		</Text>
	)
}

export const MediumText: FC<TextProps & Partial<TextSizeProps>> = ({
	children,
	h1,
	h2,
	h3,
	h4,
	...props
}) => {
	const size = h1 ? '4xl' : h2 ? '3xl' : h3 ? '2xl' : h4 ? 'xl' : 'lg'
	return (
		<Text fontSize={size} color="brandDark" {...props} fontFamily="Poppins-Medium">
			{children}
		</Text>
	)
}

export const RegularText: FC<TextProps> = ({ children, ...props }) => (
	<Text fontSize="md" color="brandDark" {...props} fontFamily="Poppins-Regular">
		{children}
	</Text>
)

export const AppLogo: FC<TextProps> = () => (
	<HStack justifyContent="flex-end" mb="lg">
		<Heading color="card" fontSize="6xl" fontFamily="Montserrat-Bold">
			3kle
		</Heading>
		<Div w={10} h={10} bg="brand" ml="sm" bottom={-6} />
	</HStack>
)
