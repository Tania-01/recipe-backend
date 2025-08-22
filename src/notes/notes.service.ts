import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(recipeId: number, userId: number, content: string) {
    return this.prisma.note.create({
      data: {
        content,
        recipe: { connect: { id: recipeId } },
        user: { connect: { id: userId } },
      },
    });
  }

  async findByRecipe(recipeId: number, userId: number) {
    return this.prisma.note.findMany({
      where: { recipeId, userId },
    });
  }
}
