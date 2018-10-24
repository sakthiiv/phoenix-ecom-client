import fetch from "../helpers/fetch";
const domainPath = "category";

export default {
  create: category => {
    return fetch.post(domainPath, category);
  },
  update: (categoryId, category) => {
    return fetch.put(domainPath + "/" + categoryId, category);
  },
  delete: categoryId => {
    return fetch.delete(domainPath + "/" + categoryId);
  },
  getById: categoryId => {
    return fetch.get(domainPath + "/" + categoryId);
  },
  getAll: () => {
    return fetch.get(domainPath);
  }
};
