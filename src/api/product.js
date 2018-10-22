import fetch from "../helpers/fetch";
const domainPath = "product";

export default {
  create: product => {
    return fetch.post(domainPath, product);
  },
  update: productId => {},
  delete: productId => {},
  getById: productId => {},
  getAll: () => {
    return fetch.get(domainPath);
  }
};
