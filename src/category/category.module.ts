import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthModule } from "src/auth/auth.module"
import { CategoryController } from "./category.controller"
import { CategoryService } from "./category.service"
import { CategoryRepository } from "./models/category.repository"
import { Category } from "./models/category.entity"
// import { SequelizeModule } from "@nestjs/sequelize"
// import { Category } from "./entity/category.model"
// import { Event } from "src/events/models/event.model"

@Module({
  imports: [TypeOrmModule.forFeature([Category]), AuthModule],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
  // exports: [SequelizeModule],
})
export class CategoryModule {}
