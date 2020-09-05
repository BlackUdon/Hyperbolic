import {useCallback, useEffect, useState} from 'react';
import {getRepository} from 'typeorm';
import {Session} from '../entities/session.entity';
import {format} from 'date-fns';

export const setSession = async (param?: string) => {
  const sessionRepo = await getRepository(Session);
  const temp = await sessionRepo.create({
    Date: format(new Date(), 'P'),
  });

  await sessionRepo.save(temp).catch((err) => {
    console.log('SessionService:Create :', err);
  });
  console.log('Session Saved');
};

export const getSession = async () => {
  const sessionRepo = await getRepository(Session);
  console.log(`SessionRepo + ${sessionRepo}`);
  const temp = await sessionRepo.find();
  // const [sessionsData, setSessionsData] = useState<Session[]>([]);
  // const getDate = useCallback(async () => {
  //   const temp = await sessionRepo.find();
  //   setSessionsData(temp);
  // }, []);
  // console.log(temp);
  return temp;
};
