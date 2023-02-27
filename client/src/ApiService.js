const baseUrl = 'https://itx-frontend-test.onrender.com/api/';

async function getProducts(setter, setError, setLoading) {
  try {
    const res = await fetch(`${baseUrl}product`);
    if (res.status >= 400) throw new Error('Could not get products :(');
    const productList = await res.json();
    setter(productList);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}

async function getProductById(id, setter, setError, setLoading) {
  try {
    const res = await fetch(`${baseUrl}product/${id}`);
    if (res.status >= 400) throw new Error('Product not found.');
    const productDetail = await res.json();
    setter(productDetail);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}

async function addToCart(body, details, setter, setDisabled) {
  try {
    const res = await fetch(`${baseUrl}cart`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.status >= 400) throw new Error('Product could not be added.');
    const product = {
      imgUrl: details.imgUrl,
      brand: details.brand,
      model: details.model,
      ...body,
    };
    // eslint-disable-next-line no-undef
    const cartCached = localStorage.getItem('cart');
    let cart = { products: [], expiration: Date.now() + 60 * 60 * 1000 };
    if (cartCached) {
      cart = JSON.parse(cartCached);
    }
    cart.products.push(product);
    // eslint-disable-next-line no-undef
    localStorage.setItem('cart', JSON.stringify(cart));
    setter((prev) => [...prev, product]);
  } catch (error) {
    // setError(error.message);
    console.log(error);
  } finally {
    setDisabled(false);
  }
}

export { getProducts, getProductById, addToCart };
