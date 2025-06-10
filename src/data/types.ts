
export interface Exercise {
  name: string;
  technicalCue?: string;
  somaticCue?: string;
  videoInfo?: {
    title: string;
    instructor: string;
    duration: string;
    url: string;
  };
}

export interface Circuit {
  title: string;
  exercises: Exercise[];
}

export interface WorkoutDay {
  id: number;
  title: string;
  subtitle: string;
  message: string;
  warmup: {
    breathwork: string;
    mobilityItems: string[];
    intention: string;
    somaticCue: string;
  };
  circuits: Circuit[];
  cooldown: {
    items: string[];
    journalPrompt: string;
  };
  hiddenHint: string;
}
