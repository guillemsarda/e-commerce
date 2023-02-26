import React, { useState } from 'react';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import ListView from './views/ListView';
import DetailsView from './views/DetailsView';

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ListView />,
    },
    {
      path: '/product/:id',
      element: <DetailsView setCart={setCart} />,
    },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
