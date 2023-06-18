import { Module } from "@nestjs/common"
import { OrganiserController } from "./organiser.controller"
import { OrganiserService } from "./organiser.service"
import { SequelizeModule } from "@nestjs/sequelize"
import { Organiser } from "./models/organiser.model"
import { AuthModule } from "src/auth/auth.module"
import { Event } from "src/events/models/event.model"

@Module({
  imports: [SequelizeModule.forFeature([Organiser, Event]), AuthModule],
  controllers: [OrganiserController],
  providers: [OrganiserService],
  exports: [SequelizeModule],
})
export class OrganiserModule {}
