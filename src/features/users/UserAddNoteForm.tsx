import { FC } from 'react'
import { useAppDispatch } from '../../app/store'
import { updateUsersThunk } from '../../entities/user/updateUsersThunk'
import { User } from '../../entities/user/users-slice'

interface IFormElements extends HTMLFormControlsCollection {
	note: HTMLInputElement
}

interface INotes extends HTMLFormElement {
	readonly elements: IFormElements
}

interface IProps {
	user: User
	children?: React.ReactNode
}

/**
 * A form component for adding notes to a user.
 *
 * @param {IProps} props - The component props.
 * @param {User} props.user - The user to add a note to.
 * @param {React.ReactNode} [props.children] - Optional children components.
 * @returns {React.ReactElement} The rendered form component.
 */
export const UserAddNoteForm: FC<IProps> = ({ user, children }) => {
	const dispatch = useAppDispatch()

	const handleSubmit = (e: React.FormEvent<INotes>) => {
		e.preventDefault()

		dispatch(
			updateUsersThunk(user, {
				id: Date.now().toString(),
				text: e.currentTarget.elements.note.value,
			})
		)

		e.currentTarget.reset()
	}

	return (
		<form className='flex flex-col' onSubmit={handleSubmit}>
			{children}
		</form>
	)
}
