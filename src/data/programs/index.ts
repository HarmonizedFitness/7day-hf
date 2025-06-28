
import { bodyweigtProgram } from './bodyweight';
import { gymProgram } from './gym';
import { trxProgram } from './trx';
import { stretchingProgram } from './stretching';
import { WorkoutProgram, ProgramType } from './types';

export const workoutPrograms: Record<ProgramType, WorkoutProgram> = {
  'bodyweight': bodyweigtProgram,
  'gym': gymProgram,
  'trx': trxProgram,
  'stretching': stretchingProgram
};

export const getProgramById = (programId: ProgramType): WorkoutProgram => {
  return workoutPrograms[programId];
};

export const getAllPrograms = (): WorkoutProgram[] => {
  return Object.values(workoutPrograms);
};

export * from './types';
