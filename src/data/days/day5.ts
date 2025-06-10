
import { WorkoutDay } from '../types';

export const day5: WorkoutDay = {
  id: 5,
  title: "FULL-BODY INTEGRATION",
  subtitle: "Connecting the Systems",
  message: "Today we bring together all the elements we've been cultivating this week. Full-body integration is about connecting the dots – helping your body recognize itself as one cohesive system rather than isolated parts. As you move, feel the kinetic chains activating from your feet through your core to your hands.",
  warmup: {
    breathwork: "Sama Vritti (Equal Breathing) - 5 cycles, equal counts for inhale and exhale",
    mobilityItems: [
      "Sun salutation flow (3 rounds)",
      "Side bend reaches (8/side)",
      "Spinal rotations (8/side)",
      "Dynamic hip openers (8/side)"
    ],
    intention: "I move as one integrated system.",
    somaticCue: "Feel how movement initiates in your core and radiates outward."
  },
  circuits: [
    {
      title: "Integration Circuit A",
      exercises: [
        {
          name: "Dumbbell Squat to Press – 4x10",
          technicalCue: "Drive through heels, press weights directly overhead",
          somaticCue: "Feel the transfer of energy from lower to upper body",
          videoInfo: {
            title: "How To Do Dumbbell Squat to Press",
            instructor: "FitnessBlender",
            duration: "2:45",
            url: "https://www.youtube.com/watch?v=squat-press-demo"
          }
        },
        {
          name: "Renegade Row to Push-Up – 3x8",
          technicalCue: "Maintain a stable plank position throughout",
          videoInfo: {
            title: "Renegade Row Push Up Combo",
            instructor: "Calisthenic Movement",
            duration: "3:20",
            url: "https://www.youtube.com/watch?v=renegade-pushup-demo"
          }
        },
        {
          name: "Medicine Ball Slam – 3x10",
          somaticCue: "Connect with the explosive power generated from your hips",
          videoInfo: {
            title: "How To Do Medicine Ball Slams",
            instructor: "Athlean-X",
            duration: "4:30",
            url: "https://www.youtube.com/watch?v=med-ball-slam-demo"
          }
        }
      ]
    },
    {
      title: "Integration Circuit B",
      exercises: [
        {
          name: "Dumbbell Lunge with Bicep Curl – 3x10/side",
          technicalCue: "Step forward into lunge, curl at the bottom position",
          videoInfo: {
            title: "Lunge with Bicep Curl",
            instructor: "FitnessBlender",
            duration: "2:20",
            url: "https://www.youtube.com/watch?v=lunge-curl-demo"
          }
        },
        {
          name: "Pull-Up Bar Hanging Knee Raises – 3x12",
          somaticCue: "Feel your core initiating the movement, not momentum",
          videoInfo: {
            title: "How To Do Hanging Knee Raises",
            instructor: "Calisthenic Movement",
            duration: "3:45",
            url: "https://www.youtube.com/watch?v=knee-raise-demo"
          }
        },
        {
          name: "Battle Rope Waves – 3x30 seconds",
          technicalCue: "Generate movement from shoulders while maintaining stable base",
          videoInfo: {
            title: "Battle Rope Training",
            instructor: "Onnit Academy",
            duration: "5:15",
            url: "https://www.youtube.com/watch?v=battle-rope-demo"
          }
        }
      ]
    },
    {
      title: "Integration Circuit C",
      exercises: [
        {
          name: "Burpee – 3x8",
          technicalCue: "Focus on control rather than speed",
          videoInfo: {
            title: "How To Do A Burpee (Perfect Form)",
            instructor: "Calisthenic Movement",
            duration: "3:45",
            url: "https://www.youtube.com/watch?v=burpee-demo"
          }
        },
        {
          name: "Bear Crawl – 3x30 seconds",
          somaticCue: "Feel the contralateral (opposite arm/leg) connection",
          videoInfo: {
            title: "Bear Crawl Exercise",
            instructor: "FunctionalMovement",
            duration: "2:30",
            url: "https://www.youtube.com/watch?v=bear-crawl-demo"
          }
        },
        {
          name: "Turkish Get-Up (no weight or light weight) – 2x3/side",
          technicalCue: "Move segment by segment, maintaining eye contact with hand",
          videoInfo: {
            title: "Master the Turkish Get-Up (Avoid These 3 Mistakes!)",
            instructor: "Squat University",
            duration: "5:47",
            url: "https://www.youtube.com/watch?v=jFK8FOiLa_M"
          }
        }
      ]
    }
  ],
  cooldown: {
    items: [
      "Full-body stretching sequence (30 sec each position)",
      "Reclined spinal twist (45 sec/side)",
      "Happy baby pose (60 sec)",
      "Savasana with body scan (2 min)"
    ],
    journalPrompt: "How did my body feel as an integrated whole today? Where did I notice connections between different body parts?"
  },
  hiddenHint: "Five fingers connect to form a powerful, unified hand."
};
