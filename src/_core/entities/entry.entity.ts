import 'reflect-metadata';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import {Session} from './session.entity';
import {Exercise} from './exercise.entity';

@Entity({name: 'Entry'})
export class Entry {
  @PrimaryGeneratedColumn()
  ID!: number;

  @OneToOne((type) => Session, (session) => session.ID)
  SessionID!: Session;

  @ManyToOne((type) => Exercise, (exercise) => exercise.ID)
  ExerciseID!: Exercise;

  @Column({type: 'varchar', length: 100})
  SetCount!: number;

  @Column({type: 'varchar', length: 100})
  RepCount!: number;

  @Column('datetime')
  TimeTotal!: string;

  @Column()
  Note!: string;

  @Column('date')
  Date!: string;
}
