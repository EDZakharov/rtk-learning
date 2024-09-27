import { FC } from 'react'
import { Category } from '../../entities/categories/Categories-slice'

interface IProps {
	category: Category
}

export const CategoryListItem: FC<IProps> = ({ category }) => {
	return (
		<li className='bg-violet-700 lowercase'>
			<p>{category.title}</p>
		</li>
	)
}
