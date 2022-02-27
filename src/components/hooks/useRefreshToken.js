import axios from 'axios';
import useAuth from 'components/context/useAuth';
const url = 'https://remlad-memories.herokuapp.com';

const useRefreshToken = () => {
  const { setAuth, auth } = useAuth();
  const refresh = async () => {
    const response = await axios.get(`${url}/refreshtoken`, {
      withCredentials: true,
    });
    setAuth(() => {
      return {
        ...auth,
        accessToken: response.data.accessToken,
      };
    });

    return response.data.accessToken;
  };

  return refresh;
};
export default useRefreshToken;
