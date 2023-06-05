import { Body, Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signin")
  signIn(@Body("name") name: string) {
    return this.authService.signIn(name)
  }
}
