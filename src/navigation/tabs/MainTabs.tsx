import React, {FC, useEffect} from 'react';
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeStack from '../navigators/HomeStack';
import {Icon, Text, TextProps} from 'react-native-magnus';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeIcon from '@assets/svgs/home.svg';
import MarketIcon from '@assets/svgs/market.svg';
import ChartIcon from '@assets/svgs/chart.svg';
import SettingsIcon from '@assets/svgs/setting.svg';
import HomeIconBold from '@assets/svgs/home_bold.svg';
import SettingsIconBold from '@assets/svgs/setting_bold.svg';
import Dummy from '../../screens/main/dummy';

const RouterMainTabs = createBottomTabNavigator();

const TAB_BAR_OPTIONS: BottomTabBarOptions = {
  inactiveTintColor: '#243B80',
  activeTintColor: '#243B80',
  style: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    height: 60,
    backgroundColor: '#F4F7F9',
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
};

const MainTabs: React.FC = () => {
  const {bottom} = useSafeAreaInsets();

  return (
    <RouterMainTabs.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={TAB_BAR_OPTIONS}>
      <RouterMainTabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? <HomeIconBold /> : <HomeIcon {...{color}} />,

          tabBarLabel: props => <TabBarText {...props}>Home</TabBarText>,
        }}
      />

      <RouterMainTabs.Screen
        name="MarketStack"
        component={Dummy}
        options={{
          tabBarIcon: ({color}) => <MarketIcon {...{color}} />,
          tabBarLabel: props => <TabBarText {...props}>Markets</TabBarText>,
        }}
      />
      <RouterMainTabs.Screen
        name="Summary"
        component={Dummy}
        options={{
          tabBarIcon: ({color}) => <ChartIcon {...{color}} />,
          tabBarLabel: props => <TabBarText {...props}>Summary</TabBarText>,
        }}
      />
      <RouterMainTabs.Screen
        name="ProfileStack"
        component={Dummy}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <SettingsIconBold {...{color}} />
            ) : (
              <SettingsIcon {...{color}} />
            ),
          tabBarLabel: props => <TabBarText {...props}>Settings</TabBarText>,
        }}
      />
    </RouterMainTabs.Navigator>
  );
};

export default MainTabs;

const TabBarText: FC<TextProps> = props => {
  return <Text fontSize="xs" mb={6} {...props} fontWeight="500" />;
};
