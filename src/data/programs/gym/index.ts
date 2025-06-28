
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
      message: "Welcome to Day 1 of your journey. PUSH day trains the muscles that initiate action: chest, shoulders, and triceps—the physical manifestation of your drive and power. Today isn't just about lifting; it's about building awareness, control, and intention. Every movement is a conversation with your body. Let's establish our foundation with precision and purpose.",
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
              somaticCue: "Feel the connection between your upper back and the bench",
              videoInfo: {
                title: "How to do the BARBELL BENCH PRESS! | 2 Minute Tutorial",
                instructor: "Max Euceda",
                duration: "2:00",
                url: "https://www.youtube.com/watch?v=lWFknlOTbyM"
              }
            },
            {
              name: "Incline Dumbbell Chest Fly – 3x10",
              technicalCue: "Maintain a slight bend in the elbows, lower until a gentle stretch is felt",
              videoInfo: {
                title: "Stop Doing Chest Flys Like This",
                instructor: "Jeff Nippard",
                duration: "8:22",
                url: "https://www.youtube.com/watch?v=JSDpq14vCZ8"
              }
            },
            {
              name: "Push-Up to Downward Dog – 3x10",
              somaticCue: "Notice how your body transitions between strength and stretch",
              videoInfo: {
                title: "Push up To Downward Dog- Video Demonstration",
                instructor: "MovementAsMedicine",
                duration: "0:43",
                url: "https://www.youtube.com/watch?v=pvkEB6lA1Og"
              }
            }
          ]
        },
        {
          title: "Push Circuit B",
          exercises: [
            {
              name: "Seated Dumbbell Overhead Press – 4x10",
              technicalCue: "Press directly upward, allow the shoulder blades to rotate naturally",
              videoInfo: {
                title: "How to do the SEATED DUMBBELL SHOULDER PRESS! | 2 Minute Tutorial",
                instructor: "Max Euceda",
                duration: "2:00",
                url: "https://www.youtube.com/watch?v=rO_iEImwHyo"
              }
            },
            {
              name: "Cable or Band-Resisted Push-Ups – 3x10-12",
              somaticCue: "Feel the increasing tension throughout the movement",
              videoInfo: {
                title: "Movement Demo - Push Ups With Bands",
                instructor: "Rogue Fitness",
                duration: "1:02",
                url: "https://www.youtube.com/watch?v=cOFwFzzLFWw"
              }
            },
            {
              name: "Shoulder Taps in Plank – 2x20 (total)",
              technicalCue: "Minimize hip rotation, keep your core braced like a cylinder",
              videoInfo: {
                title: "How To Properly Do a Plank with Shoulder Taps",
                instructor: "Wellen",
                duration: "1:58",
                url: "https://www.youtube.com/watch?v=gKA5LBy7WAI"
              }
            }
          ]
        },
        {
          title: "Push Circuit C",
          exercises: [
            {
              name: "Triceps Rope Pushdowns – 3x15",
              technicalCue: "Keep elbows tucked close to ribs, fully extend arms",
              videoInfo: {
                title: "How to do the CABLE TRICEP PUSHDOWN! | 2 Minute Tutorial",
                instructor: "Max Euceda",
                duration: "2:00",
                url: "https://www.youtube.com/watch?v=-xa-6cQaZKY"
              }
            },
            {
              name: "Dumbbell Front Raise + Lateral Raise Complex – 3x10 each",
              somaticCue: "Connect with the deliberate control in both raising and lowering",
              videoInfo: {
                title: "How To Do Cable Front Raise",
                instructor: "Davis Diley",
                duration: "0:28",
                url: "https://www.youtube.com/results?search_query=Dumbbell+front+raise"
              }
            },
            {
              name: "Overhead Plate Hold – 30 sec x 2",
              technicalCue: "Arms fully extended, shoulders away from ears",
              videoInfo: {
                title: "Plate Front Raise with Hold",
                instructor: "Max Euceda",
                duration: "1:30",
                url: "https://youtu.be/Oj9_huufPGQ?si=yVs2bt06zmMUiVff"
              }
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Foam roll: Chest, Shoulders, Triceps (1 min each)",
          "Doorway Chest Stretch (30 sec/side)",
          "Child's Pose w/ Shoulder Reach (60 sec)",
          "Box Breathing – 2 minutes (4 counts in, 4 counts hold, 4 counts out, 4 counts hold)"
        ],
        journalPrompt: "Where did I show the most control today? What sensations stood out most clearly?"
      },
      hiddenHint: "One journey begins with a single breath – just like your first push."
    },
    {
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
    },
    {
      id: 3,
      title: "LEGS (Glutes, Quads, Hamstrings, Core)",
      subtitle: "Building Your Foundation",
      message: "Today we honor the foundation of your physical structure – your legs. These powerful pillars connect you to the earth and generate the force that propels you through life. As you train today, notice how stability in your lower body creates freedom throughout your entire system.",
      warmup: {
        breathwork: "Box Breathing (5 cycles) - 4 counts each for inhale, hold, exhale, hold",
        mobilityItems: [
          "Hip CARs (Controlled Articular Rotations) - 5/direction/side",
          "Walking lunges with rotation (8/side)",
          "Bodyweight squats (15 reps)",
          "Standing hamstring scoops (10/side)"
        ],
        intention: "I build my foundation with each movement.",
        somaticCue: "Feel how your feet create a tripod of support – big toe, little toe, and heel."
      },
      circuits: [
        {
          title: "Legs Circuit A",
          exercises: [
            {
              name: "Goblet Squat – 4x12",
              technicalCue: "Keep chest proud, knees tracking over toes",
              somaticCue: "Feel your body lowering between your legs, not just forward",
              videoInfo: {
                title: "📌HOW TO DO A GOBLET SQUAT",
                instructor: "SquatCouple",
                duration: "0:22",
                url: "https://www.youtube.com/watch?v=lRYBbchqxtI"
              }
            },
            {
              name: "Romanian Deadlift – 4x10",
              technicalCue: "Hinge from hips, maintain slight knee bend",
              videoInfo: {
                title: "How to do the ROMANIAN DEADLIFT! | 2 Minute Tutorial",
                instructor: "Max Euceda",
                duration: "2:00",
                url: "https://www.youtube.com/watch?v=3VXmecChYYM"
              }
            },
            {
              name: "Bodyweight Split Squat – 3x10/side",
              somaticCue: "Notice the stability challenge as you lower",
              videoInfo: {
                title: "How to do Split Squats (Perfect Form)",
                instructor: "Calisthenic Movement",
                duration: "3:12",
                url: "https://youtu.be/-aMgxO760L4?si=8UynAXSLxaM-L6C9"
              }
            }
          ]
        },
        {
          title: "Legs Circuit B",
          exercises: [
            {
              name: "Dumbbell Step-Ups – 3x10/side",
              technicalCue: "Drive through heel, control the lowering phase",
              videoInfo: {
                title: "How To Do Step Ups",
                instructor: "ScottHermanFitness",
                duration: "4:45",
                url: "https://youtu.be/9ZknEYboBOQ?si=_hMMqW7NzFD484yp"
              }
            },
            {
              name: "Glute Bridge – 3x15",
              somaticCue: "Feel the gluteal muscles initiate the movement",
              videoInfo: {
                title: "How To Hip Thrust",
                instructor: "Bret Contreras",
                duration: "8:30",
                url: "https://youtu.be/OUgsJ8-Vi0E?si=H6JTwVY4E9SUhnyH"
              }
            },
            {
              name: "Standing Calf Raise – 3x15",
              technicalCue: "Full range of motion, slight pause at the top",
              videoInfo: {
                title: "How to do Standing Calf Raises",
                instructor: "Max Euceda",
                duration: "1:45",
                url: "https://youtube.com/shorts/baEXLy09Ncc?si=XegZQeIWclhdVvx9"
              }
            }
          ]
        },
        {
          title: "Legs Circuit C",
          exercises: [
            {
              name: "Plank – 3x30 seconds",
              technicalCue: "Create a straight line from head to heels",
              videoInfo: {
                title: "📌Plank Form Correction ✔️ vs. ✖️",
                instructor: "SquatCouple",
                duration: "0:14",
                url: "https://www.youtube.com/watch?v=j6WVxGJZv5Y"
              }
            },
            {
              name: "Lateral Lunge – 2x10/side",
              somaticCue: "Feel the inner thigh stretch as you shift laterally"
            },
            {
              name: "Dead Bug – 2x10/side",
              technicalCue: "Maintain contact between lower back and floor"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Foam roll: Quads, hamstrings, calves (1 min each)",
          "Figure 4 stretch (45 sec/side)",
          "Downward dog to runner's lunge (30 sec/side)",
          "Seated forward fold (60 sec)",
          "Diaphragmatic breathing – 2 minutes"
        ],
        journalPrompt: "How did my connection to the ground change throughout this workout? Where did I feel most stable and powerful?"
      },
      hiddenHint: "Three points of contact with the ground provide optimal stability."
    },
    {
      id: 4,
      title: "SHOULDERS & ARMS (Isolation, Joint Health)",
      subtitle: "Articulate Expression",
      message: "Your shoulders and arms are the instruments of your physical expression in the world. Today we refine these tools, bringing awareness to the intricate mechanics of the shoulder girdle and the precise movements of your arms. Each exercise is an opportunity to cultivate artful control.",
      warmup: {
        breathwork: "Alternate Nostril Breathing (4 cycles)",
        mobilityItems: [
          "Arm circles (forward/backward, 10 each direction)",
          "Wall slides (12 reps)",
          "Wrist circles and flexion/extension (10 each direction)",
          "Finger flexor/extensor stretches (30 sec each)"
        ],
        intention: "I move with precision and awareness.",
        somaticCue: "Feel the space and freedom in your shoulder joints."
      },
      circuits: [
        {
          title: "Shoulders & Arms Circuit A",
          exercises: [
            {
              name: "Dumbbell Lateral Raises – 3x12",
              technicalCue: "Slight bend in elbows, thumbs slightly up",
              somaticCue: "Feel the middle deltoid initiating the movement",
              videoInfo: {
                title: "How To Do Lateral Raises (PERFECT FORM!)",
                instructor: "Davis Diley",
                duration: "4:20",
                url: "https://youtu.be/PzsMitRdI_8?si=wVhbH-MBXCl9XjAl"
              }
            },
            {
              name: "Cable Front Raise – 3x12",
              technicalCue: "Maintain tall posture, raise to shoulder height",
              videoInfo: {
                title: "Cable Front Raise Form",
                instructor: "Max Euceda",
                duration: "1:30",
                url: "https://youtu.be/vtH93qBItdk?si=qY57ziazuhhJa7fR"
              }
            },
            {
              name: "Bent Over Reverse Fly – 3x15",
              somaticCue: "Connect with the posterior deltoids as you open your arms",
              videoInfo: {
                title: "How To Do Reverse Flys",
                instructor: "ScottHermanFitness",
                duration: "5:15",
                url: "https://youtu.be/JoCRRZ3zRtI?si=I1EZRp_MfRU6W_u2"
              }
            }
          ]
        },
        {
          title: "Shoulders & Arms Circuit B",
          exercises: [
            {
              name: "Triceps Dips (bench) – 3x12",
              technicalCue: "Keep shoulders down, elbows tracking straight back",
              videoInfo: {
                title: "How To Do Tricep Dips",
                instructor: "Calisthenic Movement",
                duration: "3:30",
                url: "https://youtu.be/5XkOdAtPn2Y?si=TEBWTld_jnqHGldK"
              }
            },
            {
              name: "Alternating Hammer Curls – 3x10/arm",
              somaticCue: "Notice the forearm involvement with this grip",
              videoInfo: {
                title: "How To Do Hammer Curls",
                instructor: "Max Euceda",
                duration: "1:50",
                url: "https://youtu.be/OPqe0kCxmR8?si=EM5667L6PaYkhMVs"
              }
            },
            {
              name: "Overhead Triceps Extension – 3x12",
              technicalCue: "Keep elbows close to ears, fully extend arms",
              videoInfo: {
                title: "Overhead Tricep Extension Form",
                instructor: "Jeff Nippard",
                duration: "6:45",
                url: "https://youtube.com/shorts/NTk0Igxqcsk?si=BJBWl7Xb8zV1nEzN"
              }
            }
          ]
        },
        {
          title: "Shoulders & Arms Circuit C",
          exercises: [
            {
              name: "Cable External Rotation – 2x15/side",
              technicalCue: "Keep elbow pinned to side, rotate from shoulder",
              videoInfo: {
                title: "Cable External Rotation",
                instructor: "Squat University",
                duration: "2:15",
                url: "https://youtu.be/PVdgjHqAes8?si=hmbiTz8d1oP-Qs0i"
              }
            },
            {
              name: "Concentration Curl – 2x12/arm",
              somaticCue: "Feel the peak contraction at the top of the movement",
              videoInfo: {
                title: "How To Do Concentration Curls",
                instructor: "Max Euceda",
                duration: "2:00",
                url: "https://youtube.com/shorts/cHxRJdSVIkA?si=Lb8uDJwWP4el60S1"
              }
            },
            {
              name: "Plate Front Raise with Hold – 2x45 seconds",
              technicalCue: "Maintain height at shoulder level, breathe steadily",
              videoInfo: {
                title: "Plate Front Raise Technique",
                instructor: "Davis Diley",
                duration: "3:10",
                url: "https://youtube.com/shorts/VaXm6lxW8Hs?si=_FzY90AQX6Vti4P8"
              }
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Cross-body shoulder stretch (30 sec/side)",
          "Triceps overhead stretch (30 sec/side)",
          "Biceps stretch (30 sec/side)",
          "Prone Y-T-W-L sequence (8 reps each position)",
          "Gentle neck stretches (30 sec each direction)"
        ],
        journalPrompt: "Which movements felt most precise today? Where did I discover new awareness in my shoulders or arms?"
      },
      hiddenHint: "Four movements of the shoulder: flexion, extension, abduction, adduction."
    },
    {
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
                url: "https://youtube.com/shorts/uUF1fkvyqco?si=uO0hakQSwaez8m7_"
              }
            },
            {
              name: "Renegade Row to Push-Up – 3x8",
              technicalCue: "Maintain a stable plank position throughout",
              videoInfo: {
                title: "Renegade Row Push Up Combo",
                instructor: "Calisthenic Movement",
                duration: "3:20",
                url: "https://youtu.be/731lQp2shpY?si=2sjliQvd4PiOTKMm"
              }
            },
            {
              name: "Medicine Ball Slam – 3x10",
              somaticCue: "Connect with the explosive power generated from your hips",
              videoInfo: {
                title: "How To Do Medicine Ball Slams",
                instructor: "Athlean-X",
                duration: "4:30",
                url: "https://youtu.be/QxYhFwMd1Ks?si=76QhxrQaoNJNAAYY"
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
                url: "https://youtube.com/shorts/s7qcUKSeDf4?si=li0iBA4LB2U_fheG"
              }
            },
            {
              name: "Pull-Up Bar Hanging Knee Raises – 3x12",
              somaticCue: "Feel your core initiating the movement, not momentum",
              videoInfo: {
                title: "How To Do Hanging Knee Raises",
                instructor: "Calisthenic Movement",
                duration: "3:45",
                url: "https://youtu.be/sqDdHFC1KYk?si=PCbgmIgy7s5t-bfR"
              }
            },
            {
              name: "Battle Rope Waves – 3x30 seconds",
              technicalCue: "Generate movement from shoulders while maintaining stable base",
              videoInfo: {
                title: "Battle Rope Training",
                instructor: "Onnit Academy",
                duration: "5:15",
                url: "https://youtu.be/z4ySEjuaYh8?si=k9E422KpbG0WurRS"
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
                url: "https://youtu.be/xQdyIrSSFnE?si=KWcLEbe9OncTNp_e"
              }
            },
            {
              name: "Bear Crawl – 3x30 seconds",
              somaticCue: "Feel the contralateral (opposite arm/leg) connection",
              videoInfo: {
                title: "Bear Crawl Exercise",
                instructor: "FunctionalMovement",
                duration: "2:30",
                url: "https://youtu.be/4d52Y9W2M0g?si=AwzHE0F9BnHXvq3X"
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
    },
    {
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
              name: "Walking meditation (20 minutes)",
              videoInfo: {
                title: "Walking Meditation",
                instructor: "Mindfulness Teacher",
                duration: "10:00",
                url: "https://youtu.be/zZnNO1myCMg?si=_rZ_qfSNxV_cAmWU"
              }
            },
            {
              name: "Tai Chi-inspired flowing movements (10 minutes)",
              videoInfo: {
                title: "Tai Chi Flow",
                instructor: "Tai Chi Master",
                duration: "12:00",
                url: "https://youtube.com/shorts/Hal2cWNwgWU?si=dadFsTaTOFWLaaPf"
              }
            },
            {
              name: "Gentle joint mobility sequence (10 minutes)",
              videoInfo: {
                title: "Joint Mobility Sequence",
                instructor: "Movement Coach",
                duration: "15:00",
                url: "https://youtu.be/ge6a8mcKOsY?si=xrTj2LoLwT7gSPUn"
              }
            }
          ]
        },
        {
          title: "Option B: Restorative Practice",
          exercises: [
            {
              name: "Legs-up-the-wall pose (5 minutes)"
            },
            {
              name: "Supported child's pose (5 minutes)"
            },
            {
              name: "Reclined bound angle pose (5 minutes)"
            },
            {
              name: "Supported bridge pose (5 minutes)"
            },
            {
              name: "Savasana (10 minutes)"
            }
          ]
        }
      ],
      cooldown: {
        items: [],
        journalPrompt: "How does intentional rest feel different from passive rest? What areas of my body seemed to need the most care today?"
      },
      hiddenHint: "Six aspects of recovery: sleep, nutrition, hydration, stress management, tissue work, and gentle movement."
    },
    {
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
    }
  ]
};
