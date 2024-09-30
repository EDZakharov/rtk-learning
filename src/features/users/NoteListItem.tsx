import { FC } from 'react';

import { useAppDispatch } from '../../app/redux';
import { deleteUserThunk } from '../../entities/user';
import { User } from '../../entities/user/users-slice';

interface IProps {
  user: User;
  note: { id: string; text: string };
}

export const NoteListItem: FC<IProps> = ({ user, note }) => {
  const dispatch = useAppDispatch();

  return (
    <li
      className="bg-violet-700"
      onClick={() => dispatch(deleteUserThunk(user, note.id))}
    >
      {note.text}
    </li>
  );
};
