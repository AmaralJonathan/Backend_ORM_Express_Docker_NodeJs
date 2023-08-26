import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692908840101 implements MigrationInterface {
    name = 'Default1692908840101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "grupo_usuario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "ativo" boolean NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_11fac12774e9d498dc6f01bfafe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "ativo" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "grupoUsuarioId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_25fb39401429c6d74e2b4a3da99" FOREIGN KEY ("grupoUsuarioId") REFERENCES "grupo_usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_25fb39401429c6d74e2b4a3da99"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "grupoUsuarioId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "ativo"`);
        await queryRunner.query(`DROP TABLE "grupo_usuario"`);
    }

}
