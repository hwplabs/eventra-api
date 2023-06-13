import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript"

@Table({ timestamps: false })
export class Event extends Model {
  @PrimaryKey
  @Column({ defaultValue: DataType.UUIDV4 })
  id: string

  @Column
  title: string

  @Column
  description: string

  @Column
  category: string

  @Column({ defaultValue: new Date().toLocaleDateString() })
  date: string

  @Column({ defaultValue: new Date().toLocaleTimeString() })
  time: string

  @Column
  venue: string

  @Column
  gatePass: string

  @Column({ type: DataType.BLOB })
  eventImage: unknown
}
