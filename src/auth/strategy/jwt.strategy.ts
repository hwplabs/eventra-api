import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy, ExtractJwt } from "passport-jwt"
import { JwtPayload } from "../jwt-payload.interface"
import { InjectRepository } from "@nestjs/typeorm"
import { UserRepository } from "../models/user.repository"
import { User } from "../models/user.entity"
// import { User } from "../models/user.model"
// import { InjectModel } from "@nestjs/sequelize"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload
    const user = await this.userRepository.findOneBy({ username })

    if (!user) throw new UnauthorizedException()

    return user
  }
}
