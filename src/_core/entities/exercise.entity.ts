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
import {Entry} from './entry.entity';

@Entity({name: 'Exercise'})
export class Exercise {
  @PrimaryGeneratedColumn()
  ID!: number;

  @ManyToOne((type) => Session, (session) => session.ID)
  SessionID!: Session;

  @OneToMany((type) => Entry, (entry) => entry.ID)
  EntryID!: Entry;

  @Column({type: 'varchar', length: 30})
  Name!: string;

  @Column({type: 'varchar', length: 100})
  Description!: string;

  @Column()
  SetNum!: number;

  @Column()
  RepNum!: number;

  @Column()
  RestNum!: number;

  @Column('date')
  Date!: string;
}
