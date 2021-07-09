<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
>>>>>>> dev/setup
import {
  LayoutChangeEvent,
  StyleSheet,
  useWindowDimensions,
  View,
<<<<<<< HEAD
} from 'react-native'
=======
} from 'react-native';
>>>>>>> dev/setup
import Animated, {
  runOnJS,
  runOnUI,
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
<<<<<<< HEAD
} from 'react-native-reanimated'

import { Context, TabNameContext } from './Context'
import { Lazy } from './Lazy'
import { MaterialTabBar, TABBAR_HEIGHT } from './MaterialTabBar'
import { Tab } from './Tab'
=======
} from 'react-native-reanimated';

import {Context, TabNameContext} from './Context';
import {Lazy} from './Lazy';
import {MaterialTabBar, TABBAR_HEIGHT} from './MaterialTabBar';
import {Tab} from './Tab';
>>>>>>> dev/setup
import {
  AnimatedFlatList,
  IS_IOS,
  makeRenderFunction,
  ONE_FRAME_MS,
  scrollToImpl,
<<<<<<< HEAD
} from './helpers'
import { useAnimatedDynamicRefs, useContainerRef, useTabProps } from './hooks'
=======
} from './helpers';
import {useAnimatedDynamicRefs, useContainerRef, useTabProps} from './hooks';
>>>>>>> dev/setup
import {
  CollapsibleProps,
  CollapsibleRef,
  ContextType,
  IndexChangeEventData,
  TabName,
<<<<<<< HEAD
} from './types'
=======
} from './types';
>>>>>>> dev/setup

/**
 * Basic usage looks like this:
 *
 * ```tsx
 * import { Tabs } from 'react-native-collapsible-tab-view'
 *
 * const Example = () => {
 *   return (
 *     <Tabs.Container renderHeader={MyHeader}>
 *       <Tabs.Tab name="A">
 *         <ScreenA />
 *       </Tabs.Tab>
 *       <Tabs.Tab name="B">
 *         <ScreenB />
 *       </Tabs.Tab>
 *     </Tabs.Container>
 *   )
 * }
 * ```
 */
