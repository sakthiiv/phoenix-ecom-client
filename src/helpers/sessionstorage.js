// export const host = "http://10.132.21.73:8080/api/v1/";

export default {
  setItemInSession: (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  getItemFromSession:(key) => {
    if(sessionStorage.getItem(key)) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    return null;
  }
};
