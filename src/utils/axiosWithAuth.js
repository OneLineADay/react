import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000/api1/', //Change to relevant backend address when the times comes
    headers: {
      Authorization: token
    }
  });
};
