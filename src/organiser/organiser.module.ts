import { Module } from '@nestjs/common';
import { OrganiserController } from './organiser.controller';
import { OrganiserService } from './organiser.service';

@Module({
  controllers: [OrganiserController],
  providers: [OrganiserService]
})
export class OrganiserModule {}
