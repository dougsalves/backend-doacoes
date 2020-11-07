import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDoacaoItens1604715228527 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'doacaoitens',
                columns: [
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doacaoitens');
    }

}
