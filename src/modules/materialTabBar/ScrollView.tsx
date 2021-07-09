<<<<<<< HEAD
import React from 'react'
import { ScrollViewProps, ScrollView as RNScrollView } from 'react-native'
import Animated from 'react-native-reanimated'

import { IS_IOS } from './helpers'
=======
import React from 'react';
import {ScrollViewProps, ScrollView as RNScrollView} from 'react-native';
import Animated from 'react-native-reanimated';

import {IS_IOS} from './helpers';
>>>>>>> dev/setup
import {
  useAfterMountEffect,
  useChainCallback,
  useCollapsibleStyle,
  useScrollHandlerY,
  useSharedAnimatedRef,
  useTabNameContext,
  useTabsContext,
  useUpdateScrollViewContentSize,
<<<<<<< HEAD
} from './hooks'
=======
} from './hooks';
>>>>>>> dev/setup

/**
 * Used as a memo to prevent rerendering too often when the context changes.
 * See: https://github.com/facebook/react/issues/15156#issuecomment-474590693
 */
const ScrollViewMemo = React.memo(
  React.forwardRef<RNScrollView, React.PropsWithChildren<ScrollViewProps>>(
    (props, passRef) => {
      return (
        <Animated.ScrollView
          // @ts-expect-error reanimated types are broken on ref
          ref={passRef}
          {...props}
        />
<<<<<<< HEAD
      )
    }
  )
)
=======
      );
    },
  ),
);
>>>>>>> dev/setup

/**
 * Use like a regular ScrollView.
 */
export const ScrollView = React.forwardRef<
  RNScrollView,
  React.PropsWithChildren<Omit<ScrollViewProps, 'onScroll'>>
>(
  (
    {
      contentContainerStyle,
      style,
      onContentSizeChange,
      children,
      refreshControl,
      ...rest
    },
<<<<<<< HEAD
    passRef
  ) => {
    const name = useTabNameContext()
    const ref = useSharedAnimatedRef<RNScrollView>(passRef)
    const { setRef, contentInset, scrollYCurrent } = useTabsContext()
=======
    passRef,
  ) => {
    const name = useTabNameContext();
    const ref = useSharedAnimatedRef<RNScrollView>(passRef);
    const {setRef, contentInset, scrollYCurrent} = useTabsContext();
>>>>>>> dev/setup
    const {
      style: _style,
      contentContainerStyle: _contentContainerStyle,
      progressViewOffset,
<<<<<<< HEAD
    } = useCollapsibleStyle()
    const { scrollHandler, enable } = useScrollHandlerY(name)
    useAfterMountEffect(() => {
      // we enable the scroll event after mounting
      // otherwise we get an `onScroll` call with the initial scroll position which can break things
      enable(true)
    })

    React.useEffect(() => {
      setRef(name, ref)
    }, [name, ref, setRef])

    const scrollContentSizeChange = useUpdateScrollViewContentSize({
      name,
    })

    const scrollContentSizeChangeHandlers = useChainCallback(
      React.useMemo(() => [scrollContentSizeChange, onContentSizeChange], [
        onContentSizeChange,
        scrollContentSizeChange,
      ])
    )
=======
    } = useCollapsibleStyle();
    const {scrollHandler, enable} = useScrollHandlerY(name);
    useAfterMountEffect(() => {
      // we enable the scroll event after mounting
      // otherwise we get an `onScroll` call with the initial scroll position which can break things
      enable(true);
    });

    React.useEffect(() => {
      setRef(name, ref);
    }, [name, ref, setRef]);

    const scrollContentSizeChange = useUpdateScrollViewContentSize({
      name,
    });

    const scrollContentSizeChangeHandlers = useChainCallback(
      React.useMemo(
        () => [scrollContentSizeChange, onContentSizeChange],
        [onContentSizeChange, scrollContentSizeChange],
      ),
    );
>>>>>>> dev/setup

    const memoRefreshControl = React.useMemo(
      () =>
        refreshControl &&
        React.cloneElement(refreshControl, {
          progressViewOffset,
          ...refreshControl.props,
        }),
<<<<<<< HEAD
      [progressViewOffset, refreshControl]
    )
=======
      [progressViewOffset, refreshControl],
    );
>>>>>>> dev/setup
    const memoContentOffset = React.useMemo(
      () => ({
        y: IS_IOS ? -contentInset.value + scrollYCurrent.value : 0,
        x: 0,
      }),
<<<<<<< HEAD
      [contentInset.value, scrollYCurrent.value]
    )
    const memoContentInset = React.useMemo(
      () => ({ top: contentInset.value }),
      [contentInset.value]
    )
=======
      [contentInset.value, scrollYCurrent.value],
    );
    const memoContentInset = React.useMemo(
      () => ({top: contentInset.value}),
      [contentInset.value],
    );
>>>>>>> dev/setup
    const memoContentContainerStyle = React.useMemo(
      () => [
        _contentContainerStyle,
        // TODO: investigate types
        contentContainerStyle as any,
      ],
<<<<<<< HEAD
      [_contentContainerStyle, contentContainerStyle]
    )
    const memoStyle = React.useMemo(() => [_style, style], [_style, style])
=======
      [_contentContainerStyle, contentContainerStyle],
    );
    const memoStyle = React.useMemo(() => [_style, style], [_style, style]);
>>>>>>> dev/setup

    return (
      <ScrollViewMemo
        {...rest}
        ref={ref}
        bouncesZoom={false}
        style={memoStyle}
        contentContainerStyle={memoContentContainerStyle}
        onScroll={scrollHandler}
        onContentSizeChange={scrollContentSizeChangeHandlers}
        scrollEventThrottle={16}
        contentInset={memoContentInset}
        contentOffset={memoContentOffset}
        automaticallyAdjustContentInsets={false}
<<<<<<< HEAD
        refreshControl={memoRefreshControl}
      >
        {children}
      </ScrollViewMemo>
    )
  }
)
=======
        refreshControl={memoRefreshControl}>
        {children}
      </ScrollViewMemo>
    );
  },
);
>>>>>>> dev/setup
