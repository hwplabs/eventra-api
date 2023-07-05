import { Module } from "@nestjs/common"
import { CategoryController } from "./category.controller"
import { CategoryService } from "./category.service"
import { SequelizeModule } from "@nestjs/sequelize"
import { Category } from "./entity/category.model"
import { AuthModule } from "src/auth/auth.module"
import { Event } from "src/events/models/event.model"

@Module({
  imports: [SequelizeModule.forFeature([Category, Event]), AuthModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [SequelizeModule],
})
export class CategoryModule {}
