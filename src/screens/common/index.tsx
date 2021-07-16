import ProfileScreen from './all/user.profile'
import EditProfileScreen from './all/user.editprofile'

export const CommonScreenRoutes = {
	USER_PROFILE: 'userProfile',
	EDIT_PROFILE: 'editProfile',
}
export type CommonRoutes = keyof typeof CommonScreenRoutes

export default Object.freeze({
	userProfile: { component: ProfileScreen },
	editProfile: { component: EditProfileScreen },
})
