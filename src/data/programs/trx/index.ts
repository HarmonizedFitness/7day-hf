
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
      title: "RESISTANCE FOUNDATION",
      subtitle: "Mastering the Straps",
      message: "Welcome to Day 1 of your TRX Bands Only journey! Today marks the beginning of your transformation into a master of resistance training, where we establish the fundamental principles of suspension training that will carry you through this entire program. Your TRX bands are not merely equipment; they are tools of transformation, bridges between your current strength and your unlimited potential.",
      warmup: {
        breathwork: "Suspension breathing - 3 deep breaths in each TRX position",
        mobilityItems: [
          "TRX assisted arm circles (2 minutes) - hold handles lightly for support",
          "TRX supported hip circles (2 minutes) - 8 each direction",
          "TRX balance challenges (2 minutes) - one foot 15 seconds each",
          "Dynamic TRX lean and return (2 minutes) - 10 controlled reps",
          "TRX supported leg swings (2 minutes) - 8 each direction, each leg",
          "TRX tension breathing (2 minutes) - 8 breaths with light tension"
        ],
        intention: "I embrace resistance as my teacher. Through challenge, I discover my true strength and potential.",
        somaticCue: "Feel the suspension creating instability that awakens your stabilizing muscles. Feel the relationship between your body and the bands, establishing trust in the suspension system."
      },
      circuits: [
        {
          title: "TRX Foundation Circuit A",
          exercises: [
            {
              name: "TRX Chest Press – 4x10",
              technicalCue: "Face away from anchor, handles at chest height. Maintain straight body line, elbows at 45 degrees",
              somaticCue: "Feel power radiating from your core through your arms",
              videoInfo: {
                title: "TRX Chest Press | Complete Form Guide",
                instructor: "TRX Training",
                duration: "3:45",
                url: "https://www.trxtraining.com/blogs/news/trx-chest-press"
              }
            },
            {
              name: "TRX Row – 4x10",
              technicalCue: "Face anchor, lean back, pull chest to handles, squeeze shoulder blades",
              somaticCue: "Notice how the straps engage your stabilizing muscles",
              videoInfo: {
                title: "TRX Row | Perfect Form Tutorial",
                instructor: "TRX Training",
                duration: "4:20",
                url: "https://www.trxtraining.com/blogs/news/trx-row"
              }
            },
            {
              name: "TRX Squat – 3x12-15",
              technicalCue: "Hold handles, squat down while leaning back slightly, drive through heels",
              somaticCue: "Feel the assistance allowing deeper range of motion"
            }
          ]
        },
        {
          title: "TRX Foundation Circuit B",
          exercises: [
            {
              name: "TRX Assisted Balance – 3x30 seconds each leg",
              technicalCue: "Hold handles lightly, stand on one foot, minimal assistance",
              somaticCue: "Feel the TRX providing just enough support to challenge your balance"
            },
            {
              name: "TRX Plank – 3x30-45 seconds",
              technicalCue: "Feet in straps, forearm plank position, maintain straight line",
              somaticCue: "Feel the instability challenging your entire core system"
            },
            {
              name: "TRX Glute Bridge – 3x12-15",
              technicalCue: "Lie on back, heels in straps, lift hips by squeezing glutes",
              somaticCue: "Feel the suspension adding a new dimension to glute activation"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "TRX assisted hip flexor stretch (45 seconds each)",
          "TRX chest stretch (60 seconds)",
          "TRX spinal rotation (30 seconds each side)",
          "TRX supported child's pose (90 seconds)",
          "Mindful breathing with strap awareness (3 minutes)"
        ],
        journalPrompt: "How did the instability of the TRX change my movement awareness? What did I discover about working with resistance rather than against it?"
      },
      hiddenHint: "Instability creates opportunity for deeper strength. Resistance reveals your true potential."
    },
    {
      id: 2,
      title: "UPPER BODY POWER",
      subtitle: "Building Suspension Strength",
      message: "Today we focus on developing upper body strength and power through suspension training. The TRX challenges your muscles in ways traditional training cannot, requiring constant stabilization and core engagement. Every push and pull becomes a full-body exercise, teaching your muscles to work together as an integrated system.",
      warmup: {
        breathwork: "Power breathing with TRX tension - hold handles with light tension during breathing (5 minutes)",
        mobilityItems: [
          "TRX shoulder circles (2 minutes) - hold handles, large circles",
          "TRX chest opener (2 minutes) - face away, arms wide, lean forward",
          "TRX Y-pulls (2 minutes) - light resistance, arms in Y position",
          "TRX torso rotation (2 minutes) - hold handles, rotate side to side",
          "TRX arm swings (2 minutes) - dynamic preparation",
          "TRX push-up prep (2 minutes) - hands in straps, practice position"
        ],
        intention: "I build strength through instability. Every challenge makes me stronger and more capable.",
        somaticCue: "Feel how the suspension requires your entire body to work as one unit. Notice the constant micro-adjustments your muscles make to maintain control."
      },
      circuits: [
        {
          title: "TRX Upper Power Circuit A",
          exercises: [
            {
              name: "TRX Push-Up – 4x8-12",
              technicalCue: "Hands in straps, push-up position, maintain straight line, control the instability",
              somaticCue: "Feel every stabilizing muscle working to control the movement",
              videoInfo: {
                title: "TRX Push-Up | Advanced Suspension Training",
                instructor: "TRX Training",
                duration: "5:15",
                url: "https://www.trxtraining.com/blogs/news/trx-push-up"
              }
            },
            {
              name: "TRX High Row – 4x10-12",
              technicalCue: "Face anchor, lean back more, pull handles to sides of chest, elbows high",
              somaticCue: "Feel the upper back muscles working against the suspension resistance"
            },
            {
              name: "TRX Tricep Press – 3x10-12",
              technicalCue: "Face away, arms extended overhead, lean forward, press back to start",
              somaticCue: "Feel the triceps working to control both the push and the stabilization"
            }
          ]
        },
        {
          title: "TRX Upper Power Circuit B",
          exercises: [
            {
              name: "TRX Bicep Curl – 3x10-12",
              technicalCue: "Face anchor, lean back, curl handles to forehead, control the return",
              somaticCue: "Feel the biceps working while your core stabilizes the lean"
            },
            {
              name: "TRX Chest Fly – 3x8-10",
              technicalCue: "Face away, arms wide, lean forward, bring handles together in front of chest",
              somaticCue: "Feel the chest opening and closing while fighting the instability"
            },
            {
              name: "TRX Face Pull – 3x12-15",
              technicalCue: "Face anchor, pull handles to face, elbows high, squeeze shoulder blades",
              somaticCue: "Feel the posterior deltoids and rhomboids working to improve posture"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "TRX doorway chest stretch (60 seconds)",
          "TRX overhead shoulder stretch (45 seconds each arm)",
          "TRX lat stretch (45 seconds each side)",
          "TRX supported spinal twist (45 seconds each side)",
          "TRX relaxation hang (2 minutes) - light support, gentle sway"
        ],
        journalPrompt: "How did my upper body respond to the instability challenge? Where did I feel the most engagement? What surprised me about suspension training?"
      },
      hiddenHint: "True strength is not just about force, but about control under instability. You are building functional power."
    },
    {
      id: 3,
      title: "LOWER BODY STRENGTH",
      subtitle: "Foundation Power Training",
      message: "Today we harness the power of suspension training for your lower body. The TRX allows us to challenge your legs, glutes, and hips in unique ways, providing assistance when needed and instability when beneficial. Your lower body will learn to generate power while maintaining stability, creating a foundation of strength that transfers to all movement.",
      warmup: {
        breathwork: "Grounding breath - feel connection to earth while holding TRX (5 minutes)",
        mobilityItems: [
          "TRX supported leg swings (2 minutes) - all directions",
          "TRX assisted hip circles (2 minutes) - hold for support",
          "TRX squat prep (2 minutes) - practice range of motion",
          "TRX calf raises (2 minutes) - hold handles for balance",
          "TRX lateral lunges (2 minutes) - light assistance",
          "TRX balance challenges (2 minutes) - single leg with support"
        ],
        intention: "My foundation is strong and stable. I generate power from the ground up while maintaining perfect control.",
        somaticCue: "Feel your legs as pillars of strength, supported by the TRX when needed, challenged by instability when beneficial."
      },
      circuits: [
        {
          title: "TRX Lower Power Circuit A",
          exercises: [
            {
              name: "TRX Jump Squat – 4x8-10",
              technicalCue: "Hold handles, explosive jump from squat, land softly, use TRX for balance",
              somaticCue: "Feel the power generation while the TRX provides stability for safe landing",
              videoInfo: {
                title: "TRX Jump Squat | Explosive Lower Body Training",
                instructor: "TRX Training",
                duration: "3:30",
                url: "https://www.trxtraining.com/blogs/news/trx-jump-squat"
              }
            },
            {
              name: "TRX Single-Leg Squat – 3x8 each leg",
              technicalCue: "Hold handles, squat on one leg, use TRX for assistance as needed",
              somaticCue: "Feel the unilateral strength challenge with the safety of suspension support"
            },
            {
              name: "TRX Reverse Lunge – 3x10 each leg",
              technicalCue: "Hold handles, step back into lunge, use TRX for balance and assistance",
              somaticCue: "Feel the deep lunge range of motion that the TRX assistance allows"
            }
          ]
        },
        {
          title: "TRX Lower Power Circuit B",
          exercises: [
            {
              name: "TRX Hamstring Curl – 3x12-15",
              technicalCue: "Lie on back, heels in straps, lift hips, curl heels toward glutes",
              somaticCue: "Feel the hamstrings working in a completely new way with the suspension"
            },
            {
              name: "TRX Side Lunge – 3x8 each side",
              technicalCue: "Hold handles, step wide to side, sit back into lunge, return to center",
              somaticCue: "Feel the lateral strength and mobility challenge"
            },
            {
              name: "TRX Single-Leg Deadlift – 3x8 each leg",
              technicalCue: "Hold handles, hinge at hip on one leg, reach toward ground, return to standing",
              somaticCue: "Feel the balance challenge while the TRX provides security"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "TRX supported hip flexor stretch (60 seconds each)",
          "TRX assisted figure-4 stretch (45 seconds each leg)",
          "TRX calf stretch (45 seconds each leg)",
          "TRX supported forward fold (90 seconds)",
          "TRX relaxation - gentle swaying (3 minutes)"
        ],
        journalPrompt: "How did the TRX change my lower body training experience? What new ranges of motion did I discover? Where did I feel most powerful?"
      },
      hiddenHint: "Power without control is chaos. Control without power is limitation. The TRX teaches you both."
    },
    {
      id: 4,
      title: "CORE INTEGRATION",
      subtitle: "Suspension Stability",
      message: "Today we dive deep into core training with the TRX, where instability becomes your greatest teacher. The suspension trainer transforms every movement into a core exercise, challenging your stability system in three dimensions. Your core will learn to work as an integrated unit, providing stability while allowing mobility.",
      warmup: {
        breathwork: "Core-centered breathing - hands on TRX, breathe into your center (5 minutes)",
        mobilityItems: [
          "TRX supported cat-cow (2 minutes) - hands in straps",
          "TRX standing spinal waves (2 minutes) - hold handles",
          "TRX torso circles (2 minutes) - feel core engagement",
          "TRX standing knee raises (2 minutes) - hold for balance",
          "TRX plank prep (2 minutes) - practice positions",
          "TRX dead bug prep (2 minutes) - feet in straps, practice"
        ],
        intention: "My core is my center of power and stability. I embrace instability as my teacher for deeper strength.",
        somaticCue: "Feel your core as a cylinder of strength, working in all directions to maintain stability against the suspension challenge."
      },
      circuits: [
        {
          title: "TRX Core Integration Circuit A",
          exercises: [
            {
              name: "TRX Plank – 4x30-45 seconds",
              technicalCue: "Feet in straps, forearm or hand plank, maintain straight line despite instability",
              somaticCue: "Feel every core muscle working to maintain stability",
              videoInfo: {
                title: "TRX Plank | Core Stability Challenge",
                instructor: "TRX Training",
                duration: "4:45",
                url: "https://www.trxtraining.com/blogs/news/trx-plank"
              }
            },
            {
              name: "TRX Mountain Climber – 3x20 total",
              technicalCue: "Feet in straps, plank position, alternate bringing knees to chest",
              somaticCue: "Feel the core working overtime to control the leg movement and strap instability"
            },
            {
              name: "TRX Knee Tuck – 3x10-12",
              technicalCue: "Feet in straps, plank position, draw both knees to chest, extend back",
              somaticCue: "Feel the deep abdominal engagement required to control this movement"
            }
          ]
        },
        {
          title: "TRX Core Integration Circuit B",
          exercises: [
            {
              name: "TRX Side Plank – 3x20-30 seconds each side",
              technicalCue: "Feet in straps, side plank position, maintain straight line",
              somaticCue: "Feel the obliques working to maintain lateral stability"
            },
            {
              name: "TRX Pike – 3x8-10",
              technicalCue: "Feet in straps, plank position, lift hips up into pike position",
              somaticCue: "Feel the core working to control the hip movement against gravity"
            },
            {
              name: "TRX Oblique Crunch – 3x10 each side",
              technicalCue: "Feet in straps, side plank, bring knees to elbow, extend back",
              somaticCue: "Feel the lateral core muscles working in a completely new way"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "TRX supported child's pose (90 seconds)",
          "TRX gentle spinal rotation (45 seconds each side)",
          "TRX supported hip flexor stretch (60 seconds each)",
          "TRX relaxation hang (2 minutes) - gentle core release",
          "TRX meditation - focus on your center (3 minutes)"
        ],
        journalPrompt: "How did my core respond to the instability challenge? What did I discover about my stability system? Where did I feel the deepest engagement?"
      },
      hiddenHint: "When your core is strong in instability, it becomes unshakeable in stability. You are building anti-fragility."
    },
    {
      id: 5,
      title: "FUNCTIONAL MOVEMENT",
      subtitle: "Real-World Strength",
      message: "Today we integrate all your TRX skills into functional movement patterns that mirror real-life activities. The suspension trainer excels at teaching your body to work as an integrated system, preparing you for the demands of daily life and athletic performance. Every movement becomes a lesson in coordination, strength, and control.",
      warmup: {
        breathwork: "Functional breathing - breathe while moving through TRX patterns (5 minutes)",
        mobilityItems: [
          "TRX movement flow (3 minutes) - combine previous exercises",
          "TRX multi-planar reaches (2 minutes) - all directions",
          "TRX rotation patterns (2 minutes) - upper and lower body",
          "TRX gait patterns (2 minutes) - walking movements",
          "TRX balance challenges (2 minutes) - dynamic stability",
          "TRX coordination drills (2 minutes) - opposite arm/leg patterns"
        ],
        intention: "I move with functional strength and grace. My body works as one integrated, powerful system.",
        somaticCue: "Feel how all your muscles work together to create smooth, coordinated movement. Notice the transfer of power from your core to your limbs."
      },
      circuits: [
        {
          title: "TRX Functional Circuit A",
          exercises: [
            {
              name: "TRX Burpee – 3x8-10",
              technicalCue: "Hands in straps, squat down, jump back to plank, push-up, jump forward, stand",
              somaticCue: "Feel the full-body integration and how the TRX adds instability to every phase"
            },
            {
              name: "TRX Rotational Row – 3x10 each side",
              technicalCue: "Face anchor, single-arm row with torso rotation, engage core throughout",
              somaticCue: "Feel the power transfer from your core through your pulling arm"
            },
            {
              name: "TRX Lateral Lunge to Press – 3x8 each side",
              technicalCue: "Side lunge while pressing handles away, return to standing",
              somaticCue: "Feel the integration of lower body power and upper body control"
            }
          ]
        },
        {
          title: "TRX Functional Circuit B",
          exercises: [
            {
              name: "TRX Single-Arm Row to Reverse Lunge – 3x8 each side",
              technicalCue: "Combine single-arm row with opposite leg reverse lunge",
              somaticCue: "Feel the cross-body connection and core stabilization challenge"
            },
            {
              name: "TRX Squat to Y-Pull – 3x10",
              technicalCue: "Squat down, stand while pulling handles into Y position overhead",
              somaticCue: "Feel the power transfer from legs through core to arms"
            },
            {
              name: "TRX Warrior III Flow – 3x5 each leg",
              technicalCue: "Hold handles, balance on one leg, extend other leg back, arms forward",
              somaticCue: "Feel the dynamic balance challenge with TRX support"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "TRX full-body stretch sequence (5 minutes)",
          "TRX supported hip opener (60 seconds each)",
          "TRX chest and shoulder release (90 seconds)",
          "TRX spinal mobility flow (2 minutes)",
          "TRX meditation on integration (3 minutes)"
        ],
        journalPrompt: "How did it feel to combine movements into functional patterns? What did I discover about my body's ability to integrate strength, balance, and coordination?"
      },
      hiddenHint: "Functional strength is not about isolated muscles, but about integrated systems. You are building real-world capability."
    },
    {
      id: 6,
      title: "POWER & PLYOMETRICS",
      subtitle: "Explosive Suspension Training",
      message: "Today we unleash your explosive power through plyometric TRX training. The suspension trainer provides the perfect platform for safe, controlled explosive movements. You'll learn to generate power rapidly while maintaining control, developing the kind of athletic ability that transfers to all aspects of movement and life.",
      warmup: {
        breathwork: "Explosive breathing - quick inhales, powerful exhales (10 cycles)",
        mobilityItems: [
          "TRX dynamic leg swings (2 minutes) - all planes of motion",
          "TRX arm swings and circles (2 minutes) - prepare for explosive movement",
          "TRX light plyometric prep (2 minutes) - small jumps with support",
          "TRX power position practice (2 minutes) - explosive start positions",
          "TRX coordination drills (2 minutes) - quick, controlled movements",
          "TRX activation jumps (2 minutes) - build up to full power"
        ],
        intention: "I generate explosive power with perfect control. I am an athlete capable of incredible feats of strength and speed.",
        somaticCue: "Feel the coiled energy in your muscles, ready to explode into movement. Feel the TRX providing security for safe power expression."
      },
      circuits: [
        {
          title: "TRX Power Circuit A",
          exercises: [
            {
              name: "TRX Jump Squat – 4x6-8",
              technicalCue: "Explosive jump from squat, land softly, use TRX for balance and safety",
              somaticCue: "Feel the power generation from your legs while the TRX ensures safe landing"
            },
            {
              name: "TRX Explosive Push-Up – 3x5-8",
              technicalCue: "Hands in straps, explosive push-up, control the instability on landing",
              somaticCue: "Feel the upper body power while fighting the suspension instability"
            },
            {
              name: "TRX Power Pull – 3x8-10",
              technicalCue: "Face anchor, explosive pull to chest, control the return",
              somaticCue: "Feel the explosive pulling power while maintaining core stability"
            }
          ]
        },
        {
          title: "TRX Power Circuit B",
          exercises: [
            {
              name: "TRX Lateral Bound – 3x6 each side",
              technicalCue: "Hold handles, explosive lateral jump, land on one foot, use TRX for balance",
              somaticCue: "Feel the lateral power and the TRX providing confidence for bold movement"
            },
            {
              name: "TRX Burpee Jump – 3x5-8",
              technicalCue: "Explosive burpee with jump at the top, hands in straps throughout",
              somaticCue: "Feel the full-body explosive power with the added instability challenge"
            },
            {
              name: "TRX Mountain Climber Sprint – 3x20 seconds",
              technicalCue: "Feet in straps, rapid mountain climbers, maintain form despite speed",
              somaticCue: "Feel the explosive core power while fighting the suspension challenge"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "TRX gentle swaying (3 minutes) - release explosive tension",
          "TRX supported deep breathing (3 minutes)",
          "TRX full-body stretch (5 minutes)",
          "TRX power meditation (3 minutes) - visualize your explosive capability",
          "TRX gratitude practice (2 minutes) - appreciate your power"
        ],
        journalPrompt: "How did it feel to express explosive power with the TRX? What did I discover about my athletic potential? Where did I feel most powerful and controlled?"
      },
      hiddenHint: "True power is not just about force, but about the ability to control that force. You are developing athletic mastery."
    },
    {
      id: 7,
      title: "FLOW MASTERY",
      subtitle: "Suspension Artistry",
      message: "Today we culminate your TRX journey by flowing between all the movements you've mastered. This is your graduation ceremony - a celebration of your suspension training mastery. You'll move with the grace of a dancer and the strength of an athlete, demonstrating complete command over your body and the TRX system.",
      warmup: {
        breathwork: "Mastery breathing - deep, confident, powerful (10 minutes)",
        mobilityItems: [
          "TRX full movement flow (5 minutes) - combine all week's patterns",
          "TRX dynamic preparation (3 minutes) - prepare for complex movements",
          "TRX balance and coordination (3 minutes) - challenge your systems",
          "TRX power activation (2 minutes) - prepare for explosive movements",
          "TRX intention setting (2 minutes) - connect with your mastery",
          "TRX celebration prep (1 minute) - prepare to showcase your skills"
        ],
        intention: "I am a master of suspension training. I move with confidence, power, and grace. I have transformed my relationship with resistance and instability.",
        somaticCue: "Feel the complete integration of all your TRX skills. Feel the confidence that comes from mastery, the power that comes from practice, and the grace that comes from understanding."
      },
      circuits: [
        {
          title: "TRX Mastery Flow Circuit A",
          exercises: [
            {
              name: "TRX Flow Sequence 1 – 3x5 complete flows",
              technicalCue: "Chest press to row to squat to jump - smooth transitions",
              somaticCue: "Feel the mastery in your movement, the confidence in your control"
            },
            {
              name: "TRX Power Integration – 3x8",
              technicalCue: "Explosive push-up to jump squat to mountain climber - maintain form",
              somaticCue: "Express all your power, control, and coordination in one flowing sequence"
            },
            {
              name: "TRX Balance Mastery – 3x30 seconds each",
              technicalCue: "Single-leg balance with complex arm patterns, minimal TRX assistance",
              somaticCue: "Feel the mastery of balance and the confidence in your stability"
            }
          ]
        },
        {
          title: "TRX Mastery Flow Circuit B",
          exercises: [
            {
              name: "TRX Flow Sequence 2 – 3x5 complete flows",
              technicalCue: "Burpee to warrior III to side plank to pike - artistic movement",
              somaticCue: "Move like an artist, expressing strength and grace through suspension"
            },
            {
              name: "TRX Ultimate Challenge – 2x60 seconds",
              technicalCue: "Combine your strongest movements in a continuous flow",
              somaticCue: "Celebrate your mastery through sustained, powerful movement"
            },
            {
              name: "TRX Mastery Meditation – 1x3 minutes",
              technicalCue: "Hold your strongest position while breathing deeply and mindfully",
              somaticCue: "Feel the strength you've built, the mastery you've achieved"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "TRX celebration flow (5 minutes) - freestyle expression of your mastery",
          "TRX deep restoration (10 minutes) - honor your body's transformation",
          "TRX gratitude meditation (5 minutes) - appreciate your journey",
          "TRX integration breathing (5 minutes) - absorb the lessons learned",
          "TRX mastery reflection (5 minutes) - acknowledge your growth"
        ],
        journalPrompt: "Reflecting on this week's TRX journey, what have I learned about my strength, my potential, and my ability to master new skills? How has my relationship with challenge and instability changed? What will I carry forward from this experience?"
      },
      hiddenHint: "Mastery is not a destination but a way of approaching every challenge with confidence, curiosity, and commitment. You have become a master of suspension training."
    }
  ]
};
