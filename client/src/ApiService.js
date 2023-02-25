const baseUrl = 'https://itx-frontend-test.onrender.com/api/';

async function getProducts(setter, errorSetter, setLoading) {
  try {
    const res = await fetch(`${baseUrl}product`);
    const productList = await res.json();
    setter(productList);
  } catch (error) {
    errorSetter('Could not get products :(');
  } finally {
    setLoading(false);
  }
}

async function getProductById(id, setter, errorSetter, setLoading) {
  try {
    const res = await fetch(`${baseUrl}product/id`);
    const productDetail = await res.json();
    setter(productDetail);
  } catch (error) {
    errorSetter('Product not found.');
  } finally {
    setLoading(false);
  }
}

export { getProducts, getProductById };
