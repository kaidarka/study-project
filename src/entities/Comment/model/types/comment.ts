import { User } from 'entities/User';

export interface Comment {
    id: string;
    user: User;
    text: string;
}

/** @deprecated use Comment instead */
export interface IComment {
    id: string;
    user: User;
    text: string;
}
