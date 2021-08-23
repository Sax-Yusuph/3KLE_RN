import React from 'react'
import { ScrollView } from 'react-native'
import { Div } from 'react-native-magnus'
import { Tabs } from 'react-native-collapsible-tab-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ChatWithUs } from '@elements'
import { useAndroidBarBg } from '../../../hooks/comps/useAndroidBarBg'
import { Section3 } from '../extra/stocks'
import { TopNews, Header } from '../extra'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialTabBar } from '@modules'

const TopTabs = () => {
	return (
		// @ts-ignore
		<SafeAreaView>
			<Tabs.ScrollView showsVerticalScrollIndicator={false}>
				<Section3 />
				<TopNews />
				<Div h={100} />
				<ChatWithUs />
				<Div h={80} />
			</Tabs.ScrollView>
		</SafeAreaView>
	)
}

export const SelfTradeDashboard: React.FC = () => {
	useAndroidBarBg('#F4F7F9')
	const CONTAINER_STYLE = { backgroundColor: '#fff' }
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<Tabs.Container
				renderHeader={Header}
				containerStyle={CONTAINER_STYLE}
				//@ts-ignore
				renderTabBar={(props) => <MaterialTabBar {...{ ...props, ...TabBarStyles }} />}
			>
				<Tabs.Tab name="Top Stocks">
					<TopTabs />
				</Tabs.Tab>
				<Tabs.Tab name="All Stocks">
					<TopTabs />
				</Tabs.Tab>
				<Tabs.Tab name="Favourites">
					<TopTabs />
				</Tabs.Tab>
			</Tabs.Container>
		</SafeAreaView>
	)
}

const TabBarStyles = {
	contentContainerStyle: { elevation: 0, shadowOpacity: 0 },
	labelStyle: {
		textTransform: 'capitalize',
		// fontSize: 12,
	},
	indicatorStyle: { backgroundColor: '#833AB4', width: 30, left: 60, height: 5 },
}
