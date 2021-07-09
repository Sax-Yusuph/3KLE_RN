<<<<<<< HEAD
import React from 'react'
import { Div, DivProps } from 'react-native-magnus'

type Props = {
	selected: boolean
}

export const Dot: React.FC<Props> = ({ selected }) => {
	return <Div mx={'xs'} w={7} h={7} rounded='circle' bg={selected ? 'blue500' : 'gray200'} />
}

interface Props2 extends DivProps {
	size: number
	bg: string
}
export const Circle: React.FC<Props2> = ({ size, bg, ...props }) => {
	return <Div mx={'sm'} w={size} h={size} rounded='xl' bg={bg} {...props} />
}
=======
import React from 'react';
import {Div, DivProps} from 'react-native-magnus';

type Props = {
  selected: boolean;
};

export const Dot: React.FC<Props> = ({selected}) => {
  return (
    <Div
      mx={'xs'}
      w={7}
      h={7}
      rounded="circle"
      bg={selected ? 'blue500' : 'gray200'}
    />
  );
};

interface Props2 extends DivProps {
  size: number;
  bg: string;
}
export const Circle: React.FC<Props2> = ({size, bg, ...props}) => {
  return <Div mx={'sm'} w={size} h={size} rounded="xl" bg={bg} {...props} />;
};
>>>>>>> dev/setup
