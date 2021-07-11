import React from 'react'
import { Host } from 'react-native-magnus'
import Root from './navigation/core/Root'

const App: React.FC = () => {
	return (
		// Host component allows us to have things like toasts,
		// FABs and other views we want to show above our regular screen
		<Host>
			<Root />
		</Host>
	)
}

export default App
