import * as React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate, Route } from 'react-router-dom';

interface IPrivateRouteProps {
  path: string;
  element: React.ReactNode;
}
const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = ({ path, element }) => {
  const { user } = useAuth();

  if (user) {
    return <Route path={path} element={element} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
