import { AppThunk } from '../../app/store';
import { User, UsersSlice } from './users-slice';

export const updateUsersThunk =
  (user: User, note: { id: string; text: string }): AppThunk =>
  (dispatch, getState, { UserApi }) => {
    console.log(1);
    const isPending = UsersSlice.selectors.selectIsPending(getState());

    if (isPending) {
      return;
    }

    dispatch(UsersSlice.actions.updateUsersNotesPending());
    UserApi.setUserNotes(user, note).then(() => {
      dispatch(
        UsersSlice.actions.insertUserNote({
          userId: user.id,
          note: { id: note.id, text: note.text },
        })
      );
      dispatch(UsersSlice.actions.updateSelectedUserNotes({ userId: user.id }));
      dispatch(UsersSlice.actions.updateUsersNotesSucceeded());
    });
  };
