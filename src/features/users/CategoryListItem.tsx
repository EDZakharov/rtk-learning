import { FC } from 'react';

import { useAppSelector } from '../../app/redux';
import { UsersSelectors } from '../../entities/user';
import { InputSubmitButton } from '../../shared/ui/buttons/InputSubmitButton';
import { FormInput } from '../../shared/ui/input/inputForm';
import { NoteList } from './NoteList';
import { selectUserSubscription } from './selectUserSubscription';
import { UserAddNoteForm } from './UserAddNoteForm';

/**
 * A component that displays a category list item.
 *
 * It displays a list of notes for the category with the id '1' and
 * a form to add new notes.
 *
 * @returns {JSX.Element} - A category list item component.
 */

export const CategoryListItem: FC = () => {
  const userId = useAppSelector(UsersSelectors.selectActiveUser);
  const selectedUser = useAppSelector(selectUserSubscription(userId?.id));

  if (!selectedUser?.user) {
    return null;
  }

  return (
    <>
      <NoteList user={selectedUser.user} />
      <UserAddNoteForm user={selectedUser.user}>
        <FormInput textLabel={'Новая заметка'} placeHolder={'Заметка'} />
        <InputSubmitButton textLabel={'Добавить'} />
      </UserAddNoteForm>
    </>
  );
};
