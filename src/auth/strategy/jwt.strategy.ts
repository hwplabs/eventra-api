import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { InjectModel } from "@nestjs/sequelize"
import { Strategy, ExtractJwt } from "passport-jwt"
import { User } from "../models/user.model"
import { JwtPayload } from "../jwt-payload.interface"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User) private userModel: typeof User) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload
    const user = await this.userModel.findOne({ where: { username } })

    if (!user) throw new UnauthorizedException()

    return user
  }
}
