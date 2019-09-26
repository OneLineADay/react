import _ from "axios";
import { selectToken } from "../redux/user/user.selectors";

const axios = _.create({
  baseUrl: "https://olad-backend.herokuapp.com",
  headers: {
    Authorization: selectToken
  }
});

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

export const signUp = details => axios.post("/user", details);

export const createEntry = details => axios.post("/entries", details);

export const editEntry = details => axios.patch("/entries", details);

export const fetchEntries = date => axios.get(`/entries/?date=${date}`);
