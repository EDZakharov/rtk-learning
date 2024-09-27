import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserId = string;

export type Note = {
  id: string;
  categoryId: string;
  text: string;
};

export type User = {
  id: UserId;
  name: string;
  categorySubscriptions: string[];
  notes: Note[];
};

export interface UsersState {
  users: User[];
  fetchStatus: 'idle' | 'pending' | 'succeeded' | 'failed';
  updateUserNotesStatus: 'idle' | 'pending' | 'succeeded' | 'failed';
  selectedUser: User | null;
  activeUserId: UserId | null;
}
const initialState: UsersState = {
  users: [],
  activeUserId: null,
  fetchStatus: 'idle',
  updateUserNotesStatus: 'idle',
  selectedUser: null,
};

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    getUsers: (state) => state.users,
    getUserNotes: (state) => (id: UserId | null) =>
      state.users.find((user) => user.id === id)?.notes ?? [],
    getUserById: (state) => (id?: UserId) => {
      const user = state.users.find((user) => user.id === id);

      if (!user) {
        return null;
      }

      return user;
    },
    selectActiveUser: (state) => {
      const activeUser = state.activeUserId ?? localStorage.getItem('user');
      const activeUserById = state.users.find((user) => {
        return user.id === activeUser;
      });

      return activeUserById ?? null;
    },

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

    deleteUserNote: (
      state,
      action: PayloadAction<{ targetUser: User; noteId: string }>
    ) => {
      const user = state.users.find(
        (user) => user.id === action.payload.targetUser.id
      );
      if (!user) {
        return;
      }
      user.notes = user.notes.filter(
        (note) => note.id !== action.payload.noteId
      );
    },

    insertUserNote: (
      state,
      action: PayloadAction<{
        userId: UserId;
        note: { id: string; categoryId: string; text: string };
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
      localStorage.setItem('user', userId);
      state.selectedUser =
        state.users.find((user) => user.id === userId) ?? null;
    },

    setActiveUser: (state, action: PayloadAction<{ userId: UserId }>) => {
      const { userId } = action.payload;
      localStorage.setItem('user', userId);
      state.activeUserId = userId;
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
