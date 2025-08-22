import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RecipesService {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: any, user: any) {
        if (!user.id) throw new Error('User ID is missing in request');

        return this.prisma.recipe.create({
            data: {
                title: data.title,
                description: data.description,
                ingredients: data.ingredients,
                instructions: data.instructions,
                rating: data.rating || 0,
                cuisine: data.cuisine,
                author: { connect: { id: user.id } },
            },
        });
    }

    findAll() {
        return this.prisma.recipe.findMany({
            include: { author: true },
        });
    }

    async search(query: { ingredient?: string; cuisine?: string }) {
        return this.prisma.recipe.findMany({
            where: {
                AND: [
                    query.ingredient
                      ? { ingredients: { contains: query.ingredient, mode: 'insensitive' } }
                      : {},
                    query.cuisine ? { cuisine: { contains: query.cuisine, mode: 'insensitive' } } : {},
                ],
            },
            include: { author: true },
        });
    }
}
