import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '@screens';

const RouterHomeStack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <RouterHomeStack.Navigator
      screenOptions={{
        headerShown: false,
        safeAreaInsets: {
          bottom: 0,
          top: 0,
          right: 0,
          left: 0,
        },
      }}>
      <RouterHomeStack.Screen name="Home" component={HomeScreen} />
    </RouterHomeStack.Navigator>
  );
};

export default HomeStack;
