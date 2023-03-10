import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Cart from './Cart';
import useStore from '../utils/store';

function Header({ cart }) {
  const [opened, setOpened] = useState(false);
  const { storeStates } = useStore();
  return (
    <header>
      <Link to="/">
        <svg
          width="300"
          height="50"
          viewBox="0 0 369.8947368421052 98.72445253579554"
          className="css-1j8o68f"
        >
          <defs id="SvgjsDefs1229" />
          <g
            id="SvgjsG1230"
            transform="matrix(7.041686826845015,0,0,7.041686826845015,-7.041683469107079,-42.10927057015303)"
            fill="#7f4a88"
          >
            <path d="M11.04 6.42 q1.26 0.44 1.94 1.24 t0.68 1.86 q0 1.04 -0.64 1.86 t-1.72 1.14 q1.26 0.28 2.02 1.25 t0.76 2.29 q0 1.18 -0.7 2.08 t-1.97 1.38 t-2.97 0.48 l-7.44 0 l0 -14.02 l7.1 0 q1.68 0 2.94 0.44 z M8.61 11.1 q0.29 -0.28 0.29 -0.74 q0 -0.44 -0.29 -0.71 t-0.77 -0.27 l-2.22 0 l0 2 l2.22 0 q0.48 0 0.77 -0.28 z M8.87 16.29 q0.39 -0.31 0.39 -0.81 q0 -0.46 -0.39 -0.74 t-1.03 -0.28 l-2.22 0 l0 2.14 l2.22 0 q0.64 0 1.03 -0.31 z" />
          </g>
          <g
            id="SvgjsG1231"
            transform="matrix(3.292959796984132,0,0,3.292959796984132,108.70704177322146,2.0083279500276667)"
            fill="#4a266a"
          >
            <path d="M11.04 6.42 q1.26 0.44 1.94 1.24 t0.68 1.86 q0 1.04 -0.64 1.86 t-1.72 1.14 q1.26 0.28 2.02 1.25 t0.76 2.29 q0 1.18 -0.7 2.08 t-1.97 1.38 t-2.97 0.48 l-7.44 0 l0 -14.02 l7.1 0 q1.68 0 2.94 0.44 z M8.61 11.1 q0.29 -0.28 0.29 -0.74 q0 -0.44 -0.29 -0.71 t-0.77 -0.27 l-2.22 0 l0 2 l2.22 0 q0.48 0 0.77 -0.28 z M8.87 16.29 q0.39 -0.31 0.39 -0.81 q0 -0.46 -0.39 -0.74 t-1.03 -0.28 l-2.22 0 l0 2.14 l2.22 0 q0.64 0 1.03 -0.31 z M27.2895 9.06 l0 10.94 l-4.5 0 l0 -1.52 q-0.54 0.84 -1.36 1.28 t-1.86 0.44 q-1.12 0 -1.98 -0.52 t-1.35 -1.46 t-0.49 -2.18 l0 -6.98 l4.5 0 l0 5.68 q0 0.68 0.33 1.09 t0.87 0.41 q0.62 0 0.98 -0.48 t0.36 -1.28 l0 -5.42 l4.5 0 z M35.179 23.27 q-1.18 0.81 -2.94 0.81 q-1.08 0 -1.99 -0.31 t-1.79 -0.97 l1.88 -2.96 q0.7 0.64 1.46 0.64 t1.08 -0.56 l0.16 -0.26 l-4.54 -10.6 l4.62 0 l2.16 6.24 l1.78 -6.24 l4.48 0 l-4.5 11.7 q-0.68 1.7 -1.86 2.51 z M48.0885 12.54 q-0.66 0 -1.05 0.55 t-0.39 1.47 q0 0.94 0.39 1.49 t1.05 0.55 q1 0 1.34 -1.18 l3.64 1.68 q-0.6 1.46 -1.97 2.26 t-3.25 0.8 q-1.72 0 -3.02 -0.69 t-2.01 -1.95 t-0.71 -2.94 q0 -1.7 0.71 -2.99 t2.02 -1.99 t3.05 -0.7 q1.78 0 3.14 0.83 t2.04 2.33 l-3.58 1.52 q-0.44 -1.04 -1.4 -1.04 z M62.758 9.64 q1.32 0.74 2.02 2.11 t0.7 3.21 q0 0.38 -0.02 0.58 l-7.12 0 q0.22 0.64 0.69 0.97 t1.13 0.33 q1.18 0 2.22 -0.98 l2.34 2.3 q-0.88 0.98 -2.13 1.49 t-2.83 0.51 q-1.84 0 -3.19 -0.69 t-2.06 -1.95 t-0.71 -2.94 q0 -1.72 0.72 -3 t2.05 -1.98 t3.07 -0.7 q1.8 0 3.12 0.74 z M60.62800000000001 12.34 q-0.37 -0.44 -0.95 -0.44 q-0.56 0 -0.93 0.42 t-0.51 1.14 l2.72 0 q0.04 -0.68 -0.33 -1.12 z M67.4475 5.16 l4.5 0 l0 14.84 l-4.5 0 l0 -14.84 z M74.81700000000001 5.16 l4.5 0 l0 14.84 l-4.5 0 l0 -14.84 z" />
          </g>
        </svg>
      </Link>
      <div className="breadcrump">
        <Link className="buycell-link" to="/">
          <h3>Buycell</h3>
        </Link>
        &nbsp;
        <h3>{storeStates.pageName ? `> ${storeStates.pageName}` : ''}</h3>
      </div>
      <div className="cart-popup-wrapper">
        <button
          type="button"
          onClick={() => setOpened(!opened)}
          style={{
            borderBottom: opened ? 'none' : 'solid 2px #4a2669',
            height: opened ? '32px' : '34px',
            borderRadius: opened ? '5px 5px 0 0' : '5px',
            display: 'flex',
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="cart"
            height="20px"
          />
          {`(${cart.length})`}
        </button>
        {opened ? (
          <div className="cart-popup">
            <h1 className="popup-title">Products in the cart:</h1>
            <Cart cart={cart} />
            <h1 className="popup-title total">
              {`Total: ${cart.reduce((acc, { price }) => +acc + +price, 0)}???`}
            </h1>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
