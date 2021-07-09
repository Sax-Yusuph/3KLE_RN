import {
  useMemo,
  Children,
  useState,
  useCallback,
  useContext,
  MutableRefObject,
  useEffect,
<<<<<<< HEAD
} from 'react'
import { useWindowDimensions } from 'react-native'
import { ContainerRef, RefComponent } from 'react-native-collapsible-tab-view'
=======
} from 'react';
import {useWindowDimensions} from 'react-native';
import {ContainerRef, RefComponent} from 'react-native-collapsible-tab-view';
>>>>>>> dev/setup
import Animated, {
  cancelAnimation,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
  withDelay,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
  runOnUI,
  useDerivedValue,
<<<<<<< HEAD
} from 'react-native-reanimated'
import { useDeepCompareMemo } from 'use-deep-compare'

import { Context, TabNameContext } from './Context'
import { IS_IOS, ONE_FRAME_MS, scrollToImpl } from './helpers'
=======
} from 'react-native-reanimated';
import {useDeepCompareMemo} from 'use-deep-compare';

import {Context, TabNameContext} from './Context';
import {IS_IOS, ONE_FRAME_MS, scrollToImpl} from './helpers';
>>>>>>> dev/setup
import {
  CollapsibleStyle,
  ContextType,
  TabName,
  TabReactElement,
  TabsWithProps,
  Ref,
<<<<<<< HEAD
} from './types'

export function useContainerRef() {
  return useAnimatedRef<ContainerRef>()
=======
} from './types';

export function useContainerRef() {
  return useAnimatedRef<ContainerRef>();
>>>>>>> dev/setup
}

export function useAnimatedDynamicRefs(): [
  ContextType['refMap'],
<<<<<<< HEAD
  ContextType['setRef']
] {
  const [map, setMap] = useState<ContextType['refMap']>({})
  const setRef = useCallback(function <T extends RefComponent>(
    key: TabName,
    ref: React.RefObject<T>
  ) {
    setMap((map) => ({ ...map, [key]: ref }))
    return ref
  },
  [])

  return [map, setRef]
=======
  ContextType['setRef'],
] {
  const [map, setMap] = useState<ContextType['refMap']>({});
  const setRef = useCallback(function <T extends RefComponent>(
    key: TabName,
    ref: React.RefObject<T>,
  ) {
    setMap(map => ({...map, [key]: ref}));
    return ref;
  },
  []);

  return [map, setRef];
>>>>>>> dev/setup
}

export function useTabProps<T extends TabName>(
  children: TabReactElement<T>[] | TabReactElement<T>,
<<<<<<< HEAD
  tabType: Function
): [TabsWithProps<T>, T[]] {
  const options = useMemo(() => {
    const tabOptions: TabsWithProps<T> = new Map()
    if (children) {
      Children.forEach(children, (element, index) => {
        if (!element) return

        if (element.type !== tabType)
          throw new Error(
            'Container children must be wrapped in a <Tabs.Tab ... /> component'
          )

        // make sure children is excluded otherwise our props will mutate too much
        const { name, children, ...options } = element.props
        if (tabOptions.has(name))
          throw new Error(`Tab names must be unique, ${name} already exists`)
=======
  tabType: Function,
): [TabsWithProps<T>, T[]] {
  const options = useMemo(() => {
    const tabOptions: TabsWithProps<T> = new Map();
    if (children) {
      Children.forEach(children, (element, index) => {
        if (!element) {
          return;
        }

        if (element.type !== tabType) {
          throw new Error(
            'Container children must be wrapped in a <Tabs.Tab ... /> component',
          );
        }

        // make sure children is excluded otherwise our props will mutate too much
        const {name, children, ...options} = element.props;
        if (tabOptions.has(name)) {
          throw new Error(`Tab names must be unique, ${name} already exists`);
        }
>>>>>>> dev/setup

        tabOptions.set(name, {
          index,
          name,
          ...options,
<<<<<<< HEAD
        })
      })
    }
    return tabOptions
  }, [children, tabType])
  const optionEntries = Array.from(options.entries())
  const optionKeys = Array.from(options.keys())
  const memoizedOptions = useDeepCompareMemo(() => options, [optionEntries])
  const memoizedTabNames = useDeepCompareMemo(() => optionKeys, [optionKeys])
  return [memoizedOptions, memoizedTabNames]
=======
        });
      });
    }
    return tabOptions;
  }, [children, tabType]);
  const optionEntries = Array.from(options.entries());
  const optionKeys = Array.from(options.keys());
  const memoizedOptions = useDeepCompareMemo(() => options, [optionEntries]);
  const memoizedTabNames = useDeepCompareMemo(() => optionKeys, [optionKeys]);
  return [memoizedOptions, memoizedTabNames];
