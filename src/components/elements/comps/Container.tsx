<<<<<<< HEAD
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

export const Container: React.FC = ({ children }) => {
	return <ScrollView style={styles.container}>{children}</ScrollView>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
=======
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

export const Container: React.FC = ({children}) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
>>>>>>> dev/setup
