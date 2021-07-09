declare module '*.png';

declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import React from 'react';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '@env' {
  export const ENV: 'dev' | 'prod';
  export const SENTRY_DSN: string;
}
