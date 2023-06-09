import {
  Table,
  Model,
  PrimaryKey,
  Column,
  DataType,
} from "sequelize-typescript"

@Table({ timestamps: false })
export class Organiser extends Model {
  @PrimaryKey
  @Column({ defaultValue: DataType.UUIDV4 })
  id: string

  @Column
  name: string

  @Column
  phoneNumber: string
}
