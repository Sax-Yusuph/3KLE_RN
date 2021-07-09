<<<<<<< HEAD
import React from 'react'
import { FlatList, Platform } from 'react-native'
import Animated, { scrollTo } from 'react-native-reanimated'

import { Ref, RefComponent } from './types'

/** The time one frame takes at 60 fps (16 ms) */
export const ONE_FRAME_MS = 16

export const IS_IOS = Platform.OS === 'ios'

export const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
=======
import React from 'react';
import {FlatList, Platform} from 'react-native';
import Animated, {scrollTo} from 'react-native-reanimated';

import {Ref, RefComponent} from './types';

/** The time one frame takes at 60 fps (16 ms) */
export const ONE_FRAME_MS = 16;

export const IS_IOS = Platform.OS === 'ios';

export const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
>>>>>>> dev/setup

export function scrollToImpl<T extends RefComponent>(
  ref: Ref<T> | undefined,
  x: number,
  y: number,
<<<<<<< HEAD
  animated: boolean
): void {
  'worklet'
  if (!ref) return
  // ensure we don't scroll on NaN
  if (!Number.isFinite(x) || !Number.isFinite(y)) return

  //@ts-expect-error: reanimated typescript types do not accept FlatList for `scrollTo`, but it does work
  scrollTo(ref, x, y, animated)
=======
  animated: boolean,
): void {
  'worklet';
  if (!ref) {
    return;
  }
  // ensure we don't scroll on NaN
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    return;
  }

  //@ts-expect-error: reanimated typescript types do not accept FlatList for `scrollTo`, but it does work
  scrollTo(ref, x, y, animated);
>>>>>>> dev/setup
}

export function makeRenderFunction<T>(
  ComponentOrMemo:
    | ((props: T) => React.ReactElement)
    | React.MemoExoticComponent<(props: T) => React.ReactElement>
    | undefined
<<<<<<< HEAD
    | null
=======
    | null,
>>>>>>> dev/setup
) {
  return typeof ComponentOrMemo === 'function'
    ? ComponentOrMemo
    : ComponentOrMemo && typeof ComponentOrMemo === 'object'
    ? (props: any) => <ComponentOrMemo {...props} />
<<<<<<< HEAD
    : undefined
=======
    : undefined;
>>>>>>> dev/setup
}
