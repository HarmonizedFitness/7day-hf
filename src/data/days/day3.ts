
import { WorkoutDay } from '../types';

export const day3: WorkoutDay = {
  id: 3,
  title: "LEGS (Glutes, Quads, Hamstrings, Core)",
  subtitle: "Building Your Foundation",
  message: "Today we honor the foundation of your physical structure – your legs. These powerful pillars connect you to the earth and generate the force that propels you through life. As you train today, notice how stability in your lower body creates freedom throughout your entire system.",
  warmup: {
    breathwork: "Box Breathing (5 cycles) - 4 counts each for inhale, hold, exhale, hold",
    mobilityItems: [
      "Hip CARs (Controlled Articular Rotations) - 5/direction/side",
      "Walking lunges with rotation (8/side)",
      "Bodyweight squats (15 reps)",
      "Standing hamstring scoops (10/side)"
    ],
    intention: "I build my foundation with each movement.",
    somaticCue: "Feel how your feet create a tripod of support – big toe, little toe, and heel."
  },
  circuits: [
    {
      title: "Legs Circuit A",
      exercises: [
        {
          name: "Goblet Squat – 4x12",
          technicalCue: "Keep chest proud, knees tracking over toes",
          somaticCue: "Feel your body lowering between your legs, not just forward",
          videoInfo: {
            title: "📌HOW TO DO A GOBLET SQUAT",
            instructor: "SquatCouple",
            duration: "0:22",
            url: "https://www.youtube.com/watch?v=lRYBbchqxtI"
          }
        },
        {
          name: "Romanian Deadlift – 4x10",
          technicalCue: "Hinge from hips, maintain slight knee bend",
          videoInfo: {
            title: "How to do the ROMANIAN DEADLIFT! | 2 Minute Tutorial",
            instructor: "Max Euceda",
            duration: "2:00",
            url: "https://www.youtube.com/watch?v=3VXmecChYYM"
          }
        },
        {
          name: "Bodyweight Split Squat – 3x10/side",
          somaticCue: "Notice the stability challenge as you lower",
          videoInfo: {
            title: "How to do Split Squats (Perfect Form)",
            instructor: "Calisthenic Movement",
            duration: "3:12",
            url: "https://youtu.be/-aMgxO760L4?si=8UynAXSLxaM-L6C9"
          }
        }
      ]
    },
    {
      title: "Legs Circuit B",
      exercises: [
        {
          name: "Dumbbell Step-Ups – 3x10/side",
          technicalCue: "Drive through heel, control the lowering phase",
          videoInfo: {
            title: "How To Do Step Ups",
            instructor: "ScottHermanFitness",
            duration: "4:45",
            url: "https://youtu.be/9ZknEYboBOQ?si=_hMMqW7NzFD484yp"
          }
        },
        {
          name: "Glute Bridge – 3x15",
          somaticCue: "Feel the gluteal muscles initiate the movement",
          videoInfo: {
            title: "How To Hip Thrust",
            instructor: "Bret Contreras",
            duration: "8:30",
            url: "https://youtu.be/OUgsJ8-Vi0E?si=H6JTwVY4E9SUhnyH"
          }
        },
        {
          name: "Standing Calf Raise – 3x15",
          technicalCue: "Full range of motion, slight pause at the top",
          videoInfo: {
            title: "How to do Standing Calf Raises",
            instructor: "Max Euceda",
            duration: "1:45",
            url: "https://youtube.com/shorts/baEXLy09Ncc?si=XegZQeIWclhdVvx9"
          }
        }
      ]
    },
    {
      title: "Legs Circuit C",
      exercises: [
        {
          name: "Plank – 3x30 seconds",
          technicalCue: "Create a straight line from head to heels",
          videoInfo: {
            title: "📌Plank Form Correction ✔️ vs. ✖️",
            instructor: "SquatCouple",
            duration: "0:14",
            url: "https://www.youtube.com/watch?v=j6WVxGJZv5Y"
          }
        },
        {
          name: "Lateral Lunge – 2x10/side",
          somaticCue: "Feel the inner thigh stretch as you shift laterally",
          videoInfo: {
            title: "How To Do A Lateral Lunge",
            instructor: "FitnessBlender",
            duration: "2:30",
            url: "https://youtube.com/shorts/pwqnnNwu-0s?si=euYFtFTLZ1ekviUX"
          }
        },
        {
          name: "Dead Bug – 2x10/side",
          technicalCue: "Maintain contact between lower back and floor",
          videoInfo: {
            title: "Dead Bug Exercise For Core Stability",
            instructor: "Pursuit Physical Therapy",
            duration: "0:21",
            url: "https://www.youtube.com/watch?v=o4GKiEoYClI"
          }
        }
      ]
    }
  ],
  cooldown: {
    items: [
      "Foam roll: Quads, hamstrings, calves (1 min each)",
      "Figure 4 stretch (45 sec/side)",
      "Downward dog to runner's lunge (30 sec/side)",
      "Seated forward fold (60 sec)",
      "Diaphragmatic breathing – 2 minutes"
    ],
    journalPrompt: "How did my connection to the ground change throughout this workout? Where did I feel most stable and powerful?"
  },
  hiddenHint: "Three points of contact with the ground provide optimal stability."
};
