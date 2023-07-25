import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AuthModule } from "./auth/auth.module"
import { ConfigModule } from "@nestjs/config"
import { SequelizeModule } from "@nestjs/sequelize"
// import { User } from "./auth/models/user.model"
import { EventsModule } from "./events/events.module"
import { CategoryModule } from "./category/category.module"
import { OrganiserModule } from "./organiser/organiser.module"

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // models: [User],
      autoLoadModels: true,
      synchronize: false,
      // sync: { alter: true },
    }),
    AuthModule,
    EventsModule,
    CategoryModule,
    OrganiserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
