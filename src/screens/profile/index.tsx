import MyAccountScreen from './all/default.profile'
import EditProfile from './all/edit.profile'

export const ProfileScreenRoutes = {
	DEFAULT: 'default',
	EDIT_PROFILE: 'EditProfile',
}
export type ProfileRoutes = keyof typeof ProfileScreenRoutes

export default Object.freeze({
	default: { component: MyAccountScreen },
	EditProfile: { component: EditProfile },
})
