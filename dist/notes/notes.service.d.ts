import { PrismaService } from '../prisma/prisma.service';
export declare class NotesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(recipeId: number, userId: number, content: string): Promise<{
        id: number;
        content: string;
        userId: number;
        recipeId: number;
    }>;
    findByRecipe(recipeId: number, userId: number): Promise<{
        id: number;
        content: string;
        userId: number;
        recipeId: number;
    }[]>;
}
