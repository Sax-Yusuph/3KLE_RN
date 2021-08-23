import {
	AppButton,
	Center,
	Circle,
	CustomScreen,
	Header,
	Heading,
	HStack,
	Padding,
	SmallText,
	Spacer,
	VirtualizedView,
} from '@elements'
import { __NAVIGATORS } from '@navigation/types/routes'
import { useGroupSavingsNavigator } from '@navigation/types/use-navigation'
import { __COLORS } from '@utils/colors'
import { DEFAULT_PADDING } from '@utils/util'
import React, { useCallback } from 'react'
import * as Progress from 'react-native-progress'

const AllPaymentsCollected = () => {
	const navigation = useGroupSavingsNavigator()
	const gotTODahsboard = useCallback(() => {
		// @ts-ignore
		navigation.navigate(__NAVIGATORS.HOME)
	}, [navigation])

	return (
		<CustomScreen>
			<VirtualizedView>
				<Header title="" backIcon="close" />
				<Padding>
					<Heading fontSize="3xl" fontWeight="900">
						All Payments Collected
					</Heading>
				</Padding>

				{Array(8)
					.fill('')
					.map((arr, i) => (
						<RecentPayoutItem key={i} />
					))}
				<Padding>
					<AppButton
						onPress={gotTODahsboard}
						backgroundColor={__COLORS.BUTTON_BRAND}
						color={__COLORS.WHITE}
						title="Dashboard"
					/>
				</Padding>
			</VirtualizedView>
		</CustomScreen>
	)
}

export default AllPaymentsCollected

export const RecentPayoutItem = () => {
	return (
		<Center m="lg" p={DEFAULT_PADDING} bg={__COLORS.Background} rounded="xl" shadow="sm">
			<HStack justifyContent="space-between" position="absolute" top={0} w="100%" py={DEFAULT_PADDING}>
				<HStack>
					<Circle size={10} bg={__COLORS.SECONDARY} />
					<SmallText color={__COLORS.SECONDARY}>active</SmallText>
				</HStack>
				<SmallText color={__COLORS.SECONDARY}>cycles: 6</SmallText>
			</HStack>

			<Center>
				<Progress.Circle
					size={150}
					thickness={10}
					color={__COLORS.SECONDARY}
					unfilledColor={__COLORS.LIGHT_GREY}
					progress={0.9}
				/>
				<Center position="absolute">
					<Heading fontSize="4xl" color={__COLORS.SECONDARY} fontWeight="900">
						$2000
					</Heading>
					<Heading fontWeight="800" color={__COLORS.GREY}>
						CYCLE PAID
					</Heading>
				</Center>
			</Center>
			<Spacer />
			<Heading fontSize="2xl" fontWeight="600">
				Hauwa Adbulazeez
			</Heading>
			<SmallText>Friday 24th August 2021</SmallText>
		</Center>
	)
}
