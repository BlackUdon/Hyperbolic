import 'reflect-metadata';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import {Entry} from './entry.entity';
import {Exercise} from './exercise.entity';

@Entity({name: 'Session'})
export class Session {
  @PrimaryGeneratedColumn()
  ID!: number;

  @OneToMany((type) => Exercise, (exercise) => exercise.ID, {cascade: true})
  @JoinColumn()
  ExerciseID!: Exercise;

  @OneToMany((type) => Entry, (entry) => entry.ID, {cascade: true})
  @JoinColumn()
  EntryID!: Entry;

  @Column('date')
  Date!: string;
}
