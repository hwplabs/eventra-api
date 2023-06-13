import { Module } from "@nestjs/common"
import { EventsController } from "./events.controller"
import { EventsService } from "./events.service"
import { SequelizeModule } from "@nestjs/sequelize"
import { Event } from "./models/event.model"
import { AuthModule } from "src/auth/auth.module"

@Module({
  imports: [SequelizeModule.forFeature([Event]), AuthModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
