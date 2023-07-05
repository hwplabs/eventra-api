import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { Category } from "./models/category.model"
import { CategoryDto } from "./dto/category.dto"
import * as caseChange from "to-case"
import { Event } from "src/events/models/event.model"

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private categoryModel: typeof Category,
    @InjectModel(Event) private eventModel: typeof Event,
  ) {}

  async createCategory(categoryDto: CategoryDto): Promise<Category> {
    const { name } = categoryDto
    const category = await this.categoryModel.create({
      // name,
      name: caseChange.capital(name),
    })
    return category
  }

  async getCategory(): Promise<Category[]> {
    return await this.categoryModel.findAll({ include: Event })
  }

  async getCategories(): Promise<Category[]> {
    return await this.categoryModel.findAll()
  }

  async getCategoryById(id: string): Promise<Category> {
    const category = await this.categoryModel.findOne({ where: { id } })

    if (!category) {
      throw new NotFoundException(`No category found with id: ${id}`)
    }

    return category
  }

  async updateCategory(id: string, categoryDto: CategoryDto) {
    const { name } = categoryDto
    const category = await this.getCategoryById(id)
    // category.name = caseChange.capital(name)
    // category.name = name
    await category.update({ name: caseChange.capital(name) })
    return category
  }

  async deleteCategory(id: string): Promise<number> {
    const category = await this.getCategoryById(id)
    return await this.categoryModel.destroy({ where: { id: category.id } })

    // if(result === 0) throw new NotFoundException()
  }
}
