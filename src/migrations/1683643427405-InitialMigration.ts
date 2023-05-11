import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683643427405 implements MigrationInterface {
    name = 'InitialMigration1683643427405'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "admin" boolean NOT NULL DEFAULT 'false', "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedules" ("id" SERIAL NOT NULL, "date" date NOT NULL, "time" TIME NOT NULL, "userId" integer, CONSTRAINT "PK_7e33fc2ea755a5765e3564e66dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "realEstateId" integer, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "real_state" ("id" SERIAL NOT NULL, "sold" boolean NOT NULL DEFAULT 'false', "value" numeric(12,2) NOT NULL DEFAULT '0', "size" integer NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "scheduleId" integer, CONSTRAINT "PK_4af22f76f0e9ac2fffe2e89e42f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying(45) NOT NULL, "zipCode" character varying(8) NOT NULL, "number" character varying(7), "city" character varying(20) NOT NULL, "state" character varying(2) NOT NULL, "realEstateId" integer, CONSTRAINT "REL_abf14fbae3ff6c176aa202b848" UNIQUE ("realEstateId"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_19c54f24597b318be3892114c75" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_9947f7e43e446fa3fba94ee76c2" FOREIGN KEY ("realEstateId") REFERENCES "real_state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "FK_ac9c84d1cee8008e1443e1e1ec0" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_abf14fbae3ff6c176aa202b848e" FOREIGN KEY ("realEstateId") REFERENCES "real_state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_abf14fbae3ff6c176aa202b848e"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "FK_ac9c84d1cee8008e1443e1e1ec0"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_9947f7e43e446fa3fba94ee76c2"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_19c54f24597b318be3892114c75"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "real_state"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "schedules"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
