import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://api.apivoka.com/`,
});

axiosInstance.interceptors.request.use((req) => {
  //   const state = store.getState();
  //   const token = state.auth.auth.;
  //   config.params = config.params || {};
  //   config.params["auth"] = token;
  //   return config;

  if (localStorage.getItem("userDetails")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("userDetails")
    )}`;
  }
  return req;
});

export default axiosInstance;
