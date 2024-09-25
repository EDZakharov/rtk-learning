import { useAppSelector } from '../../app/store';
import { UsersSlice } from '../../entities/user/users-slice';

export const HomePage = () => {
  // const dispatch = useAppDispatch();

  const users = useAppSelector(UsersSlice.selectors.getUsers);
  console.log(users);
  // useEffect(() => {
  //   dispatch(fetchUsersThunk);
  // }, [dispatch, users]);

  return (
    <div className="bg-gray-800 flex flex-col text-white w-full">
      {users.length
        ? users.map((user) => <div key={user.id}>{user.name}</div>)
        : 'No users'}
    </div>
  );
};
