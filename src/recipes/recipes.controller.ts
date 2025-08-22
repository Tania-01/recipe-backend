import { Controller, Post, Body, Req, UseGuards, Get, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() body: any, @Req() req: any) {
        return this.recipesService.create(body, req.user);
    }

    @Get()
    findAll() {
        return this.recipesService.findAll();
    }

    @Get('search')
    search(@Query() query: { ingredient?: string; cuisine?: string }) {
        return this.recipesService.search(query);
    }
}
