import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  id: string;
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
}
const initialState: UsersState = {
  users: [],
  fetchStatus: 'idle',
};

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    getUsers: (state) => state.users,
    selectIsPending: (state) => state.fetchStatus === 'pending',
    selectIsFetched: (state) => state.fetchStatus === 'succeeded',
    selectIsFailed: (state) => state.fetchStatus === 'failed',
    selectIsIdle: (state) => state.fetchStatus === 'idle',
  },

  reducers: {
    addUsers: (state, action: PayloadAction<{ users: User[] }>) => {
      const { users } = action.payload;
      state.users = users;
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
  },
});
