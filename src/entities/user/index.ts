import { deleteUserThunk } from './deleteUserThunk';
import { fetchUsersThunk } from './fetchUsersThunk';
import { UsersSlice } from './users-slice';

const UsersSelectors = {
  getUserById: UsersSlice.selectors.getUserById,
  getUserNotes: UsersSlice.selectors.getUserNotes,
  selectActiveUser: UsersSlice.selectors.selectActiveUser,
};

export { deleteUserThunk, fetchUsersThunk, UsersSelectors };
