import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
} from "sequelize-typescript"

@Table({ timestamps: false })
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string

  @Column({
    unique: true,
  })
  username: string

  @Column({
    unique: true,
  })
  email: string

  @Column
  password: string

  @Column
  notes: string

  @Column({
    type: DataType.ENUM,
    values: ["active", "disabled"],
  })
  status: string

  @Column({ type: DataType.BLOB })
  avatar: any
}
