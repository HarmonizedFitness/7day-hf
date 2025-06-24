
import { Database as GeneratedDatabase } from './types';

export interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  email: string | null;
  workout_type: string | null;
  subscription_tier: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface UserProgress {
  id: string;
  user_id: string;
  day_id: number;
  circuit_title: string;
  exercise_name: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface JournalEntry {
  id: string;
  user_id: string;
  day_id: number;
  entry: string;
  created_at: string;
  updated_at: string;
}

export interface WorkoutAccess {
  id: string;
  user_id: string;
  workout_type: string;
  has_access: boolean | null;
  granted_at: string | null;
  expires_at: string | null;
  created_at: string | null;
}

export type Database = GeneratedDatabase & {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: {
          id: string;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          email?: string | null;
          workout_type?: string | null;
          subscription_tier?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          email?: string | null;
          workout_type?: string | null;
          subscription_tier?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      user_progress: {
        Row: UserProgress;
        Insert: {
          id?: string;
          user_id: string;
          day_id: number;
          circuit_title: string;
          exercise_name: string;
          completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          day_id?: number;
          circuit_title?: string;
          exercise_name?: string;
          completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      journal_entries: {
        Row: JournalEntry;
        Insert: {
          id?: string;
          user_id: string;
          day_id: number;
          entry: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          day_id?: number;
          entry?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      workout_access: {
        Row: WorkoutAccess;
        Insert: {
          id?: string;
          user_id: string;
          workout_type: string;
          has_access?: boolean | null;
          granted_at?: string | null;
          expires_at?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          workout_type?: string;
          has_access?: boolean | null;
          granted_at?: string | null;
          expires_at?: string | null;
          created_at?: string | null;
        };
      };
    };
    Functions: {
      has_workout_access: {
        Args: { user_uuid: string; workout_type_name: string };
        Returns: boolean;
      };
    };
  };
};
