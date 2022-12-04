import axios from "axios"

const http = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  withCredentials: true,
})

http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error?.response?.status === 401) {
      console.error("unauthenticated, redirect to login");
      localStorage.clear();
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export function getCharacters(data) {
    return http.get("/characters");
  }