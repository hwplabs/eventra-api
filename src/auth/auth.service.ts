import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { User } from "./user.model"
import { AuthSignUpDto } from "./dto/auth-credentials.dto"
import * as bcrypt from "@phc/bcrypt"

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async signUp(authSignUpDto: AuthSignUpDto): Promise<User> {
    const { username, password } = authSignUpDto
    const user = await this.userModel.create({
      username,
      password: await this.hashPassword(password),
    })

    return user
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password)
  }

  async verifyPassword(hash: string, password: string): Promise<boolean> {
    return await bcrypt.verify(hash, password)
  }
}
