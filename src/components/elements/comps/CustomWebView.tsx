<<<<<<< HEAD
import React, { Suspense } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import CustomText from 'components/CustomText'
import CustomScreen from './CustomScreen'

const WebView = React.lazy(() =>
	import('react-native-webview').then(module => ({
		default: module.WebView,
	}))
)

type ScreenRouteProp = RouteProp<any, 'WebView'>

const CustomWebView = () => {
	const { params } = useRoute<ScreenRouteProp>()

	const source = {
		uri: params?.url || 'https://reactnative.dev',
		title: params?.title || 'React Native template',
	}

	return (
		<CustomScreen>
			<Suspense fallback={<CustomText>Loading</CustomText>}>
				<WebView source={source} />
			</Suspense>
		</CustomScreen>
	)
}

export default CustomWebView
=======
import React, {Suspense} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import CustomText from 'components/CustomText';
import CustomScreen from './CustomScreen';

const WebView = React.lazy(() =>
  import('react-native-webview').then(module => ({
    default: module.WebView,
  })),
);

type ScreenRouteProp = RouteProp<any, 'WebView'>;

const CustomWebView = () => {
  const {params} = useRoute<ScreenRouteProp>();

  const source = {
    uri: params?.url || 'https://reactnative.dev',
    title: params?.title || 'React Native template',
  };

  return (
    <CustomScreen>
      <Suspense fallback={<CustomText>Loading</CustomText>}>
        <WebView source={source} />
      </Suspense>
    </CustomScreen>
  );
};

export default CustomWebView;
>>>>>>> dev/setup
