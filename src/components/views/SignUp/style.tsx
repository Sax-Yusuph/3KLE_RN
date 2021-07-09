import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingRight: 25,
    paddingTop: 10,
    backgroundColor: colors.BACKGROUND_COLOR,
  },
  numContainer: {
    flex: 0.3,
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 19,
    lineHeight: 27,
    letterSpacing: -0.3,
    color: colors.BLACK_COLOR,
  },
  subText: {
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.3,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  buttonBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 5,
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
    width: '100%',
    color: '#000000',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  alignRight: {
    width: '70%',
    marginLeft: '30%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 1,
  },
  alignCenter: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: -15,
  },
  loginText: {
    color: colors.GRAY_COLOR,
    paddingTop: 8,
    textAlign: 'center',
  },
  loginBtn: {
    color: colors.DEEP_BLUE_COLOR,
    fontSize: 17,
    margin: 4,
    fontWeight: 'bold',
  },
  pin: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: colors.ASHBLUE_COLOR,
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