>>>>>>> dev/setup
}

/**
 * Hook exposing some useful variables.
 *
 * ```tsx
 * const { focusedTab, ...rest } = useTabsContext()
 * ```
 */
export function useTabsContext(): ContextType<TabName> {
<<<<<<< HEAD
  const c = useContext(Context)
  if (!c) throw new Error('useTabsContext must be inside a Tabs.Container')
  return c
=======
  const c = useContext(Context);
  if (!c) {
    throw new Error('useTabsContext must be inside a Tabs.Container');
  }
  return c;
>>>>>>> dev/setup
}

/**
 * Access the parent tab screen from any deep component.
 *
 * ```tsx
 * const tabName = useTabNameContext()
 * ```
 */
export function useTabNameContext(): TabName {
<<<<<<< HEAD
  const c = useContext(TabNameContext)
  if (!c) throw new Error('useTabNameContext must be inside a TabNameContext')
  return c
=======
  const c = useContext(TabNameContext);
  if (!c) {
    throw new Error('useTabNameContext must be inside a TabNameContext');
  }
  return c;
>>>>>>> dev/setup
}

/**
 * Hook to access some key styles that make the whole thing work.
 *
 * You can use this to get the progessViewOffset and pass to the refresh control of scroll view.
 */
export function useCollapsibleStyle(): CollapsibleStyle {
<<<<<<< HEAD
  const { headerHeight, tabBarHeight, containerHeight } = useTabsContext()
  const windowWidth = useWindowDimensions().width
=======
  const {headerHeight, tabBarHeight, containerHeight} = useTabsContext();
  const windowWidth = useWindowDimensions().width;
>>>>>>> dev/setup
  const [containerHeightVal, tabBarHeightVal, headerHeightVal] = [
    useConvertAnimatedToValue(containerHeight),
    useConvertAnimatedToValue(tabBarHeight),
    useConvertAnimatedToValue(headerHeight),
<<<<<<< HEAD
  ]
  return useMemo(
    () => ({
      style: { width: windowWidth },
=======
  ];
  return useMemo(
    () => ({
      style: {width: windowWidth},
>>>>>>> dev/setup
      contentContainerStyle: {
        minHeight: IS_IOS
          ? (containerHeightVal || 0) - (tabBarHeightVal || 0)
          : (containerHeightVal || 0) + (headerHeightVal || 0),
        paddingTop: IS_IOS
          ? 0
          : (headerHeightVal || 0) + (tabBarHeightVal || 0),
      },
      progressViewOffset: (headerHeightVal || 0) + (tabBarHeightVal || 0),
    }),
<<<<<<< HEAD
    [containerHeightVal, headerHeightVal, tabBarHeightVal, windowWidth]
  )
}

export function useUpdateScrollViewContentSize({ name }: { name: TabName }) {
  const { tabNames, contentHeights } = useTabsContext()
  const setContentHeights = useCallback(
    (name: TabName, height: number) => {
      const tabIndex = tabNames.value.indexOf(name)
      contentHeights.value[tabIndex] = height
      contentHeights.value = [...contentHeights.value]
    },
    [contentHeights, tabNames]
  )

  const scrollContentSizeChange = useCallback(
    (_: number, h: number) => {
      runOnUI(setContentHeights)(name, h)
    },
    [setContentHeights, name]
  )

  return scrollContentSizeChange
=======
    [containerHeightVal, headerHeightVal, tabBarHeightVal, windowWidth],
  );
}

export function useUpdateScrollViewContentSize({name}: {name: TabName}) {
  const {tabNames, contentHeights} = useTabsContext();
  const setContentHeights = useCallback(
    (name: TabName, height: number) => {
      const tabIndex = tabNames.value.indexOf(name);
      contentHeights.value[tabIndex] = height;
      contentHeights.value = [...contentHeights.value];
    },
    [contentHeights, tabNames],
  );

  const scrollContentSizeChange = useCallback(
    (_: number, h: number) => {
      runOnUI(setContentHeights)(name, h);
    },
    [setContentHeights, name],
  );

  return scrollContentSizeChange;
>>>>>>> dev/setup
}

/**
 * Allows specifying multiple functions to be called in a sequence with the same parameters
 * Useful because we handle some events and need to pass them forward so that the caller can handle them as well
 * @param fns array of functions to call
 * @returns a function that once called will call all passed functions
 */
export function useChainCallback(fns: (Function | undefined)[]) {
  const callAll = useCallback(
    (...args: unknown[]) => {
<<<<<<< HEAD
      fns.forEach((fn) => {
        if (typeof fn === 'function') {
          fn(...args)
        }
      })
    },
    [fns]
  )
  return callAll
}

export function useScroller<T extends RefComponent>() {
  const { contentInset } = useTabsContext()
=======
      fns.forEach(fn => {
        if (typeof fn === 'function') {
          fn(...args);
        }
      });
    },
    [fns],
  );
  return callAll;
}

