import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
            return user;
        }
        return null;
    }

    async login(user: { id: number; email: string }) {
        const payload = { sub: user.id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(userData: { name: string; email: string; password: string }) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await this.usersService.create({
            ...userData,
            password: hashedPassword,
        });
        return { id: user.id, email: user.email, name: user.name };
    }
}
