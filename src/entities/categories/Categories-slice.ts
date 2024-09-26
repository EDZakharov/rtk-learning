import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Category = {
  id: string;
  title: string;
};

type CategoriesState = {
  categories: Category[];
};

const initialState: CategoriesState = {
  categories: [],
};

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  selectors: {
    selectCategoriesList: (state) => state.categories,
  },
  reducers: {
    addCategories: (
      state,
      action: PayloadAction<{ categories: Category[] }>
    ) => {
      const { categories } = action.payload;

      state.categories = categories;
    },
  },
});
