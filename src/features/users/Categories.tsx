import { FC } from 'react'
import { useAppDispatch } from '../../app/store'
import { Category } from '../../entities/categories/Categories-slice'
import { deleteUserThunk } from '../../entities/user'
import { User } from '../../entities/user/users-slice'
import { InputSubmitButton } from '../../shared/ui/buttons/InputSubmitButton'
import { FormInput } from '../../shared/ui/input/inputForm'
import { CategoryListItem } from './CategoryListItem'
import { UserAddNoteForm } from './UserAddNoteForm'

interface IProps {
	subscriptions?: Category[]
	user: User
}

export const Categories: FC<IProps> = ({ user, subscriptions = [] }) => {
	const dispatch = useAppDispatch()

	return (
		<>
			<p>Подписки:</p>
			<ul className='flex gap-3 '>
				{subscriptions.map((category) => (
					<CategoryListItem key={category.id} category={category} />
				))}
			</ul>

			{user.notes.map((el) => (
				<li
					key={el.id}
					className='bg-violet-700'
					onClick={() => dispatch(deleteUserThunk(user, el.id))}
				>
					{el.text}
				</li>
			))}
			<UserAddNoteForm user={user}>
				<FormInput textLabel={'Новая заметка'} placeHolder={'Заметка'} />
				<InputSubmitButton textLabel={'Добавить'} />
			</UserAddNoteForm>
		</>
	)
}
