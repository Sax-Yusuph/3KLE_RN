import { AnimatedPress } from '@elements'
import { useNavigation } from '@react-navigation/native'
import { __COLORS } from '@utils/colors'
import { PADDING } from '@utils/constants'
import React, { useCallback } from 'react'
import { Div, Icon } from 'react-native-magnus'
import Close from '../../../assets/svg/close.svg'

const ARROW_SIZE = 20
type Props = {
	modal?: boolean
}
export const HeaderLeft = ({ modal }: Props) => {
	const navigation = useNavigation()
	const goBack = useCallback(() => navigation.goBack(), [navigation])

	return (
		<Div flexDir="row" px={PADDING}>
			<AnimatedPress onPress={goBack}>
				{modal ? (
					<Close width={ARROW_SIZE - 2} height={ARROW_SIZE - 2} color={__COLORS.BLACK} />
				) : (
					<Icon fontSize={ARROW_SIZE} fontFamily="AntDesign" name="back" color={__COLORS.WHITE} />
				)}
			</AnimatedPress>
		</Div>
	)
}
