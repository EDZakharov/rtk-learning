import { createSelector } from '@reduxjs/toolkit';
import { store } from '../../app/store';
import { CategoriesSelectors } from '../../entities/categories';
import { UsersSelectors } from '../../entities/user';
import { UserId } from '../../entities/user/users-slice';

export const selectUserCategoryNotes = (userId: UserId | null) =>
  createSelector(
    [
      () => UsersSelectors.getUserNotes(store.getState())(userId),
      CategoriesSelectors.selectActiveCategory,
    ],
    (notes, activeCategoryId) => {
      if (!activeCategoryId) {
        return [];
      }

      return notes.filter((note) => note.categoryId === activeCategoryId);
    }
  );
