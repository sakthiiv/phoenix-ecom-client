import fetch from "../helpers/fetch";
const domainPath = "/login";

export default {
  login: user => {
    return fetch.post(domainPath, user);
  }
};
