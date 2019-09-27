import axios from "axios";
import {store} from 'redux/store';

axios.defaults.baseURL = "https://olad-backend.herokuapp.com";
axios.interceptors.request.use(config => {
    const token = store.getState().user.token;
    config.headers['Authorization'] =  token ? `Bearer ${token}` : '';

    return config;
});

export const login = (username, password) =>
  axios.post(
    "/login",
    `grant_type=password&username=${username}&password=${password}`,
    {
      headers: {
        Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  );

export const signUp = (username, useremail, password) =>
axios.post("/createnewuser", { username, useremail, password });

export const createEntry = details => axios.post("/entries", details);

export const editEntry = details => axios.patch("/entries", details);

export const fetchEntries = date => axios.get(`/entries/?date=${date}`);

export const deleteEntries = date => axios.delete(`/entries/?date=${date}`);
