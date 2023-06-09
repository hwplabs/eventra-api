import { Body, Controller, Get, ValidationPipe, Post } from "@nestjs/common"
import { CategoryService } from "./category.service"
import { CategoryDto } from "./dto/category.dto"
import { Category } from "./models/category.model"

@Controller("category")
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Post()
  createCategory(
    @Body(ValidationPipe) categoryDto: CategoryDto,
  ): Promise<Category> {
    return this.categoryService.createCategory(categoryDto)
  }
}
