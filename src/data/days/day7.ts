
import { WorkoutDay } from '../types';

export const day7: WorkoutDay = {
  id: 7,
  title: "MIND-BODY RESET",
  subtitle: "Reflection & Integration",
  message: "As we complete our first week together, take time to reflect on what you've learned about your body, your mind, and the connection between them. This practice of reflection is as important as any physical movement – it's how we integrate experience into wisdom. What has your body been telling you this week?",
  warmup: {
    breathwork: "",
    mobilityItems: [],
    intention: "I integrate my experiences into wisdom.",
    somaticCue: "Feel the subtle connections between your physical sensations and your emotions."
  },
  circuits: [
    {
      title: "Breathwork (10 minutes)",
      exercises: [
        {
          name: "2-minute free breathing, simply observing natural breath"
        },
        {
          name: "4-minute 4-7-8 breathing (inhale 4, hold 7, exhale 8)"
        },
        {
          name: "4-minute coherent breathing (equal inhale and exhale, 5-6 seconds each)"
        }
      ]
    },
    {
      title: "Guided Reflection & Journaling (15-20 minutes)",
      exercises: [
        {
          name: "What sensations or feelings stood out most clearly in my body this week?"
        },
        {
          name: "What did I learn about my strength, mobility, or physical capabilities?"
        },
        {
          name: "Where did I notice resistance (physical or mental), and what might it be telling me?"
        },
        {
          name: "What small victory or progress can I celebrate from this first week?"
        },
        {
          name: "What is one area I'd like to bring more awareness to next week?"
        }
      ]
    },
    {
      title: "Closing Integration (5-10 minutes)",
      exercises: [
        {
          name: "Seated meditation, bringing to mind your intention for the coming week"
        },
        {
          name: "Express gratitude for three aspects of your body's performance this week"
        },
        {
          name: "Set one specific intention for Week 2 of your journey"
        }
      ]
    }
  ],
  cooldown: {
    items: [],
    journalPrompt: "Reflecting on the entire week, what have you discovered about the connection between your physical training and mental/emotional state?"
  },
  hiddenHint: "Seven days complete the cycle of a week – a natural rhythm of effort and restoration."
};
