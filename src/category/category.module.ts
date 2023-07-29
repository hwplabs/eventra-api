import { Module } from "@nestjs/common"
import { AuthModule } from "src/auth/auth.module"
import { CategoryController } from "./category.controller"
import { CategoryService } from "./category.service"
import { SequelizeModule } from "@nestjs/sequelize"
import { Event } from "src/events/models/event.model"
import { Category } from "./models/category.model"

@Module({
  imports: [SequelizeModule.forFeature([Category, Event]), AuthModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [SequelizeModule],
})
export class CategoryModule {}
