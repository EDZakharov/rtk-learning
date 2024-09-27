import { z } from 'zod'
import { User } from './users-slice'

const noteSchema = z.object({
	id: z.string(),
	categoryId: z.string().optional(),
	text: z.string(),
})

const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	categorySubscriptions: z.array(z.string()),
	notes: z.array(noteSchema),
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
	setUserNotes: (user: User, note: { id: string; text: string }) =>
		fetch(`${baseUrl}/users/${user.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...user, notes: [...user.notes, note] }),
		}).then((response) => response.json()),
	deleteUserNote: (user: User, noteId: string) =>
		fetch(`${baseUrl}/users/${user.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...user,
				notes: user.notes.filter((note) => note.id !== noteId),
			}),
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res)
				return res
			}),
}
