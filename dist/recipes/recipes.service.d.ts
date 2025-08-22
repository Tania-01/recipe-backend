import { PrismaService } from '../prisma/prisma.service';
export declare class RecipesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: any, user: any): Promise<{
        id: number;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        rating: number;
        cuisine: string | null;
        authorId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        author: {
            id: number;
            email: string;
            name: string;
            password: string;
        };
    } & {
        id: number;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        rating: number;
        cuisine: string | null;
        authorId: number;
    })[]>;
    search(query: {
        ingredient?: string;
        cuisine?: string;
    }): Promise<({
        author: {
            id: number;
            email: string;
            name: string;
            password: string;
        };
    } & {
        id: number;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        rating: number;
        cuisine: string | null;
        authorId: number;
    })[]>;
}
