import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from "@nestjs/common"
import { EventsService } from "./events.service"
import { UpdateEventDto } from "./dto/update-event.dto"
import { Event } from "./models/event.model"
import { CreateEventDto } from "./dto/create-event.dto"
import { FileInterceptor } from "@nestjs/platform-express"
import { AuthGuard } from "@nestjs/passport"

@Controller("events")
// @UseGuards(AuthGuard())
export class EventsController {
  constructor(private eventService: EventsService) {}

  @Get()
  getAllEvents(): Promise<Event[]> {
    return this.eventService.getEvents()
  }

  @Get(":id")
  getEvent(@Param("id") id: string): Promise<Event> {
    return this.eventService.getEventById(id)
  }

  @Post()
  @UseInterceptors(FileInterceptor("eventImage"))
  createEvent(
    @Body(ValidationPipe) createEventDto: CreateEventDto,
    @UploadedFile() eventImage: Express.Multer.File,
  ): Promise<Event> {
    return this.eventService.createEvent(createEventDto, eventImage)
  }

  @Patch(":id")
  @UseInterceptors(FileInterceptor("eventImage"))
  updateEvent(
    @Param("id") id: string,
    @Body(ValidationPipe) updateEventDto: UpdateEventDto,
    @UploadedFile() eventImage?: Express.Multer.File,
  ): Promise<Event> {
    return this.eventService.updateEvent(id, updateEventDto, eventImage)
  }

  @Delete(":id")
  @HttpCode(204)
  deleteEvent(@Param("id") id: string) {
    return this.eventService.deleteEvent(id)
  }

  @Post("test")
  testCategory(@Body("category") category: string) {
    return this.eventService.getCategory(category)
  }
}
