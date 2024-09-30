import { AppThunk } from '../../app/redux';
import { Note, User, UsersSlice } from './users-slice';

/**
 * A thunk that updates a user's notes in the store by inserting a new note
 * or replacing an existing one, and then updates the selected user's notes
 * accordingly. It also handles the pending state of the update operation.
 *
 * @param {User} user - The user to update.
 * @param {Note} note - The note to insert or replace.
 * @returns {AppThunk} - The thunk function.
 */
export const updateUsersThunk =
  (user: User, note: Note): AppThunk =>
  (dispatch, getState, { UserApi }) => {
    const isPending = UsersSlice.selectors.selectIsPending(getState());

    if (isPending) {
      return;
    }

    dispatch(UsersSlice.actions.updateUsersNotesPending());
    UserApi.setUserNotes(user, note).then(() => {
      dispatch(
        UsersSlice.actions.insertUserNote({
          userId: user.id,
          note: {
            id: note.id,
            categoryId: note.categoryId,
            text: note.text,
          },
        })
      );
      dispatch(UsersSlice.actions.updateSelectedUserNotes({ userId: user.id }));
      dispatch(UsersSlice.actions.updateUsersNotesSucceeded());
    });
  };
