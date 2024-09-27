import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Categories } from './Categories';

/**
 * A component to display the user's data.
 *
 * This component renders a sidebar with links to the user's categories and an
 * outlet to render the user's notes.
 *
 * @returns {React.ReactElement} The rendered component.
 */
export const UserData: FC = () => {
  return (
    <div className="flex flex-col bg-violet-400 gap-1">
      <Categories />
      <Outlet />
    </div>
  );
};
