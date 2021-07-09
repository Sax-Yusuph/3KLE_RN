<<<<<<< HEAD
import React from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-magnus'

import { AppCustomFont as AppCustomText } from '@elements'
import colors from '../../themes/colors'

export function CountryPicker(props: any) {
	return (
		<>
			<TouchableWithoutFeedback onPress={props.onPress}>
				<View style={[styles.container, { width: props.width }]}>
					<View style={{ flexDirection: 'row', marginTop: -7 }}>
						<AppCustomText style={styles.smallText}>Country</AppCustomText>
						<Icon
							fontFamily='MaterialCommunityIcons'
							name='chevron-down'
							fontSize={12}
							color={colors.MEDIUM_COLOR}
						/>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 7 }}>
						<Image
							style={{ height: 14, width: 18, marginTop: 2, marginRight: 8 }}
							source={require('@assets/png/nigeria-flag.png')}
						/>
						<AppCustomText style={styles.text}>+234</AppCustomText>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.WHITE_COLOR,
		borderRadius: 15,
		flexDirection: 'column',
		padding: 15,
		width: '100%',
		height: 70,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	placeholder: {
		color: colors.MEDIUM_COLOR,
		flex: 1,
		fontSize: 16,
	},
	text: {
		flex: 1,
		color: colors.BLACK_COLOR,
	},
	smallText: {
		flex: 1,
		color: colors.GRAY_COLOR,
		fontSize: 12,
	},
})
=======
import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-magnus';

import {AppCustomFont as AppCustomText} from '@elements';
import colors from '../../themes/colors';

export function CountryPicker(props: any) {
  return (
    <>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={[styles.container, {width: props.width}]}>
          <View style={{flexDirection: 'row', marginTop: -7}}>
            <AppCustomText style={styles.smallText}>Country</AppCustomText>
            <Icon
              fontFamily="MaterialCommunityIcons"
              name="chevron-down"
              fontSize={12}
              color={colors.MEDIUM_COLOR}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Image
              style={{height: 14, width: 18, marginTop: 2, marginRight: 8}}
              source={require('@assets/png/nigeria-flag.png')}
            />
            <AppCustomText style={styles.text}>+234</AppCustomText>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE_COLOR,
    borderRadius: 15,
    flexDirection: 'column',
    padding: 15,
    width: '100%',
    height: 70,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.MEDIUM_COLOR,
    flex: 1,
    fontSize: 16,
  },
  text: {
    flex: 1,
    color: colors.BLACK_COLOR,
  },
  smallText: {
    flex: 1,
    color: colors.GRAY_COLOR,
    fontSize: 12,
  },
});
>>>>>>> dev/setup
