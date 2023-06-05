import { Injectable } from "@nestjs/common"

@Injectable()
export class AuthService {
  signUp() {
    return "signup page "
  }
  signIn(user: string) {
    return `welcome ${user}`
  }
}
