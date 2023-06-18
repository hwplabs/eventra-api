import { IsNotEmpty, IsString } from "class-validator"

export class CreateEventDto {
  @IsString()
  @IsNotEmpty({ message: "$property cannot be empty" })
  title: string

  @IsString()
  @IsNotEmpty({ message: "$property cannot be empty" })
  description: string

  @IsString()
  @IsNotEmpty({ message: "$property cannot be empty" })
  category: string

  @IsString()
  @IsNotEmpty({ message: "$property cannot be empty" })
  venue: string

  @IsString()
  @IsNotEmpty({ message: "$property cannot be empty" })
  gatePass: string

  @IsString()
  @IsNotEmpty({ message: "$property cannot be empty" })
  organiser: string
}
