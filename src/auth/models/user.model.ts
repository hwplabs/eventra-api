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
  phoneNumber: string

  @Column
  organiserName: string

  @Column
  notes: string

  @Column({ type: DataType.BLOB })
  avatar: any

  @Column({
    type: DataType.UUID,
  })
  statusId: string
}
