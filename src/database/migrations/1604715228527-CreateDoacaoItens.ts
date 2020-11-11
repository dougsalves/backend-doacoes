import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDoacaoItens1604715228527 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'doacaoitens',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'id_doacao',
                        type: 'uuid',                        
                    },
                    {
                        name: 'id_produto',
                        type: 'uuid',                        
                    },
                    {
                        name: 'qtde',
                        type: 'number',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doacaoitens');
    }

}
