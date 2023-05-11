import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Schedule from "./schedules.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 45, nullable: false })
  email: string;

  @Column({ type: "boolean", default: "false" })
  admin: boolean;

  @Column({ type: "varchar", length: 120, nullable: false })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date | string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: Date | string | null | undefined;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules?: Schedule[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted: number = getRounds(this.password);

    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
export default User;