export function useScroller<T extends RefComponent>() {
  const {contentInset} = useTabsContext();
>>>>>>> dev/setup

  const scroller = useCallback(
    (
      ref: Ref<T> | undefined,
      x: number,
      y: number,
      animated: boolean,
<<<<<<< HEAD
      _debugKey: string
    ) => {
      'worklet'
      if (!ref) return
      // console.log(`${_debugKey}, y: ${y}, y adjusted: ${y - contentInset}`)
      scrollToImpl(ref, x, y - contentInset.value, animated)
    },
    [contentInset]
  )

  return scroller
=======
      _debugKey: string,
    ) => {
      'worklet';
      if (!ref) {
        return;
      }
      // console.log(`${_debugKey}, y: ${y}, y adjusted: ${y - contentInset}`)
      scrollToImpl(ref, x, y - contentInset.value, animated);
    },
    [contentInset],
  );

  return scroller;
>>>>>>> dev/setup
}

export const useScrollHandlerY = (name: TabName) => {
  const {
    accDiffClamp,
    focusedTab,
    snapThreshold,
    revealHeaderOnScroll,
    refMap,
    tabNames,
    index,
    headerHeight,
    contentInset,
    containerHeight,
    scrollYCurrent,
    scrollY,
    isScrolling,
    isGliding,
    oldAccScrollY,
    accScrollY,
    offset,
    headerScrollDistance,
    isSnapping,
    snappingTo,
    contentHeights,
<<<<<<< HEAD
  } = useTabsContext()

  const enabled = useSharedValue(false)

  const enable = useCallback(
    (toggle: boolean) => {
      enabled.value = toggle
    },
    [enabled]
  )
=======
  } = useTabsContext();

  const enabled = useSharedValue(false);

  const enable = useCallback(
    (toggle: boolean) => {
      enabled.value = toggle;
    },
    [enabled],
  );
>>>>>>> dev/setup

  /**
   * Helper value to track if user is dragging on iOS, because iOS calls
   * onMomentumEnd only after a vigorous swipe. If the user has finished the
   * drag, but the onMomentumEnd has never triggered, we need to manually
   * call it to sync the scenes.
   */
