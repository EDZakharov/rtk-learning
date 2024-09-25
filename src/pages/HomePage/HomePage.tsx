import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { UsersSlice } from '../../entities/user/users-slice';

export const HomePage = () => {
  const users = useAppSelector(UsersSlice.selectors.getUsers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 flex flex-col text-white w-full">
      {users.length
        ? users.map((user) => (
            <div
              key={user.id}
              className="flex gap-2 border-zinc-400 border-solid border-2 "
              onClick={() => {
                dispatch(
                  UsersSlice.actions.setSelectedUser({ userId: user.id })
                );
                navigate(`/notes/${user.id}`);
              }}
            >
              <div>{user.id}</div>
              <div>{user.name}</div>
            </div>
          ))
        : 'No users'}
    </div>
  );
};
