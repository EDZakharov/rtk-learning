import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes';
import { store } from './app/store';
import { fetchUsersThunk } from './entities/user/fetchUsersThunk';
import './index.css';

store.dispatch(fetchUsersThunk());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
