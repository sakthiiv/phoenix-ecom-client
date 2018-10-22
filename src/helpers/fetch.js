export const host = "http://10.132.20.169:8080/api/v1/";

export default {
  get: route => {
    return fetch(host + route).then(res => res.json());
  },
  post: (route, data) => {
    return fetch(host + route, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }
};