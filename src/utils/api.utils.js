import axios from "axios";
import { selectToken } from "../redux/user/user.selectors";
console.log(selectToken);

axios.defaults.baseURL = "https://olad-backend.herokuapp.com";

export const login = (username, password) =>
  axios.get(
    "/login",
    `grant_type=password&username=${username}&password=${password}`,
    {
      headers: {
        Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  );

export const signUp = (username, email, password) =>
  axios.post("/user", (username, email, password));

export const createEntry = details => axios.post("/entries", details);

export const editEntry = details => axios.patch("/entries", details);

export const fetchEntries = date => axios.get(`/entries/?date=${date}`);
