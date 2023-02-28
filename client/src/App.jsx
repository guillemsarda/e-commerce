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
      errorElement: (
        <>
          <Header cart={cart} />
          <main
            style={{
              height: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h1 style={{ fontSize: '200px', fontWeight: '100' }}>404</h1>
            <p style={{ fontSize: '50px', fontWeight: '100' }}>This route does not exist.</p>
          </main>
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
      errorElement: (
        <>
          <Header cart={cart} />
          <main
            style={{
              height: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h1 style={{ fontSize: '200px', fontWeight: '100' }}>404</h1>
            <p style={{ fontSize: '50px', fontWeight: '100' }}>This route does not exist.</p>
          </main>
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
