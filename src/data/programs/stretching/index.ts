
import { WorkoutProgram } from '../types';

export const stretchingProgram: WorkoutProgram = {
  id: 'stretching',
  name: 'Foundational Stretching',
  description: 'Comprehensive flexibility and mobility program for better movement and recovery.',
  theme: {
    primary: '#27AE60', // green theme
    secondary: '#2C3E50',
    accent: '#58D68D',
    background: 'from-green-900 via-green-800 to-green-900',
    text: '#F5F5F5'
  },
  price: 1999, // $19.99 in cents
  days: [
    {
      id: 1,
      title: "Spinal Mobility Foundation",
      subtitle: "Awakening Your Spine",
      message: "Your spine is the central highway of your nervous system. Today we create space, mobility, and awareness through the entire spinal column.",
      warmup: {
        breathwork: "Spinal wave breathing - imagine breath moving up and down your spine (5 minutes)",
        mobilityItems: [
          "Gentle neck rolls (5 each direction)",
          "Shoulder blade squeezes (10 reps)",
          "Cat-cow stretches (15 slow reps)",
          "Seated spinal twists (10 each direction)"
        ],
        intention: "My spine is flexible, strong, and aligned.",
        somaticCue: "Feel each vertebra as a unique joint, capable of individual movement."
      },
      circuits: [
        {
          title: "Spinal Flow Circuit",
          exercises: [
            {
              name: "Extended Cat-Cow Sequence – 3x10 slow reps",
              technicalCue: "Move slowly, articulating each vertebra",
              somaticCue: "Feel the wave-like motion traveling through your entire spine"
            },
            {
              name: "Thoracic Extension Series – 3x8",
              technicalCue: "Focus on opening the upper back, hands behind head",
              somaticCue: "Notice the expansion across your chest and between shoulder blades"
            },
            {
              name: "Spinal Twist Progression – 2x5 each side",
              technicalCue: "Seated or supine, rotate from deep core muscles",
              somaticCue: "Feel the spiral of movement through your entire torso"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Child's pose with side reaches (2 minutes each side)",
          "Gentle neck stretches (30 seconds each direction)",
          "Spinal meditation - awareness of each vertebra (5 minutes)",
          "Deep relaxation with spinal focus (10 minutes)"
        ],
        journalPrompt: "How did my spine feel before and after today's practice? What areas felt tight or restricted?"
      },
      hiddenHint: "A flexible spine is the foundation of a flexible life."
    },
    // Placeholder days for stretching program
    {
      id: 2,
      title: "Hip Opening Foundation",
      subtitle: "Day 2 Placeholder",
      message: "Hip mobility and flexibility focus...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Hip Stretch Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 3,
      title: "Shoulder & Neck Release",
      subtitle: "Day 3 Placeholder",
      message: "Upper body tension release...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Shoulder Stretch Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 4,
      title: "Lower Body Integration",
      subtitle: "Day 4 Placeholder",
      message: "Legs and lower body flexibility...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Leg Stretch Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 5,
      title: "Full Body Flow",
      subtitle: "Day 5 Placeholder",
      message: "Connecting all body segments...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Flow Stretch Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 6,
      title: "Deep Tissue Release",
      subtitle: "Day 6 Placeholder",
      message: "Intensive flexibility work...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Deep Stretch Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 7,
      title: "Restorative Integration",
      subtitle: "Day 7 Placeholder",
      message: "Gentle restoration and integration...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "Restorative Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    }
  ]
};
