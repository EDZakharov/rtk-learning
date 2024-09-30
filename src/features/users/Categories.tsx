import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/redux';
import { setActiveCategoryId } from '../../entities/categories';
import { selectActiveCategory } from './selectActiveCategory';

/**
 * A component to display the list of categories for a given user.
 *
 * This component takes the user id as a parameter from the URL and
 * fetches the list of categories from the Redux store. It then displays
 * the list of categories as links to the notes page for each category.
 *
 * @returns {React.ReactElement} The rendered component.
 */
export const Categories: FC = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();
  const { categories, active } = useAppSelector(selectActiveCategory);

  return (
    <>
      {categories.map((category) => (
        <Link
          className={active === category.id ? 'text-red-500' : ''}
          key={category.id}
          to={`/notes/${userId}/${category.title.toLowerCase()}`}
          onClick={() => dispatch(setActiveCategoryId({ id: category.id }))}
        >
          {category.title}
        </Link>
      ))}
    </>
  );
};
