import {
  Body,
  Controller,
  Get,
  ValidationPipe,
  Post,
  Param,
  Patch,
  Delete,
  HttpCode,
  UseGuards,
} from "@nestjs/common"
import { CategoryService } from "./category.service"
import { CategoryDto } from "./dto/category.dto"
import { Category } from "./models/category.model"
import { AuthGuard } from "@nestjs/passport"

@Controller("category")
// @UseGuards(AuthGuard())
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getAllCategories(): Promise<Category[]> {
    return this.categoryService.getCategory()
  }

  @Get(":id")
  getCategory(@Param("id") id: string): Promise<Category> {
    return this.categoryService.getCategoryById(id)
  }

  @Post()
  createCategory(
    @Body(ValidationPipe) categoryDto: CategoryDto,
  ): Promise<Category> {
    return this.categoryService.createCategory(categoryDto)
  }

  @Patch(":id")
  updateCategory(
    @Param("id") id: string,
    @Body(ValidationPipe) categoryDto: CategoryDto,
  ): Promise<Category> {
    return this.categoryService.updateCategory(id, categoryDto)
  }

  @Delete(":id")
  @HttpCode(204)
  deleteCategory(@Param("id") id: string) {
    return this.categoryService.deleteCategory(id)
  }
}
