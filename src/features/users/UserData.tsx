import { useAppSelector } from '../../app/store'
import { selectUserSubscriptions } from './selectUserSubscriptions'

export const UserData = () => {
	const { user, subscriptions } = useAppSelector(selectUserSubscriptions)

	if (!user) {
		return null
	}

	return (
		<div>
			<div>{user.id}</div>
			<div>{user.name}</div>
			<div>
				{subscriptions.map((el) => (
					<div key={el.id}>{el.title}</div>
				))}
			</div>
		</div>
	)
}
