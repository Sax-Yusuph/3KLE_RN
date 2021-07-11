import React, { useMemo } from 'react'
import { FlatList } from 'react-native'

const VirtualizedView = React.memo(props => {
	return (
		<FlatList
			{...props}
			data={[]}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ backgroundColor: 'white' }}
			ListEmptyComponent={null}
			keyExtractor={() => 'dummy'}
			renderItem={null}
			ListHeaderComponent={useMemo(
				() => (
					<React.Fragment>{props.children}</React.Fragment>
				),
				[props]
			)}
		/>
	)
})

export default VirtualizedView
