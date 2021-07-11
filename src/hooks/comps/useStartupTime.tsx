import { useEffect } from 'react'
import { getTimeSinceStartup } from 'react-native-startup-time'

export function useStartupTime() {
	useEffect(() => {
		getTimeSinceStartup().then(time => {
			// Captured by FileLogger in production
			console.log({ startuptime: Math.floor(time / 1000) + 's' })
		})
	}, [])
}
