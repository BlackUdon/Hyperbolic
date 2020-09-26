import {useCallback, useEffect, useState} from 'react';
import {getRepository} from 'typeorm';
import {format} from 'date-fns';

import {ListModel} from '../models/list.model';
import {Exercise} from '../entities/exercise.entity';

// const exerciseRepo = getRepository(Exercise);

// const a = [];

export const setExercise = async (param?: string) => {
  console.log(`===ExerciseService::setExercise===`);
  let exerciseID;
  const date = format(new Date(), 'P');

  const exerciseRepo = getRepository(Exercise);
  const exercise = exerciseRepo.create();
  exercise.Date = date;

  await exerciseRepo
    .save(exercise)
    .then((res) => {
      console.log(`ExerciseService::setExercise::res::${res.ID}`);
      exerciseID = res.ID;
    })
    .catch((err) => {
      console.log(`ExerciseService::setExercise::err::${err}`);
    });
  console.log(`ExerciseService::setExercise::${exerciseID}`);
  return exerciseID;
};

export const getExercise = async () => {
  const exerciseRepo = await getRepository(Exercise);
  const temp: ListModel[] = await exerciseRepo.find();
  return temp;
};
