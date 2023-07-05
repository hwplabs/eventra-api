import { UserStatus } from "src/enums/status.enum"
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm"

@Entity()
@Unique(["username", "email"])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  notes: string

  @Column({
    type: "enum",
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: string

  @Column({
    type: "bytea",
  })
  avatar: any
}
