import React from 'react';
import useAuth from 'components/context/useAuth';

const Dashboard = () => {
  const { auth } = useAuth();

  return <div>welcome {auth.email} </div>;
};
export default Dashboard;