<<<<<<< HEAD
  const afterDrag = useSharedValue(0)

  const tabIndex = useMemo(() => tabNames.value.findIndex((n) => n === name), [
    tabNames,
    name,
  ])

  const scrollTo = useScroller()

  const onMomentumEnd = () => {
    'worklet'
    if (!enabled.value) return
=======
  const afterDrag = useSharedValue(0);

  const tabIndex = useMemo(
    () => tabNames.value.findIndex(n => n === name),
    [tabNames, name],
  );

  const scrollTo = useScroller();

  const onMomentumEnd = () => {
    'worklet';
    if (!enabled.value) {
      return;
    }
>>>>>>> dev/setup

    if (typeof snapThreshold === 'number') {
      if (revealHeaderOnScroll) {
        if (accDiffClamp.value > 0) {
          if (
            scrollYCurrent.value >
            headerScrollDistance.value * snapThreshold
          ) {
            if (
              accDiffClamp.value <=
              headerScrollDistance.value * snapThreshold
            ) {
              // snap down
<<<<<<< HEAD
              isSnapping.value = true
              accDiffClamp.value = withTiming(0, undefined, () => {
                isSnapping.value = false
              })
            } else if (accDiffClamp.value < headerScrollDistance.value) {
              // snap up
              isSnapping.value = true
=======
              isSnapping.value = true;
              accDiffClamp.value = withTiming(0, undefined, () => {
                isSnapping.value = false;
              });
            } else if (accDiffClamp.value < headerScrollDistance.value) {
              // snap up
              isSnapping.value = true;
>>>>>>> dev/setup
              accDiffClamp.value = withTiming(
                headerScrollDistance.value,
                undefined,
                () => {
<<<<<<< HEAD
                  isSnapping.value = false
                }
              )
=======
                  isSnapping.value = false;
                },
              );
>>>>>>> dev/setup

              if (scrollYCurrent.value < headerScrollDistance.value) {
                scrollTo(
                  refMap[name],
                  0,
                  headerScrollDistance.value,
                  true,
<<<<<<< HEAD
                  `[${name}] sticky snap up`
                )
              }
            }
          } else {
            isSnapping.value = true
            accDiffClamp.value = withTiming(0, undefined, () => {
              isSnapping.value = false
            })
=======
                  `[${name}] sticky snap up`,
                );
              }
            }
          } else {
            isSnapping.value = true;
            accDiffClamp.value = withTiming(0, undefined, () => {
              isSnapping.value = false;
            });
>>>>>>> dev/setup
          }
        }
      } else {
        if (
          scrollYCurrent.value <=
          headerScrollDistance.value * snapThreshold
        ) {
          // snap down
<<<<<<< HEAD
          snappingTo.value = 0
          scrollTo(refMap[name], 0, 0, true, `[${name}] snap down`)
        } else if (scrollYCurrent.value <= headerScrollDistance.value) {
          // snap up
          snappingTo.value = headerScrollDistance.value
=======
          snappingTo.value = 0;
          scrollTo(refMap[name], 0, 0, true, `[${name}] snap down`);
        } else if (scrollYCurrent.value <= headerScrollDistance.value) {
          // snap up
          snappingTo.value = headerScrollDistance.value;
>>>>>>> dev/setup
          scrollTo(
            refMap[name],
            0,
            headerScrollDistance.value,
            true,
<<<<<<< HEAD
            `[${name}] snap up`
          )
        }
        isSnapping.value = false
      }
    }
    isGliding.value = false
  }

  const contentHeight = useDerivedValue(() => {
    const tabIndex = tabNames.value.indexOf(name)
    return contentHeights.value[tabIndex] || Number.MAX_VALUE
  }, [])

  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: (event) => {
        if (!enabled.value) return

        if (focusedTab.value === name) {
          if (IS_IOS) {
            let { y } = event.contentOffset
            // normalize the value so it starts at 0
            y = y + contentInset.value
            const clampMax =
              contentHeight.value -
              (containerHeight.value || 0) +
              contentInset.value
=======
            `[${name}] snap up`,
          );
        }
        isSnapping.value = false;
      }
    }
    isGliding.value = false;
  };

  const contentHeight = useDerivedValue(() => {
    const tabIndex = tabNames.value.indexOf(name);
    return contentHeights.value[tabIndex] || Number.MAX_VALUE;
  }, []);

  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: event => {
        if (!enabled.value) {
          return;
        }

        if (focusedTab.value === name) {
          if (IS_IOS) {
            let {y} = event.contentOffset;
            // normalize the value so it starts at 0
            y = y + contentInset.value;
            const clampMax =
              contentHeight.value -
              (containerHeight.value || 0) +
              contentInset.value;
>>>>>>> dev/setup
            // make sure the y value is clamped to the scrollable size (clamps overscrolling)
            scrollYCurrent.value = interpolate(
              y,
              [0, clampMax],
              [0, clampMax],
<<<<<<< HEAD
              Extrapolate.CLAMP
            )
          } else {
            const { y } = event.contentOffset
            scrollYCurrent.value = y
          }

          scrollY.value[index.value] = scrollYCurrent.value
          oldAccScrollY.value = accScrollY.value
          accScrollY.value = scrollY.value[index.value] + offset.value

          if (!isSnapping.value && revealHeaderOnScroll) {
            const delta = accScrollY.value - oldAccScrollY.value
            const nextValue = accDiffClamp.value + delta
=======
              Extrapolate.CLAMP,
            );
          } else {
            const {y} = event.contentOffset;
            scrollYCurrent.value = y;
          }

          scrollY.value[index.value] = scrollYCurrent.value;
          oldAccScrollY.value = accScrollY.value;
          accScrollY.value = scrollY.value[index.value] + offset.value;

          if (!isSnapping.value && revealHeaderOnScroll) {
            const delta = accScrollY.value - oldAccScrollY.value;
            const nextValue = accDiffClamp.value + delta;
>>>>>>> dev/setup
            if (delta > 0) {
              // scrolling down
              accDiffClamp.value = Math.min(
                headerScrollDistance.value,
<<<<<<< HEAD
                nextValue
              )
            } else if (delta < 0) {
              // scrolling up
              accDiffClamp.value = Math.max(0, nextValue)
            }
          }

          isScrolling.value = 1

          // cancel the animation that is setting this back to 0 if we're still scrolling
          cancelAnimation(isScrolling)
=======
                nextValue,
              );
            } else if (delta < 0) {
              // scrolling up
              accDiffClamp.value = Math.max(0, nextValue);
            }
          }

          isScrolling.value = 1;

          // cancel the animation that is setting this back to 0 if we're still scrolling
          cancelAnimation(isScrolling);
