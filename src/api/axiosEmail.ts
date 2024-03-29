import axios, { AxiosResponse } from 'axios';

const axiosEmail = axios.create({
  baseURL: process.env.REACT_APP_DIRECTORY,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Add a request interceptor
axiosEmail.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosEmail.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axiosEmail;
