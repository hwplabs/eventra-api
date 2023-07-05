import { Module } from "@nestjs/common"
// import { SequelizeModule } from "@nestjs/sequelize"
import { AuthController } from "./auth.controller"
import { AuthService } from "./auth.service"
// import { User } from "./models/user.model"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from "@nestjs/jwt"
import { JwtStrategy } from "./strategy/jwt.strategy"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./models/user.entity"
import { UserRepository } from "./models/user.repository"

@Module({
  imports: [
    // SequelizeModule.forFeature([User]),
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserRepository],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
