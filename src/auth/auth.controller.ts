import { Body, Controller, Post, ValidationPipe } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthSignUpDto } from "./dto/auth-signup.dto"
// import { User } from "./models/user.model"
import { AuthSignInDto } from "./dto/auth-signin.dto"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signUp(@Body(ValidationPipe) authSignUpDto: AuthSignUpDto): Promise<object> {
    return this.authService.signUp(authSignUpDto)
  }

  @Post("signin")
  signIn(@Body(ValidationPipe) authSignInDto: AuthSignInDto): Promise<object> {
    return this.authService.signIn(authSignInDto)
  }
}
