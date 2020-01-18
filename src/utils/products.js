const images = require('../data/images.json');
const products = require('../data/products.json');

export default products.map((product, index) => ({
  ...product,
  sizes: [...new Set(product.sizes)],
  picture: images[index % images.length],
}));

export const sizes = () => {
  return products
    .map(p => p.sizes)
    .reduce((sizes, s) => {
      return [...new Set([...sizes, ...s])];
    }, []);
};
