import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserId = string;

export type User = {
  id: UserId;
  name: string;
  categorySubscriptions: string[];
  notes: {
    id: string;
    text: string;
  }[];
};

interface UsersState {
  users: User[];
  fetchStatus: 'idle' | 'pending' | 'succeeded' | 'failed';
  updateUserNotesStatus: 'idle' | 'pending' | 'succeeded' | 'failed';
  selectedUser: User | null;
}
const initialState: UsersState = {
  users: [],
  fetchStatus: 'idle',
  updateUserNotesStatus: 'idle',
  selectedUser: null,
};

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    getUsers: (state) => state.users,
    getSelectedUser: (state) => state.selectedUser,
    selectIsPending: (state) => state.fetchStatus === 'pending',
    selectIsFetched: (state) => state.fetchStatus === 'succeeded',
    selectIsFailed: (state) => state.fetchStatus === 'failed',
    selectIsIdle: (state) => state.fetchStatus === 'idle',

    selectUpdateUserNotesStatus: (state) =>
      state.updateUserNotesStatus === 'pending',
    selectUpdateUserNotesSucceeded: (state) =>
      state.updateUserNotesStatus === 'succeeded',
    selectUpdateUserNotesFailed: (state) =>
      state.updateUserNotesStatus === 'failed',
  },

  reducers: {
    addUsers: (state, action: PayloadAction<{ users: User[] }>) => {
      const { users } = action.payload;
      state.users = users;
    },

    insertUserNote: (
      state,
      action: PayloadAction<{
        userId: UserId;
        note: { id: string; text: string };
      }>
    ) => {
      const { userId, note } = action.payload;

      const user = state.users.find((user) => user.id === userId);
      if (!user) {
        return;
      }

      user.notes.push(note);
    },

    updateSelectedUserNotes: (
      state,
      action: PayloadAction<{ userId: UserId }>
    ) => {
      const { userId } = action.payload;
      state.selectedUser =
        state.users.find((user) => user.id === userId) ?? null;
    },

    setSelectedUser: (state, action: PayloadAction<{ userId: UserId }>) => {
      const { userId } = action.payload;

      state.selectedUser =
        state.users.find((user) => user.id === userId) ?? null;
    },

    fetchUsersPending: (state) => {
      state.fetchStatus = 'pending';
    },
    fetchUsersSucceeded: (state) => {
      state.fetchStatus = 'succeeded';
    },
    fetchUsersFailed: (state) => {
      state.fetchStatus = 'failed';
    },

    updateUsersNotesPending: (state) => {
      state.updateUserNotesStatus = 'pending';
    },
    updateUsersNotesSucceeded: (state) => {
      state.updateUserNotesStatus = 'succeeded';
    },

    updateUsersNotesFailed: (state) => {
      state.updateUserNotesStatus = 'failed';
    },
  },
});
