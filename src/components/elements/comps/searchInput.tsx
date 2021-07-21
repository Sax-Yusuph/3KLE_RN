import React, { FC } from 'react'
import { Icon, Input, InputProps } from 'react-native-magnus'

interface SearchProps extends InputProps {}

const SearchInput: FC<SearchProps> = (props) => {
	return (
		<Input
			placeholder="Search in settings"
			fontSize="lg"
			prefix={<Icon name="search1" fontSize="3xl" mr="md" />}
			focusBorderColor="brandDark"
			my="xl"
			rounded="xl"
			{...props}
		/>
	)
}

export default SearchInput
