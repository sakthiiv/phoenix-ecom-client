import fetch from "../helpers/fetch";
const domainPath = "category";

export default {
  create: category => {
    return fetch.post(domainPath, category);
  },
  update: categoryId => {},
  delete: categoryId => {},
  getById: categoryId => {},
  getAll: () => {
    return fetch.get(domainPath);
  }
};
