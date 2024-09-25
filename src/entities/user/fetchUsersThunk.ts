import { AppThunk } from '../../app/store';
import { UsersSlice } from './users-slice';

export const fetchUsersThunk =
  (): AppThunk =>
  (dispatch, getState, { api }) => {
    const isPending = UsersSlice.selectors.selectIsPending(getState());

    if (!isPending) {
      return;
    }

    dispatch(UsersSlice.actions.fetchUsersPending());
    api.fetchUsers().then((users) => {
      dispatch(UsersSlice.actions.addUsers({ users }));
      dispatch(UsersSlice.actions.fetchUsersSucceeded());
    });
  };
