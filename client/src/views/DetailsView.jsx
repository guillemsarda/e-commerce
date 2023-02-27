import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsView.css';

import { Player } from '@lottiefiles/react-lottie-player';
import { addToCart, getProductById } from '../ApiService';
import Fallback from '../components/Fallback';

function DetailsView({ setCart }) {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getProductById(id, setDetails, setError, setLoading);
  }, [id]);

  useEffect(() => {
    if (details.internalMemory) setSelectedStorage(details.internalMemory[0]);
    if (details.colors) setSelectedColor(details.colors[0]);
  }, [details]);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    const body = {
      id: details.id,
      colorCode: selectedColor,
      storageCode: selectedStorage,
      price: details.price,
    };
    addToCart(body, details, setCart, setDisabled);
  }
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
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Select a storage:</legend>
              {details.internalMemory.map((storage) => (
                <div key={storage}>
                  <input
                    type="radio"
                    name={storage}
                    checked={storage === selectedStorage}
                    onChange={() => setSelectedStorage(storage)}
                  />
                  <label htmlFor={storage}>{storage}</label>
                </div>
              ))}
            </fieldset>
            <fieldset>
              <legend>Select a color:</legend>
              {details.colors.map((color) => (
                <div key={color}>
                  <input
                    type="radio"
                    name={color}
                    checked={color === selectedColor}
                    onChange={() => setSelectedColor(color)}
                  />
                  <label htmlFor={color}>{color}</label>
                </div>
              ))}
            </fieldset>
            <input
              type="submit"
              title="Add to cart"
              name="add"
              value="Add to cart"
              disabled={disabled}
            />
          </form>
        </div>
      </div>
    </main>
  );
}

export default DetailsView;
