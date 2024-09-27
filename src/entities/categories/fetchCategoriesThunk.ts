import { AppThunk } from '../../app/store'
import { CategoriesSlice } from './Categories-slice'

export const fetchCategoriesThunk =
	(): AppThunk =>
	(dispatch, _, { CategoriesApi }) => {
		CategoriesApi.fetchCategories().then((categories) => {
			dispatch(CategoriesSlice.actions.addCategories({ categories }))
		})
	}
