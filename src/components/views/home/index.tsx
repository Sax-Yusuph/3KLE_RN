import React from 'react'
<<<<<<< HEAD
import { SafeAreaView } from 'react-native'
import { Div, Text } from 'react-native-magnus'
import { Tabs } from 'react-native-collapsible-tab-view'
=======
import { ScrollView } from 'react-native'
import { Div, Text } from 'react-native-magnus'
import { TabBarProps, Tabs } from 'react-native-collapsible-tab-view'
>>>>>>> dev/setup
import { MaterialTabBar } from '@modules'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ChatIcon from '@assets/svgs/chat.svg'
import { FocusAwareStatusBar, HStack } from '@elements'
import { useAndroidBarBg } from '../../../hooks/comps/useAndroidBarBg'
import { Section3 } from './extra/stocks'
import { TopNews, Header } from './extra'
<<<<<<< HEAD
=======
import { SafeAreaView } from 'react-native-safe-area-context'
>>>>>>> dev/setup

const TopTabs = () => {
	return (
		// @ts-ignore
		<Tabs.ScrollView showsVerticalScrollIndicator={false}>
			<Section3 />
			<TopNews />
			<Div h={100} />
			<ChatWithUs />
			<Div h={80} />
		</Tabs.ScrollView>
	)
}

const Home: React.FC = () => {
	useAndroidBarBg('#F4F7F9')

	const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets()
	const CONTAINER_STYLE = { backgroundColor: '#fff', paddingTop, paddingBottom }
	return (
<<<<<<< HEAD
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<FocusAwareStatusBar />
				<Header />
				{/* <Tabs.Container
					renderHeader={Header}
					containerStyle={CONTAINER_STYLE}
					//@ts-ignore
					// renderTabBar={props => <MaterialTabBar {...{ ...props, ...TabBarStyles }} />}
				>
					<Tabs.Tab name='Top Stocks'>
						<TopTabs />
					</Tabs.Tab>
					<Tabs.Tab name='All Stocks'>
						<TopTabs />
					</Tabs.Tab>
					<Tabs.Tab name='Favourites'>
						<TopTabs />
					</Tabs.Tab>
				</Tabs.Container> */}
			</SafeAreaView>
		</>
=======
		<ScrollView>
			<SafeAreaView style={{ flex: 1 }}>
				<FocusAwareStatusBar />

				<Tabs.Container
					renderHeader={Header}
					containerStyle={CONTAINER_STYLE}
					//@ts-ignore
					renderTabBar={props => (
						<MaterialTabBar {...{ ...props, ...TabBarStyles }} />
					)}
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
		</ScrollView>
>>>>>>> dev/setup
	)
}

export default Home

const ChatWithUs = () => {
	return (
<<<<<<< HEAD
		<HStack justifyContent='center'>
			<Text fontSize='sm' color='textFade' mr='md'>
=======
		<HStack justifyContent="center">
			<Text fontSize="sm" color="textFade" mr="md">
>>>>>>> dev/setup
				Chat With us
			</Text>
			<ChatIcon />
		</HStack>
	)
}

<<<<<<< HEAD
const TabBarStyles = {
=======
const TabBarStyles: TabBarProps<any> = {
	//@ts-ignore
>>>>>>> dev/setup
	contentContainerStyle: { elevation: 0, shadowOpacity: 0 },
	labelStyle: {
		textTransform: 'capitalize',
		// fontSize: 12,
	},
<<<<<<< HEAD
	indicatorStyle: { backgroundColor: '#833AB4', width: 30, left: 60, height: 5 },
=======
	indicatorStyle: {
		backgroundColor: '#833AB4',
		width: 30,
		left: 60,
		height: 5,
	},
>>>>>>> dev/setup
}
