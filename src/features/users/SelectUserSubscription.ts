import { createSelector } from '@reduxjs/toolkit'
import { store } from '../../app/store'
import { CategoriesSelectors } from '../../entities/categories'
import { UsersSelectors } from '../../entities/user'
import { UserId } from '../../entities/user/users-slice'

export const selectUserSubscription = (userId: UserId) =>
	createSelector(
		[
			() => UsersSelectors.getUserById(store.getState())(userId),
			CategoriesSelectors.selectCategoriesList,
		],
		(user, categories) => {
			const uniqueIds = new Set(user?.categorySubscriptions)

			const subscriptions = categories.filter((category) => {
				if (uniqueIds.has(category.id)) {
					return {
						id: category.id,
						title: category.title,
					}
				}
			})
			return { user, subscriptions }
		}
	)
