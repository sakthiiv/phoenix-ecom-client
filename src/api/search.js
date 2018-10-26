import fetch from "../helpers/fetch";
const domainPath = "search";

export default {
  searchGet: keyword => {
    return fetch.get(domainPath+'/'+keyword);
  }
};
