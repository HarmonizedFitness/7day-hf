
import { ExerciseDatabase } from './types';

export const homeMinimalExercises: ExerciseDatabase = {
  "Barbell Bench Press – 4x8 (moderate load)": {
    name: "Floor Push-Ups – 4x8",
    technicalCue: "Lie on floor, push up with full range of motion",
    somaticCue: "Feel the chest and triceps working from the floor",
    videoInfo: {
      title: "Floor Push-Up Technique",
      instructor: "Home Fitness Guide",
      duration: "2:50",
      url: "https://youtu.be/floorpush123?si=1234567890"
    },
    equipment: []
  },
  "Lat Pulldown or Assisted Pull-Ups – 4x10": {
    name: "Towel Door Rows – 4x10",
    technicalCue: "Loop towel around door handle, lean back and pull",
    somaticCue: "Feel your back muscles engaging as you pull",
    videoInfo: {
      title: "Towel Door Row Tutorial",
      instructor: "Minimal Equipment",
      duration: "3:15",
      url: "https://youtu.be/towelrow123?si=1234567890"
    },
    equipment: ['Towel', 'Sturdy Door']
  },
  "Goblet Squat – 4x12": {
    name: "Chair-Assisted Squats – 4x15",
    technicalCue: "Use chair for balance, squat down and up",
    somaticCue: "Feel the support helping you maintain proper form",
    videoInfo: {
      title: "Chair Squat Progression",
      instructor: "Home Workouts",
      duration: "4:00",
      url: "https://youtu.be/chairsquat123?si=1234567890"
    },
    equipment: ['Chair']
  }
};
