import { Module } from "@nestjs/common"
import { EventsController } from "./events.controller"
import { EventsService } from "./events.service"
import { SequelizeModule } from "@nestjs/sequelize"
import { Event } from "./models/event.model"

@Module({
  imports: [SequelizeModule.forFeature([Event])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
