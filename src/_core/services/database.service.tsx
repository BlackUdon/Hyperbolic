import React, {useCallback, useEffect, ReactNode, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createConnection, Connection, getRepository} from 'typeorm';
import {Entry} from '../entities/entry.entity';
import {Session} from '../entities/session.entity';
import {Exercise} from '../entities/exercise.entity';
import * as ListService from './list.service';

export const DAL = () => {
  console.log(`CT start`);
  const [defaultConnection, setConnection] = useState<Connection | null>(null);

  const [sessionsData, setSessionsData] = useState<Session[]>([]);
  const [exercisesData, setExercisesData] = useState<Exercise[]>([]);
  const [entriesData, setEntriesData] = useState<Entry[]>([]);

  const setupConnection = useCallback(async () => {
    try {
      const connection = await createConnection({
        type: 'react-native',
        database: 'test',
        location: 'default',
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: [Entry, Session, Exercise],
      });
      setConnection(connection);
      // ListService.setSession();
      // let temp = await ListService.getSession();
      // console.log(temp);
      // setSessionsData(temp);
      // ListService.setSession;
      // getSessions();
      // getExercises();
      // getEntries();
      console.log(`Connection Made`);
    } catch (error) {
      console.log(`Error in Connection: ${error}`);
    }
  }, []);

  const setSession = useCallback(async () => {
    const tRepository = getRepository(Session);
    const newSession = new Session();
    newSession.EntryID = new Entry();
    newSession.Date = '11/11/2020';
    await tRepository.save(newSession);
  }, []);
  const setExercise = useCallback(async () => {
    const tRepository = getRepository(Exercise);
    let result = await tRepository.find();
    if (result.length === 0) {
      const newExercise = new Exercise();
      newExercise.EntryID = new Entry();
      newExercise.Name = 'Bench';
      newExercise.Description = 'Bench stuff';
      newExercise.SetNum = 1;
      newExercise.RepNum = 1;
      newExercise.RestNum = 1;
      newExercise.Date = '11/11/2020';
      await tRepository.save(newExercise);
      result = await tRepository.find();
    }
  }, []);
  const setEntry = useCallback(async () => {
    const tRepository = getRepository(Entry);
    let result = await tRepository.find();
    if (result.length === 0) {
      const newEntry = new Entry();
      newEntry.SessionID = new Session();
      newEntry.ExerciseID = new Exercise();
      newEntry.SetCount = 10;
      newEntry.RepCount = 5;
      newEntry.TimeTotal = '10s';
      newEntry.Note = 'Note';
      newEntry.Date = '11/11/2020';
      await tRepository.save(newEntry);
      result = await tRepository.find();
    }
  }, []);

  const getSessions = useCallback(async () => {
    const tRepository = getRepository(Session);
    let result = await tRepository.find();
    if (result.length === 0) {
    } else {
      setSessionsData(result);
    }
  }, []);
  const getExercises = useCallback(async () => {
    const tRepository = getRepository(Exercise);
    let result = await tRepository.find();
    if (result.length === 0) {
      const newExercise = new Exercise();
      newExercise.EntryID = new Entry();
      newExercise.Name = 'Bench';
      newExercise.Description = 'Bench stuff';
      newExercise.SetNum = 1;
      newExercise.RepNum = 1;
      newExercise.RestNum = 1;
      newExercise.Date = '2020/11/11';
      await tRepository.save(newExercise);
      result = await tRepository.find();
    }
    setExercisesData(result);
  }, []);

  const getEntries = useCallback(async () => {
    const tRepository = getRepository(Entry);
    let result = await tRepository.find();
    if (result.length === 0) {
      const newEntry = new Entry();
      newEntry.SessionID = new Session();
      newEntry.ExerciseID = new Exercise();
      newEntry.SetCount = 10;
      newEntry.RepCount = 5;
      newEntry.TimeTotal = '10s';
      newEntry.Note = 'Note';
      newEntry.Date = '11/11/2020';
      await tRepository.save(newEntry);
      result = await tRepository.find();
    }
    setEntriesData(result);
  }, []);

  interface Table<T> {
    [Key: string]: {};
  }

  const dictResult: Table<string> = {
    Session: sessionsData,
    Exercise: exercisesData,
    Entry: entriesData,
  };

  useEffect(() => {
    if (!defaultConnection) {
      setupConnection();
    } else {
    }
  }, []);
  // getSessions();
  return [];
};

export default DAL;
