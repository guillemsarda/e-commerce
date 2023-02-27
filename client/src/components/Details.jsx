import React from 'react';
import capitalizeWords from '../utils/helpers';

function Details({ details }) {
  return Object.keys(details).map((key) => (
    <li>
      <h4>{capitalizeWords(key)}</h4>
      &nbsp;
      <h3>{details[key] ? details[key] : '-'}</h3>
    </li>
  ));
}

export default Details;
