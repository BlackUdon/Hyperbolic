import {createConnection, Connection, getRepository} from 'typeorm';
import {Entry} from '../entities/entry.entity';
import {Session} from '../entities/session.entity';
import {Exercise} from '../entities/exercise.entity';

export const setDBConnection = async () => {
  try {
    const connection = await createConnection({
      type: 'react-native',
      database: 'test',
      location: 'default',
      logging: ['error', 'query', 'schema'],
      synchronize: true,
      entities: [Entry, Session, Exercise],
    });
    console.log(`Connection Made`);
  } catch (error) {
    console.log(`Error in Connection::${error}`);
  }
};
