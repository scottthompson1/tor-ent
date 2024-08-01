import { Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
    @Column({default: 'OPEN'})
    status: string;
}
