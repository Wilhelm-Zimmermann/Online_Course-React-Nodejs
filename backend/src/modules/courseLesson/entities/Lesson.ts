import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Module } from "../../courseModule/entities/Module";
import { v4 as uuidv4 } from "uuid";

@Entity("lessons")
export class Lesson {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => Module)
    @JoinColumn({ name: "module_id" })
    module: Module

    @Column()
    module_id: string;

    @Column()
    event_date: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuidv4();
        }
    }
}