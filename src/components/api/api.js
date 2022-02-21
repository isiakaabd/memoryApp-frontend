import axios from 'axios';

const url = 'https://remlad-memories.herokuapp.com';

export const axiosPrivate = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
