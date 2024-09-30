import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { CategoriesApi } from '../entities/categories/categoriesApi';
import { UserApi } from '../entities/user/userApi';

export const extraArgument = {
  UserApi,
  CategoriesApi,
};

export const rootReducer = combineSlices();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } }),
});
