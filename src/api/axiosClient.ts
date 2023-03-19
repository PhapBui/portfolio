import axios, { AxiosResponse } from 'axios';
import firebase from 'firebase/compat/app';

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();
  const hasRememberdAccount = localStorage.getItem('firebaseui::rememberdAccounts');
  if (hasRememberdAccount) return null;

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(null);
    }, 5000);
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        reject(null);
      }

      const token = await user?.getIdToken();
      resolve(token);
      unregisterAuthObserver();
      clearTimeout(timer);
    });
  });
};

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    const token = await getFirebaseToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
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
export default axiosClient;
