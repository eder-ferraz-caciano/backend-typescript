import express, { Request, Response } from "express";

import { BeforeInsert, BeforeRemove, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export abstract class Audit {
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

  @BeforeInsert()
  insert () {
    this.created_by = ''
  }
  @BeforeUpdate()
  update () {
    this.updated_by = ''
  }
  @BeforeRemove()
  delete () {
    this.deleted_by = ''
  }
}
