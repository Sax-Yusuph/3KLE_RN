import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {AppCustomFont as AppCustomText} from '@elements';
import {TransparentButton} from '@form';
import routes from '@navigation/navigators/routes';
import styles from '../style';
import colors from '../../../themes/colors';

function SuccessPage(props: any) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('@assets/png/success-icon.png')} />
        <AppCustomText style={{fontSize: 18}}>
          Registration Complete!
        </AppCustomText>
      </View>
      <View style={styles.buttonBottom}>
        <TransparentButton
          title={'Proceed To Login'}
          onPress={() => navigation.navigate(routes.REGISTER.STEP_TWO)}
          color={colors.DEEP_BLUE_COLOR}
        />
      </View>
    </View>
  );
}

export default SuccessPage;
