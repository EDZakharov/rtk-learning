import { createBrowserRouter } from 'react-router-dom';
import { fetchCategoriesThunk } from '../entities/categories/fetchCategoriesThunk';
import { fetchUsersThunk } from '../entities/user/fetchUsersThunk';
import { CategoryListItem } from '../features/users/CategoryListItem';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { NotesPage } from '../pages/NotesPage/NotesPage';
import App from './App';
import { store } from './store';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        lazy: () =>
          import('../pages/HomePage/HomePage').then((module) => ({
            Component: module.HomePage,
            loader: () => {
              store.dispatch(fetchUsersThunk());
              return null;
            },
          })),
      },
      {
        path: '/notes',
        element: <NotesPage />,
        children: [
          {
            path: ':userId/',
            lazy: () =>
              import('../features/users/UserData').then((module) => ({
                Component: module.UserData,
                loader: () => {
                  store.dispatch(fetchCategoriesThunk());
                  return null;
                },
              })),
            children: [
              {
                path: ':categoryId',
                element: <CategoryListItem />,
              },
            ],
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
