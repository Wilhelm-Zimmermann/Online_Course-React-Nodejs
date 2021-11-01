import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClass1635339758819 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "lessons",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "module_id",
                        type: "uuid"
                    },
                    {
                        name: "event_date",
                        type: "timestamp"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FK_Module",
                        referencedTableName: "modules",
                        referencedColumnNames: ["id"],
                        columnNames: ["module_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",

                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("lessons");
    }

}
