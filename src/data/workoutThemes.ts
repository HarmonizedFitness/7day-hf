
import { ProgramType } from './programs';

export interface WorkoutTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  name: string;
}

export const workoutThemes: Record<ProgramType, WorkoutTheme> = {
  'bodyweight': {
    primary: '#D35400', // burnt-orange (default)
    secondary: '#2d3033', // charcoal
    accent: '#F39C12', // orange accent
    background: 'from-stone-800 via-stone-700 to-stone-800',
    text: '#F5F5F5',
    name: 'Bodyweight Training'
  },
  'trx': {
    primary: '#E74C3C', // red theme
    secondary: '#2C3E50',
    accent: '#FF6B6B',
    background: 'from-red-900 via-red-800 to-red-900',
    text: '#F5F5F5',
    name: 'TRX Suspension Training'
  },
  'gym': {
    primary: '#3498DB', // blue theme
    secondary: '#2C3E50',
    accent: '#5DADE2',
    background: 'from-slate-200 via-blue-100 to-slate-100',
    text: '#1F2937',
    name: 'In The Gym'
  },
  'stretching': {
    primary: '#27AE60', // green theme
    secondary: '#2C3E50',
    accent: '#58D68D',
    background: 'from-green-900 via-green-800 to-green-900',
    text: '#F5F5F5',
    name: 'Foundational Stretching'
  }
};

export const getWorkoutTheme = (workoutType: ProgramType): WorkoutTheme => {
  return workoutThemes[workoutType];
};
