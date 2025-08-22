import { NotesService } from './notes.service';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(recipeId: string, req: any, content: string): Promise<{
        id: number;
        content: string;
        userId: number;
        recipeId: number;
    }>;
    findByRecipe(recipeId: string, req: any): Promise<{
        id: number;
        content: string;
        userId: number;
        recipeId: number;
    }[]>;
}
