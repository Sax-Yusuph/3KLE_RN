import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-magnus';

import {AppCustomFont as AppCustomText} from '@elements';
import colors from '../../themes/colors';

export function CountryPickerWithName(props: any) {
  return (
    <>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={[styles.container, {width: props.width}]}>
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <Image
              style={{height: 40, width: 45, marginTop: 2, marginRight: 5}}
              source={require('@assets/png/large-nigeria-flag.png')}
            />
            <AppCustomText style={styles.text}>Nigeria</AppCustomText>
            <View style={{flex: 1}} />
            <Icon
              name="caretdown"
              fontSize={14}
              style={{alignSelf: 'center'}}
              color={colors.BLACK_COLOR}
            />
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
    paddingTop: 5,
    paddingHorizontal: 10,
    width: '100%',
    height: 60,
    marginVertical: 2,
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
    marginTop: 10,
  },
  smallText: {
    flex: 1,
    color: colors.GRAY_COLOR,
    fontSize: 12,
  },
});
