import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { NotesPage } from '../pages/NotesPage/NotesPage';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => {
      // const localUserId = localStorage.getItem('user');
      // if (localUserId) {
      //   const user = await UserApi.fetchUser(localUserId);
      // }

      // fetchUsersThunk();
      return null;
    },
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/notes',
        element: <NotesPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
