<<<<<<< HEAD
import React, { useState } from 'react'
import { View, Platform } from 'react-native'
import { Checkbox } from 'native-base'
import DateTimePicker from '@react-native-community/datetimepicker'
import { AppCustomFont as AppCustomText } from '@elements'
import colors from '../../../themes/colors'
import routes from '../../../../navigation/navigators/routes'
import styles from '../style'
import { EmptyPicker, AppButton, AppTextInput as AppCustomInput } from '@form'

export default function CreateAccont(props: any) {
	const { navigation } = props
	const [date, setDate] = useState(new Date(1598051730000))
	const [mode, setMode] = useState<string>('date')
	const [show, setShow] = useState(false)

	const onChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || date
		setShow(Platform.OS === 'ios')
		setDate(currentDate)
		console.log(currentDate)
	}

	const showMode = (currentMode: any) => {
		setShow(true)
		setMode(currentMode)
	}

	const showDatepicker = () => {
		showMode('date')
	}

	const showTimepicker = () => {
		showMode('time')
	}

	return (
		// <KeyboardAvoidingView
		//     behavior={Platform.OS === "ios" ? "padding" : "height"}
		//     style={styles.container}
		// >
		<View style={styles.container}>
			<AppCustomText style={[styles.header, { fontFamily: 'Poppins_900Black' }]}>
				CREATE A
				<AppCustomText
					style={{ color: colors.THREEKLE_BLUE_COLOR, fontSize: 18, fontWeight: 'bold' }}
				>
					{' '}
					3KLE{' '}
				</AppCustomText>
				ACCOUNT
			</AppCustomText>
			<AppCustomText style={styles.subText}>Please fill the form below to continue.</AppCustomText>

			<View style={{ marginTop: 20 }}>
				<AppCustomInput
					placeholder={'Full Name'}
					marginTop={5}
					text={'As stated in your official Identity document'}
				/>
				<AppCustomInput
					marginTop={5}
					placeholder={'Country Of Residence'}
					text={'Terms & Conditions may apply per country'}
				/>
				<EmptyPicker onPress={showDatepicker} placeholder='Date of Birth' />
				<AppCustomInput marginTop={5} placeholder={'Email Address'} />
				{show && (
					<DateTimePicker
						testID='dateTimePicker'
						value={date}
						mode={'date'}
						is24Hour={true}
						display='default'
						onChange={onChange}
					/>
				)}
				<View style={styles.alignRight}>
					<Checkbox value='test' size='sm' colorScheme='blue' accessibilityLabel='Test'>
						<AppCustomText style={{ marginLeft: 10, fontSize: 10, color: colors.BLACK_COLOR }}>
							I’d like to recieve updates about 3KLE offers, new products and services.
						</AppCustomText>
					</Checkbox>
				</View>
				<AppCustomInput marginTop={15} name='password' placeholder={'Create Password'} />
				<AppCustomInput marginTop={15} name='password' placeholder={'Confirm Password'} />
			</View>
			<View style={styles.buttonBottom}>
				<AppButton
					title={'Next'}
					onPress={() => navigation.navigate(routes.REGISTER.STEP_FOUR)}
					color={colors.DEEP_BLUE_COLOR}
				/>
				<View style={styles.alignCenter}>
					<AppCustomText style={styles.loginText}>Already have an account?</AppCustomText>
					<AppCustomText style={styles.loginBtn}>Login</AppCustomText>
					{/* <TransparentButton
=======
import React, {useState} from 'react';
import {View, Platform} from 'react-native';
import {Checkbox} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import {AppCustomFont as AppCustomText} from '@elements';
import colors from '../../../themes/colors';
import routes from '../../../../navigation/navigators/routes';
import styles from '../style';
import {EmptyPicker, AppButton, AppTextInput as AppCustomInput} from '@form';

export default function CreateAccont(props: any) {
  const {navigation} = props;
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<string>('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    // <KeyboardAvoidingView
    //     behavior={Platform.OS === "ios" ? "padding" : "height"}
    //     style={styles.container}
    // >
    <View style={styles.container}>
      <AppCustomText style={[styles.header, {fontFamily: 'Poppins_900Black'}]}>
        CREATE A
        <AppCustomText
          style={{
            color: colors.THREEKLE_BLUE_COLOR,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {' '}
          3KLE{' '}
        </AppCustomText>
        ACCOUNT
      </AppCustomText>
      <AppCustomText style={styles.subText}>
        Please fill the form below to continue.
      </AppCustomText>

      <View style={{marginTop: 20}}>
        <AppCustomInput
          placeholder={'Full Name'}
          marginTop={5}
          text={'As stated in your official Identity document'}
        />
        <AppCustomInput
          marginTop={5}
          placeholder={'Country Of Residence'}
          text={'Terms & Conditions may apply per country'}
        />
        <EmptyPicker onPress={showDatepicker} placeholder="Date of Birth" />
        <AppCustomInput marginTop={5} placeholder={'Email Address'} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <View style={styles.alignRight}>
          <Checkbox
            value="test"
            size="sm"
            colorScheme="blue"
            accessibilityLabel="Test">
            <AppCustomText
              style={{marginLeft: 10, fontSize: 10, color: colors.BLACK_COLOR}}>
              I’d like to recieve updates about 3KLE offers, new products and
              services.
            </AppCustomText>
          </Checkbox>
        </View>
        <AppCustomInput
          marginTop={15}
          name="password"
          placeholder={'Create Password'}
        />
        <AppCustomInput
          marginTop={15}
          name="password"
          placeholder={'Confirm Password'}
        />
      </View>
      <View style={styles.buttonBottom}>
        <AppButton
          title={'Next'}
          onPress={() => navigation.navigate(routes.REGISTER.STEP_FOUR)}
          color={colors.DEEP_BLUE_COLOR}
        />
        <View style={styles.alignCenter}>
          <AppCustomText style={styles.loginText}>
            Already have an account?
          </AppCustomText>
          <AppCustomText style={styles.loginBtn}>Login</AppCustomText>
          {/* <TransparentButton
>>>>>>> dev/setup
                            title={'Log In'}
                            fontSize={16}
                            marginTop={0}
                            onPress={() => console.log('Function of Parent o!')}
                            color={colors.DEEP_BLUE_COLOR}
                        /> */}
<<<<<<< HEAD
				</View>
			</View>
		</View>
		// </KeyboardAvoidingView>
	)
=======
        </View>
      </View>
    </View>
    // </KeyboardAvoidingView>
  );
>>>>>>> dev/setup
}
