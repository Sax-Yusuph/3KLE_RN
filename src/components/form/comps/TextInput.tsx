<<<<<<< HEAD
import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { AppCustomFont } from '@elements'

import colors from '../../themes/colors'

export function AppTextInput({
	width = '100%',
	height = 50,
	text = '',
	placeholder = '',
	marginTop = 2,
	fontSize = 16,
	...otherProps
}) {
	return (
		<>
			<View style={[styles.container, { width, marginTop, height }]}>
				<TextInput
					placeholderTextColor={colors.GRAY_COLOR}
					style={[styles.text, { fontSize }]}
					// placeholderStyle={styles.placeholder}
					placeholder={placeholder}
					{...otherProps}
				/>
			</View>
			{text.length > 0 && (
				<View style={styles.alignRight}>
					<AppCustomFont style={{ color: colors.RED_COLOR, fontSize: 15 }}>
						*
						<AppCustomFont style={{ color: colors.BLACK_COLOR, fontSize: 10 }}>
							{text}
						</AppCustomFont>
					</AppCustomFont>
				</View>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.WHITE_COLOR,
		borderRadius: 14,
		height: 55,
		padding: 0,
		paddingLeft: 20,
		margin: 2,
		marginTop: 2,
	},
	icon: {
		marginRight: 10,
		marginTop: 3,
	},
	text: {
		fontSize: 16,
		width: '100%',
		color: colors.BLACK_COLOR,
		marginLeft: 2,
		marginRight: 0,
		marginTop: 'auto',
		marginBottom: 'auto',
		fontFamily: 'Poppins_400Regular',
	},
	placeholder: {
		fontFamily: 'Poppins_400Regular',
	},
	alignRight: {
		width: '70%',
		marginLeft: '30%',
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
})
=======
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {AppCustomFont} from '@elements';

import colors from '../../themes/colors';

export function AppTextInput({
  width = '100%',
  height = 50,
  text = '',
  placeholder = '',
  marginTop = 2,
  fontSize = 16,
  ...otherProps
}) {
  return (
    <>
      <View style={[styles.container, {width, marginTop, height}]}>
        <TextInput
          placeholderTextColor={colors.GRAY_COLOR}
          style={[styles.text, {fontSize}]}
          // placeholderStyle={styles.placeholder}
          placeholder={placeholder}
          {...otherProps}
        />
      </View>
      {text.length > 0 && (
        <View style={styles.alignRight}>
          <AppCustomFont style={{color: colors.RED_COLOR, fontSize: 15}}>
            *
            <AppCustomFont style={{color: colors.BLACK_COLOR, fontSize: 10}}>
              {text}
            </AppCustomFont>
          </AppCustomFont>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE_COLOR,
    borderRadius: 14,
    height: 55,
    padding: 0,
    paddingLeft: 20,
    margin: 2,
    marginTop: 2,
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
  },
  text: {
    fontSize: 16,
    width: '100%',
    color: colors.BLACK_COLOR,
    marginLeft: 2,
    marginRight: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontFamily: 'Poppins_400Regular',
  },
  placeholder: {
    fontFamily: 'Poppins_400Regular',
  },
  alignRight: {
    width: '70%',
    marginLeft: '30%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
>>>>>>> dev/setup
