import { AppThunk } from '../../app/redux';
import { CategoriesSlice } from './Categories-slice';

export const fetchCategoriesThunk =
  (): AppThunk =>
  (dispatch, _, { CategoriesApi }) => {
    CategoriesApi.fetchCategories().then((categories) => {
      dispatch(CategoriesSlice.actions.addCategories({ categories }));
    });
  };
