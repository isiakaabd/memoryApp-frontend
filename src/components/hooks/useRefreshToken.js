import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
const url = 'https://remlad-memories.herokuapp.com';

const useRefreshToken = () => {
  const { setAuth, auth } = useAuth();
  const refreshToken = auth.refreshToken;
  const config = {
    Headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const refresh = async () => {
    const response = await axios.post(`${url}/refreshtoken`, JSON.stringify(refreshToken), config);
    setAuth((prev) => {
      return {
        ...prev,
        acessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      };
    });

    return {
      acessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
    };
  };
  return refresh;

};
export default useRefreshToken;
