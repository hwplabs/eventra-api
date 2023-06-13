import { BadRequestException, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { Event } from "./models/event.model"
import { CreateEventDto } from "./dto/create-event.dto"
import { UpdateEventDto } from "./dto/update-event.dto"

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

  async getEventById(id: string): Promise<Event> {
    const event = await this.eventModel.findOne({ where: { id } })

    if (!event) throw new BadRequestException(`Event with id: ${id} not found`)

    return event
  }

  async updateEvent(
    id: string,
    updateEventDto: UpdateEventDto,
    eventImage?: Express.Multer.File,
  ): Promise<Event> {
    const { title, description, category, gatePass, venue } = updateEventDto
    const updateEventBody = Object.keys(updateEventDto)

    const event = await this.getEventById(id)

    if (updateEventBody.length === 0)
      throw new BadRequestException("Fill all required fields")

    if (title) event.title = title
    if (description) event.description = description
    if (category) event.category = category
    if (gatePass) event.gatePass = gatePass
    if (venue) event.venue = venue
    if (eventImage !== undefined) event.eventImage = eventImage

    return event
  }

  async deleteEvent(id: string): Promise<number> {
    const event = await this.getEventById(id)
    return await this.eventModel.destroy({ where: { id: event.id } })
  }
}
