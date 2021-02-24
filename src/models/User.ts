
import { Audit } from "../core/AuditFields";
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import { RequestScreen } from "./RequestScreen";
import { Screen } from "./Screen";

@Entity()
export class User extends Audit {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({length: 60, type: String, nullable: true})
    name: string | undefined;

    @Column({length: 250, type: String, nullable: true})
    email: string | undefined;

    @Column({length: 250, type: String, nullable: true})
    password: string | undefined;

    @Column({type: Date, nullable: true})
    birth_date: Date | undefined;

    @Column({length: 250, type: String, nullable: true})
    url_photograph: string | undefined;

    @Column({length: 45, type: String, nullable: true})
    telephone: string | undefined;

    @Column({length: 500, type: String, nullable: true})
    theme: string | undefined;

    @ManyToMany(() => Screen, (screen: any) => screen.users)
    @JoinTable({
      name: "user_screen",
      joinColumn: {
        name: "user_id",
        referencedColumnName: "id"
      },
      inverseJoinColumn: {
          name: "screen_id",
          referencedColumnName: "id"
      }
    })
    screans: Screen[] | undefined;

    @ManyToMany(() => RequestScreen, (request: any) => request.users)
    @JoinTable({
      name: "user_request",
      joinColumn: {
        name: "user_id",
        referencedColumnName: "id"
      },
      inverseJoinColumn: {
          name: "request_screen_id",
          referencedColumnName: "id"
      }
    })
    requests: RequestScreen[] | undefined;
}
