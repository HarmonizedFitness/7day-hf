
import { WorkoutDay } from '../types';

export const day1: WorkoutDay = {
  id: 1,
  title: "PUSH (Chest, Shoulders, Triceps)",
  subtitle: "Beginning the Journey",
  message: "Welcome to Day 1 of your journey. PUSH day trains the muscles that initiate action: chest, shoulders, and triceps—the physical manifestation of your drive and power. Today isn't just about lifting; it's about building awareness, control, and intention. Every movement is a conversation with your body. Let's establish our foundation with precision and purpose.",
  warmup: {
    breathwork: "Deep diaphragmatic breathing (5 reps) - Inhale slowly through nose, expand belly fully, exhale slowly through mouth",
    mobilityItems: [
      "Arm swings + torso rotations (2 min)",
      "World's Greatest Stretch (2 reps/side)",
      "Shoulder band pull-aparts (2x15)",
      "Incline push-ups (10 reps)"
    ],
    intention: "I push with precision and purpose.",
    somaticCue: "Feel your feet grounded firmly on the floor, creating a stable base for your strength."
  },
  circuits: [
    {
      title: "Push Circuit A",
      exercises: [
        {
          name: "Barbell Bench Press – 4x8 (moderate load)",
          technicalCue: "Create a slight arch in your lower back, keep shoulders pulled down and back",
          somaticCue: "Feel the connection between your upper back and the bench",
          videoInfo: {
            title: "How to do the BARBELL BENCH PRESS! | 2 Minute Tutorial",
            instructor: "Max Euceda",
            duration: "2:00",
            url: "https://www.youtube.com/watch?v=lWFknlOTbyM"
          }
        },
        {
          name: "Incline Dumbbell Chest Fly – 3x10",
          technicalCue: "Maintain a slight bend in the elbows, lower until a gentle stretch is felt",
          videoInfo: {
            title: "Stop Doing Chest Flys Like This",
            instructor: "Jeff Nippard",
            duration: "8:22",
            url: "https://www.youtube.com/watch?v=JSDpq14vCZ8"
          }
        },
        {
          name: "Push-Up to Downward Dog – 3x10",
          somaticCue: "Notice how your body transitions between strength and stretch",
          videoInfo: {
            title: "Push up To Downward Dog- Video Demonstration",
            instructor: "MovementAsMedicine",
            duration: "0:43",
            url: "https://www.youtube.com/watch?v=pvkEB6lA1Og"
          }
        }
      ]
    },
    {
      title: "Push Circuit B",
      exercises: [
        {
          name: "Seated Dumbbell Overhead Press – 4x10",
          technicalCue: "Press directly upward, allow the shoulder blades to rotate naturally",
          videoInfo: {
            title: "How to do the SEATED DUMBBELL SHOULDER PRESS! | 2 Minute Tutorial",
            instructor: "Max Euceda",
            duration: "2:00",
            url: "https://www.youtube.com/watch?v=rO_iEImwHyo"
          }
        },
        {
          name: "Cable or Band-Resisted Push-Ups – 3x10-12",
          somaticCue: "Feel the increasing tension throughout the movement",
          videoInfo: {
            title: "Movement Demo - Push Ups With Bands",
            instructor: "Rogue Fitness",
            duration: "1:02",
            url: "https://www.youtube.com/watch?v=cOFwFzzLFWw"
          }
        },
        {
          name: "Shoulder Taps in Plank – 2x20 (total)",
          technicalCue: "Minimize hip rotation, keep your core braced like a cylinder",
          videoInfo: {
            title: "How To Properly Do a Plank with Shoulder Taps",
            instructor: "Wellen",
            duration: "1:58",
            url: "https://www.youtube.com/watch?v=gKA5LBy7WAI"
          }
        }
      ]
    },
    {
      title: "Push Circuit C",
      exercises: [
        {
          name: "Triceps Rope Pushdowns – 3x15",
          technicalCue: "Keep elbows tucked close to ribs, fully extend arms",
          videoInfo: {
            title: "How to do the CABLE TRICEP PUSHDOWN! | 2 Minute Tutorial",
            instructor: "Max Euceda",
            duration: "2:00",
            url: "https://www.youtube.com/watch?v=-xa-6cQaZKY"
          }
        },
        {
          name: "Dumbbell Front Raise + Lateral Raise Complex – 3x10 each",
          somaticCue: "Connect with the deliberate control in both raising and lowering",
          videoInfo: {
            title: "How To Do Cable Front Raise",
            instructor: "Davis Diley",
            duration: "0:28",
            url: "https://www.youtube.com/results?search_query=Dumbbell+front+raise"
          }
        },
        {
          name: "Overhead Plate Hold – 30 sec x 2",
          technicalCue: "Arms fully extended, shoulders away from ears",
          videoInfo: {
            title: "Plate Front Raise with Hold",
            instructor: "Max Euceda",
            duration: "1:30",
            url: "https://youtu.be/Oj9_huufPGQ?si=yVs2bt06zmMUiVff"
          }
        }
      ]
    }
  ],
  cooldown: {
    items: [
      "Foam roll: Chest, Shoulders, Triceps (1 min each)",
      "Doorway Chest Stretch (30 sec/side)",
      "Child's Pose w/ Shoulder Reach (60 sec)",
      "Box Breathing – 2 minutes (4 counts in, 4 counts hold, 4 counts out, 4 counts hold)"
    ],
    journalPrompt: "Where did I show the most control today? What sensations stood out most clearly?"
  },
  hiddenHint: "One journey begins with a single breath – just like your first push."
};
