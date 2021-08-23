type HistoryQuery = { interval: string; count: number }

export const priceIntervals = ['1h', '1d', '1w', '1m', '1y'] as const

export type TimeSpan = typeof priceIntervals[number]

export const intervalToQuery = (interval: TimeSpan): HistoryQuery => {
	switch (interval) {
		case '1h':
			return { interval: '5min', count: 12 }
		case '1d':
			return { interval: 'hour', count: 24 }
		case '1w':
			return { interval: 'hour', count: 24 * 7 }
		case '1m':
			return { interval: 'day', count: 30 }
		case '1y':
			return { interval: 'week', count: 52 }
		default:
			throw new TypeError('unknown interval ' + interval)
	}
}
