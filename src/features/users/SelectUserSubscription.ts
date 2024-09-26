import { createSelector } from '@reduxjs/toolkit';
import { CategoriesSelectors } from '../../entities/categories';
import { UsersSelectors } from '../../entities/user';

export const selectUserSubscriptions = createSelector(
  [
    UsersSelectors.selectCategoriesList,
    CategoriesSelectors.selectCategoriesList,
  ],
  (user, categories) => {
    const uniqueIds = new Set(user?.categorySubscriptions);

    const subscriptions = categories.filter((category) => {
      if (uniqueIds.has(category.id)) {
        return {
          id: category.id,
          title: category.title,
        };
      }
    });
    return { user, subscriptions };
  }
);