export const Container = React.memo(
  React.forwardRef<CollapsibleRef, CollapsibleProps>(
    (
      {
        initialTabName,
        headerHeight: initialHeaderHeight,
        minHeaderHeight = 0,
        tabBarHeight: initialTabBarHeight = TABBAR_HEIGHT,
        revealHeaderOnScroll = false,
        snapThreshold,
        children,
        // TODO: these two are obsolete, remove them in v5.0
        HeaderComponent,
        TabBarComponent = MaterialTabBar,
        renderHeader = makeRenderFunction(HeaderComponent),
        renderTabBar = makeRenderFunction(TabBarComponent),
        headerContainerStyle,
        cancelTranslation,
        containerStyle,
        lazy,
        cancelLazyFadeIn,
        pagerProps,
        onIndexChange,
        onTabChange,
      },
<<<<<<< HEAD
      ref
    ) => {
      const containerRef = useContainerRef()

      const [tabProps, tabNamesArray] = useTabProps(children, Tab)

      const [refMap, setRef] = useAnimatedDynamicRefs()

      const windowWidth = useWindowDimensions().width
      const firstRender = React.useRef(true)

      const containerHeight = useSharedValue<number | undefined>(undefined)

      const tabBarHeight = useSharedValue<number | undefined>(
        initialTabBarHeight
      )

      const headerHeight = useSharedValue<number | undefined>(
        !renderHeader ? 0 : initialHeaderHeight
      )
=======
      ref,
    ) => {
      const containerRef = useContainerRef();

      const [tabProps, tabNamesArray] = useTabProps(children, Tab);

      const [refMap, setRef] = useAnimatedDynamicRefs();

      const windowWidth = useWindowDimensions().width;
      const firstRender = React.useRef(true);

      const containerHeight = useSharedValue<number | undefined>(undefined);

      const tabBarHeight = useSharedValue<number | undefined>(
        initialTabBarHeight,
      );

      const headerHeight = useSharedValue<number | undefined>(
        !renderHeader ? 0 : initialHeaderHeight,
      );
>>>>>>> dev/setup

      const contentInset = useDerivedValue(() => {
        return IS_IOS
          ? (headerHeight.value || 0) + (tabBarHeight.value || 0)
<<<<<<< HEAD
          : 0
      })

      const isSwiping = useSharedValue(false)
      const isSnapping: ContextType['isSnapping'] = useSharedValue(false)
      const snappingTo: ContextType['snappingTo'] = useSharedValue(0)
      const isGliding: ContextType['isGliding'] = useSharedValue(false)
      const offset: ContextType['offset'] = useSharedValue(0)
      const accScrollY: ContextType['accScrollY'] = useSharedValue(0)
      const oldAccScrollY: ContextType['oldAccScrollY'] = useSharedValue(0)
      const accDiffClamp: ContextType['accDiffClamp'] = useSharedValue(0)
      const isScrolling: ContextType['isScrolling'] = useSharedValue(0)
      const scrollYCurrent: ContextType['scrollYCurrent'] = useSharedValue(0)
      const scrollY: ContextType['scrollY'] = useSharedValue(
        tabNamesArray.map(() => 0),
        
      )

      const contentHeights: ContextType['contentHeights'] = useSharedValue(
        tabNamesArray.map(() => 0),
        
      )

      const tabNames: ContextType['tabNames'] = useDerivedValue<TabName[]>(
        () => tabNamesArray,
        [tabNamesArray]
      )
      const index: ContextType['index'] = useSharedValue(
        initialTabName
          ? tabNames.value.findIndex((n) => n === initialTabName)
          : 0
      )
      const scrollX: ContextType['scrollX'] = useSharedValue(
        index.value * windowWidth,
      )
      const pagerOpacity = useSharedValue(
        initialHeaderHeight === undefined || index.value !== 0 ? 0 : 1,
      )
      const [data, setData] = React.useState(tabNamesArray)

      React.useEffect(() => {
        setData(tabNamesArray)
      }, [tabNamesArray])

      const focusedTab: ContextType['focusedTab'] = useDerivedValue<TabName>(() => {
        return tabNames.value[index.value]
      }, [tabNames])
      const calculateNextOffset = useSharedValue(index.value)
      const headerScrollDistance: ContextType['headerScrollDistance'] = useDerivedValue(() => {
        return headerHeight.value !== undefined
          ? headerHeight.value - minHeaderHeight
          : 0
      }, [headerHeight, minHeaderHeight])
=======
          : 0;
      });

      const isSwiping = useSharedValue(false);
      const isSnapping: ContextType['isSnapping'] = useSharedValue(false);
      const snappingTo: ContextType['snappingTo'] = useSharedValue(0);
      const isGliding: ContextType['isGliding'] = useSharedValue(false);
      const offset: ContextType['offset'] = useSharedValue(0);
      const accScrollY: ContextType['accScrollY'] = useSharedValue(0);
      const oldAccScrollY: ContextType['oldAccScrollY'] = useSharedValue(0);
      const accDiffClamp: ContextType['accDiffClamp'] = useSharedValue(0);
      const isScrolling: ContextType['isScrolling'] = useSharedValue(0);
      const scrollYCurrent: ContextType['scrollYCurrent'] = useSharedValue(0);
      const scrollY: ContextType['scrollY'] = useSharedValue(
        tabNamesArray.map(() => 0),
      );

      const contentHeights: ContextType['contentHeights'] = useSharedValue(
        tabNamesArray.map(() => 0),
      );

      const tabNames: ContextType['tabNames'] = useDerivedValue<TabName[]>(
        () => tabNamesArray,
        [tabNamesArray],
      );
      const index: ContextType['index'] = useSharedValue(
        initialTabName
          ? tabNames.value.findIndex(n => n === initialTabName)
          : 0,
      );
      const scrollX: ContextType['scrollX'] = useSharedValue(
        index.value * windowWidth,
      );
      const pagerOpacity = useSharedValue(
        initialHeaderHeight === undefined || index.value !== 0 ? 0 : 1,
      );
      const [data, setData] = React.useState(tabNamesArray);

      React.useEffect(() => {
        setData(tabNamesArray);
      }, [tabNamesArray]);

      const focusedTab: ContextType['focusedTab'] =
        useDerivedValue<TabName>(() => {
          return tabNames.value[index.value];
        }, [tabNames]);
      const calculateNextOffset = useSharedValue(index.value);
      const headerScrollDistance: ContextType['headerScrollDistance'] =
        useDerivedValue(() => {
          return headerHeight.value !== undefined
            ? headerHeight.value - minHeaderHeight
            : 0;
        }, [headerHeight, minHeaderHeight]);
>>>>>>> dev/setup

      const getItemLayout = React.useCallback(
        (_: unknown, index: number) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        }),
