import { Audit } from "../core/AuditFields";
import {Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Screen } from "./Screen";
import { User } from "./User";

@Entity()
export class RequestScreen extends Audit {
  @PrimaryGeneratedColumn()
  id: number | undefined
  
  @Column({length: 250, type: String, nullable: true})
  description: string | undefined;
  
  @Column({length: 250, type: String, nullable: true})
  url: string | undefined;
  
  @Column({length: 250, type: String, nullable: true})
  note: string | undefined;

  @ManyToOne(() => Screen)
  @JoinColumn([{ name: "screen_id", referencedColumnName: "id" },])
  screen_id: number | undefined;

  @ManyToMany(() => User, (user: any) => user.requests)
  users: User[] | undefined;
}
