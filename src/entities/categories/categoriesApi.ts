import { z } from 'zod'

const CategoriesSchema = z.array(
	z.object({
		id: z.string(),
		title: z.string(),
	})
)

const baseUrl = 'http://localhost:3000'
export const CategoriesApi = {
	fetchCategories: () =>
		fetch(`${baseUrl}/categories`)
			.then((response) => response.json())
			.then((res) => CategoriesSchema.parse(res)),
}
