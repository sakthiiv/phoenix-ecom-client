import fetch from "../helpers/fetch";
const domainPath = "product";

export default {
  create: product => {
    return fetch.post(domainPath, product);
  },
  update: (productId, product) => {
    return fetch.put(domainPath + "/" + productId, product);
  },
  delete: productId => {
    return fetch.delete(domainPath + "/" + productId);
  },
  getById: productId => {
    return fetch.get(domainPath + "/" + productId);
  },
  getAll: () => {
    return fetch.get(domainPath);
  },
  getAllByCatId: catId => {
    return fetch.get("productlist/" + catId);
  }
};
