import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        name: string;
        password: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(userData: {
        email: string;
        password: string;
        name: string;
    }): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
    }>;
}
