import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
    }>;
    login(user: {
        id: number;
        email: string;
    }): Promise<{
        access_token: string;
    }>;
    register(userData: {
        name: string;
        email: string;
        password: string;
    }): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
}
