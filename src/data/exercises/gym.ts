
import { ExerciseDatabase } from './types';

export const gymExercises: ExerciseDatabase = {
  "Barbell Bench Press – 4x8 (moderate load)": {
    name: "Barbell Bench Press – 4x8",
    technicalCue: "Create a slight arch in your lower back, keep shoulders pulled down and back",
    somaticCue: "Feel the connection between your upper back and the bench",
    videoInfo: {
      title: "How to do the BARBELL BENCH PRESS! | 2 Minute Tutorial",
      instructor: "Max Euceda",
      duration: "2:00",
      url: "https://www.youtube.com/watch?v=lWFknlOTbyM"
    },
    equipment: ['Barbell', 'Bench', 'Weight Plates']
  },
  "Lat Pulldown or Assisted Pull-Ups – 4x10": {
    name: "Lat Pulldown – 4x10",
    technicalCue: "Initiate by pulling shoulder blades down and back",
    somaticCue: "Feel the width developing across your upper back",
    videoInfo: {
      title: "How to do Lat Pulldowns (The right way)",
      instructor: "Davis Diley",
      duration: "0:28",
      url: "https://www.youtube.com/watch?v=z-lxcsIN4T4"
    },
    equipment: ['Cable Machine', 'Lat Pulldown Attachment']
  },
  "Goblet Squat – 4x12": {
    name: "Barbell Back Squat – 4x10",
    technicalCue: "Bar on upper traps, drive through heels",
    somaticCue: "Feel the power generating from your legs and glutes",
    videoInfo: {
      title: "How to Back Squat Properly",
      instructor: "Squat University",
      duration: "8:45",
      url: "https://youtu.be/backsquat123?si=1234567890"
    },
    equipment: ['Barbell', 'Squat Rack', 'Weight Plates']
  }
};
