import { CategoriesSlice } from './Categories-slice';
import { fetchCategoriesThunk } from './fetchCategoriesThunk';

const CategoriesSelectors = {
  selectCategoriesList: CategoriesSlice.selectors.selectCategoriesList,
};

export { CategoriesSelectors, fetchCategoriesThunk };
