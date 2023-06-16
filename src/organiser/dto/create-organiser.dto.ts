import { IsNotEmpty, IsString } from "class-validator"

export class CreateOrganiserDto {
  @IsString()
  @IsNotEmpty({ message: "$property cannot be empty" })
  name: string

  @IsString()
  @IsNotEmpty({ message: "$property cannot be empty" })
  phoneNumber: string
}
