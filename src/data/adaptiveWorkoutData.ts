
import { getProgramById, ProgramType } from './programs';
import { ProgramDay } from './programs/types';

export const getAdaptiveWorkoutData = (programType: ProgramType = 'bodyweight'): ProgramDay[] => {
  const program = getProgramById(programType);
  return program.days;
};

export const getAdaptiveWorkoutDay = (dayId: number, programType: ProgramType = 'bodyweight'): ProgramDay | null => {
  const program = getProgramById(programType);
  const day = program.days.find(d => d.id === dayId);
  return day || null;
};
