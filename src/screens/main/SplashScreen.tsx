import React, {FC} from 'react';
import {SplashScreen as ContentView} from '@views';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any, any>;
}
const SplashScreen: FC<Props> = ({navigation}) => {
  return <ContentView {...{navigation}} />;
};

export default SplashScreen;
