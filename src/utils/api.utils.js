import axios from "axios";
import {store} from 'redux/store';
const token = store.getState().user.token;

axios.defaults.baseURL = "https://olad-backend.herokuapp.com";
axios.interceptors.request.use(config => {
    const token = store.getState().user.token;
    config.headers['Authorization'] =  token ? `Bearer ${token}` : '';

    return config;
});
const client = axios.create({
  baseURL: "https://olad-backend.herokuapp.com",
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json'
  }
})
export const login = (username, password) =>
  client.post(
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
  client.post("/createnewuser", { username, useremail, password });

export const createEntry = details => client.post("/entries", details);

export const editEntry = details => client.patch("/entries", details);

export const fetchEntries = date => client.get(`/entries/?date=${date}`);
