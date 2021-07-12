import React, { FC, useEffect } from 'react'
import { BottomTabBarOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../navigators/HomeStack'
import { Text, TextProps } from 'react-native-magnus'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import ChartIcon from '@assets/svgs/bottomtab/chart.svg'

import HomeIconBold from '@assets/svgs/bottomtab/home_bold.svg'
import CardsIconBold from '@assets/svgs/bottomtab/cards_bold.svg'
import ProductsIcon from '@assets/svgs/bottomtab/products.svg'
import SettingsIconBold from '@assets/svgs/bottomtab/setting_bold.svg'
import Dummy from '../../screens/main/dummy'
import { COLORS } from '@utils/colors'
import { useAndroidBarBg } from '@hooks'

const BottomTabs = createBottomTabNavigator()

const TAB_BAR_OPTIONS: BottomTabBarOptions = {
	inactiveTintColor: COLORS.brandDark,
	activeTintColor: COLORS.purple,
	style: {
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		height: 60,
		backgroundColor: COLORS.screen,
		elevation: 0, // remove shadow on Android
		shadowOpacity: 0, // remove shadow on iOS
		position: 'absolute',
		borderTopWidth: 0,
	},
	safeAreaInsets: {
		bottom: 0,
		top: 0,
		right: 0,
		left: 0,
	},
}

const MainTabs: React.FC = () => {
	const { bottom } = useSafeAreaInsets()
	useAndroidBarBg(COLORS.screen)

	return (
		<BottomTabs.Navigator initialRouteName='HomeStack' tabBarOptions={TAB_BAR_OPTIONS}>
			<BottomTabs.Screen
				name='HomeStack'
				component={HomeStack}
				options={{
					tabBarIcon: ({ color }) => <HomeIconBold {...{ color }} />,

					tabBarLabel: props => <TabBarText {...props}>Home</TabBarText>,
				}}
			/>

			<BottomTabs.Screen
				name='Cards'
				component={Dummy}
				options={{
					tabBarIcon: ({ color, focused }) => <CardsIconBold {...{ color }} />,
					tabBarLabel: props => <TabBarText {...props}>Cards</TabBarText>,
				}}
			/>
			<BottomTabs.Screen
				name='Products'
				component={Dummy}
				options={{
					tabBarIcon: ({ color }) => <ProductsIcon {...{ color }} />,
					tabBarLabel: props => <TabBarText {...props}>Products</TabBarText>,
				}}
			/>

			<BottomTabs.Screen
				name='Summary'
				component={Dummy}
				options={{
					tabBarIcon: ({ color }) => <ChartIcon {...{ color }} />,
					tabBarLabel: props => <TabBarText {...props}>Summary</TabBarText>,
				}}
			/>
			<BottomTabs.Screen
				name='ProfileStack'
				component={Dummy}
				options={{
					tabBarIcon: ({ color }) => <SettingsIconBold {...{ color }} />,
					tabBarLabel: props => <TabBarText {...props}>Settings</TabBarText>,
				}}
			/>
		</BottomTabs.Navigator>
	)
}

export default MainTabs

const TabBarText: FC<TextProps> = props => {
	return <Text fontSize='xs' mb={6} {...props} fontWeight='500' />
}
