
import { WorkoutProgram } from '../types';

export const trxProgram: WorkoutProgram = {
  id: 'trx',
  name: 'TRX Suspension Training',
  description: 'Leverage gravity and your body weight with TRX suspension training for functional strength.',
  theme: {
    primary: '#E74C3C', // red theme
    secondary: '#2C3E50',
    accent: '#FF6B6B',
    background: 'from-red-900 via-red-800 to-red-900',
    text: '#F5F5F5'
  },
  price: 1999, // $19.99 in cents
  days: [
    {
      id: 1,
      title: "TRX Foundation",
      subtitle: "Mastering the Straps",
      message: "Welcome to TRX training. Today we establish proper form and body positioning with the suspension trainer.",
      warmup: {
        breathwork: "Suspension breathing - 3 deep breaths in each TRX position",
        mobilityItems: [
          "TRX assisted squats (10 reps)",
          "TRX chest stretch (30 seconds)",
          "TRX Y-pulls (10 reps)",
          "Balance challenges with straps (1 minute)"
        ],
        intention: "I trust the straps and my body working together.",
        somaticCue: "Feel the suspension creating instability that awakens your stabilizing muscles."
      },
      circuits: [
        {
          title: "TRX Basics Circuit",
          exercises: [
            {
              name: "TRX Chest Press – 3x8-12",
              technicalCue: "Lean forward, press body away from anchor point",
              somaticCue: "Feel the instability challenging your entire core"
            },
            {
              name: "TRX Row – 3x8-12",
              technicalCue: "Lean back, pull chest to handles, squeeze shoulder blades",
              somaticCue: "Notice how the straps engage your stabilizing muscles"
            },
            {
              name: "TRX Squat – 3x10-15",
              technicalCue: "Hold handles, squat down while leaning back slightly",
              somaticCue: "Feel the assistance allowing deeper range of motion"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "TRX assisted hip flexor stretch (45 seconds each)",
          "TRX chest stretch (60 seconds)",
          "TRX spinal rotation (30 seconds each side)",
          "Mindful breathing with strap awareness (3 minutes)"
        ],
        journalPrompt: "How did the instability of the TRX change my movement awareness?"
      },
      hiddenHint: "Instability creates opportunity for deeper strength."
    },
    // Placeholder days for TRX program
    {
      id: 2,
      title: "TRX Upper Body Power",
      subtitle: "Day 2 Placeholder",
      message: "TRX upper body focus...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "TRX Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 3,
      title: "TRX Lower Body Strength",
      subtitle: "Day 3 Placeholder",
      message: "TRX lower body focus...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "TRX Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 4,
      title: "TRX Core Integration",
      subtitle: "Day 4 Placeholder",
      message: "TRX core focus...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "TRX Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 5,
      title: "TRX Functional Movement",
      subtitle: "Day 5 Placeholder",
      message: "TRX functional patterns...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "TRX Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 6,
      title: "TRX Power & Plyometrics",
      subtitle: "Day 6 Placeholder",
      message: "TRX explosive movements...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "TRX Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    },
    {
      id: 7,
      title: "TRX Flow Mastery",
      subtitle: "Day 7 Placeholder",
      message: "TRX flow sequences...",
      warmup: { breathwork: "", mobilityItems: [], intention: "", somaticCue: "" },
      circuits: [{ title: "Placeholder", exercises: [{ name: "TRX Placeholder" }] }],
      cooldown: { items: [], journalPrompt: "" },
      hiddenHint: ""
    }
  ]
};
