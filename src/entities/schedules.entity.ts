import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./user.entity";
import RealEstate from "./real_estate.entity";


@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: Number;

  @Column({ type: "date", nullable: false })
  date: string;

  @Column({ type: "time", nullable: false })
  hour: string;

  @ManyToOne(() => User, (user) => user.schedules)
  user: User;

  @ManyToOne(() => RealEstate, (real_state) => real_state.schedules)
  realEstate: RealEstate;
}

export default Schedule;
