import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
@Entity()
@Unique(['title'])
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column({ default: false })
  status: boolean;
  @Column({ default: false })
  isDeleted: boolean;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: null })
  updated_at: Date;
}