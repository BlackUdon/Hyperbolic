import {useCallback, useEffect, useState} from 'react';
import {getRepository} from 'typeorm';
import {Session} from '../entities/session.entity';
import {format} from 'date-fns';
import {ListModel} from '../models/list.model';

// const sessionRepo = getRepository(Session);

export const setSession = async (param?: string) => {
  console.log(`===SessionService::setSession===`);
  let sessionID;
  const date = format(new Date(), 'P');
  const sessionRepo = getRepository(Session);
  const session = sessionRepo.create();
  session.Date = date;
  //#TODO save entry by association
  await sessionRepo
    .save(session)
    .then((res) => {
      console.log(`SessionService::setSession::res::${res.ID}`);
      sessionID = res.ID;
    })
    .catch((err) => {
      console.log(`SessionService::setSession::err::${err}`);
    });
  console.log(`SessionService::setSession::${sessionID}`);
  return sessionID;
};

export const getSession = async () => {
  const sessionRepo = getRepository(Session);
  const temp: ListModel[] = await sessionRepo.find();

  return temp;
};
