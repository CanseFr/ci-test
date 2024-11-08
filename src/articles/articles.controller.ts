import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  // @Post()
  // create(@Body() createArticleDto: CreateArticleDto) {
  //   return this.articlesService.create(createArticleDto);
  // }

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
  //   return this.articlesService.update(+id, updateArticleDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
