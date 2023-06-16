import { Module } from "@nestjs/common"
import { EventsController } from "./events.controller"
import { EventsService } from "./events.service"
import { SequelizeModule } from "@nestjs/sequelize"
import { Event } from "./models/event.model"
import { AuthModule } from "src/auth/auth.module"
import { CategoryModule } from "src/category/category.module"

@Module({
  imports: [SequelizeModule.forFeature([Event]), AuthModule, CategoryModule],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [SequelizeModule],
})
export class EventsModule {}
