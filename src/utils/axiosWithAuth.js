import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://olad-backend.herokuapp.com/', //Change to relevant backend address when the times comes
    headers: {
      Authorization: token
    }
  });
};

