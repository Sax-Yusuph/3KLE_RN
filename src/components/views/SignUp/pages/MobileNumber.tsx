import React, {useState} from 'react';
import {View} from 'react-native';
import {Country} from '@types';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {AppCustomFont as AppCustomText} from '@elements';
import {AppButton} from '@form';
import {CountryPicker} from '@form';
import routes from '../../../../navigation/navigators/routes';
import styles from './../style';
import colors from '../../../themes/colors';

export const CountrySelector = (props: any) => {
  const {navigation} = props;
  const [phone, setPhone] = useState<string>('');
  const onSelect = (country: Country) => {
    console.log(country.callingCode[0], country.cca2, country.name);
  };
  return (
    <View style={styles.container}>
      <AppCustomText style={styles.header}>Enter Mobile Number</AppCustomText>
      <AppCustomText style={styles.subText}>
        Please fill the form below to continue
      </AppCustomText>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
        }}>
        <View style={{flex: 1}}>
          <CountryPicker />
        </View>
        <View style={{flex: 2, marginLeft: 10}}>
          <FloatingLabelInput
            label="Enter mobile number"
            value={phone}
            isFocused={false}
            keyboardType="numeric"
            maxLength={10}
            containerStyles={{
              borderWidth: 2,
              paddingHorizontal: 0,
              paddingTop: 15,
              height: 70,
              marginTop: 10,
              backgroundColor: '#fff',
              borderColor: colors.WHITE_COLOR,
              color: colors.GRAY_COLOR,
              borderRadius: 8,
              paddingBottom: 5,
            }}
            customLabelStyles={{
              fontSizeFocused: 12,
              color: colors.GRAY_COLOR,
            }}
            labelStyles={{
              backgroundColor: '#fff',
              paddingHorizontal: 5,
              fontSize: 12,
              color: colors.BLACK_COLOR,
            }}
            inputStyles={{
              color: colors.BLACK_COLOR,
              fontSize: 17,
              marginTop: 5,
              marginBottom: -10,
              paddingHorizontal: 10,
            }}
            onChangeText={(value: string) => setPhone(value)}
          />
          <View style={[styles.alignRight, {width: '110%', marginLeft: 0}]}>
            <AppCustomText style={{color: colors.RED_COLOR, fontSize: 15}}>
              *
              <AppCustomText style={{color: colors.BLACK_COLOR, fontSize: 9}}>
                We will send your verification code to this number.
              </AppCustomText>
            </AppCustomText>
          </View>
        </View>
      </View>
      <View style={styles.buttonBottom}>
        <AppButton
          title={'Next'}
          onPress={() => navigation.navigate(routes.REGISTER.STEP_TWO)}
          color={colors.DEEP_BLUE_COLOR}
        />
        <View style={styles.alignCenter}>
          <AppCustomText style={styles.loginText}>
            Already have an account?
          </AppCustomText>
          <AppCustomText style={styles.loginBtn}>Login</AppCustomText>
        </View>
      </View>
    </View>
  );
};
