import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableUser1651500718998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'User',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'usuario',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'senha',
                    type: 'varchar',
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('User', true, true, true)

    }

}
