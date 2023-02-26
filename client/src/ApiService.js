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

async function addToCart(body, setter, setDisabled) {
  try {
    const res = await fetch(`${baseUrl}cart`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status >= 400) throw new Error('Product could not be added.');
    setter((prev) => [...prev, body]);
  } catch (error) {
    // setError(error.message);
    console.log(error);
  } finally {
    setDisabled(false);
  }
}

export { getProducts, getProductById, addToCart };
