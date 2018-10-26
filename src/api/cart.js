import fetch from "../helpers/fetch";
import sessionstorage from "../helpers/sessionstorage";
const domainPath = "cart";

export default {
  cartGetDetails: userId => {
    return fetch.get(domainPath+'/'+userId);
  },
  addToCart:prodData => {
    return fetch.post(domainPath, prodData);
  },
  deleteFromCart: (product) => {
    const  user  = sessionstorage.getItemFromSession('user');
    const userId = user ? user.userId :'';
    return fetch.post(domainPath + "/" + userId, product);
  }
};
