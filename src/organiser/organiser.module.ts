import { Module } from "@nestjs/common"
import { OrganiserController } from "./organiser.controller"
import { OrganiserService } from "./organiser.service"
import { SequelizeModule } from "@nestjs/sequelize"
import { Organiser } from "./models/organiser.model"
import { AuthModule } from "src/auth/auth.module"

@Module({
  imports: [SequelizeModule.forFeature([Organiser]), AuthModule],
  controllers: [OrganiserController],
  providers: [OrganiserService],
})
export class OrganiserModule {}
