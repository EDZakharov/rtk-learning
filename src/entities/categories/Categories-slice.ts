import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Category = {
  id: string;
  categoryId: string;
  title: string;
};

export type CategoriesState = {
  categories: Category[];
  activeCategoryId: string | null;
};

const initialState: CategoriesState = {
  categories: [],
  activeCategoryId: null,
};

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  selectors: {
    selectCategoriesListById: (state) => (otherCategoriesId: string[] | []) => {
      const otherCategoryIds = new Set(otherCategoriesId);

      return state.categories.filter((category) =>
        otherCategoryIds.has(category.id)
      );
    },
    selectActiveCategoryId: (state) => state.activeCategoryId,
    selectCategoriesList: (state) => state.categories,
    selectCategoriesById: (state) => (id: string) => {
      return state.categories.find((category) => category.id === id);
    },
  },
  reducers: {
    addCategories: (
      state,
      action: PayloadAction<{ categories: Category[] }>
    ) => {
      const { categories } = action.payload;

      state.categories = categories;
    },
    setActiveCategoryId: (state, action: PayloadAction<{ id: string }>) => {
      state.activeCategoryId = action.payload.id;
    },
  },
});
