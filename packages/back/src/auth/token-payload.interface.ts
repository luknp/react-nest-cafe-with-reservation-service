import { User } from '../users/user.entity';

export interface ITokenPayload {
    username: User['email'];
    sub: User['id'];
}
