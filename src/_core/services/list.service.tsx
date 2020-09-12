import {useCallback, useEffect, useState} from 'react';
import {getRepository} from 'typeorm';
import {Session} from '../entities/session.entity';
import {format} from 'date-fns';
import {session} from 'electron';
import {ListModel} from '../models/list.model';

export const setSession = async (param?: string) => {
  // const [sessionID, setSessionID] = useState(Number);
  let sessionID;
  const sessionRepo = getRepository(Session);
  const date = format(new Date(), 'P');

  // const temp = await sessionRepo.create({
  //   Date: date,
  // });
  // await sessionRepo.save(temp).catch((err) => {
  //   console.log('SessionService:Create :', err);
  // });

  const session = sessionRepo.create();
  session.Date = date;

  await sessionRepo
    .save(session)
    .then((res) => {
      console.log(`SessionService:Create::res::${res.ID}`);
      // setSessionID(res.ID);
      sessionID = res.ID;
    })
    .catch((err) => {
      console.log(`SessionService:Create::err::${err}`);
    });
  console.log(`Session ID::${sessionID}`);
  return sessionID;
};

export const getSession = async () => {
  const sessionRepo = await getRepository(Session);
  // console.log(`SessionRepo + ${sessionRepo}`);
  const temp: ListModel[] = await sessionRepo.find();
  // const [sessionsData, setSessionsData] = useState<Session[]>([]);
  // const getDate = useCallback(async () => {
  //   const temp = await sessionRepo.find();
  //   setSessionsData(temp);
  // }, []);
  // console.log(temp);
  return temp;
};
