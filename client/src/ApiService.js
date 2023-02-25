const baseUrl = 'https://itx-frontend-test.onrender.com/api/';

async function getProducts(setter, setError, setLoading) {
  try {
    const res = await fetch(`${baseUrl}product`);
    if (res.status > 400) throw new Error('Could not get products :(');
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
    if (res.status > 400) throw new Error('Product not found.');
    const productDetail = await res.json();
    setter(productDetail);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}

export { getProducts, getProductById };
