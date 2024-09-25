import { useAppSelector } from '../../app/store';
import { CategoriesSlice } from '../../entities/categories/Categories-slice';
import { UsersSlice } from '../../entities/user/users-slice';

export const UserData = () => {
  const user = useAppSelector(UsersSlice.selectors.getSelectedUser);
  const subscriptions = useAppSelector(
    CategoriesSlice.selectors.selectCategoriesListById
  )(user?.categorySubscriptions ?? []);

  if (!user) {
    return null;
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
  );
};
