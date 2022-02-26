import React from 'react';
import { useQuery } from 'react-query';
import useAxios from 'components/hooks/useAxios';
// import { getPosts } from 'components/hooks/function';

const Dashboard = () => {
  const axiosPrivate = useAxios();
  const getPosts = async () => {
    const { data } = await axiosPrivate.get('/post');
    return data;
  };
  const { data } = useQuery('posts', getPosts);

  return (
    <div>
      {data?.length > 0 ? (
        data.map((i, index) => {
          return <div key={index}>{i.firstName}</div>;
        })
      ) : (
        <h6>No Data</h6>
      )}{' '}
    </div>
  );
};
export default Dashboard;
