import { IRole } from '../roles/roles.interface';

export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    phoneVerified: boolean;
    phone: string;
    email: string;
    passwordHash: string;
    roles?: IRole[];
}
