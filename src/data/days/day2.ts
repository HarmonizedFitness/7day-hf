
import { WorkoutDay } from '../types';

export const day2: WorkoutDay = {
  id: 2,
  title: "PULL (Back, Biceps, Posterior Chain)",
  subtitle: "Creating Balance",
  message: "Day 2 introduces the natural counterpart to pushing – the pull. Your posterior chain is the foundation of your posture and power. Today we cultivate the strength that pulls us upright against gravity and the forces of life. Notice how these movements create a sense of opening and space in your body.",
  warmup: {
    breathwork: "4-7-8 Breathing (4 cycles) - Inhale for 4, hold for 7, exhale for 8",
    mobilityItems: [
      "Cat-Cow spinal waves (1 min)",
      "Thoracic spine rotations (8/side)",
      "Scapular push-ups (12 reps)",
      "Band pull-aparts (2x12)"
    ],
    intention: "I create space and strength with every pull.",
    somaticCue: "Feel your shoulder blades gliding smoothly across your ribcage."
  },
  circuits: [
    {
      title: "Pull Circuit A",
      exercises: [
        {
          name: "Lat Pulldown or Assisted Pull-Ups – 4x10",
          technicalCue: "Initiate by pulling shoulder blades down and back",
          somaticCue: "Feel the width developing across your upper back",
          videoInfo: {
            title: "How to do Lat Pulldowns (The right way)",
            instructor: "Davis Diley",
            duration: "0:28",
            url: "https://www.youtube.com/watch?v=z-lxcsIN4T4"
          }
        },
        {
          name: "Single-Arm Dumbbell Row – 3x10/side",
          technicalCue: "Keep spine neutral, pull elbow past torso",
          videoInfo: {
            title: "STOP F*cking Up Dumbbell Rows (PROPER FORM!)",
            instructor: "Davis Diley",
            duration: "6:20",
            url: "https://www.youtube.com/watch?v=FWJR5Ve8bnQ"
          }
        },
        {
          name: "Straight-Arm Pulldown – 3x12",
          somaticCue: "Connect with the stretch across your lats at the top",
          videoInfo: {
            title: "How To Do The PERFECT Straight Arm Pulldown",
            instructor: "Jeff Nippard",
            duration: "4:15",
            url: "https://youtube.com/shorts/lnec6DdscJU?si=GjZzA-PGSMUUYuZG"
          }
        }
      ]
    },
    {
      title: "Pull Circuit B",
      exercises: [
        {
          name: "Seated Cable Row – 3x12",
          technicalCue: "Maintain tall posture, pull handles to lower ribcage",
          videoInfo: {
            title: "How to do the SEATED CABLE ROW! | 2 Minute Tutorial",
            instructor: "Max Euceda",
            duration: "2:00",
            url: "https://www.youtube.com/watch?v=UCXxvVItLoM"
          }
        },
        {
          name: "Incline Dumbbell Curl – 3x10",
          somaticCue: "Feel the biceps fully shorten at the top of each curl",
          videoInfo: {
            title: "How to do the INCLINE DUMBBELL CURL! | 2 Minute Tutorial",
            instructor: "Max Euceda",
            duration: "2:00",
            url: "https://youtube.com/shorts/XhIsIcjIbCw?si=aUcxCiU0Rg-k7v1P"
          }
        },
        {
          name: "Face Pulls – 3x15",
          technicalCue: "Pull rope to forehead level, externally rotate at the end",
          videoInfo: {
            title: "STOP F*cking Up Face Pulls (PROPER FORM!)",
            instructor: "Davis Diley",
            duration: "6:18",
            url: "https://www.youtube.com/watch?v=rep-qVOkqgk"
          }
        }
      ]
    },
    {
      title: "Pull Circuit C",
      exercises: [
        {
          name: "Renegade Row – 3x8/side",
          technicalCue: "Maintain a stable hip position, minimize rotation",
          videoInfo: {
            title: "How To Do A Renegade Row",
            instructor: "Calisthenic Movement",
            duration: "2:24",
            url: "https://youtu.be/Q28cLuweLv4?si=wlg04zXKVam_em4r"
          }
        },
        {
          name: "Reverse Grip EZ Bar Curl – 3x12",
          somaticCue: "Notice the different sensation in the biceps with this grip",
          videoInfo: {
            title: "Reverse Curl Exercise Tutorial | Fast Track Forearm Growth",
            instructor: "Buff Dudes Workouts",
            duration: "4:08",
            url: "https://www.youtube.com/watch?v=ypfd1kaI1AU"
          }
        },
        {
          name: "Back Extension – 2x15",
          technicalCue: "Focus on extending from the upper back, not just the lower back",
          videoInfo: {
            title: "STOP Doing Back Extensions Like This!",
            instructor: "Squat University",
            duration: "3:40",
            url: "https://www.youtube.com/watch?v=H8Swl1N-uis"
          }
        }
      ]
    }
  ],
  cooldown: {
    items: [
      "Foam roll: Upper back, lats (1 min each)",
      "Kneeling lat stretch (30 sec/side)",
      "Child's pose with arms extended (45 sec)",
      "Thread the needle stretch (30 sec/side)",
      "Diaphragmatic breathing – 2 minutes"
    ],
    journalPrompt: "How did creating tension in my back muscles feel different from my chest? Where did I feel the most connected to my strength?"
  },
  hiddenHint: "Two sides of strength – push and pull – create balance in the body."
};
