import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692912274602 implements MigrationInterface {
    name = 'Default1692912274602'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_25fb39401429c6d74e2b4a3da99"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "grupoUsuarioId" TO "grupoUsuarioIdId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_673d7ce5ae9e11b43283adcbb07" FOREIGN KEY ("grupoUsuarioIdId") REFERENCES "grupo_usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_673d7ce5ae9e11b43283adcbb07"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "grupoUsuarioIdId" TO "grupoUsuarioId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_25fb39401429c6d74e2b4a3da99" FOREIGN KEY ("grupoUsuarioId") REFERENCES "grupo_usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
