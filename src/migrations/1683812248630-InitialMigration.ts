import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683812248630 implements MigrationInterface {
    name = 'InitialMigration1683812248630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "FK_ac9c84d1cee8008e1443e1e1ec0"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_9947f7e43e446fa3fba94ee76c2"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "scheduleId"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "realEstateId"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "hour" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "realEstateId" integer`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "UQ_05088449764d42ca807c1b09fc1" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT 'false'`);
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "sold" SET DEFAULT 'false'`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_ac3131bb922483053abebc5e9ff" FOREIGN KEY ("realEstateId") REFERENCES "real_state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "FK_05088449764d42ca807c1b09fc1" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "FK_a9490420a41bd06f69da8d4e946" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "FK_a9490420a41bd06f69da8d4e946"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "FK_05088449764d42ca807c1b09fc1"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_ac3131bb922483053abebc5e9ff"`);
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "sold" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "UQ_05088449764d42ca807c1b09fc1"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "realEstateId"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "realEstateId" integer`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD "scheduleId" integer`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "time" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_9947f7e43e446fa3fba94ee76c2" FOREIGN KEY ("realEstateId") REFERENCES "real_state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "FK_ac9c84d1cee8008e1443e1e1ec0" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
