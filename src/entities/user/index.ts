import { fetchUsersThunk } from './fetchUsersThunk';
import { UsersSlice } from './users-slice';

const UsersSelectors = {
  selectCategoriesList: UsersSlice.selectors.getSelectedUser,
};

export { fetchUsersThunk, UsersSelectors };
