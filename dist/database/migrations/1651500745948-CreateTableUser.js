"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableMensagens1651500745948 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableMensagens1651500745948 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'Mensagens',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isGenerated: true,
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
                    type: 'uuid',
                    isNullable: true
                }
            ],
            foreignKeys: [
                new typeorm_1.TableForeignKey({
                    referencedColumnNames: ['id'],
                    referencedTableName: 'User',
                    columnNames: ['user_id']
                }),
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('Mensagens', true, true, true);
    }
}
exports.CreateTableMensagens1651500745948 = CreateTableMensagens1651500745948;
