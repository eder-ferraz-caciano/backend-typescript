import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

@Entity()
export class User {
  constructor () {
  }
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

    @Column({length: 60, type: String, nullable: true})
    created_by: string | undefined

    @CreateDateColumn()
    created_at: Date | undefined

    @Column({length: 60, type: String, nullable: true})
    updated_by: string | undefined

    @UpdateDateColumn()
    updated_at: Date | undefined

    @Column({length: 60, type: String, nullable: true})
    deleted_by: string | undefined

    @DeleteDateColumn()
    deleted_at: Date | undefined

}
