import { AppLogo, Heading, HStack } from '@elements'
import React from 'react'

const Data = [
	{
		Heading: (
			<HStack justifyContent='flex-end' mb='lg'>
				<AppLogo />
			</HStack>
		),
		title: `Open your bank account in minutes. Link your debit and credit cards from other banks and grow your money with us.`,
		image: require('@assets/png/splash.png'),
	},
	{
		Heading: (
			<HStack justifyContent='flex-end' mb='lg'>
				<AppLogo />
				<Heading color='card' mx='lg'>
					FAMILY
				</Heading>
				<Heading color='brandLight' fontSize='6xl'>
					+
				</Heading>
				<Heading color='card'>PlAN</Heading>
			</HStack>
		),
		title: `Open your bank account in minutes. Link your debit and credit cards from other banks and grow your money with us.`,
		image: require('@assets/png/splash_screen_2.png'),
	},
	{
		Heading: (
			<HStack justifyContent='flex-end' mb='lg'>
				<AppLogo />
			</HStack>
		),
		title: `Open your bank account in minutes. Link your debit and credit cards from other banks and grow your money with us.`,
		image: require('@assets/png/splash_screen_3.png'),
	},
	{
		Heading: (
			<HStack justifyContent='flex-end' mb='lg'>
				<AppLogo />
			</HStack>
		),
		title: `Open your bank account in minutes. Link your debit and credit cards from other banks and grow your money with us.`,
		image: require('@assets/png/splash_screen_4.png'),
	},
	{
		Heading: (
			<HStack justifyContent='flex-end' mb='lg'>
				<AppLogo />
			</HStack>
		),
		title: `Open your bank account in minutes. Link your debit and credit cards from other banks and grow your money with us.`,
		image: require('@assets/png/splash_screen_5.png'),
	},
	{
		Heading: (
			<HStack justifyContent='flex-end' mb='lg'>
				<Heading>PEER 2 PEER LOAN</Heading>
			</HStack>
		),
		title: `Borrowers apply online for fixed-rate, fixed-term loans, Flexible interest rate Low monthly repayment plan.`,
		image: require('@assets/png/splash_screen_6.png'),
	},
]

export default Data
