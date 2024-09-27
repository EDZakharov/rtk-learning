import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/store'
import { Categories } from './Categories'
import { selectUserSubscription } from './selectUserSubscription'

export const UserData = () => {
	const { userId } = useParams()

	const { user, subscriptions } = useAppSelector(
		selectUserSubscription(userId ?? '')
	)

	if (!user) {
		return null
	}

	return (
		<div className='flex flex-col bg-violet-400 gap-1'>
			<p>ID пользователя: {user.id}</p>
			<p>Имя пользователя: {user.name}</p>
			<Categories subscriptions={subscriptions} user={user} />
		</div>
	)
}
