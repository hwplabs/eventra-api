import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from "@nestjs/common"
import { OrganiserService } from "./organiser.service"
import { Organiser } from "./models/organiser.model"
import { CreateOrganiserDto } from "./dto/create-organiser.dto"
import { UpdateOrganiserDto } from "./dto/update-organiser.dto"

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

  @Patch(":id")
  updateOrganiser(
    @Param("id") id: string,
    @Body(ValidationPipe) updateOrganiserDto: UpdateOrganiserDto,
  ) {
    return this.organiserService.updateOrganiser(id, updateOrganiserDto)
  }

  @Delete(":id")
  @HttpCode(204)
  deleteOrganiser(@Param("id") id: string) {
    return this.organiserService.deleteOrganiser(id)
  }
}
