const baseUrl = 'https://itx-frontend-test.onrender.com/api/';

async function getProducts(setter, errorSetter) {
  try {
    const res = await fetch(`${baseUrl}products`);
    const productList = await res.json();
    setter(productList);
  } catch (error) {
    console.log(error);
    errorSetter(error.message);
  }
}

async function getProductById(id, setter, errorSetter) {
  try {
    const res = await fetch(`${baseUrl}products/id`);
    const productDetail = await res.json();
    setter(productDetail);
  } catch (error) {
    console.log(error);
    errorSetter(error.message);
  }
}

export { getProducts, getProductById };
