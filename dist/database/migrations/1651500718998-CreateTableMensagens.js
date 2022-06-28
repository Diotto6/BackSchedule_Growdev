"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUser1651500718998 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUser1651500718998 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('User', true, true, true);
    }
}
exports.CreateTableUser1651500718998 = CreateTableUser1651500718998;
