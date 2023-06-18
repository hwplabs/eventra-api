import { IsOptional, IsString } from "class-validator"

export class UpdateOrganiserDto {
  @IsOptional()
  @IsString()
  name: string

  @IsString()
  @IsOptional()
  phoneNumber: string
}