>>>>>>> dev/setup

          // set it back to 0 after a few frames without active scrolling
          isScrolling.value = withDelay(
            ONE_FRAME_MS * 3,
<<<<<<< HEAD
            withTiming(0, { duration: 0 })
          )
        }
      },
      onBeginDrag: () => {
        if (!enabled.value) return

        // ensure the header stops snapping
        cancelAnimation(accDiffClamp)

        isSnapping.value = false
        isScrolling.value = 0
        isGliding.value = false

        if (IS_IOS) cancelAnimation(afterDrag)
      },
      onEndDrag: () => {
        if (!enabled.value) return

        isGliding.value = true
=======
            withTiming(0, {duration: 0}),
          );
        }
      },
      onBeginDrag: () => {
        if (!enabled.value) {
          return;
        }

        // ensure the header stops snapping
        cancelAnimation(accDiffClamp);

        isSnapping.value = false;
        isScrolling.value = 0;
        isGliding.value = false;

        if (IS_IOS) {
          cancelAnimation(afterDrag);
        }
      },
      onEndDrag: () => {
        if (!enabled.value) {
          return;
        }

        isGliding.value = true;
>>>>>>> dev/setup

        if (IS_IOS) {
          // we delay this by one frame so that onMomentumBegin may fire on iOS
          afterDrag.value = withDelay(
            ONE_FRAME_MS,
<<<<<<< HEAD
            withTiming(0, { duration: 0 }, (isFinished) => {
=======
            withTiming(0, {duration: 0}, isFinished => {
>>>>>>> dev/setup
              // if the animation is finished, the onMomentumBegin has
              // never started, so we need to manually trigger the onMomentumEnd
              // to make sure we snap
              if (isFinished) {
<<<<<<< HEAD
                isGliding.value = false
                onMomentumEnd()
              }
            })
          )
        }
      },
      onMomentumBegin: () => {
        if (!enabled.value) return

        if (IS_IOS) {
          cancelAnimation(afterDrag)
=======
                isGliding.value = false;
                onMomentumEnd();
              }
            }),
          );
        }
      },
      onMomentumBegin: () => {
        if (!enabled.value) {
          return;
        }

        if (IS_IOS) {
          cancelAnimation(afterDrag);
>>>>>>> dev/setup
        }
      },
      onMomentumEnd,
    },
    [
      refMap,
      name,
      revealHeaderOnScroll,
      containerHeight,
      contentInset,
      snapThreshold,
      enabled,
      scrollTo,
<<<<<<< HEAD
    ]
  )
