import React, { useEffect, useState } from 'react';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import ListView from './views/ListView';
import DetailsView from './views/DetailsView';

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const cartCached = localStorage.getItem('cart');
    const cache = JSON.parse(cartCached);
    if (cache && Date.now() > cache.expiration) {
      // eslint-disable-next-line no-undef
      localStorage.clear();
    } else if (cache) {
      setCart(cache.products);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header cart={cart} />
          <ListView />
        </>
      ),
    },
    {
      path: '/product/:id',
      element: (
        <>
          <Header cart={cart} />
          <DetailsView setCart={setCart} />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
