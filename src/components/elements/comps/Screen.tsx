<<<<<<< HEAD
import React from 'react'
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native'

export function Screen(props: any) {
	return (
		<SafeAreaView style={[styles.screen, props.style]}>
			<View style={[styles.view, props.style]}>{props.children}</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: StatusBar.currentHeight,
		flex: 1,
	},
	view: {
		flex: 1,
	},
})
=======
import React from 'react';
import {StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';

export function Screen(props: any) {
  return (
    <SafeAreaView style={[styles.screen, props.style]}>
      <View style={[styles.view, props.style]}>{props.children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
>>>>>>> dev/setup
