import React, {FC, ReactNode} from 'react';
import {Pressable} from 'react-native';
import {DivProps, Div} from 'react-native-magnus';

interface IconButtonProps extends DivProps {
  onPress: (args?: any) => void;
  children: ReactNode;
  activeBg?: string;
}

export const IconButton = (props: IconButtonProps) => {
  const {bg, onPress, activeBg, children, ...rest} = props;

  return (
    <Pressable onPress={onPress}>
      {({pressed}) => (
        <Div
          bg={pressed ? activeBg || 'gray300' : bg || 'transparent'}
          rounded="lg"
          p="sm"
          {...rest}>
          {children}
        </Div>
      )}
    </Pressable>
  );
};
