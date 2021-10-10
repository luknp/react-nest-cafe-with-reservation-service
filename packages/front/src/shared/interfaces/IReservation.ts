export interface IReservation {
    id?: number;
    user: IUser;
    startTime: Date;
    endTime: Date;
    sits: number;
}

export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    phoneVerified: boolean;
    phone: string;
    email: string;
    passwordHash: string;
    roles: IRole[];
}

export interface IRole {
    name: string;
}
