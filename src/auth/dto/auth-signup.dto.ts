import { IsNotEmpty, IsString, MinLength, MaxLength } from "class-validator"

export class AuthSignUpDto {
  @IsString()
  @IsNotEmpty({ message: "$property cannot be empty" })
  @MinLength(4, { message: "$property should be a minimum of 4 characters" })
  username: string

  @IsString()
  @IsNotEmpty({ message: "$property cannot be empty" })
  @MinLength(8, { message: "$property should be a minimum of 8 characters" })
  @MaxLength(20, { message: "$property should not be more than 20 characters" })
  password: string
}
