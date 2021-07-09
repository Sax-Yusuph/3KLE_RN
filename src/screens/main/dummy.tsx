<<<<<<< HEAD
import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'

import { Div } from 'react-native-magnus'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FocusAwareStatusBar } from '@elements'
import { Heading } from '@elements'

const Dummy = React.memo(() => {
	const [color, setColor] = useState('screenBg')

	//we can move this function to the helper.ts file.
	const COLORS = ['gray200', 'gray300', 'gray400', 'gray500']
	const getRandom = React.useCallback(() => {
		return Math.floor(Math.random() * COLORS.length) + 1
	}, [])

	useFocusEffect(() => {
		const rand = getRandom()
		setColor(COLORS[rand - 1])
	})

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusAwareStatusBar />
			<Div bg={color} justifyContent='center' alignItems='center' flex={1}>
				<Heading color='textFade' fontSize='2xl'>
					Dummy Screen
				</Heading>
			</Div>
		</SafeAreaView>
	)
})

export default Dummy
=======
import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';

import {Div} from 'react-native-magnus';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FocusAwareStatusBar} from '@elements';
import {Heading} from '@elements';

const Dummy = React.memo(() => {
  const [color, setColor] = useState('screenBg');

  //we can move this function to the helper.ts file.
  const COLORS = ['gray200', 'gray300', 'gray400', 'gray500'];
  const getRandom = React.useCallback(() => {
    return Math.floor(Math.random() * COLORS.length) + 1;
  }, []);

  useFocusEffect(() => {
    const rand = getRandom();
    setColor(COLORS[rand - 1]);
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusAwareStatusBar />
      <Div bg={color} justifyContent="center" alignItems="center" flex={1}>
        <Heading color="textFade" fontSize="2xl">
          Dummy Screen
        </Heading>
      </Div>
    </SafeAreaView>
  );
});

export default Dummy;
>>>>>>> dev/setup
