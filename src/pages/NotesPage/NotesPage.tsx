import { Outlet } from 'react-router-dom';

export const NotesPage = () => {
  // const navigate = useNavigate();

  return (
    <div className="bg-gray-800 w-full text-white">
      <Outlet />
    </div>
  );
};
