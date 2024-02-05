import { User } from 'entities/User';

export interface IComment {
    id: string;
    user: User;
    text: string;
}
