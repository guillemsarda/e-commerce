import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsView.css';

import { Player } from '@lottiefiles/react-lottie-player';
import { addToCart, getProductById } from '../ApiService';
import Fallback from '../components/Fallback';
import useStore from '../utils/store';
import Details from '../components/Details';

function DetailsView({ setCart }) {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const { methods } = useStore();

  useEffect(() => {
    getProductById(id, setDetails, setError, setLoading);
  }, [id]);

  useEffect(() => {
    if (details.internalMemory) setSelectedStorage(details.internalMemory[0]);
    if (details.colors) setSelectedColor(details.colors[0]);
    if (details.brand && details.model) {
      const pageName = `${details.brand}'s ${details.model}`;
      methods.setPageName(pageName);
    }
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
            <h2 className="description-title">Product Details:</h2>
            <ul className="values">
              <Details
                details={{
                  CPU: details.cpu,
                  RAM: details.ram,
                  OS: details.os,
                  displayResolution: details.displayResolution,
                  battery: details.battery,
                  primaryCamera: details.primaryCamera,
                  secondaryCamera: details.secondaryCmera,
                  dimentions: details.dimentions,
                  weight: details.weight ? `${details.weight}g` : null,
                }}
              />
            </ul>
            <span className="price-wrapper details-price-wrapper">
              <h3
                className="details-price"
                style={{
                  backgroundColor: details.price ? '#bdb2ff' : '#d3d3d3',
                }}
              >
                {details.price ? `${details.price}€` : 'Out of stock'}
              </h3>
            </span>
          </section>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Select a storage:</legend>
              {details.internalMemory.map((storage) => (
                <div key={storage} className="radio">
                  <input
                    type="radio"
                    name={storage}
                    checked={storage === selectedStorage}
                    onChange={() => setSelectedStorage(storage)}
                  />
                  <label htmlFor={storage} className="radio-label">
                    {storage}
                  </label>
                </div>
              ))}
            </fieldset>
            <fieldset>
              <legend>Select a color:</legend>
              {details.colors.map((color) => (
                <div key={color} className="radio">
                  <input
                    type="radio"
                    name={color}
                    checked={color === selectedColor}
                    onChange={() => setSelectedColor(color)}
                  />
                  <label htmlFor={color} className="radio-label">
                    {color}
                  </label>
                </div>
              ))}
            </fieldset>
            <input
              type="submit"
              title="Add to cart"
              className="add-cart"
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
