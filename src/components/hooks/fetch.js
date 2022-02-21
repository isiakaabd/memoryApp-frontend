import { useQuery } from 'react-query';

const useFetch = (key, func) => {
  return useQuery(key, func);
};
export default useFetch;
