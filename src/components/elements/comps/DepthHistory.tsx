import { __COLORS } from '@utils/colors'
import { TimeSpan } from 'helpers/price-intervals'
import maxBy from 'lodash/maxBy'
import minBy from 'lodash/minBy'
import React, { useMemo } from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-normalized'
import Svg, { Path } from 'react-native-svg'

import { HighLowContainer, HighLowTextArea } from './HighLowTextArea'

export interface DepthHistoryItem {
	/**
	 * Int64(e8), the amount of Asset in the pool at the end of the interval
	 * @type {string}
	 * @memberof DepthHistoryItem
	 */
	assetDepth: string
	/**
	 * Float, price of asset in rune. I.e. rune amount / asset amount
	 * @type {string}
	 * @memberof DepthHistoryItem
	 */
	assetPrice: string
	/**
	 * Float, the price of asset in USD (based on the deepest USD pool).
	 * @type {string}
	 * @memberof DepthHistoryItem
	 */
	assetPriceUSD: string
	/**
	 * Int64, The end time of bucket in unix timestamp
	 * @type {string}
	 * @memberof DepthHistoryItem
	 */
	endTime: string
	/**
	 * Int64, Liquidity Units in the pool at the end of the interval
	 * @type {string}
	 * @memberof DepthHistoryItem
	 */
	liquidityUnits: string
	/**
	 * Int64(e8), the amount of Rune in the pool at the end of the interval
	 * @type {string}
	 * @memberof DepthHistoryItem
	 */
	runeDepth: string
	/**
	 * Int64, The beginning time of bucket in unix timestamp
	 * @type {string}
	 * @memberof DepthHistoryItem
	 */
	startTime: string
}

export interface DepthHistoryMeta {
	/**
	 * Int64, The end time of bucket in unix timestamp
	 * @type {string}
	 * @memberof DepthHistoryMeta
	 */
	endTime: string
	/**
	 * Int64, The beginning time of bucket in unix timestamp
	 * @type {string}
	 * @memberof DepthHistoryMeta
	 */
	startTime: string
}

export interface DepthHistory {
	/**
	 *
	 * @type {Array<DepthHistoryItem>}
	 * @memberof DepthHistory
	 */
	intervals: Array<DepthHistoryItem>
	/**
	 *
	 * @type {DepthHistoryMeta}
	 * @memberof DepthHistory
	 */
	meta: DepthHistoryMeta
}

export const DepthHistoryPlaceholder: React.FC<{
	svgWidth: number
	svgHeight: number
	showMinMax: boolean
}> = ({ svgHeight, svgWidth, showMinMax }) => {
	const Style = {
		width: svgWidth,
		height: svgHeight,
		justifyContent: 'center',
		alignItems: 'center',
	}
	return (
		<View>
			{showMinMax && <HighLowContainer />}
			{/* @ts-ignore */}
			<View style={Style}>
				<ActivityIndicator />
			</View>
			{showMinMax && <HighLowContainer />}
		</View>
	)
}

export const DepthHistoryComp: React.FC<{
	depthHistory: DepthHistory
	resolvedHistoryInterval?: TimeSpan | null
	resolvedDepthInterval: TimeSpan | null
	svgWidth: number
	svgHeight: number
	strokeWidth: number
	selectedInterval: TimeSpan
	showMinMax: boolean
}> = ({
	depthHistory,
	svgHeight,
	svgWidth,
	strokeWidth,
	resolvedDepthInterval,
	selectedInterval,
	showMinMax,
}) => {
	const [dataPoints, resolved] = useMemo(() => {
		return [
			depthHistory.intervals
				.slice(0)
				.sort((a, b) => Number(a.startTime) - Number(b.startTime))
				.map((i) => {
					const no = Number(i.assetPriceUSD)
					if (Number.isNaN(no)) {
						return 0
					}

					return no
				})
				.filter((p) => p > 0),
			resolvedDepthInterval,
		]
	}, [depthHistory, resolvedDepthInterval])

	const min = Math.min(...dataPoints)
	const max = Math.max(...dataPoints)

	const positive = dataPoints[dataPoints.length - 1] > dataPoints[0]

	const thinned = useMemo(() => {
		if (resolved !== '1w') {
			return dataPoints
		}

		return dataPoints.filter((x, i) => i % 3 === 0)
	}, [dataPoints, resolved])

	const svgPoints = useMemo(() => {
		return thinned.map((point, i) => {
			const y = (1 - (point - min) / (max - min)) * (svgHeight - strokeWidth) + strokeWidth / 2
			const x = (i / (thinned.length - 1)) * (svgWidth - strokeWidth) + strokeWidth / 2

			return { x, y, val: point }
		})
	}, [max, min, strokeWidth, svgHeight, svgWidth, thinned])

	const smallest = minBy(svgPoints, (p) => p.val)
	const biggest = maxBy(svgPoints, (p) => p.val)

	const d = svgPoints
		.map((point, i) => {
			if (i === 0) {
				return `M ${point.x} ${point.y}`
			}

			return `L ${point.x} ${point.y}`
		})
		.join(' ')

	const loaded = resolved === selectedInterval

	return (
		<View>
			{loaded ? (
				<View>
					{showMinMax ? (
						<HighLowTextArea maxWidth={svgWidth} left={biggest?.x as number} val={biggest?.val as number} />
					) : null}
					<Svg width={svgWidth} height={svgHeight}>
						<Path
							d={d}
							strokeLinecap="round"
							strokeLinejoin="round"
							stroke={positive ? __COLORS.POSITIVE : __COLORS.NEGATIVE}
							strokeWidth={strokeWidth}
						/>
					</Svg>
					{showMinMax ? (
						<HighLowTextArea maxWidth={svgWidth} left={smallest?.x as number} val={smallest?.val as number} />
					) : null}
				</View>
			) : (
				<DepthHistoryPlaceholder showMinMax svgHeight={svgHeight} svgWidth={svgWidth} />
			)}
		</View>
	)
}
