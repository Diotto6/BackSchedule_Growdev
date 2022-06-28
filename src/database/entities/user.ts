import {
    Entity,
    BaseEntity,
    Column,
    OneToMany,
    PrimaryGeneratedColumn,
    PrimaryColumn
} from "typeorm";
import { MensagensEntity } from "./mensagens"; 
import { v4 as uuid } from 'uuid'


@Entity({ name: 'User' })

export class UserEntity extends BaseEntity {
    @PrimaryColumn()
    id: string;
     
    @Column()
    usuario: string;

    @Column()
    senha:string;


    @OneToMany(type => MensagensEntity, mensagens => mensagens.user)

    mensagens?: MensagensEntity[];

    constructor( usuario: string, senha: string){
        super()
        this.id = uuid()
        this.usuario = usuario,
        this.senha = senha
    }
}