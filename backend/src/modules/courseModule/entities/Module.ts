import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Lesson } from "../../courseLesson/entities/Lesson";

@Entity("modules")
export class Module {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Lesson, lessons => lessons.module)
    lessons: Lesson[];

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}