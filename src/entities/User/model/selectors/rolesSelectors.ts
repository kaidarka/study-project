import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole, UserRoleType } from '../types/user';

const getUserRoles = (state: StateSchema) => state.user.authData?.roles || [];

const isUserAdmin = createSelector(
    getUserRoles,
    (roles: UserRoleType[]) => roles?.includes(UserRole.Admin),
);

const isUserManager = createSelector(
    getUserRoles,
    (roles: UserRoleType[]) => roles?.includes(UserRole.Manager),
);

const isUserUser = createSelector(
    getUserRoles,
    (roles: UserRoleType[]) => roles?.includes(UserRole.User),
);

export {
    getUserRoles, isUserAdmin, isUserManager, isUserUser,
};
