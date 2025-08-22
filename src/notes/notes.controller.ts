import { Controller, Post, Body, Req, UseGuards, Get, Param } from '@nestjs/common';
import { NotesService } from './notes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':recipeId')
  create(@Param('recipeId') recipeId: string, @Req() req: any, @Body('content') content: string) {
    return this.notesService.create(Number(recipeId), req.user.id, content);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':recipeId')
  findByRecipe(@Param('recipeId') recipeId: string, @Req() req: any) {
    return this.notesService.findByRecipe(Number(recipeId), req.user.id);
  }
}
