
import { WorkoutProgram } from '../types';

export const bodyweigtProgram: WorkoutProgram = {
  id: 'bodyweight',
  name: 'Bodyweight Training',
  description: 'Master your body weight with fundamental movements that build strength, endurance, and control.',
  theme: {
    primary: '#D35400', // burnt-orange
    secondary: '#2d3033', // charcoal
    accent: '#F39C12', // orange accent
    background: 'from-stone-800 via-stone-700 to-stone-800',
    text: '#F5F5F5'
  },
  price: 0, // Free when selected as first program
  days: [
    {
      id: 1,
      title: "PUSH Foundation",
      subtitle: "Building Upper Body Power",
      message: "Welcome to your bodyweight journey. Today we focus on pushing movements that build chest, shoulders, and triceps strength using only your body weight. Every push-up is a conversation with gravity.",
      warmup: {
        breathwork: "Deep diaphragmatic breathing (5 reps) - Inhale slowly through nose, expand belly fully, exhale slowly through mouth",
        mobilityItems: [
          "Arm circles forward and backward (30 seconds each)",
          "Shoulder rolls (10 reps each direction)",
          "Cat-cow stretches (10 reps)",
          "Incline push-ups against wall (10 reps)"
        ],
        intention: "I push with precision and purpose.",
        somaticCue: "Feel your hands pressing firmly into the ground, creating stability through your entire body."
      },
      circuits: [
        {
          title: "Push Circuit A",
          exercises: [
            {
              name: "Standard Push-Ups – 3x8-12",
              technicalCue: "Keep body in straight line from head to heels, lower chest to ground",
              somaticCue: "Feel the strength building in your chest as you push the earth away"
            },
            {
              name: "Incline Push-Ups – 3x10-15",
              technicalCue: "Use a bench or chair, hands slightly wider than shoulders",
              somaticCue: "Notice how the incline changes the muscle engagement pattern"
            },
            {
              name: "Pike Push-Ups – 3x5-8",
              technicalCue: "Start in downward dog position, lower head toward hands",
              somaticCue: "Feel the shift of power into your shoulders and upper back"
            }
          ]
        },
        {
          title: "Push Circuit B",
          exercises: [
            {
              name: "Diamond Push-Ups – 2x5-8",
              technicalCue: "Form diamond shape with hands, keep elbows close to body",
              somaticCue: "Focus on the triceps engagement and control"
            },
            {
              name: "Push-Up Hold – 3x20-30 seconds",
              technicalCue: "Hold at bottom of push-up position, maintain plank alignment",
              somaticCue: "Breathe steadily while maintaining tension throughout your body"
            },
            {
              name: "Tricep Dips (chair/bench) – 3x8-12",
              technicalCue: "Lower body until elbows reach 90 degrees, press back up",
              somaticCue: "Feel the concentrated work in the back of your arms"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Chest doorway stretch (30 seconds each arm)",
          "Overhead tricep stretch (30 seconds each arm)",
          "Child's pose with side reach (60 seconds)",
          "Deep breathing - 4 counts in, 4 counts hold, 4 counts out (2 minutes)"
        ],
        journalPrompt: "What did I notice about my pushing strength today? Where did I feel most powerful?"
      },
      hiddenHint: "Every push-up is a step toward mastery of your own body."
    },
    {
      id: 2,
      title: "PULL Foundation",
      subtitle: "Developing Back Strength",
      message: "Today we focus on pulling movements to balance yesterday's pushing work. Without equipment, we'll use creative bodyweight pulling exercises.",
      warmup: {
        breathwork: "Box breathing (4-4-4-4 pattern) for 5 cycles",
        mobilityItems: [
          "Arm swings across body (30 seconds)",
          "Reverse arm circles (30 seconds)",
          "Doorway chest stretch (30 seconds each arm)",
          "Prone Y-raises (no weight) - 10 reps"
        ],
        intention: "I pull with control and intention.",
        somaticCue: "Feel your shoulder blades drawing together, creating stability through your back."
      },
      circuits: [
        {
          title: "Pull Circuit A",
          exercises: [
            {
              name: "Reverse Plank – 3x15-30 seconds",
              technicalCue: "Sit with legs extended, hands behind hips, lift body into straight line",
              somaticCue: "Feel the opening across your chest and the work in your posterior chain"
            },
            {
              name: "Superman Holds – 3x10-15",
              technicalCue: "Lie prone, lift chest and legs simultaneously, hold for 2 seconds",
              somaticCue: "Engage your entire back body, from glutes to upper traps"
            },
            {
              name: "Prone Pull-Aparts – 3x15-20",
              technicalCue: "Lie prone, arms extended overhead, pull shoulder blades together",
              somaticCue: "Focus on the squeeze between your shoulder blades"
            }
          ]
        },
        {
          title: "Pull Circuit B",
          exercises: [
            {
              name: "Door Frame Rows – 3x8-12",
              technicalCue: "Stand in doorway, lean back and pull chest to hands",
              somaticCue: "Feel the engagement of your lats and rhomboids"
            },
            {
              name: "Inverted Rows (table) – 3x5-10",
              technicalCue: "Lie under sturdy table, pull chest to edge",
              somaticCue: "Notice how your body moves as one unit"
            },
            {
              name: "Wall Handstand Hold – 3x10-30 seconds",
              technicalCue: "Face away from wall, walk feet up, hold inverted position",
              somaticCue: "Feel the strength required to support your entire body weight"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Doorway chest stretch (45 seconds each arm)",
          "Seated spinal twist (30 seconds each side)",
          "Forward fold with arm sweep (60 seconds)",
          "Mindful breathing - focus on the exhale (3 minutes)"
        ],
        journalPrompt: "How did my back feel during today's pulling movements? What was challenging?"
      },
      hiddenHint: "True strength comes from balance - today you created equilibrium."
    },
    {
      id: 3,
      title: "LEGS Foundation",
      subtitle: "Building Lower Body Power",
      message: "Your legs are your foundation. Today we build strength, stability, and endurance through fundamental bodyweight leg exercises.",
      warmup: {
        breathwork: "Power breathing - short inhales, long exhales (5 cycles)",
        mobilityItems: [
          "Leg swings front to back (10 each leg)",
          "Leg swings side to side (10 each leg)",
          "Hip circles (10 each direction)",
          "Bodyweight squats (15 reps)"
        ],
        intention: "My legs are strong pillars that support my ambitions.",
        somaticCue: "Feel your connection to the earth through your feet, drawing power from the ground up."
      },
      circuits: [
        {
          title: "Legs Circuit A",
          exercises: [
            {
              name: "Bodyweight Squats – 4x15-20",
              technicalCue: "Feet shoulder-width apart, lower until thighs parallel to ground",
              somaticCue: "Feel the power generating from your glutes and quads"
            },
            {
              name: "Reverse Lunges – 3x10 each leg",
              technicalCue: "Step back into lunge, lower back knee toward ground",
              somaticCue: "Notice the stability challenge and how each leg works independently"
            },
            {
              name: "Single-Leg Glute Bridges – 3x8 each leg",
              technicalCue: "Lie on back, one foot planted, lift hips with single leg",
              somaticCue: "Focus on the glute activation and hip stability"
            }
          ]
        },
        {
          title: "Legs Circuit B",
          exercises: [
            {
              name: "Jump Squats – 3x8-12",
              technicalCue: "Explosive jump from squat position, land softly",
              somaticCue: "Feel the power transfer from the ground through your entire body"
            },
            {
              name: "Wall Sit – 3x30-60 seconds",
              technicalCue: "Back against wall, slide down until thighs parallel to ground",
              somaticCue: "Breathe steadily while your quads work isometrically"
            },
            {
              name: "Calf Raises – 3x15-20",
              technicalCue: "Rise up on toes, squeeze calves at top, lower slowly",
              somaticCue: "Feel the spring-like quality of your calf muscles"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Standing quad stretch (30 seconds each leg)",
          "Standing calf stretch (30 seconds each leg)",
          "Figure-4 stretch (45 seconds each leg)",
          "Deep breathing with leg elevation (3 minutes)"
        ],
        journalPrompt: "What did I discover about my leg strength today? How did my balance feel?"
      },
      hiddenHint: "Your foundation is only as strong as your commitment to building it daily."
    },
    {
      id: 4,
      title: "CORE Integration",
      subtitle: "Building Your Center of Power",
      message: "Your core is more than your abs - it's your center of power, stability, and control. Today we integrate core strength with movement.",
      warmup: {
        breathwork: "Belly breathing with core awareness (5 minutes)",
        mobilityItems: [
          "Cat-cow stretches (15 reps)",
          "Standing side bends (10 each side)",
          "Torso twists (10 each direction)",
          "Dead bug prep (10 each side)"
        ],
        intention: "My core is my center of strength and stability.",
        somaticCue: "Feel your core as a cylinder of strength, supporting every movement."
      },
      circuits: [
        {
          title: "Core Circuit A",
          exercises: [
            {
              name: "Plank Hold – 3x30-60 seconds",
              technicalCue: "Maintain straight line from head to heels, breathe normally",
              somaticCue: "Feel your entire core working as a unit of stability"
            },
            {
              name: "Dead Bug – 3x8 each side",
              technicalCue: "Lie on back, extend opposite arm and leg while maintaining back contact",
              somaticCue: "Focus on the coordination between your core and limbs"
            },
            {
              name: "Bird Dog – 3x8 each side",
              technicalCue: "From hands and knees, extend opposite arm and leg",
              somaticCue: "Notice how your core stabilizes your spine during movement"
            }
          ]
        },
        {
          title: "Core Circuit B",
          exercises: [
            {
              name: "Mountain Climbers – 3x20 total",
              technicalCue: "Plank position, alternate bringing knees to chest",
              somaticCue: "Maintain plank alignment while legs move dynamically"
            },
            {
              name: "Russian Twists – 3x15 each side",
              technicalCue: "Seated, lean back slightly, rotate torso side to side",
              somaticCue: "Feel the rotational power of your obliques"
            },
            {
              name: "Hollow Body Hold – 3x15-30 seconds",
              technicalCue: "Lie on back, press lower back into ground, lift shoulders and legs",
              somaticCue: "Create a 'hollow' shape with your body, feeling deep core engagement"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Knee rocks (gentle spinal mobility) - 60 seconds",
          "Supine spinal twist (45 seconds each side)",
          "Child's pose (90 seconds)",
          "Meditation - focus on your center (5 minutes)"
        ],
        journalPrompt: "How did my core feel as the center of my movement today? What connections did I notice?"
      },
      hiddenHint: "When your core is strong, every other movement becomes possible."
    },
    {
      id: 5,
      title: "FLOW Integration",
      subtitle: "Movement as Medicine",
      message: "Today we flow between movements, creating sequences that challenge strength, mobility, and coordination. Movement becomes meditation.",
      warmup: {
        breathwork: "Flow breathing - match breath to movement (5 minutes)",
        mobilityItems: [
          "Sun salutation variation (3 rounds)",
          "Dynamic warrior sequence (5 each side)",
          "Flow between push-up and downward dog (10 reps)",
          "Gentle movement exploration (freestyle for 2 minutes)"
        ],
        intention: "I move with grace, strength, and awareness.",
        somaticCue: "Feel the poetry of movement as your body flows from one position to another."
      },
      circuits: [
        {
          title: "Flow Circuit A",
          exercises: [
            {
              name: "Burpee Flow – 3x5-8",
              technicalCue: "Squat, jump back to plank, push-up, jump forward, jump up",
              somaticCue: "Find rhythm in the sequence, breathing with each transition"
            },
            {
              name: "Flow Sequence: Squat-Lunge-Warrior – 3x5 each side",
              technicalCue: "Transition smoothly between squat, reverse lunge, and warrior III",
              somaticCue: "Notice how balance and strength integrate in flowing movement"
            },
            {
              name: "Push-Up to T-Rotation – 3x8-10",
              technicalCue: "Push-up, then rotate into side plank, alternate sides",
              somaticCue: "Feel the spiral of energy through your core during rotation"
            }
          ]
        },
        {
          title: "Flow Circuit B",
          exercises: [
            {
              name: "Bear Crawl Flow – 3x20 steps forward/back",
              technicalCue: "Hands and feet only, knees hovering, crawl in all directions",
              somaticCue: "Feel like a powerful animal, moving with primal strength"
            },
            {
              name: "Turkish Get-Up (bodyweight) – 2x3 each side",
              technicalCue: "From lying to standing using only one arm for support",
              somaticCue: "Experience the full-body integration required for this ancient movement"
            },
            {
              name: "Flow Hold Sequence – 2x30 seconds each position",
              technicalCue: "Hold warrior III, side plank, single-leg squat, repeat",
              somaticCue: "Find stillness within the challenge, breathing into each hold"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Gentle movement flow (self-directed) - 3 minutes",
          "Seated forward fold progression (2 minutes)",
          "Restorative child's pose (3 minutes)",
          "Meditation on movement and stillness (5 minutes)"
        ],
        journalPrompt: "How did it feel to flow between movements today? What did I discover about my body's natural rhythm?"
      },
      hiddenHint: "In the flow, you find the perfect balance between effort and ease."
    },
    {
      id: 6,
      title: "POWER & Explosiveness",
      subtitle: "Unleashing Your Athletic Potential",
      message: "Today we tap into your explosive power through plyometric and dynamic bodyweight exercises. Feel the athlete within you awaken.",
      warmup: {
        breathwork: "Power breath - 3 sharp inhales, 1 explosive exhale (10 cycles)",
        mobilityItems: [
          "Dynamic leg swings (15 each direction)",
          "Arm swings and circles (30 seconds)",
          "Light jumping in place (1 minute)",
          "Gentle plyometric prep - small hops (30 seconds)"
        ],
        intention: "I unleash my power with control and precision.",
        somaticCue: "Feel the spring-loaded energy in your muscles, ready to explode into movement."
      },
      circuits: [
        {
          title: "Power Circuit A",
          exercises: [
            {
              name: "Jump Squats – 4x6-10",
              technicalCue: "Explosive jump from deep squat, land softly with control",
              somaticCue: "Feel the power transfer from the ground through your entire kinetic chain"
            },
            {
              name: "Explosive Push-Ups – 3x5-8",
              technicalCue: "Push up with enough force to lift hands off ground",
              somaticCue: "Channel your upper body power into explosive movement"
            },
            {
              name: "Broad Jumps – 3x5-8",
              technicalCue: "Jump forward as far as possible, land in squat position",
              somaticCue: "Feel like a powerful cat, gathering and releasing energy"
            }
          ]
        },
        {
          title: "Power Circuit B",
          exercises: [
            {
              name: "Star Jumps – 3x10-15",
              technicalCue: "Jump spreading arms and legs wide, land in squat",
              somaticCue: "Express joy and power through explosive full-body movement"
            },
            {
              name: "Single-Leg Hops – 3x8 each leg",
              technicalCue: "Hop forward on one leg, focus on soft landing",
              somaticCue: "Feel the unilateral power and balance integration"
            },
            {
              name: "Plyo Push-Up to Downward Dog – 3x6-8",
              technicalCue: "Explosive push-up, immediately flow to downward dog",
              somaticCue: "Combine explosive power with flowing transition"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Gentle walking or marching (3 minutes)",
          "Dynamic stretching - leg swings and arm circles (2 minutes)",
          "Progressive muscle relaxation (5 minutes)",
          "Power meditation - visualizing your strength (3 minutes)"
        ],
        journalPrompt: "What did I discover about my explosive power today? How did it feel to move with such intensity?"
      },
      hiddenHint: "True power comes not from force, but from the perfect timing of effort and release."
    },
    {
      id: 7,
      title: "MASTERY Integration",
      subtitle: "Bringing It All Together",
      message: "Today we integrate everything you've learned this week. This is your graduation ceremony - a celebration of your bodyweight mastery journey.",
      warmup: {
        breathwork: "Mastery breathing - deep, conscious, powerful (10 minutes)",
        mobilityItems: [
          "Full body flow sequence (5 minutes)",
          "Joint mobility sequence (ankles to neck) - 3 minutes",
          "Movement preparation combining all week's patterns (5 minutes)",
          "Intention setting and body scan (2 minutes)"
        ],
        intention: "I am the master of my body, movement, and strength.",
        somaticCue: "Feel the integration of all your training - strength, power, flow, and control united."
      },
      circuits: [
        {
          title: "Mastery Circuit A",
          exercises: [
            {
              name: "Perfect Push-Up Complex – 3x5-8",
              technicalCue: "Standard, diamond, and pike push-ups in sequence",
              somaticCue: "Feel the mastery you've developed in pushing movements"
            },
            {
              name: "Squat to Jump Complex – 3x8-12",
              technicalCue: "Slow controlled squat, pause, then explosive jump squat",
              somaticCue: "Experience the full spectrum from control to power"
            },
            {
              name: "Flow Integration – 3x5 complete flows",
              technicalCue: "Burpee to warrior III to single-leg squat sequence",
              somaticCue: "Let your body move with the confidence of mastery"
            }
          ]
        },
        {
          title: "Mastery Circuit B",
          exercises: [
            {
              name: "Ultimate Core Challenge – 3x45 seconds",
              technicalCue: "Plank to side plank to hollow hold sequence",
              somaticCue: "Feel your core as the integrated center of all movement"
            },
            {
              name: "Power Flow Finale – 3x8-10",
              technicalCue: "Explosive push-up to jump squat to mountain climber flow",
              somaticCue: "Express all your power, control, and coordination"
            },
            {
              name: "Mastery Hold Meditation – 1x2 minutes",
              technicalCue: "Choose your strongest hold position and maintain with breath",
              somaticCue: "Celebrate your strength through mindful stillness"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Celebration flow - freestyle movement expression (5 minutes)",
          "Deep stretching sequence for entire body (10 minutes)",
          "Gratitude meditation for your body (5 minutes)",
          "Integration breathing - honoring your journey (5 minutes)"
        ],
        journalPrompt: "Reflecting on this week's journey, what have I learned about my body, my strength, and my potential? What will I carry forward?"
      },
      hiddenHint: "Mastery is not a destination, but a way of approaching every movement with presence and intention."
    }
  ]
};
