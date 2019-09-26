import _ from "axios";

const axios = _.create({
  baseUrl: "https://olad-backend.herokuapp.com"
});

export const createEntry = details => axios.post("/entries", details);

export const editEntry = details => axios.patch("/entries", details);

export const fetchEntries = date => axios.get(`/entries/?date=${date}`);
