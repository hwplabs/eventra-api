import { IsString } from "class-validator"

export class CreateOrganiserDto {
  @IsString()
  name: string

  @IsString()
  phoneNumber: string
}
