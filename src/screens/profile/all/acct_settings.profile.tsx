import { CustomScreen, ThreeColumnHeader } from '@elements'
import { AccountSettingsPage as ContentView } from '@views'
import React from 'react'
import SettingsIconBold from '@assets/svgs/bottomtab/setting_bold.svg'
import { COLORS } from '@utils/colors'
const AccountSettings = () => {
	return (
		<CustomScreen>
			<ThreeColumnHeader
				title="Settings"
				backIcon="arrowleft"
				isCentered
				rightIcon={<SettingsIconBold color={COLORS.brandDark} />}
			/>
			<ContentView />
		</CustomScreen>
	)
}

export default AccountSettings