=======
    ],
  );
>>>>>>> dev/setup

  // sync unfocused scenes
  useAnimatedReaction(
    () => {
      return (
        !isSnapping.value &&
        !isScrolling.value &&
        !isGliding.value &&
        enabled.value
<<<<<<< HEAD
      )
    },
    (sync) => {
      if (sync && focusedTab.value !== name) {
        let nextPosition = null
        const focusedScrollY = scrollY.value[index.value]
        const tabScrollY = scrollY.value[tabIndex]
        const areEqual = focusedScrollY === tabScrollY

        if (!areEqual) {
          const currIsOnTop = tabScrollY <= headerScrollDistance.value + 1
          const focusedIsOnTop =
            focusedScrollY <= headerScrollDistance.value + 1

          if (revealHeaderOnScroll) {
            const hasGap = accDiffClamp.value > tabScrollY
            if (hasGap || currIsOnTop) {
              nextPosition = accDiffClamp.value
            }
          } else if (typeof snapThreshold === 'number') {
            if (focusedIsOnTop) {
              nextPosition = snappingTo.value
            } else if (currIsOnTop) {
              nextPosition = headerHeight.value || 0
            }
          } else if (currIsOnTop || focusedIsOnTop) {
            nextPosition = Math.min(focusedScrollY, headerScrollDistance.value)
=======
      );
    },
    sync => {
      if (sync && focusedTab.value !== name) {
        let nextPosition = null;
        const focusedScrollY = scrollY.value[index.value];
        const tabScrollY = scrollY.value[tabIndex];
        const areEqual = focusedScrollY === tabScrollY;

        if (!areEqual) {
          const currIsOnTop = tabScrollY <= headerScrollDistance.value + 1;
          const focusedIsOnTop =
            focusedScrollY <= headerScrollDistance.value + 1;

          if (revealHeaderOnScroll) {
            const hasGap = accDiffClamp.value > tabScrollY;
            if (hasGap || currIsOnTop) {
              nextPosition = accDiffClamp.value;
            }
          } else if (typeof snapThreshold === 'number') {
            if (focusedIsOnTop) {
              nextPosition = snappingTo.value;
            } else if (currIsOnTop) {
              nextPosition = headerHeight.value || 0;
            }
          } else if (currIsOnTop || focusedIsOnTop) {
            nextPosition = Math.min(focusedScrollY, headerScrollDistance.value);
>>>>>>> dev/setup
          }
        }

        if (nextPosition !== null) {
<<<<<<< HEAD
          scrollY.value[tabIndex] = nextPosition
          scrollTo(refMap[name], 0, nextPosition, false, `[${name}] sync pane`)
        }
      }
    },
    [revealHeaderOnScroll, refMap, snapThreshold, tabIndex, enabled, scrollTo]
  )

  return { scrollHandler, enable }
}
=======
          scrollY.value[tabIndex] = nextPosition;
          scrollTo(refMap[name], 0, nextPosition, false, `[${name}] sync pane`);
        }
      }
    },
    [revealHeaderOnScroll, refMap, snapThreshold, tabIndex, enabled, scrollTo],
  );

  return {scrollHandler, enable};
};
>>>>>>> dev/setup

type ForwardRefType<T> =
  | ((instance: T | null) => void)
  | MutableRefObject<T | null>
<<<<<<< HEAD
  | null
=======
  | null;
>>>>>>> dev/setup

