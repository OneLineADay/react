import axios from "axios";

axios.defaults.baseURL = "https://olad-backend.herokuapp.com";

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
  axios.post("/createnewuser", { username, useremail, password },
    {
      headers: {
        Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
        "Content-Type": "application/json"
      }
    }

  );

export const createEntry = details => axios.post("/entries", details,
  // {
  //   headers: {
  //     Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
  //     "Content-Type": "application/json"
  //   }
  // }
);

export const editEntry = details => axios.patch("/entries", details);

export const fetchEntries = date => axios.get(`/entries/?date=${date}`);

export const deleteEntries = date => axios.delete(`/entries/?date=${date}`);