<<<<<<< HEAD
        [windowWidth]
      )

      const indexDecimal: ContextType['indexDecimal'] = useDerivedValue(() => {
        return scrollX.value / windowWidth
      }, [windowWidth])
=======
        [windowWidth],
      );

      const indexDecimal: ContextType['indexDecimal'] = useDerivedValue(() => {
        return scrollX.value / windowWidth;
      }, [windowWidth]);
>>>>>>> dev/setup

      // handle window resize
      React.useEffect(() => {
        if (!firstRender.current) {
          containerRef.current?.scrollToIndex({
            index: index.value,
            animated: false,
<<<<<<< HEAD
          })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [windowWidth])

      const afterRender = useSharedValue(0)
      React.useEffect(() => {
        if (!firstRender.current) pagerOpacity.value = 0
        afterRender.value = withDelay(
          ONE_FRAME_MS * 5,
          withTiming(1, { duration: 0 })
        )
      }, [afterRender, pagerOpacity, tabNamesArray])
=======
          });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [windowWidth]);

      const afterRender = useSharedValue(0);
      React.useEffect(() => {
        if (!firstRender.current) {
          pagerOpacity.value = 0;
        }
        afterRender.value = withDelay(
          ONE_FRAME_MS * 5,
          withTiming(1, {duration: 0}),
        );
      }, [afterRender, pagerOpacity, tabNamesArray]);
>>>>>>> dev/setup

      React.useEffect(() => {
        if (firstRender.current) {
          if (initialTabName !== undefined && index.value !== 0) {
            containerRef.current?.scrollToIndex({
              index: index.value,
              animated: false,
<<<<<<< HEAD
            })
          }
          firstRender.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [containerRef, initialTabName, windowWidth])
=======
            });
          }
          firstRender.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [containerRef, initialTabName, windowWidth]);
>>>>>>> dev/setup

      // the purpose of this is to scroll to the proper position if dynamic tabs are changing
      useAnimatedReaction(
        () => {
<<<<<<< HEAD
          return afterRender.value === 1
        },
        (trigger) => {
          if (trigger) {
            afterRender.value = 0
            tabNamesArray.forEach((name) => {
              'worklet'
=======
          return afterRender.value === 1;
        },
        trigger => {
          if (trigger) {
            afterRender.value = 0;
            tabNamesArray.forEach(name => {
              'worklet';
>>>>>>> dev/setup
              scrollToImpl(
                refMap[name],
                0,
                scrollY.value[index.value] - contentInset.value,
<<<<<<< HEAD
                false
              )
            })

            pagerOpacity.value = withTiming(1)
          }
        },
        [tabNamesArray, refMap, afterRender, contentInset]
      )
=======
                false,
              );
            });

            pagerOpacity.value = withTiming(1);
          }
        },
        [tabNamesArray, refMap, afterRender, contentInset],
      );
