import fetch from "../helpers/fetch";
import sessionstorage from "../helpers/sessionstorage";
const domainPath = "checkout";

export default {
  proceedToCheckout:address => {
    const  user  = sessionstorage.getItemFromSession('user');
    const userId = user ? user.userId :'';
    return fetch.post(domainPath+'/'+userId, address);
  }
};


