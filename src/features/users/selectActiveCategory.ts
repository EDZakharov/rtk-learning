import { createSelector } from '@reduxjs/toolkit';
import { CategoriesSelectors } from '../../entities/categories';

export const selectActiveCategory = createSelector(
  [
    CategoriesSelectors.selectCategoriesList,
    CategoriesSelectors.selectActiveCategory,
  ],
  (categories, active) => ({ categories, active })
);
