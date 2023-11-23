import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages/home';
import { NotFoundPage } from 'pages/notFound';
import { ROUTES } from 'common/constants';

import { RootLayout } from 'layouts';

export const appRouter = () =>
  createBrowserRouter([
    {
      element: <RootLayout />,
      errorElement: <p>Error</p>,
      children: [
        {
          path: ROUTES.HOME,
          element: <HomePage />,
        },
        {
          path: ROUTES.NOT_FOUND,
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
