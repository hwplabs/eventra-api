import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
} from "sequelize-typescript"

@Table({ timestamps: false })
export class Category extends Model {
  @PrimaryKey
  @Column({ defaultValue: DataType.UUIDV4 })
  id: string

  @Column
  name: string
}
