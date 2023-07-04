import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  HasMany,
} from "sequelize-typescript"
import { Event } from "src/events/models/event.model"

@Table({ timestamps: false })
export class Category extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string

  @Column
  name: string

  // @HasMany(() => Event)
  // events: Event[]
}
