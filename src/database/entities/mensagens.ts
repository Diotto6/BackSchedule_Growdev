import { Entity,
        BaseEntity,
        Column,
        ManyToOne,
        JoinColumn,
        PrimaryGeneratedColumn,
        PrimaryColumn
    } 
        from "typeorm";
import { UserEntity } from "./user";
import { v4 as uuid } from 'uuid'


@Entity({ name: 'Mensagens' })


export class MensagensEntity extends BaseEntity {
    @PrimaryColumn()
    id: string;
     
    @Column()
    descrição: string;

    @Column()
    detalhes: string;

    @Column()
    user_id?: string;

    @ManyToOne(()=> UserEntity, user => user.mensagens)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id'})
    user?: UserEntity;


    constructor( descrição: string, detalhes:string, user_id: string ){
        super();
        this.id = uuid()
        this.descrição = descrição;
        this.detalhes = detalhes;
        this.user_id = user_id;
    }   
}
