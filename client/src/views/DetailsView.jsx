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
    return (
      <main style={{ height: '90vh' }}>
        <Fallback text={error} />
      </main>
    );
  }

  return (
    <main className="details-view">
      <div className="phone-headers">
        <h1>{`${details.brand}'s ${details.model}`}</h1>
      </div>
      <div className="phone-content">
        <section className="details-img-wrapper">
          <img src={details.imgUrl} alt={`${details.brand}'s ${details.model} phone`} />
        </section>
        <div>
          <section className="description">
            <h2>{`${details.price}€`}</h2>
            <ul className="values">
              <li>
                <h4>CPU:</h4>
                &nbsp;
                <h3>{details.cpu}</h3>
              </li>
              <li>
                <h4>RAM:</h4>
                &nbsp;
                <h3>{details.ram}</h3>
              </li>
              <li>
                <h4>OS:</h4>
                &nbsp;
                <h3>{details.os}</h3>
              </li>
              <li>
                <h4>Display resolution:</h4>
                &nbsp;
                <h3>{details.displayResolution}</h3>
              </li>
              <li>
                <h4>Battery:</h4>
                &nbsp;
                <h3>{details.battery}</h3>
              </li>
              <li>
                <h4>Primary Camera:</h4>
                &nbsp;
                <h3>{details.primaryCamera}</h3>
              </li>
              <li>
                <h4>Secondary Camera:</h4>
                &nbsp;
                <h3>{details.secondaryCmera}</h3>
              </li>
              <li>
                <h4>Dimentions:</h4>
                &nbsp;
                <h3>{details.dimentions}</h3>
              </li>
              <li>
                <h4>Weight:</h4>
                &nbsp;
                <h3>{`${details.weight}gr`}</h3>
              </li>
            </ul>
          </section>
          <div>Actions</div>
        </div>
      </div>
    </main>
  );
}

export default DetailsView;
