import { Body, Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthSignUpDto } from "./dto/auth-credentials.dto"
import { User } from "./user.model"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signUp(@Body() authSignUpDto: AuthSignUpDto): Promise<User> {
    return this.authService.signUp(authSignUpDto)
  }
}
