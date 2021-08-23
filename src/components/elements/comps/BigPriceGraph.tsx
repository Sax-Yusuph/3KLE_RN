import { SPACING, __WINDOW_WIDTH } from '@utils/constants'
import { priceIntervals, TimeSpan } from 'helpers/price-intervals'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Div } from 'react-native-magnus'
import { Text } from 'react-native-normalized'
import { AnimatedPress } from './animatedButton'
import { Heading } from './AppText'
import { DepthHistoryComp, DepthHistoryPlaceholder } from './DepthHistory'

const TouchableLabel = styled(Text)<{
	active: boolean
}>`
	font-weight: bold;
	color: white;
	text-align: center;
	opacity: ${(props) => (props.active ? 1 : 0.5)};
`

export const BigPriceGraph: React.FC<{
	asset: Asset
}> = ({ asset }) => {
	const [interval, changeInterval] = useState<TimeSpan>('1w')
	const width = __WINDOW_WIDTH - SPACING * 2
	const height = width / 2
	const { history, isRune, runeHistory, resolvedInterval } = usePriceGraph(asset, interval)

	if (!runeHistory) {
		return <DepthHistoryPlaceholder showMinMax svgHeight={height} svgWidth={width} />
	}

	if (!isRune && !history) {
		return <DepthHistoryPlaceholder showMinMax svgHeight={height} svgWidth={width} />
	}

	return (
		<View>
			<Div my={10} />
			<DepthHistoryComp
				svgWidth={width}
				svgHeight={height}
				strokeWidth={3}
				depthHistory={history}
				resolvedDepthInterval={resolvedInterval}
				selectedInterval={interval}
				showMinMax
			/>
			<Div flexDir="row">
				{priceIntervals.map((int) => {
					return (
						<AnimatedPress py={10} flex={1} key={int} onPress={() => changeInterval(int)}>
							<Heading
								fontWeight="bold"
								color="brandDark"
								textAlign="center"
								opacity={int === interval ? 1 : 0.5}
							>
								{int.toUpperCase()}
							</Heading>
						</AnimatedPress>
					)
				})}
			</Div>
		</View>
	)
}
