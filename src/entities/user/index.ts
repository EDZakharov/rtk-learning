import { deleteUserThunk } from './deleteUserThunk'
import { fetchUsersThunk } from './fetchUsersThunk'
import { UsersSlice } from './users-slice'

const UsersSelectors = {
	getUserById: UsersSlice.selectors.getUserById,
}

export { deleteUserThunk, fetchUsersThunk, UsersSelectors }
