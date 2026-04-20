import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getUserAuthData, getUserRoles, UserRoleType } from '@/entities/User';
import { getRouteForbidden } from '@/shared/const/router';

interface RequireAuthProps {
    children: React.ReactNode;
    roles?: UserRoleType[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((role) => userRoles?.includes(role));
    }, [roles, userRoles]);

    if (!auth || !hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }

    return children;
};