/**
 * Magic hook that creates a multicast ref. Useful so that we can both capture the ref, and forward it to callers.
 * Accepts a parameter for an outer ref that will also be updated to the same ref
 * @param outerRef the outer ref that needs to be updated
 * @returns an animated ref
 */
export function useSharedAnimatedRef<T extends RefComponent>(
<<<<<<< HEAD
  outerRef: ForwardRefType<T>
) {
  const ref = useAnimatedRef<T>()
=======
  outerRef: ForwardRefType<T>,
) {
  const ref = useAnimatedRef<T>();
>>>>>>> dev/setup

  // this executes on every render
  useEffect(() => {
    if (!outerRef) {
<<<<<<< HEAD
      return
    }
    if (typeof outerRef === 'function') {
      outerRef(ref.current)
    } else {
      outerRef.current = ref.current
    }
  })

  return ref
}

export function useAfterMountEffect(effect: React.EffectCallback) {
  const [didExecute, setDidExecute] = useState(false)
  useEffect(() => {
    if (didExecute) return

    const timeout = setTimeout(() => {
      effect()
      setDidExecute(true)
    }, 0)
    return () => {
      clearTimeout(timeout)
    }
  }, [didExecute, effect])
}

export function useConvertAnimatedToValue<T>(
  animatedValue: Animated.SharedValue<T>
) {
  const [value, setValue] = useState(animatedValue.value)

  useAnimatedReaction(
    () => {
      return animatedValue.value
    },
    (animValue) => {
      if (animValue !== value) {
        runOnJS(setValue)(animValue)
      }
    },
    [value]
  )

  return value
=======
      return;
    }
    if (typeof outerRef === 'function') {
      outerRef(ref.current);
    } else {
      outerRef.current = ref.current;
    }
  });

  return ref;
}

export function useAfterMountEffect(effect: React.EffectCallback) {
  const [didExecute, setDidExecute] = useState(false);
  useEffect(() => {
    if (didExecute) {
      return;
    }

    const timeout = setTimeout(() => {
      effect();
      setDidExecute(true);
    }, 0);
    return () => {
      clearTimeout(timeout);
    };
  }, [didExecute, effect]);
}

export function useConvertAnimatedToValue<T>(
  animatedValue: Animated.SharedValue<T>,
) {
  const [value, setValue] = useState(animatedValue.value);

  useAnimatedReaction(
    () => {
      return animatedValue.value;
    },
    animValue => {
      if (animValue !== value) {
        runOnJS(setValue)(animValue);
      }
    },
    [value],
  );

  return value;
>>>>>>> dev/setup
}

interface HeaderMeasurements {
  /**
   * Animated value that represents the current Y translation of the header
   */
<<<<<<< HEAD
  top: Animated.SharedValue<number>
  /**
   * The height of the header
   */
  height: number
}

export function useHeaderMeasurements(): HeaderMeasurements {
  const { headerTranslateY, headerHeight } = useTabsContext()
  return {
    top: headerTranslateY,
    height: headerHeight.value || 0,
  }
=======
  top: Animated.SharedValue<number>;
  /**
   * The height of the header
   */
  height: number;
}

export function useHeaderMeasurements(): HeaderMeasurements {
  const {headerTranslateY, headerHeight} = useTabsContext();
  return {
    top: headerTranslateY,
    height: headerHeight.value || 0,
  };
>>>>>>> dev/setup
}

/**
 * Returns the currently focused tab name
 */
export function useFocusedTab() {
<<<<<<< HEAD
  const { focusedTab } = useTabsContext()
  const focusedTabValue = useConvertAnimatedToValue(focusedTab)
  return focusedTabValue
=======
  const {focusedTab} = useTabsContext();
  const focusedTabValue = useConvertAnimatedToValue(focusedTab);
  return focusedTabValue;
>>>>>>> dev/setup
}

/**
 * Returns an animated value representing the current tab index, as a floating point number
 */
export function useAnimatedTabIndex() {
<<<<<<< HEAD
  const { indexDecimal } = useTabsContext()
  return indexDecimal
=======
  const {indexDecimal} = useTabsContext();
  return indexDecimal;
>>>>>>> dev/setup
}
