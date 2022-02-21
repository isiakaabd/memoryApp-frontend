import axios from 'axios';
const url = 'https://remlad-memories.herokuapp.com';
export const register = async (value) => {
  const { data } = await axios.post(`${url}/signup`, value);

  return data;
};

export const login = async (value) => {
  const { data } = await axios.post(`${url}/login`, value, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return data;
};
