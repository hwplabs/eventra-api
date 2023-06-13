import { Body, Controller, Patch } from "@nestjs/common"
import { EventsService } from "./events.service"
import { UpdateEventDto } from "./dto/update-event.dto"

@Controller("events")
export class EventsController {
  constructor(private eventService: EventsService) {}
}
