import * as caseChange from "to-case"
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { Organiser } from "./models/organiser.model"
import { CreateOrganiserDto } from "./dto/create-organiser.dto"
import { UpdateOrganiserDto } from "./dto/update-organiser.dto"
import { Event } from "src/events/models/event.model"

@Injectable()
export class OrganiserService {
  constructor(
    @InjectModel(Organiser) private organiserModel: typeof Organiser,
    @InjectModel(Event) private eventModel: typeof Event,
  ) {}

  async createOrganiser(
    createOrganiserDto: CreateOrganiserDto,
  ): Promise<Organiser> {
    const { name, phoneNumber } = createOrganiserDto
    const organiser = await this.organiserModel.create({
      name: caseChange.title(name),
      // name,
      phoneNumber,
    })
    return organiser
  }

  async getOrganiser(): Promise<Organiser[]> {
    return await this.organiserModel.findAll({ include: Event })
  }

  async getOrganiserById(id: string): Promise<Organiser> {
    const organiser = await this.organiserModel.findOne({ where: { id } })

    if (!organiser) {
      throw new NotFoundException(`Organiser with id: ${id} not found`)
    }

    return organiser
  }

  async updateOrganiser(
    id: string,
    updateOrganiserDto: UpdateOrganiserDto,
  ): Promise<Organiser> {
    const { name, phoneNumber } = updateOrganiserDto

    if (!name && !phoneNumber) {
      throw new BadRequestException("fill all neccessary fields")
    }

    const organiser = await this.getOrganiserById(id)

    if (name) await organiser.update({ name: caseChange.title(name) })
    if (phoneNumber) await organiser.update({ phoneNumber })

    return organiser
  }

  async deleteOrganiser(id: string) {
    const organiser = await this.getOrganiserById(id)
    return await this.organiserModel.destroy({ where: { id: organiser.id } })
  }
}
