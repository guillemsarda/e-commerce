import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsView.css';

import { Player } from '@lottiefiles/react-lottie-player';
import { getProductById } from '../ApiService';
import Fallback from '../components/Fallback';

function DetailsView() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id, setDetails, setError, setLoading);
  }, [id]);
  if (loading) {
    return (
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_0xt1vcey.json"
        style={{ height: '300px', width: '300px' }}
      />
    );
  }

  if (error) {
    return <Fallback text={error} />;
  }

  return <main>{details.brand}</main>;
}

export default DetailsView;