>>>>>>> dev/setup

      // derived from scrollX
      // calculate the next offset and index if swiping
      // if scrollX changes from tab press,
      // the same logic must be done, but knowing
      // the next index in advance
      useAnimatedReaction(
        () => {
          const nextIndex = isSwiping.value
            ? Math.round(indexDecimal.value)
<<<<<<< HEAD
            : null
          return nextIndex
        },
        (nextIndex) => {
          if (nextIndex !== null && nextIndex !== index.value) {
            calculateNextOffset.value = nextIndex
          }
        },
        []
      )

      const propagateTabChange = React.useCallback(
        (change: IndexChangeEventData<TabName>) => {
          onTabChange?.(change)
          onIndexChange?.(change.index)
        },
        [onIndexChange, onTabChange]
      )

      useAnimatedReaction(
        () => {
          return calculateNextOffset.value
        },
        (i) => {
          if (i !== index.value) {
            offset.value =
              scrollY.value[index.value] - scrollY.value[i] + offset.value
=======
            : null;
          return nextIndex;
        },
        nextIndex => {
          if (nextIndex !== null && nextIndex !== index.value) {
            calculateNextOffset.value = nextIndex;
          }
        },
        [],
      );

      const propagateTabChange = React.useCallback(
        (change: IndexChangeEventData<TabName>) => {
          onTabChange?.(change);
          onIndexChange?.(change.index);
        },
        [onIndexChange, onTabChange],
      );

      useAnimatedReaction(
        () => {
          return calculateNextOffset.value;
        },
        i => {
          if (i !== index.value) {
            offset.value =
              scrollY.value[index.value] - scrollY.value[i] + offset.value;
>>>>>>> dev/setup
            runOnJS(propagateTabChange)({
              prevIndex: index.value,
              index: i,
              prevTabName: tabNames.value[index.value],
              tabName: tabNames.value[i],
<<<<<<< HEAD
            })
            index.value = i
          }
        },
        []
      )

      const scrollHandlerX = useAnimatedScrollHandler(
        {
          onScroll: (event) => {
            const { x } = event.contentOffset
            scrollX.value = x
          },
          onBeginDrag: () => {
            isSwiping.value = true
          },
          onMomentumEnd: () => {
            isSwiping.value = false
          },
        },
        []
      )

      const renderItem = React.useCallback(
        ({ index: i }) => {
          if (!tabNames.value[i]) return null
=======
            });
            index.value = i;
          }
        },
        [],
      );

      const scrollHandlerX = useAnimatedScrollHandler(
        {
          onScroll: event => {
            const {x} = event.contentOffset;
            scrollX.value = x;
          },
          onBeginDrag: () => {
            isSwiping.value = true;
          },
          onMomentumEnd: () => {
            isSwiping.value = false;
          },
        },
        [],
      );

      const renderItem = React.useCallback(
        ({index: i}) => {
          if (!tabNames.value[i]) {
            return null;
          }
>>>>>>> dev/setup
          return (
            <TabNameContext.Provider value={tabNames.value[i]}>
              {lazy ? (
                <Lazy
                  startMounted={i === index.value}
<<<<<<< HEAD
                  cancelLazyFadeIn={cancelLazyFadeIn}
                >
=======
                  cancelLazyFadeIn={cancelLazyFadeIn}>
>>>>>>> dev/setup
                  {React.Children.toArray(children)[i] as React.ReactElement}
                </Lazy>
              ) : (
                React.Children.toArray(children)[i]
              )}
            </TabNameContext.Provider>
<<<<<<< HEAD
          )
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [children, lazy, tabNames.value, cancelLazyFadeIn]
      )
=======
          );
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [children, lazy, tabNames.value, cancelLazyFadeIn],
      );
>>>>>>> dev/setup

      const headerTranslateY = useDerivedValue(() => {
        return revealHeaderOnScroll
          ? -accDiffClamp.value
<<<<<<< HEAD
          : -Math.min(scrollYCurrent.value, headerScrollDistance.value)
      }, [revealHeaderOnScroll])
=======
          : -Math.min(scrollYCurrent.value, headerScrollDistance.value);
      }, [revealHeaderOnScroll]);
