import axios from 'axios';
import useAuth from 'components/context/useAuth';
const url = 'https://remlad-memories.herokuapp.com';

// 'http://localhost:8000';
// ;

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.get(`${url}/refreshtoken`, {
      withCredentials: true,
    });
    setAuth((prev) => {
      return {
        ...prev,
        accessToken: response.data.accessToken,
      };
    });

    return response.data.accessToken;
  };

  return refresh;
};
export default useRefreshToken;
