import { Module } from "@nestjs/common"
import { CategoryController } from "./category.controller"
import { CategoryService } from "./category.service"
import { SequelizeModule } from "@nestjs/sequelize"
import { Category } from "./models/category.model"
import { AuthModule } from "src/auth/auth.module"

@Module({
  imports: [SequelizeModule.forFeature([Category]), AuthModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [SequelizeModule],
})
export class CategoryModule {}