>>>>>>> dev/setup

      const stylez = useAnimatedStyle(() => {
        return {
          transform: [
            {
              translateY: headerTranslateY.value,
            },
          ],
<<<<<<< HEAD
        }
      }, [revealHeaderOnScroll])

      const getHeaderHeight = React.useCallback(
        (event: LayoutChangeEvent) => {
          const height = event.nativeEvent.layout.height
          if (headerHeight.value !== height) {
            headerHeight.value = height
          }
        },
        [headerHeight]
      )

      const getTabBarHeight = React.useCallback(
        (event: LayoutChangeEvent) => {
          const height = event.nativeEvent.layout.height
          if (tabBarHeight.value !== height) tabBarHeight.value = height
        },
        [tabBarHeight]
      )

      const onLayout = React.useCallback(
        (event: LayoutChangeEvent) => {
          const height = event.nativeEvent.layout.height
          if (containerHeight.value !== height) containerHeight.value = height
        },
        [containerHeight]
      )
=======
        };
      }, [revealHeaderOnScroll]);

      const getHeaderHeight = React.useCallback(
        (event: LayoutChangeEvent) => {
          const height = event.nativeEvent.layout.height;
          if (headerHeight.value !== height) {
            headerHeight.value = height;
          }
        },
        [headerHeight],
      );

      const getTabBarHeight = React.useCallback(
        (event: LayoutChangeEvent) => {
          const height = event.nativeEvent.layout.height;
          if (tabBarHeight.value !== height) {
            tabBarHeight.value = height;
          }
        },
        [tabBarHeight],
      );

      const onLayout = React.useCallback(
        (event: LayoutChangeEvent) => {
          const height = event.nativeEvent.layout.height;
          if (containerHeight.value !== height) {
            containerHeight.value = height;
          }
        },
        [containerHeight],
      );
>>>>>>> dev/setup

      // fade in the pager if the headerHeight is not defined
      useAnimatedReaction(
        () => {
          return (
            (initialHeaderHeight === undefined ||
              initialTabName !== undefined) &&
            headerHeight !== undefined &&
            pagerOpacity.value === 0
<<<<<<< HEAD
          )
        },
        (update) => {
          if (update) {
            pagerOpacity.value = withTiming(1)
          }
        },
        [headerHeight]
      )
=======
          );
        },
        update => {
          if (update) {
            pagerOpacity.value = withTiming(1);
          }
        },
        [headerHeight],
      );
>>>>>>> dev/setup

      const pagerStylez = useAnimatedStyle(() => {
        return {
          opacity: pagerOpacity.value,
<<<<<<< HEAD
        }
      }, [])
=======
        };
      }, []);
>>>>>>> dev/setup

      const onTabPress = React.useCallback(
        (name: TabName) => {
          // simplify logic by preventing index change
          // when is scrolling or gliding.
          if (!isScrolling.value && !isGliding.value) {
<<<<<<< HEAD
            const i = tabNames.value.findIndex((n) => n === name)
            calculateNextOffset.value = i
            if (name === focusedTab.value) {
              const ref = refMap[name]
=======
            const i = tabNames.value.findIndex(n => n === name);
            calculateNextOffset.value = i;
            if (name === focusedTab.value) {
              const ref = refMap[name];
>>>>>>> dev/setup
              runOnUI(scrollToImpl)(
                ref,
                0,
                headerScrollDistance.value - contentInset.value,
<<<<<<< HEAD
                true
              )
            } else {
              containerRef.current?.scrollToIndex({ animated: true, index: i })
=======
                true,
              );
            } else {
              containerRef.current?.scrollToIndex({animated: true, index: i});
>>>>>>> dev/setup
            }
          }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
<<<<<<< HEAD
        [containerRef, refMap, contentInset]
      )

      React.useEffect(() => {
        if (index.value >= tabNamesArray.length) {
          onTabPress(tabNamesArray[tabNamesArray.length - 1])
        }
      }, [index.value, onTabPress, tabNamesArray])

      const keyExtractor = React.useCallback((name) => name, [])
=======
        [containerRef, refMap, contentInset],
      );

      React.useEffect(() => {
        if (index.value >= tabNamesArray.length) {
          onTabPress(tabNamesArray[tabNamesArray.length - 1]);
        }
      }, [index.value, onTabPress, tabNamesArray]);

      const keyExtractor = React.useCallback(name => name, []);
