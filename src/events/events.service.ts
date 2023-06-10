import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { Event } from "./models/event.model"
import { CreateEventDto } from "./dto/create-event.dto"

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event) private eventModel: typeof Event) {}

  async createEvent(
    createEventDto: CreateEventDto,
    eventImage: Express.Multer.File,
  ): Promise<Event> {
    const { title, description, category, venue, gatePass } = createEventDto

    const event = await this.eventModel.create({
      title,
      description,
      category,
      venue,
      gatePass,
      eventImage,
    })

    return event
  }

  async getEvents(): Promise<Event[]> {
    return await this.eventModel.findAll()
  }
}
