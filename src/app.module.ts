import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { typeOrmConfig } from "./config/typeorm.config"
// import { SequelizeModule } from "@nestjs/sequelize"
import { AuthModule } from "./auth/auth.module"
import { EventsModule } from "./events/events.module"
import { CategoryModule } from "./category/category.module"
import { OrganiserModule } from "./organiser/organiser.module"

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    EventsModule,
    CategoryModule,
    OrganiserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
