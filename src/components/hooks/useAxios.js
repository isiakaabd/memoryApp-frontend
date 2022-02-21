import { axiosPrivate } from 'components/api/api';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuth from 'components/context/useAuth';

const useAxios = () => {
  const refresh = useRefreshToken;
  const { auth } = useAuth();
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
    const responseIntercerptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = error?.config;
        if (err?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
      },
    );
    return () => {
      axios.interceptors.response.eject(responseIntercerptor);
      axios.interceptors.response.eject(requestIntercept);
    };
  }, [auth, refresh]);
  return axiosPrivate;
};

export default useAxios;
