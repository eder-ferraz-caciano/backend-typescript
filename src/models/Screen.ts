import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Screen {
  constructor () {}

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

  @Column({length: 60, type: String, nullable: true})
  created_by: string | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  @Column({length: 60, type: String, nullable: true})
  updated_by: string | undefined;

  @UpdateDateColumn()
  updated_at: Date | undefined;

  @Column({length: 60, type: String, nullable: true})
  deleted_by: string | undefined;

  @DeleteDateColumn()
  deleted_at: Date | undefined;

}
