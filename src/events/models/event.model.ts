import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript"
import { Category } from "src/category/models/category.model"
import { Organiser } from "src/organiser/models/organiser.model"

@Table({ timestamps: false })
export class Event extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string

  @Column
  title: string

  @Column
  description: string

  @Column({ defaultValue: new Date().toLocaleDateString() })
  date: string

  @Column({ defaultValue: new Date().toLocaleTimeString() })
  time: string

  @Column
  venue: string

  @Column
  gatePass: string

  @Column({ type: DataType.BLOB })
  eventImage: any

  @ForeignKey(() => Category)
  @Column
  categoryId: string

  @BelongsTo(() => Category)
  category: Category

  @ForeignKey(() => Organiser)
  @Column
  organiserId: string

  @BelongsTo(() => Organiser)
  organiser: Organiser
}
