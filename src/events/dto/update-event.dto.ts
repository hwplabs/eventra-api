import { IsOptional, IsString } from "class-validator"

export class UpdateEventDto {
  @IsString()
  @IsOptional()
  title: string

  @IsString()
  @IsOptional()
  description: string

  @IsString()
  @IsOptional()
  category: string

  @IsString()
  @IsOptional()
  venue: string

  @IsString()
  @IsOptional()
  gatePass: string
}
