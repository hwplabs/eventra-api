import { IsNotEmpty, IsString } from "class-validator"

export class CategoryDto {
  @IsString()
  @IsNotEmpty({ message: "$property cannot be empty" })
  name: string
}
