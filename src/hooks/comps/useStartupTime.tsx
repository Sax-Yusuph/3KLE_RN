import { useEffect } from 'react'
import { getTimeSinceStartup } from 'react-native-startup-time'

<<<<<<< HEAD
export function useStartupTime() {
	useEffect(() => {
		getTimeSinceStartup().then(time => {
			// Captured by FileLogger in production
			console.log({ startuptime: Math.floor(time / 1000) + 's' })
		})
=======
export function useStartupTime(): void {
	useEffect(() => {
		getTimeSinceStartup()
			.then(time => {
				// Captured by FileLogger in production
				console.log({ startuptime: Math.floor(time / 1000) + 's' })
			})
			.catch(e => {
				console.log(e.message)
			})
>>>>>>> dev/setup
	}, [])
}
