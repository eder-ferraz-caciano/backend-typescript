import { Audit } from "../core/AuditFields";
import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Screen extends Audit {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column({length: 45, type: String, nullable: true})
  name: string | undefined;

  @Column({length: 250, type: String, nullable: true})
  description: string | undefined;

  @Column({length: 250, type: String, nullable: true})
  url: string | undefined;

  @Column({length: 100, type: String, nullable: true})
  icon: string | undefined;

  @Column({length: 4, type: String, nullable: true})
  order: string | undefined;

  @Column({length: 25, type: String, nullable: true})
  icon_color: string | undefined;

  @ManyToMany(() => User, (user: any) => user.screans)
  users: User[] | undefined;

}
