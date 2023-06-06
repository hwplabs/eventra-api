import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { User } from "./models/user.model"
import { AuthSignUpDto } from "./dto/auth-signup.dto"
import * as bcrypt from "@phc/bcrypt"

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async signUp(authSignUpDto: AuthSignUpDto): Promise<object> {
    const { username, password } = authSignUpDto
    const user = await this.userModel.create({
      username,
      password: await this.hashPassword(password),
    })
    // const user = new this.userModel()
    // user.username = username
    // user.password = await this.hashPassword(password)
    // await user.save()

    return { msg: "User created" }
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password)
  }

  async verifyPassword(hash: string, password: string): Promise<boolean> {
    return await bcrypt.verify(hash, password)
  }
}
