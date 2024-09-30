import { AppThunk } from '../../app/redux';
import { User, UsersSlice } from './users-slice';

export const deleteUserThunk =
  (user: User, noteId: string): AppThunk =>
  (dispatch, _, { UserApi }) => {
    UserApi.deleteUserNote(user, noteId).then(() => {
      dispatch(UsersSlice.actions.deleteUserNote({ targetUser: user, noteId }));
    });
  };
