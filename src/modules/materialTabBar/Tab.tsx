<<<<<<< HEAD
import React from 'react'

import { TabName } from './types'

export type TabProps<T extends TabName> = {
	readonly name: T
	label?: string
	children: React.ReactNode
}
=======
import React from 'react';

import {TabName} from './types';

export type TabProps<T extends TabName> = {
  readonly name: T;
  label?: string;
  children: React.ReactNode;
};
>>>>>>> dev/setup

/**
 * Wrap your screens with `Tabs.Tab`. Basic usage looks like this:
 *
 * ```tsx
 * <Tabs.Container ...>
 *  <Tabs.Tab name="A" label="First Tab">
 *   <ScreenA />
 *  </Tabs.Tab>
 *  <Tabs.Tab name="B">
 *   <ScreenA />
 *  </Tabs.Tab>
 * </Tabs.Container>
 * ```
 */
<<<<<<< HEAD
export function Tab<T extends TabName>({ children }: TabProps<T>) {
	return <>{children}</>
=======
export function Tab<T extends TabName>({children}: TabProps<T>) {
  return <>{children}</>;
>>>>>>> dev/setup
}
