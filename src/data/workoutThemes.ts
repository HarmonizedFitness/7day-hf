
import { ProgramType } from './programs';

export interface WorkoutTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  name: string;
  cardBg: string;
  dropdownBg: string;
  hoverBg: string;
  borderColor: string;
}

export const workoutThemes: Record<ProgramType, WorkoutTheme> = {
  'gym': {
    primary: '#3498DB', // blue theme (baseline)
    secondary: '#2C3E50',
    accent: '#5DADE2',
    background: 'from-slate-200 via-blue-100 to-slate-100',
    text: '#1F2937',
    name: 'In The Gym',
    cardBg: 'rgba(59, 130, 246, 0.1)',
    dropdownBg: 'rgba(255, 255, 255, 0.95)',
    hoverBg: 'rgba(59, 130, 246, 0.15)',
    borderColor: 'rgba(59, 130, 246, 0.3)'
  },
  'trx': {
    primary: '#DC2626', // refined red theme
    secondary: '#7F1D1D',
    accent: '#FCA5A5',
    background: 'from-red-50 via-red-100 to-red-50',
    text: '#1F2937',
    name: 'TRX Suspension Training',
    cardBg: 'rgba(220, 38, 38, 0.1)',
    dropdownBg: 'rgba(255, 255, 255, 0.95)',
    hoverBg: 'rgba(220, 38, 38, 0.15)',
    borderColor: 'rgba(220, 38, 38, 0.3)'
  },
  'stretching': {
    primary: '#059669', // refined green theme
    secondary: '#064E3B',
    accent: '#6EE7B7',
    background: 'from-green-50 via-green-100 to-green-50',
    text: '#1F2937',
    name: 'Foundational Stretching',
    cardBg: 'rgba(5, 150, 105, 0.1)',
    dropdownBg: 'rgba(255, 255, 255, 0.95)',
    hoverBg: 'rgba(5, 150, 105, 0.15)',
    borderColor: 'rgba(5, 150, 105, 0.3)'
  },
  'bodyweight': {
    primary: '#D35400', // burnt-orange
    secondary: '#2d3033', // charcoal
    accent: '#F39C12', // orange accent
    background: 'from-orange-50 via-orange-100 to-orange-50',
    text: '#1F2937',
    name: 'Bodyweight Training',
    cardBg: 'rgba(211, 84, 0, 0.1)',
    dropdownBg: 'rgba(255, 255, 255, 0.95)',
    hoverBg: 'rgba(211, 84, 0, 0.15)',
    borderColor: 'rgba(211, 84, 0, 0.3)'
  }
};

export const getWorkoutTheme = (workoutType: ProgramType): WorkoutTheme => {
  return workoutThemes[workoutType];
};
