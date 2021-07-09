import deepmerge from 'deepmerge';
import {ThemeType} from 'react-native-magnus';
// import AsyncStorage from '@react-native-async-storage/async-storage'

// export const saveThemeName = async (themeName: string) => {
// 	AsyncStorage.setItem('@theme', themeName)
// }

/**
 * basic usage
 *
 * Automatically the colors you define will be integrated into the ui library.
 * so when you use it with a Div for example
 *
 *
 * <Div bg="DEEP_BLUE_COLOR" rounded="circle" w={120} h={120} ><Div>
 *
 *
 *
 * Div is just a  representation of View component
 * it hass all the style props out of the box.
 * you cann add additional styles via the style props for full control.
 *
 *
 * there is also an Icon component that has react native vector icons out of the box.
 * <Icon fontFamily="Ionicons" fontSize="3xl" name="search-outline" color='THREEKLE_BLUE_COLOR' />
 *
 *
 */

export const getThemeName = async () => {
  return 'light';
};

const commonColors: ThemeType['colors'] = {
  loginExample1Bg: '#F3CFDA',
  brown100: '#865c6c',
  twitter: '#1DA1F2',
  facebook: '#3b5998',
  google: '#4285F4',
  dribbble: '#ea4c88',
};

const commonComponents: ThemeType['components'] = {
  Text: {
    fontSize: 'lg',
    color: 'textDark',
  },
  Button: {
    fontSize: 'lg',
    textTransform: 'capitalize',
    rounded: 'lg',
    px: 'xl',

    variants: {
      warning: {
        bg: 'yellow600',
        underlayColor: 'yellow700',
      },
      danger: {
        bg: 'red600',
        underlayColor: 'red700',
      },
      success: {
        bg: 'green600',
        underlayColor: 'green700',
      },
      info: {
        bg: 'teal600',
        underlayColor: 'teal700',
      },
      brand: {
        rounded: 'lg',
        px: 'xl',
        underlayColor: 'blue400',
      },

      'warning-border': {
        borderWidth: 2,
        borderColor: 'yellow600',
        color: 'yellow600',
        underlayColor: 'yellow100',
        bg: 'transparent',
      },
      'danger-border': {
        borderWidth: 2,
        borderColor: 'red600',
        color: 'red600',
        underlayColor: 'red100',
        bg: 'transparent',
      },
      'success-border': {
        borderWidth: 2,
        borderColor: 'green600',
        color: 'green600',
        underlayColor: 'green100',
        bg: 'transparent',
      },
      'info-border': {
        borderWidth: 2,
        borderColor: 'teal600',
        color: 'teal600',
        underlayColor: 'teal100',
        bg: 'transparent',
      },
      'brand-border': {
        borderWidth: 1,
        borderColor: 'blue800',
        color: 'blue800',
        underlayColor: 'blue100',
        bg: 'transparent',
      },
    },
  },
  Input: {
    fontSize: 'xl',
    bg: 'card',
    color: 'textDark',

    variants: {
      'border-only': {
        borderWidth: 1,
        bg: 'screenBg',
      },
    },
  },
  Header: {
    bg: 'card',
    color: 'textDark',
  },
  Statusbar: {
    backgroundColor: 'card',
  },
  DropdownOption: {
    bg: 'card',
    color: 'textDark',
  },
  Toggle: {
    circleBg: 'card',
    activeCircleBg: 'card',
    activeBg: 'green500',
  },
  CollapseBody: {
    bg: 'card',
  },
  Drawer: {
    bg: 'card',
  },
  Modal: {
    bg: 'card',
  },
  Overlay: {
    bg: 'card',
  },
  Select: {
    bg: 'card',
  },
  SelectOption: {
    bg: 'card',
  },
};

export const lightTheme: ThemeType = {
  name: 'light',
  components: deepmerge(commonComponents, {
    Statusbar: {
      barStyle: 'dark-content',
    },
  }),
  colors: {
    ...commonColors,
    screenBg: '#F4F4F4',
    tab: '#F4F7F9',
    card: 'white',
    textLight: 'white',
    textDark: 'gray900',
    textFade: 'gray600',
    brand: '#1AA0DA', // '#0077B6',
    brandLight: '#00B4D8',
    brandDark: '#243B80',
    divider: 'gray300',
    secondary: '#74C947',
    warning: '#FD0707',

    /**moved from the expo file */
    PRIMARY_COLOR: '#642FD0',
    PRIMARY_TEXT_COLOR: '#2F425D',
    SEONDARY_COLOR: '#4ecdc4',
    BLACK_COLOR: '#000',
    BACKGROUND_COLOR: '#F6F5F5',
    WHITE_COLOR: '#FFF',
    SUCCESS_COLOR: '#429F7E',
    MEDIUM_COLOR: '#6e6969',
    LIGHT_COLOR: '#f8f4f4',
    BORDER_COLOR: '#9B9B9B',
    ACTIVE_COLOR: '#00AA44',
    GRAY_COLOR: '#8B8686',
    LIGHT_GRAY_COLOR: '#CFCECE',
    ASHBLUE_COLOR: '#07486F',
    THREEKLE_BLUE_COLOR: '#1AA0DA',
    RED_COLOR: '#FF0000',
    DEEP_BLUE_COLOR: '#243B80',
  },
  fontFamily: {
    normal: 'Poppins-Regular',
    bold: 'Poppins-Bold',
    100: 'Karla-Regular',
    500: 'Poppins-Medium',
    700: 'Poppins-Bold',
  },
};

export const darkTheme: ThemeType = {
  name: 'dark',
  components: deepmerge(commonComponents, {
    Statusbar: {
      barStyle: 'light-content',
    },

    Button: {
      variants: {
        'warning-border': {
          underlayColor: 'yellow900',
        },
        'danger-border': {
          underlayColor: 'red900',
        },
        'success-border': {
          underlayColor: 'green900',
        },
        'info-border': {
          underlayColor: 'teal900',
        },
      },
    },
  }),
  colors: {
    ...commonColors,
    screenBg: 'gray800',
    card: 'gray900',
    textLight: 'gray800',
    textDark: 'white',
  },
};
