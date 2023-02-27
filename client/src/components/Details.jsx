import React from 'react';

function Details({ details }) {
  return Object.keys(details).map((key) => (
    <li>
      <h4>{key}</h4>
      &nbsp;
      <h3>{details[key] ?? '-'}</h3>
    </li>
  ));
}

export default Details;
