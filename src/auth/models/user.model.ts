import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  Unique,
} from "sequelize-typescript"

@Table({ timestamps: false })
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string

  @Unique
  @Column
  username: string

  @Column
  password: string
}