>>>>>>> dev/setup

      React.useImperativeHandle(
        ref,
        () => ({
<<<<<<< HEAD
          setIndex: (index) => {
            if (isScrolling.value || isGliding.value) return false
            const name = tabNames.value[index]
            onTabPress(name)
            return true
          },
          jumpToTab: (name) => {
            if (isScrolling.value || isGliding.value) return false
            onTabPress(name)
            return true
          },
          getFocusedTab: () => {
            return tabNames.value[index.value]
          },
          getCurrentIndex: () => {
            return index.value
          },
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [onTabPress]
      )
=======
          setIndex: index => {
            if (isScrolling.value || isGliding.value) {
              return false;
            }
            const name = tabNames.value[index];
            onTabPress(name);
            return true;
          },
          jumpToTab: name => {
            if (isScrolling.value || isGliding.value) {
              return false;
            }
            onTabPress(name);
            return true;
          },
          getFocusedTab: () => {
            return tabNames.value[index.value];
          },
          getCurrentIndex: () => {
            return index.value;
          },
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [onTabPress],
      );
>>>>>>> dev/setup

      return (
        <Context.Provider
          value={{
            contentInset,
            tabBarHeight,
            headerHeight,
            refMap,
            tabNames,
            index,
            snapThreshold,
            revealHeaderOnScroll,
            focusedTab,
            accDiffClamp,
            indexDecimal,
            containerHeight,
            scrollYCurrent,
            scrollY,
            setRef,
            headerScrollDistance,
            accScrollY,
            oldAccScrollY,
            offset,
            isScrolling,
            scrollX,
            isGliding,
            isSnapping,
            snappingTo,
            contentHeights,
            headerTranslateY,
<<<<<<< HEAD
          }}
        >
          <Animated.View
            style={[styles.container, containerStyle]}
            onLayout={onLayout}
            pointerEvents="box-none"
          >
=======
          }}>
          <Animated.View
            style={[styles.container, containerStyle]}
            onLayout={onLayout}
            pointerEvents="box-none">
>>>>>>> dev/setup
            <Animated.View
              pointerEvents="box-none"
              style={[
                styles.topContainer,
                headerContainerStyle,
                !cancelTranslation && stylez,
<<<<<<< HEAD
              ]}
            >
              <View
                style={[styles.container, styles.headerContainer]}
                onLayout={getHeaderHeight}
                pointerEvents="box-none"
              >
=======
              ]}>
              <View
                style={[styles.container, styles.headerContainer]}
                onLayout={getHeaderHeight}
                pointerEvents="box-none">
>>>>>>> dev/setup
                {renderHeader &&
                  renderHeader({
                    containerRef,
                    index,
                    tabNames: tabNamesArray,
                    focusedTab,
                    indexDecimal,
                    onTabPress,
                    tabProps,
                  })}
              </View>
              <View
                style={[styles.container, styles.tabBarContainer]}
                onLayout={getTabBarHeight}
<<<<<<< HEAD
                pointerEvents="box-none"
              >
=======
                pointerEvents="box-none">
>>>>>>> dev/setup
                {renderTabBar &&
                  renderTabBar({
                    containerRef,
                    index,
                    tabNames: tabNamesArray,
                    focusedTab,
                    indexDecimal,
                    onTabPress,
                    tabProps,
                  })}
              </View>
            </Animated.View>
            {headerHeight !== undefined && (
              <AnimatedFlatList
                ref={containerRef}
                initialScrollIndex={index.value}
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                onScroll={scrollHandlerX}
                showsHorizontalScrollIndicator={false}
                getItemLayout={getItemLayout}
                scrollEventThrottle={16}
                bounces={false}
                {...pagerProps}
                style={[pagerStylez, pagerProps?.style]}
              />
            )}
          </Animated.View>
        </Context.Provider>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  tabBarContainer: {
    zIndex: 1,
  },
  headerContainer: {
    zIndex: 2,
  },
<<<<<<< HEAD
})
=======
});
>>>>>>> dev/setup
