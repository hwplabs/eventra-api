import { DataTypes } from "sequelize"
import { Column, Model, Table, PrimaryKey } from "sequelize-typescript"

@Table({ timestamps: false })
export class Category extends Model {
  @PrimaryKey
  @Column({ defaultValue: DataTypes.UUIDV4 })
  id: string

  @Column
  name: string
}
