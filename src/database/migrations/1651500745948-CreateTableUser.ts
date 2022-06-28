import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableMensagens1651500745948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       
            await queryRunner.createTable( new Table({
                name: 'Mensagens',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated:true,
    
                    },
                    {
                        name: 'descrição',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'detalhes',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'user_id',
                        type:'uuid',
                        isNullable: true
                    }
                ],
                foreignKeys: [
                     new TableForeignKey({
                            referencedColumnNames: ['id'],
                            referencedTableName: 'User',
                            columnNames: ['user_id']
                        }),
                ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Mensagens', true, true, true)
    }

}
