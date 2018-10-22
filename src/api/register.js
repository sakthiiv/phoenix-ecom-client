import fetch from "../helpers/fetch";
const domainPath = "user/register";

export default {
  create: user => {
    return fetch.post(domainPath, user);
  }
};
