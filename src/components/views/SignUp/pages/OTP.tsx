<<<<<<< HEAD
import React, { useRef, useEffect, useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { AppCustomFont as AppCustomText } from '@elements'
import { Option } from '@types'
import { TransparentButton, AppButton } from '@form'
import routes from '../../../../navigation/navigators/routes'
import colors from '../../../themes/colors'
import styles from '../style'

export default function OTP(props: any) {
	const { navigation } = props
	const inputRef = useRef<any>([])
	const [otp, setOTP] = useState<Option[]>([])
	const [counter, setCounter] = React.useState<number>(60)

	const handleInputChange = (e: string, index: number) => {
		if (e.length > 0 && index < 5) {
			setOTP(otp => [...otp.filter(obj => obj.id !== index), { id: index, value: e }])
			inputRef.current[index + 1].focus()
		}
	}

	useEffect(() => {
		counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
	}, [counter])

	return (
		<View style={styles.container}>
			<AppCustomText style={styles.header}>INPUT 6-DIGIT CODE</AppCustomText>
			<AppCustomText style={styles.subText}>
				Please enter the code sent to
				<AppCustomText style={{ color: colors.THREEKLE_BLUE_COLOR }}> +2347044536664</AppCustomText>
			</AppCustomText>

			<View style={{ height: 70, flexDirection: 'row', marginTop: 50 }}>
				{[1, 2, 3, 4, 5, 6].map((el, i) => (
					<View style={styl.container} key={el}>
						<TextInput
							placeholderTextColor={colors.GRAY_COLOR}
							style={styl.text}
							keyboardType='numeric'
							onChangeText={text => handleInputChange(text, i)}
							ref={ref => inputRef.current.push(ref)}
							maxLength={1}
						/>
					</View>
				))}
			</View>
			<View style={{ flexDirection: 'row', marginTop: 20 }}>
				<AppCustomText style={{ color: colors.THREEKLE_BLUE_COLOR, marginTop: 3, marginLeft: 5 }}>
					00:{counter}
				</AppCustomText>
				<View style={[styles.alignRight, { width: '100%', marginLeft: 5 }]}>
					<AppCustomText style={{ color: colors.BLACK_COLOR, marginRight: 5 }}>
						Did not recieve code?
					</AppCustomText>
					<TransparentButton
						title={'RESEND CODE'}
						marginTop={-23}
						onPress={() => console.log('Function of Parent o!')}
						color={colors.THREEKLE_BLUE_COLOR}
					/>
				</View>
			</View>
			<View style={styles.buttonBottom}>
				<AppButton
					title={'Next'}
					onPress={() => navigation.navigate(routes.REGISTER.STEP_THREE)}
					color={colors.DEEP_BLUE_COLOR}
				/>
				<View style={[styles.alignCenter, { marginTop: -8, marginBottom: -10, width: '80%' }]}>
					<AppCustomText style={[styles.loginText, { fontSize: 10, marginTop: 10 }]}>
						By clicking the above button, you agree to our
						<AppCustomText style={{ color: colors.THREEKLE_BLUE_COLOR, fontSize: 10 }}>
							{' Terms & Conditions '}
						</AppCustomText>
						and
						<AppCustomText style={{ color: colors.THREEKLE_BLUE_COLOR, fontSize: 10 }}>
							{' Privacy Policy. '}
						</AppCustomText>
						Your data is secured & will not be shared with any third party.
					</AppCustomText>
				</View>
			</View>
		</View>
	)
}

const styl = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		borderRadius: 20,
		flexDirection: 'row',
		padding: 0,
		paddingLeft: 20,
		width: '14%',
		margin: 4,
	},
	icon: {
		marginRight: 10,
		marginTop: 3,
	},
	text: {
		fontSize: 18,
		width: '100%',
		color: '#000000',
		marginLeft: 0,
		marginRight: 0,
	},
})
=======
import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {AppCustomFont as AppCustomText} from '@elements';
import {Option} from '@types';
import {TransparentButton, AppButton} from '@form';
import routes from '../../../../navigation/navigators/routes';
import colors from '../../../themes/colors';
import styles from '../style';

export default function OTP(props: any) {
  const {navigation} = props;
  const inputRef = useRef<any>([]);
  const [otp, setOTP] = useState<Option[]>([]);
  const [counter, setCounter] = React.useState<number>(60);

  const handleInputChange = (e: string, index: number) => {
    if (e.length > 0 && index < 5) {
      setOTP(otp => [
        ...otp.filter(obj => obj.id !== index),
        {id: index, value: e},
      ]);
      inputRef.current[index + 1].focus();
    }
  };

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <View style={styles.container}>
      <AppCustomText style={styles.header}>INPUT 6-DIGIT CODE</AppCustomText>
      <AppCustomText style={styles.subText}>
        Please enter the code sent to
        <AppCustomText style={{color: colors.THREEKLE_BLUE_COLOR}}>
          {' '}
          +2347044536664
        </AppCustomText>
      </AppCustomText>

      <View style={{height: 70, flexDirection: 'row', marginTop: 50}}>
        {[1, 2, 3, 4, 5, 6].map((el, i) => (
          <View style={styl.container} key={el}>
            <TextInput
              placeholderTextColor={colors.GRAY_COLOR}
              style={styl.text}
              keyboardType="numeric"
              onChangeText={text => handleInputChange(text, i)}
              ref={ref => inputRef.current.push(ref)}
              maxLength={1}
            />
          </View>
        ))}
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <AppCustomText
          style={{
            color: colors.THREEKLE_BLUE_COLOR,
            marginTop: 3,
            marginLeft: 5,
          }}>
          00:{counter}
        </AppCustomText>
        <View style={[styles.alignRight, {width: '100%', marginLeft: 5}]}>
          <AppCustomText style={{color: colors.BLACK_COLOR, marginRight: 5}}>
            Did not recieve code?
          </AppCustomText>
          <TransparentButton
            title={'RESEND CODE'}
            marginTop={-23}
            onPress={() => console.log('Function of Parent o!')}
            color={colors.THREEKLE_BLUE_COLOR}
          />
        </View>
      </View>
      <View style={styles.buttonBottom}>
        <AppButton
          title={'Next'}
          onPress={() => navigation.navigate(routes.REGISTER.STEP_THREE)}
          color={colors.DEEP_BLUE_COLOR}
        />
        <View
          style={[
            styles.alignCenter,
            {marginTop: -8, marginBottom: -10, width: '80%'},
          ]}>
          <AppCustomText
            style={[styles.loginText, {fontSize: 10, marginTop: 10}]}>
            By clicking the above button, you agree to our
            <AppCustomText
              style={{color: colors.THREEKLE_BLUE_COLOR, fontSize: 10}}>
              {' Terms & Conditions '}
            </AppCustomText>
            and
            <AppCustomText
              style={{color: colors.THREEKLE_BLUE_COLOR, fontSize: 10}}>
              {' Privacy Policy. '}
            </AppCustomText>
            Your data is secured & will not be shared with any third party.
          </AppCustomText>
        </View>
      </View>
    </View>
  );
}

const styl = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 0,
    paddingLeft: 20,
    width: '14%',
    margin: 4,
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
  },
  text: {
    fontSize: 18,
    width: '100%',
    color: '#000000',
    marginLeft: 0,
    marginRight: 0,
  },
});
>>>>>>> dev/setup
