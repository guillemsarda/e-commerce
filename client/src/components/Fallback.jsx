import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

function Fallback({ text }) {
  return (
    <span className="fallback-wrapper">
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_7ciiygtc.json"
        style={{ height: '300px', width: '300px' }}
      />
      <h1>{text}</h1>
    </span>
  );
}

export default Fallback;
