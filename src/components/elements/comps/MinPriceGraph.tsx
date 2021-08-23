import { Asset } from '@thorwallet/xchain-util'
import React from 'react'
import { usePriceGraph } from '../../helpers/use-price-graph'
import { DepthHistoryComp } from './DepthHistory'

export const MiniPriceGraph: React.FC<{
	asset: Asset
}> = ({ asset }) => {
	const { history, isRune, runeHistory, resolvedInterval, resolvedRuneInterval } = usePriceGraph(asset, '1w')
	if (!runeHistory) {
		return null
	}

	if (!isRune && !history) {
		return null
	}

	console.log({ history: JSON.stringify(history, null, 2), resolvedInterval })

	return (
		<DepthHistoryComp
			svgWidth={55}
			svgHeight={30}
			strokeWidth={2}
			depthHistory={history}
			runeHistory={runeHistory}
			selectedInterval="1w"
			resolvedDepthInterval={resolvedInterval}
			resolvedHistoryInterval={resolvedRuneInterval}
			showMinMax={false}
		/>
	)
}
