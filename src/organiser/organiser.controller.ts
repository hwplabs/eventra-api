import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  ValidationPipe,
} from "@nestjs/common"
import { OrganiserService } from "./organiser.service"
import { Organiser } from "./models/organiser.model"
import { CreateOrganiserDto } from "./dto/create-organiser.dto"

@Controller("organiser")
export class OrganiserController {
  constructor(private organiserService: OrganiserService) {}

  @Get()
  getAllOrganisers(): Promise<Organiser[]> {
    return this.organiserService.getOrganiser()
  }

  @Get(":id")
  getOrganiser(@Param("id") id: string): Promise<Organiser> {
    return this.organiserService.getOrganiserById(id)
  }

  @Post()
  createOrganiser(
    @Body(ValidationPipe) createOrganiserDto: CreateOrganiserDto,
  ): Promise<Organiser> {
    return this.organiserService.createOrganiser(createOrganiserDto)
  }

  @Delete(":id")
  @HttpCode(204)
  deleteOrganiser(@Param("id") id: string) {
    return this.organiserService.deleteOrganiser(id)
  }
}
