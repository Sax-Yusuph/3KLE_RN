import React, { FC } from 'react'
import { BottomTabBarOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../navigators/HomeStack'
import { Text, TextProps } from 'react-native-magnus'
import ChartIcon from '@assets/svgs/bottomtab/chart.svg'
import HomeIconBold from '@assets/svgs/bottomtab/home_bold.svg'
import HomeIcon from '@assets/svgs/bottomtab/home.svg'
import CardsIconBold from '@assets/svgs/bottomtab/cards_bold.svg'
import CardsIcon from '@assets/svgs/bottomtab/cards.svg'
import ProductsIcon from '@assets/svgs/bottomtab/products.svg'
import SettingsIconBold from '@assets/svgs/bottomtab/setting_bold.svg'
import SettingsIcon from '@assets/svgs/bottomtab/setting.svg'
import Dummy from '../../screens/main/dummy'
import { COLORS } from '@utils/colors'
import { useAndroidBarBg } from '@hooks'
import CardStack from '@navigation/navigators/CardsStack'
import ProfileStack from '@navigation/navigators/ProfileStack'

const BottomTabs = createBottomTabNavigator()

const TAB_BAR_OPTIONS: BottomTabBarOptions = {
	inactiveTintColor: COLORS.brandDark,
	activeTintColor: COLORS.brandDark,
	style: {
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		// height: 60,
		backgroundColor: COLORS.screen,
		elevation: 0, // remove shadow on Android
		shadowOpacity: 0, // remove shadow on iOS
		position: 'absolute',
		borderTopWidth: 0,
	},
}

const MainTabs: React.FC = () => {
	useAndroidBarBg(COLORS.screen)

	return (
		<BottomTabs.Navigator initialRouteName="HomeStack" tabBarOptions={TAB_BAR_OPTIONS}>
			<BottomTabs.Screen
				name="HomeStack"
				component={HomeStack}
				options={{
					tabBarIcon: ({ color, focused }) =>
						focused ? <HomeIconBold {...{ color }} /> : <HomeIcon {...{ color }} />,

					tabBarLabel: (props) => <TabBarText {...props}>Home</TabBarText>,
				}}
			/>

			<BottomTabs.Screen
				name="Cards"
				component={CardStack}
				options={{
					tabBarIcon: ({ color, focused }) =>
						focused ? <CardsIconBold {...{ color }} /> : <CardsIcon {...{ color }} />,
					tabBarLabel: (props) => <TabBarText {...props}>Cards</TabBarText>,
				}}
			/>
			<BottomTabs.Screen
				name="Products"
				component={Dummy}
				options={{
					tabBarIcon: ({ color }) => <ProductsIcon {...{ color }} />,
					tabBarLabel: (props) => <TabBarText {...props}>Products</TabBarText>,
				}}
			/>

			<BottomTabs.Screen
				name="Summary"
				component={Dummy}
				options={{
					tabBarIcon: ({ color }) => <ChartIcon {...{ color }} />,
					tabBarLabel: (props) => <TabBarText {...props}>Summary</TabBarText>,
				}}
			/>
			<BottomTabs.Screen
				name="ProfileStack"
				component={ProfileStack}
				options={{
					tabBarIcon: ({ color, focused }) =>
						focused ? <SettingsIconBold {...{ color }} /> : <SettingsIcon {...{ color }} />,
					tabBarLabel: (props) => <TabBarText {...props}>Profile</TabBarText>,
				}}
			/>
		</BottomTabs.Navigator>
	)
}

export default MainTabs

const TabBarText: FC<TextProps> = (props) => {
	return <Text fontSize="xs" {...props} fontWeight="500" />
}
