import { createBrowserRouter } from 'react-router-dom';
import { fetchCategoriesThunk } from '../entities/categories/fetchCategoriesThunk';
import { fetchUsersThunk } from '../entities/user/fetchUsersThunk';
import { UserData } from '../features/users/UserData';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { NotesPage } from '../pages/NotesPage/NotesPage';
import App from './App';
import { store } from './store';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => {
      store.dispatch(fetchUsersThunk());
      store.dispatch(fetchCategoriesThunk());

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
        children: [
          {
            path: ':userId',
            element: <UserData />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
