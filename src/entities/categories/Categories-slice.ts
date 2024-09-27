import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Category = {
	id: string
	title: string
}

export type CategoriesState = {
	categories: Category[]
}

const initialState: CategoriesState = {
	categories: [],
}

export const CategoriesSlice = createSlice({
	name: 'categories',
	initialState,
	selectors: {
		selectCategoriesListById: (state) => (otherCategoriesId: string[] | []) => {
			const otherCategoryIds = new Set(otherCategoriesId)

			return state.categories.filter((category) =>
				otherCategoryIds.has(category.id)
			)
		},
		selectCategoriesList: (state) => state.categories,
		selectCategoriesById: (state) => (id: string) => {
			return state.categories.find((category) => category.id === id)
		},
	},
	reducers: {
		addCategories: (
			state,
			action: PayloadAction<{ categories: Category[] }>
		) => {
			const { categories } = action.payload

			state.categories = categories
		},
	},
})
