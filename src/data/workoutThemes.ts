
import { WorkoutType } from './exercises';

export interface WorkoutTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  name: string;
}

export const workoutThemes: Record<WorkoutType, WorkoutTheme> = {
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
    background: 'from-blue-900 via-blue-800 to-blue-900',
    text: '#F5F5F5',
    name: 'Full Gym Equipment'
  },
  'resistance-bands': {
    primary: '#9B59B6', // purple theme
    secondary: '#2C3E50',
    accent: '#BB8FCE',
    background: 'from-purple-900 via-purple-800 to-purple-900',
    text: '#F5F5F5',
    name: 'Resistance Bands'
  },
  'home-minimal': {
    primary: '#27AE60', // green theme
    secondary: '#2C3E50',
    accent: '#58D68D',
    background: 'from-green-900 via-green-800 to-green-900',
    text: '#F5F5F5',
    name: 'Minimal Home Equipment'
  }
};

export const getWorkoutTheme = (workoutType: WorkoutType): WorkoutTheme => {
  return workoutThemes[workoutType];
};
