import MyAccountScreen from './all/default.profile'
import EditProfile from './all/edit.profile'
import AccountSettings from './all/acct_settings.profile'
import BankVerificationScreen from './all/bvn.verification'

export const ProfileScreenRoutes = {
	DEFAULT: 'default',
	EDIT_PROFILE: 'EditProfile',
	SETTINS: 'Settings',
	BVN_VALIDATION: 'BvnValidation',
}
export type ProfileRoutes = keyof typeof ProfileScreenRoutes

export default Object.freeze({
	default: { component: MyAccountScreen },
	EditProfile: { component: EditProfile },
	Settings: { component: AccountSettings },
	BvnValidation: { component: BankVerificationScreen },
})
