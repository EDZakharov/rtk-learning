import { useAppSelector } from '../../app/store';
import { InputSubmitButton } from '../../shared/ui/buttons/InputSubmitButton';
import { FormInput } from '../../shared/ui/input/inputForm';
import { selectUserSubscriptions } from './SelectUserSubscription';
import { UserAddNoteForm } from './UserAddNoteForm';

export const UserData = () => {
  const { user, subscriptions } = useAppSelector(selectUserSubscriptions);

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col bg-violet-400 gap-1">
      <p>ID пользователя: {user.id}</p>
      <p>Имя пользователя: {user.name}</p>
      <ul className="flex gap-3">
        {user.notes.map((el) => (
          <li key={el.id} className="bg-violet-700">
            {el.text}
          </li>
        ))}
      </ul>
      <ul className="flex gap-3 ">
        Подписки:
        {subscriptions.map((el) => (
          <li key={el.id} className="bg-violet-700 lowercase">
            <p>{el.title}</p>
          </li>
        ))}
      </ul>

      <UserAddNoteForm user={user}>
        <FormInput textLabel={'Новая заметка'} placeHolder={'Заметка'} />
        <InputSubmitButton textLabel={'Добавить'} />
      </UserAddNoteForm>
    </div>
  );
};
