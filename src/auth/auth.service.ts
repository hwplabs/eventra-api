import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { User } from "./models/user.model"
import { AuthSignUpDto } from "./dto/auth-signup.dto"
import * as bcrypt from "@phc/bcrypt"
import { UniqueConstraintError } from "sequelize"
import { AuthSignInDto } from "./dto/auth-signin.dto"
import { JwtService } from "@nestjs/jwt"
import { JwtPayload } from "./jwt-payload.interface"

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private jwtService: JwtService,
  ) {}

  async signUp(authSignUpDto: AuthSignUpDto): Promise<object> {
    const { username, password } = authSignUpDto
    try {
      const user = await this.userModel.create({
        username,
        password: await this.hashPassword(password),
      })
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        throw new ConflictException("username taken ")
      }
      console.log(error)
      throw new InternalServerErrorException("Something went wrong")
    }

    return { msg: "User created" }
  }

  async signIn(authSignInDto: AuthSignInDto): Promise<object> {
    const { username, password } = authSignInDto

    const user = await this.userModel.findOne({ where: { username } })

    if (!user) throw new BadRequestException("Invalid credentials")

    const verifiedUser = await this.verifyPassword(user.password, password)

    if (!verifiedUser) throw new BadRequestException("Invalid Credentials")

    const payload: JwtPayload = { username }
    const token = await this.jwtService.sign(payload)
    return { token, message: `Welcome ${username}` }
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password)
  }

  async verifyPassword(hash: string, password: string): Promise<boolean> {
    return await bcrypt.verify(hash, password)
  }
}
