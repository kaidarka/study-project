import { FeatureFlags } from '@/shared/types/featureFlags';

export const UserRole = {
    Admin: 'admin',
    User: 'user',
    Manager: 'manager',
} as const;

export type UserRoleType = (typeof UserRole)[keyof typeof UserRole];

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRoleType[];
    features?: FeatureFlags;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
