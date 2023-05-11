import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./real_estate.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45, nullable: false, unique: true })
  name: string;

  @OneToMany(() => RealEstate, (realState) => realState.category)
  realEstate: RealEstate[];
}

export default Category;
