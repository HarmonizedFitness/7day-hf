import { WorkoutProgram } from '../types';

export const gymProgram: WorkoutProgram = {
  id: 'gym',
  name: 'In The Gym',
  description: 'Complete gym workouts utilizing all equipment for maximum strength and muscle development.',
  theme: {
    primary: '#3498DB', // blue theme
    secondary: '#2C3E50',
    accent: '#5DADE2',
    background: 'from-blue-900 via-blue-800 to-blue-900',
    text: '#F5F5F5'
  },
  price: 1999, // $19.99 in cents
  days: [
    {
      id: 1,
      title: "PUSH (Chest, Shoulders, Triceps)",
      subtitle: "Beginning the Journey",
      message: "Welcome to Day 1 of your gym journey. PUSH day trains the muscles that initiate action: chest, shoulders, and triceps—the physical manifestation of your drive and power.",
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
              somaticCue: "Feel the connection between your upper back and the bench"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Foam roll: Chest, Shoulders, Triceps (1 min each)",
          "Doorway Chest Stretch (30 sec/side)",
          "Child's Pose w/ Shoulder Reach (60 sec)",
          "Box Breathing – 2 minutes"
        ],
        journalPrompt: "Where did I show the most control today? What sensations stood out most clearly?"
      },
      hiddenHint: "One journey begins with a single breath – just like your first push."
    },
    {
      id: 2,
      title: "PULL (Back, Biceps)",
      subtitle: "Day 2 Placeholder",
      message: "Gym pull day content here...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Placeholder exercise" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 3,
      title: "LEGS (Quads, Glutes, Hamstrings)",
      subtitle: "Day 3 Placeholder",
      message: "Gym legs day content here...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Placeholder exercise" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 4,
      title: "PUSH (Volume Focus)",
      subtitle: "Day 4 Placeholder",
      message: "Gym push volume day content here...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Placeholder exercise" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 5,
      title: "PULL (Volume Focus)",
      subtitle: "Day 5 Placeholder",
      message: "Gym pull volume day content here...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Placeholder exercise" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 6,
      title: "LEGS (Power Focus)",
      subtitle: "Day 6 Placeholder",
      message: "Gym legs power day content here...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Placeholder exercise" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 7,
      title: "FULL BODY Integration",
      subtitle: "Day 7 Placeholder",
      message: "Gym full body integration day content here...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Placeholder exercise" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    }
  ]
};
