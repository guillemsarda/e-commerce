import React from 'react';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import ListView from './views/ListView';
import DetailsView from './views/DetailsView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListView />,
  },
  {
    path: '/product/:id',
    element: <DetailsView />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
