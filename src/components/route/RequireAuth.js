import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from 'components/context/useAuth';
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { auth } = useAuth();

  if (!auth.token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // check for Outlet
};
export default RequireAuth;
RequireAuth.propTypes = {
  children: PropTypes.node,
};
