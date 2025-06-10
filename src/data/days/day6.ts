
import { WorkoutDay } from '../types';

export const day6: WorkoutDay = {
  id: 6,
  title: "OPTIONAL RECOVERY",
  subtitle: "Honoring Rest",
  message: "Rest is not the absence of training – it is training itself. Today we practice the skill of active recovery, giving your body the space to integrate, repair, and strengthen. Remember that growth happens during recovery, not during exertion. Honor this vital part of your journey.",
  warmup: {
    breathwork: "",
    mobilityItems: [],
    intention: "I honor my body's need for rest and recovery.",
    somaticCue: "Notice areas of tension melting away as you consciously relax."
  },
  circuits: [
    {
      title: "Option A: Gentle Movement",
      exercises: [
        {
          name: "Walking meditation (20 minutes)"
        },
        {
          name: "Tai Chi-inspired flowing movements (10 minutes)"
        },
        {
          name: "Gentle joint mobility sequence (10 minutes)"
        }
      ]
    },
    {
      title: "Option B: Restorative Practice",
      exercises: [
        {
          name: "Legs-up-the-wall pose (5 minutes)",
          videoInfo: {
            title: "Legs Up The Wall Pose",
            instructor: "Yoga with Adriene",
            duration: "8:30",
            url: "https://www.youtube.com/watch?v=legs-wall-demo"
          }
        },
        {
          name: "Supported child's pose (5 minutes)",
          videoInfo: {
            title: "Child's Pose Variations",
            instructor: "DoYogaWithMe",
            duration: "5:20",
            url: "https://www.youtube.com/watch?v=childs-pose-demo"
          }
        },
        {
          name: "Reclined bound angle pose (5 minutes)",
          videoInfo: {
            title: "Reclined Bound Angle Pose",
            instructor: "Yoga with Kassandra",
            duration: "6:15",
            url: "https://www.youtube.com/watch?v=bound-angle-demo"
          }
        },
        {
          name: "Supported bridge pose (5 minutes)",
          videoInfo: {
            title: "Supported Bridge Pose",
            instructor: "Yoga with Adriene",
            duration: "4:45",
            url: "https://www.youtube.com/watch?v=bridge-support-demo"
          }
        },
        {
          name: "Savasana (10 minutes)"
        }
      ]
    },
    {
      title: "Option C: Self-Myofascial Release",
      exercises: [
        {
          name: "Comprehensive foam rolling sequence (20 minutes)"
        },
        {
          name: "Tennis/lacrosse ball trigger point work (10 minutes)"
        },
        {
          name: "Gentle stretching (10 minutes)"
        }
      ]
    },
    {
      title: "Option D: Breathwork & Meditation",
      exercises: [
        {
          name: "Diaphragmatic breathing practice (10 minutes)"
        },
        {
          name: "Body scan meditation (15 minutes)"
        },
        {
          name: "Loving-kindness meditation (10 minutes)"
        }
      ]
    }
  ],
  cooldown: {
    items: [],
    journalPrompt: "How does intentional rest feel different from passive rest? What areas of my body seemed to need the most care today?"
  },
  hiddenHint: "Six aspects of recovery: sleep, nutrition, hydration, stress management, tissue work, and gentle movement."
};
