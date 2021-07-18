import MyAccountScreen from './all/default.profile'
import EditProfile from './all/edit.profile'
import AccountSettings from './all/acct_settings.profile'

export const ProfileScreenRoutes = {
	DEFAULT: 'default',
	EDIT_PROFILE: 'EditProfile',
	SETTINS: 'Settings',
}
export type ProfileRoutes = keyof typeof ProfileScreenRoutes

export default Object.freeze({
	default: { component: MyAccountScreen },
	EditProfile: { component: EditProfile },
	Settings: { component: AccountSettings },
})
