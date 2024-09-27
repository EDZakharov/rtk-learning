import { z } from 'zod'

const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	categorySubscriptions: z.array(z.string()),
	notes: z.array(
		z.object({
			id: z.string(),
			header: z.string().optional(),
			text: z.string(),
		})
	),
})

const baseUrl = 'http://localhost:3000'
export const UserApi = {
	fetchUsers: () =>
		fetch(`${baseUrl}/users`)
			.then((response) => response.json())
			.then((res) => userSchema.array().parse(res)),
	fetchUser: (id: string) =>
		fetch(`${baseUrl}/users/${id}`)
			.then((response) => response.json())
			.then((res) => userSchema.parse(res)),
}
