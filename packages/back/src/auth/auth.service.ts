import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { ITokenPayload } from './token-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        ) { }

    async validateUser(email: string, pass: string) {
        const user = await this.usersService.findOneByEmail(email);
        if (user && user.passwordHash === pass) {
            const { passwordHash, ...result } = user;
            return result as Partial<User>;
        }
        return null;
    }

    async login(user: Partial<User>) {
        const payload: ITokenPayload = { username: user.email, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
