import { configureStore, ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { CategoriesSlice } from '../entities/categories/Categories-slice';
import { CategoriesApi } from '../entities/categories/categoriesApi';
import { UserApi } from '../entities/user/userApi';
import { UsersSlice } from '../entities/user/users-slice';

const extraArgument = {
  UserApi,
  CategoriesApi,
};

export const store = configureStore({
  reducer: {
    [UsersSlice.name]: UsersSlice.reducer,
    [CategoriesSlice.name]: CategoriesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<R = void> = ThunkAction<
  R,
  RootState,
  typeof extraArgument,
  UnknownAction
>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const useAppSelector = useSelector.withTypes<RootState>();
