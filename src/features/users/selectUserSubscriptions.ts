import { createSelector } from '@reduxjs/toolkit';

import { store } from '../../app/store';
import { CategoriesSlice } from '../../entities/categories/Categories-slice';
import { UsersSlice } from '../../entities/user/users-slice';

const link = CategoriesSlice.selectors.selectCategoriesListById(
  store.getState()
);

export const selectUserSubscriptions = createSelector(
  [UsersSlice.selectors.getSelectedUser, () => link],
  (user, selectedCategories) => {
    const subscriptions = selectedCategories(user?.categorySubscriptions ?? []);

    return {
      user,
      subscriptions,
    };
  }
);
