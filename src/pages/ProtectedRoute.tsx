import { Navigate, Outlet } from 'react-router';
import { useAppSelector, type RootState } from '../redux/store';

const ProtectedRoute = () => {
  const isAuthenticated = useAppSelector((state:RootState) => state.user.isAuthenticated);
  if (isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;