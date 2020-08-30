import {useCallback, useEffect, useState} from 'react';
import {Session} from '../entities/session.entity';
import {createConnection, Connection, getRepository} from 'typeorm';

export const SessionService = (param: string) => {
  const [sessionsData, setSessionsData] = useState<Session[]>([]);

  // const getData(): Session[] {
  //   if (this.sessionData) {
  //     return this.sessionData;
  //   }
  //   // const listData: any = DatabaseService.query('SELECT id, name /*...*/');
  //   // this.sessionData = listData.map((data) => new ListModel(data));
  //   return this.sessionData;
  // }

  // //   getListById(id: number) {
  // //     return this.getLists().filter((list) => list.id === id);
  // //   }
};
