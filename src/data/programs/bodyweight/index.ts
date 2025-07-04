
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
      title: "CORE FOUNDATION & STABILITY",
      subtitle: "Building Your Center of Power",
      message: "Welcome to Day 1 of your Body Weight journey! Today marks the beginning of your transformation into a master of movement, where we establish the fundamental pillar of all human performance - your core. The foundation of a purposeful and passionate life, marked by healing and progression, is the mastery of its smallest, intentional actions. Your core is not merely muscles; it is the center of your power, the source of your stability, and the bridge between your upper and lower body.",
      warmup: {
        breathwork: "Spinal wave breathing - imagine breath moving up and down your spine (5 minutes)",
        mobilityItems: [
          "Cat-Cow spinal waves (2 minutes) - 10-12 slow repetitions",
          "Hip circles in tabletop (2 minutes) - 8 each direction",
          "Arm circles and shoulder rolls (2 minutes)",
          "Torso twists standing (2 minutes) - 10 each direction",
          "Knee-to-chest marches (2 minutes) - 20 total",
          "Deep breathing with core engagement (2 minutes)"
        ],
        intention: "I am grounded in my power. My foundation is strong, and from this center, I create positive change in my life.",
        somaticCue: "Feel each vertebra as a unique joint, capable of individual movement. Feel your core as a brilliant light at your center, radiating strength and stability throughout your entire body."
      },
      circuits: [
        {
          title: "Core Foundation Circuit A",
          exercises: [
            {
              name: "Dead Bug Foundation – 3x8 each side",
              technicalCue: "Lie on back, knees bent at 90 degrees above hips. Press lower back into floor throughout",
              somaticCue: "Feel your core as a stable anchor while limbs move",
              videoInfo: {
                title: "Dead Bug Exercise | Core Stability Foundation",
                instructor: "Men's Health",
                duration: "3:45",
                url: "https://www.menshealth.com/uk/how-tos/a61885316/dead-bug-exercise/"
              }
            },
            {
              name: "Modified Plank Hold – 3x30-45 seconds",
              technicalCue: "Forearm plank, elbows directly under shoulders, straight line from head to heels",
              somaticCue: "Imagine your body as one solid piece, breathe steadily throughout",
              videoInfo: {
                title: "Plank Tutorial | Perfect Form Guide",
                instructor: "Fitness Blender",
                duration: "4:20",
                url: "https://www.youtube.com/watch?v=BQu26ABuVS0"
              }
            },
            {
              name: "Hollow Body Hold – 3x20-30 seconds",
              technicalCue: "Press lower back to floor, lift shoulders and legs, create banana shape",
              somaticCue: "Feel your core wrapping around your spine like armor"
            }
          ]
        },
        {
          title: "Core Foundation Circuit B",
          exercises: [
            {
              name: "Glute Bridge – 3x12-15",
              technicalCue: "Lie on back, knees bent, lift hips by squeezing glutes. Drive through heels",
              somaticCue: "Feel power radiating from your glutes, creating straight line from knees to shoulders",
              videoInfo: {
                title: "Glute Bridge Exercise | Proper Form & Technique",
                instructor: "Athlean-X",
                duration: "6:15",
                url: "https://www.youtube.com/watch?v=lrXvag3PLs0"
              }
            },
            {
              name: "Modified Push-Up – 3x8-12",
              technicalCue: "Start in plank (knees or toes), lower chest toward ground, elbows at 45 degrees",
              somaticCue: "Feel strength flowing from your core through your arms",
              videoInfo: {
                title: "Push-Up Tutorial | Complete Form Guide",
                instructor: "Calisthenic Movement",
                duration: "5:30",
                url: "https://www.youtube.com/watch?v=es_Tz8Si75o"
              }
            },
            {
              name: "Bear Crawl Hold – 3x20-30 seconds",
              technicalCue: "Tabletop position, lift knees 2 inches off ground, keep hips level",
              somaticCue: "Feel like a powerful, stable animal, breathe steadily",
              videoInfo: {
                title: "Bear Crawl Exercise | Strength & Stability",
                instructor: "FunctionalMovement",
                duration: "3:15",
                url: "https://www.youtube.com/watch?v=Wgt1vdZ_YYk"
              }
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Child's pose (45 seconds) - rest forehead on ground, breathe into back",
          "Supine spinal twist (45 seconds each side) - keep shoulders grounded",
          "Cat-cow stretch (45 seconds) - gentle spinal mobility",
          "Hip flexor stretch in low lunge (45 seconds each side)",
          "4-7-8 breathing (3 minutes) - inhale 4, hold 7, exhale 8"
        ],
        journalPrompt: "How did my core feel before and after today's practice? What areas felt tight or restricted? Where did I feel most powerful and stable?"
      },
      hiddenHint: "Every great structure begins with a solid foundation. Today, you planted the seeds of your transformation."
    },
    {
      id: 2,
      title: "LOWER BODY STRENGTH & POWER",
      subtitle: "Building Your Foundation",
      message: "Welcome to Day 2 of your Body Weight journey! Today we shift our focus to the powerhouse of human movement - your lower body. Your legs are not just limbs; they are the pillars that support your dreams, the springs that propel you forward, and the foundation from which all athletic power originates. Building upon yesterday's core foundation, we now learn to generate and transfer power from the ground up.",
      warmup: {
        breathwork: "Power breathing - short inhales, long exhales (5 cycles)",
        mobilityItems: [
          "Ankle circles and calf raises (2 minutes) - 8 circles each direction, 15 calf raises",
          "Leg swings front to back (2 minutes) - 10 each leg",
          "Leg swings side to side (2 minutes) - 10 each leg", 
          "Deep bodyweight squats (2 minutes) - 8-10 slow reps with 3-second holds",
          "Walking knee hugs (2 minutes) - 10 steps total",
          "Glute activation marches (2 minutes) - 20 total marches"
        ],
        intention: "My legs are strong pillars that support my ambitions. I am rooted in strength.",
        somaticCue: "Feel your connection to the earth through your feet, drawing power from the ground up. Feel your legs as powerful springs coiled with potential energy."
      },
      circuits: [
        {
          title: "Lower Body Power Circuit A",
          exercises: [
            {
              name: "Bodyweight Squats – 4x15-20",
              technicalCue: "Feet shoulder-width apart, lower until thighs parallel to ground, drive through heels",
              somaticCue: "Feel the power generating from your glutes and quads, like powerful springs",
              videoInfo: {
                title: "Bodyweight Squat Form | Perfect Technique",
                instructor: "Athlean-X",
                duration: "8:45",
                url: "https://www.youtube.com/watch?v=JT5RWNX5Ego"
              }
            },
            {
              name: "Reverse Lunges – 3x10 each leg",
              technicalCue: "Step back into lunge, lower back knee toward ground, 90-degree angles at both knees",
              somaticCue: "Notice the stability challenge and how each leg works independently",
              videoInfo: {
                title: "Lunge Exercise Form | Step-by-Step Guide",
                instructor: "Calisthenic Movement",
                duration: "4:30",
                url: "https://www.youtube.com/watch?v=4jyFgN_hefg"
              }
            },
            {
              name: "Single-Leg Glute Bridges – 3x8 each leg",
              technicalCue: "Lie on back, one foot planted, lift hips with single leg, drive through heel",
              somaticCue: "Focus on the glute activation and hip stability, feel strength radiating from glutes"
            }
          ]
        },
        {
          title: "Lower Body Power Circuit B",
          exercises: [
            {
              name: "Jump Squats – 3x8-12",
              technicalCue: "Explosive jump from squat position, land softly with control",
              somaticCue: "Feel the power transfer from the ground through your entire body"
            },
            {
              name: "Wall Sit – 3x30-60 seconds",
              technicalCue: "Back against wall, slide down until thighs parallel to ground, knees at 90 degrees",
              somaticCue: "Breathe steadily while your quads work isometrically, feel your legs as pillars of strength"
            },
            {
              name: "Calf Raises – 3x15-20",
              technicalCue: "Rise up on toes, squeeze calves at top, lower slowly with control",
              somaticCue: "Feel the spring-like quality of your calf muscles"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Standing quad stretch (30 seconds each leg) - use wall for balance",
          "Standing calf stretch (30 seconds each leg) - step back, press heel down",
          "Figure-4 stretch (45 seconds each leg) - ankle on opposite knee, sit back",
          "Standing forward fold (45 seconds) - hinge at hips, gentle sway",
          "Box breathing (3 minutes) - 4 counts each: inhale, hold, exhale, hold"
        ],
        journalPrompt: "What did I discover about my leg strength today? How did my balance feel? Where did I feel most stable and powerful?"
      },
      hiddenHint: "Your foundation is only as strong as your commitment to building it daily. From the ground up, you build your strength."
    },
    {
      id: 3,
      title: "UPPER BODY PUSH & PULL",
      subtitle: "Developing Balanced Strength",
      message: "Today we ascend to explore the magnificent machinery of your upper body - your arms, shoulders, chest, and back working in perfect harmony. Your upper body is not just about strength; it's about grace, control, and the ability to interact with the world around you. Building upon the foundation and power you've established, we now learn to create and control force through your arms and torso.",
      warmup: {
        breathwork: "Heart-centered breathing - breathe into your chest space, feeling expansion (5 minutes)",
        mobilityItems: [
          "Arm circles and shoulder rolls (2 minutes) - forward/backward 10 times each",
          "Wall angels (2 minutes) - arms in goal post, slide up and down 12-15 reps",
          "Doorway chest stretch (2 minutes) - 30 seconds each arm",
          "Scapular wall slides (2 minutes) - W to Y position, 10-12 reps",
          "Wrist circles and flexor stretches (2 minutes)",
          "Cat-cow with arm reach (2 minutes) - 8 reaches each arm"
        ],
        intention: "I am strong and graceful. My upper body moves with intention, power, and precision.",
        somaticCue: "Feel your arms as extensions of your heart, capable of both giving and receiving. Feel the strength that flows through your arms, shoulders, and back."
      },
      circuits: [
        {
          title: "Upper Body Push Circuit",
          exercises: [
            {
              name: "Modified Push-Ups – 3x8-12",
              technicalCue: "Choose appropriate level (wall, incline, knee, or full), elbows at 45 degrees",
              somaticCue: "Feel power radiating from your center through your arms",
              videoInfo: {
                title: "Push-Up Progression | From Beginner to Advanced",
                instructor: "Calisthenic Movement",
                duration: "7:20",
                url: "https://www.youtube.com/watch?v=es_Tz8Si75o"
              }
            },
            {
              name: "Pike Push-Ups – 3x5-8",
              technicalCue: "Downward dog position, lower head toward ground between hands, keep hips elevated",
              somaticCue: "Feel your shoulders as pillars of strength",
              videoInfo: {
                title: "Pike Push-Up Tutorial | Shoulder Strength Builder",
                instructor: "Al Kavadlo",
                duration: "4:15",
                url: "https://www.youtube.com/watch?v=66x0qQiJ-MA"
              }
            },
            {
              name: "Tricep Dips (Chair/Bench) – 3x8-12",
              technicalCue: "Hands on edge, lower body by bending elbows, elbows close to body",
              somaticCue: "Feel the strength in the back of your arms"
            }
          ]
        },
        {
          title: "Upper Body Pull Circuit",
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
              name: "Plank to Downward Dog – 3x8-10",
              technicalCue: "Start in plank, push hips up and back to downward dog, return with control",
              somaticCue: "Feel the flow between strength and stretch"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Cross-body shoulder stretch (45 seconds each arm)",
          "Overhead tricep stretch (45 seconds each arm)",
          "Doorway chest stretch (45 seconds each arm)",
          "Child's pose with side reach (45 seconds each side)",
          "Heart-centered breathing (3 minutes) - hand on chest, breathe into heart space"
        ],
        journalPrompt: "How did my upper body feel during today's pushing and pulling movements? What was challenging? Where did I feel most powerful?"
      },
      hiddenHint: "Strength without grace is mere force. Grace without strength is mere movement. Together, they create mastery."
    },
    {
      id: 4,
      title: "BALANCE & COORDINATION",
      subtitle: "Dynamic Integration",
      message: "Today we enter the realm of integration and finesse, where all the strength and stability you've built becomes fluid, graceful, and coordinated. Balance is not just about standing on one foot; it's about the dynamic equilibrium between all aspects of your being - physical, mental, and emotional. Today we challenge your nervous system to adapt, respond, and create new patterns of movement.",
      warmup: {
        breathwork: "Flow breathing - match breath to movement (5 minutes)",
        mobilityItems: [
          "Standing balance challenges (2 minutes) - one foot 15 seconds each, progress to eyes closed",
          "Dynamic leg swings (2 minutes) - forward/back, side to side, 8 each direction",
          "Arm and leg coordination (2 minutes) - march with opposite arm/leg patterns",
          "Heel-to-toe walking (2 minutes) - 10 steps forward, turn, 10 back",
          "Single-leg stands with movement (2 minutes) - circles, figure-8s, 30 seconds each leg",
          "Spinal waves (2 minutes) - 8 waves each direction"
        ],
        intention: "I am balanced in all aspects of my being. I move through challenges with grace and confidence.",
        somaticCue: "Feel the constant micro-adjustments your body makes to maintain balance. Notice how balance is not static but dynamic - a continuous dance of small corrections."
      },
      circuits: [
        {
          title: "Balance Integration Circuit A",
          exercises: [
            {
              name: "Single-Leg Balance with Reaches – 3x30 seconds each leg",
              technicalCue: "Stand on one foot, reach in different directions - forward, side, back, diagonal",
              somaticCue: "Feel like a graceful bird balancing on a branch"
            },
            {
              name: "Bear Crawl Steps – 3x20 steps",
              technicalCue: "Bear crawl position, take small steps forward/backward, opposite hand and foot move together",
              somaticCue: "Feel like a powerful, coordinated animal",
              videoInfo: {
                title: "Bear Crawl Exercise | Coordination & Strength",
                instructor: "FunctionalMovement",
                duration: "3:45",
                url: "https://www.youtube.com/watch?v=Wgt1vdZ_YYk"
              }
            },
            {
              name: "Single-Leg Deadlift Reach – 3x8 each leg",
              technicalCue: "Stand on one leg, hinge at hip, reach toward ground with opposite hand",
              somaticCue: "Feel the dynamic stability challenge, maintain grace under pressure"
            }
          ]
        },
        {
          title: "Balance Integration Circuit B",
          exercises: [
            {
              name: "Warrior III Flow – 3x5 each side",
              technicalCue: "From standing, hinge forward lifting back leg, arms extended forward",
              somaticCue: "Feel like you're flying, strong and graceful"
            },
            {
              name: "Side Plank Hold – 3x20-30 seconds each side",
              technicalCue: "Lie on side, lift hips creating straight line, top arm reaching up",
              somaticCue: "Feel the strength radiating from your core through your entire side body"
            },
            {
              name: "Mountain Climber Flow – 3x20 total",
              technicalCue: "Plank position, alternate bringing knees to chest with control",
              somaticCue: "Maintain plank alignment while legs move dynamically"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Standing balance holds (2 minutes) - one foot, eyes closed if comfortable",
          "Gentle spinal twists (45 seconds each side)",
          "Hip circles and figure-8s (2 minutes)",
          "Child's pose with gentle sway (2 minutes)",
          "Balance meditation (3 minutes) - focus on finding stillness within movement"
        ],
        journalPrompt: "How did it feel to challenge my balance and coordination today? What did I discover about my body's ability to adapt? Where did I find grace under pressure?"
      },
      hiddenHint: "In the dance of balance, every stumble is a step toward mastery. Every challenge is an invitation to grow."
    },
    {
      id: 5,
      title: "FLOW INTEGRATION",
      subtitle: "Movement as Medicine",
      message: "Today we flow between movements, creating sequences that challenge strength, mobility, and coordination. Movement becomes meditation. We integrate all the elements you've been cultivating - core stability, lower body power, upper body strength, and balance - into flowing sequences that honor the poetry of human movement.",
      warmup: {
        breathwork: "Flow breathing - match breath to movement (5 minutes)",
        mobilityItems: [
          "Sun salutation variation (3 rounds) - flow between poses",
          "Dynamic warrior sequence (5 each side)",
          "Flow between push-up and downward dog (10 reps)",
          "Gentle movement exploration (freestyle for 2 minutes)",
          "Spinal waves and hip circles (2 minutes)",
          "Joint mobility sequence (ankles to neck) - 3 minutes"
        ],
        intention: "I move with grace, strength, and awareness. I am the master of my body, movement, and strength.",
        somaticCue: "Feel the poetry of movement as your body flows from one position to another. Feel the integration of all your training - strength, power, flow, and control united."
      },
      circuits: [
        {
          title: "Flow Integration Circuit A",
          exercises: [
            {
              name: "Burpee Flow – 3x5-8",
              technicalCue: "Squat, jump back to plank, push-up, jump forward, jump up with control",
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
          title: "Flow Integration Circuit B",
          exercises: [
            {
              name: "Bear Crawl Flow – 3x20 steps forward/back",
              technicalCue: "Hands and feet only, knees hovering, crawl in all directions",
              somaticCue: "Feel like a powerful animal, moving with primal strength"
            },
            {
              name: "Turkish Get-Up (bodyweight) – 2x3 each side",
              technicalCue: "From lying to standing using only one arm for support, move segment by segment",
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
          "Full-body stretching sequence (5 minutes)",
          "Meditation on movement and stillness (5 minutes)"
        ],
        journalPrompt: "How did it feel to flow between movements today? What did I discover about my body's natural rhythm? Where did I find the perfect balance between effort and ease?"
      },
      hiddenHint: "In the flow, you find the perfect balance between effort and ease. Movement becomes meditation when performed with presence."
    },
    {
      id: 6,
      title: "POWER & EXPLOSIVENESS",
      subtitle: "Unleashing Your Athletic Potential",
      message: "Today we tap into your explosive power through plyometric and dynamic bodyweight exercises. Feel the athlete within you awaken. We combine all the stability, strength, and coordination you've built into explosive, powerful movements that challenge your body's ability to generate and control force rapidly.",
      warmup: {
        breathwork: "Power breath - 3 sharp inhales, 1 explosive exhale (10 cycles)",
        mobilityItems: [
          "Dynamic leg swings (15 each direction)",
          "Arm swings and circles (30 seconds)",
          "Light jumping in place (1 minute)",
          "Gentle plyometric prep - small hops (30 seconds)",
          "Hip circles and leg swings (2 minutes)",
          "Activation jumps and bounds (2 minutes)"
        ],
        intention: "I unleash my power with control and precision. True power comes not from force, but from the perfect timing of effort and release.",
        somaticCue: "Feel the spring-loaded energy in your muscles, ready to explode into movement. Feel like a powerful cat, gathering and releasing energy."
      },
      circuits: [
        {
          title: "Power Development Circuit A",
          exercises: [
            {
              name: "Jump Squats – 4x6-10",
              technicalCue: "Explosive jump from deep squat, land softly with control",
              somaticCue: "Feel the power transfer from the ground through your entire kinetic chain"
            },
            {
              name: "Explosive Push-Ups – 3x5-8",
              technicalCue: "Push up with enough force to lift hands off ground, land with control",
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
          title: "Power Development Circuit B",
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
          "Deep breathing with power visualization (3 minutes)",
          "Gratitude meditation for your body's power (3 minutes)"
        ],
        journalPrompt: "What did I discover about my explosive power today? How did it feel to move with such intensity? Where did I feel most powerful and in control?"
      },
      hiddenHint: "True power comes not from force, but from the perfect timing of effort and release. You are more powerful than you know."
    },
    {
      id: 7,
      title: "MASTERY INTEGRATION",
      subtitle: "Bringing It All Together",
      message: "Today we integrate everything you've learned this week. This is your graduation ceremony - a celebration of your bodyweight mastery journey. We combine core stability, lower body power, upper body strength, balance, flow, and explosive power into a comprehensive practice that honors how far you've come and prepares you for continued growth.",
      warmup: {
        breathwork: "Mastery breathing - deep, conscious, powerful (10 minutes)",
        mobilityItems: [
          "Full body flow sequence (5 minutes)",
          "Joint mobility sequence (ankles to neck) - 3 minutes",
          "Movement preparation combining all week's patterns (5 minutes)",
          "Intention setting and body scan (2 minutes)",
          "Dynamic movement exploration (3 minutes)",
          "Power activation sequence (2 minutes)"
        ],
        intention: "I am the master of my body, movement, and strength. I move with the confidence of mastery and the humility of a lifelong learner.",
        somaticCue: "Feel the integration of all your training - strength, power, flow, and control united. Feel the mastery you've developed flowing through every movement."
      },
      circuits: [
        {
          title: "Mastery Integration Circuit A",
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
          title: "Mastery Integration Circuit B",
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
          "Integration breathing - honoring your journey (5 minutes)",
          "Reflection on transformation (5 minutes)"
        ],
        journalPrompt: "Reflecting on this week's journey, what have I learned about my body, my strength, and my potential? What will I carry forward? How has my relationship with my body changed?"
      },
      hiddenHint: "Mastery is not a destination, but a way of approaching every movement with presence and intention. You have become the master of your own body."
    }
  ]
};