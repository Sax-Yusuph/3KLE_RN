import { Center, CustomScreen, Header, Heading, Paragraph, VirtualizedView } from '@elements'
import React, { FC, useState } from 'react'
import { Button, Div, Input } from 'react-native-magnus'

const BankVerificationScreen: FC = () => {
	const [bvn, setBvn] = useState('')
	return (
		<CustomScreen>
			<VirtualizedView>
				<Center>
					<Header title="" backIcon="arrowleft" />
					<Div alignSelf="flex-start" px="xl">
						<Heading>Bank Verification Number</Heading>
						<Paragraph>Quickly add your BVN to complete your profile set-up</Paragraph>
						<Paragraph>Enter BVN</Paragraph>
						<Input onChangeText={setBvn} value={bvn} />
					</Div>
					<Div position="absolute" bottom={20}>
						<Button bg="brandDark">Submit</Button>
					</Div>
				</Center>
			</VirtualizedView>
		</CustomScreen>
	)
}

export default BankVerificationScreen
