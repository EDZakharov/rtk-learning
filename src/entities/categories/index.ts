import { CategoriesSlice } from './Categories-slice';
import { fetchCategoriesThunk } from './fetchCategoriesThunk';

const CategoriesSelectors = {
  selectCategoriesList: CategoriesSlice.selectors.selectCategoriesList,
  selectActiveCategory: CategoriesSlice.selectors.selectActiveCategoryId,
};

const setActiveCategoryId = CategoriesSlice.actions.setActiveCategoryId;

export { CategoriesSelectors, fetchCategoriesThunk, setActiveCategoryId };
