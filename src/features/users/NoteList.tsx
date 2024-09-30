import { FC } from 'react';

import { useAppSelector } from '../../app/redux';
import { UsersSelectors } from '../../entities/user';
import { User } from '../../entities/user/users-slice';
import { NoteListItem } from './NoteListItem';
import { selectUserCategoryNotes } from './selectUserCategoryNotes';

interface INotes {
  user: User;
}

/**
 * A component that displays a list of notes for a given user.
 *
 * @param {IProps} props - The component props.
 * @param {User} props.user - The user to display notes for.
 * @returns {JSX.Element} - A list of notes for the user.
 */
export const NoteList: FC<INotes> = () => {
  const user = useAppSelector(UsersSelectors.selectActiveUser);
  const notes = useAppSelector(selectUserCategoryNotes(user!.id));

  if (!user) {
    return null;
  }

  return (
    <ul>
      {notes.map((note) => (
        <NoteListItem key={note.id} user={user} note={note} />
      ))}
    </ul>
  );
};
