
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
      title: "SPINAL MOBILITY & POSTURE",
      subtitle: "Awakening Your Spine",
      message: "Welcome to Day 1 of your Stretching journey! Today we focus on awakening your spine and establishing the foundation for healthy posture. Your spine is the central highway of your nervous system, and by mastering the seemingly insignificant movements of spinal mobility, you unlock the potential for significant mastery over your entire body's alignment and function. Think of your spine as a beautiful string of pearls - each vertebra working in harmony to create fluid, graceful movement.",
      warmup: {
        breathwork: "Spinal wave breathing - imagine breath moving up and down your spine (5 minutes)",
        mobilityItems: [
          "Neck rolls and shoulder shrugs (2 minutes) - 5 circles each direction",
          "Seated spinal waves (2 minutes) - 8-10 slow, mindful waves",
          "Standing side bends (2 minutes) - 8 bends each side",
          "Gentle torso twists (2 minutes) - 10 twists each direction",
          "Hip circles (2 minutes) - 8 circles each direction",
          "Arm circles and chest opening (2 minutes) - prepare front body"
        ],
        intention: "I honor my spine as the foundation of my strength and grace. With each breath, I create space for healing and alignment.",
        somaticCue: "Feel each vertebra as a unique joint, capable of individual movement. Visualize your spine as a flowing river of energy, each vertebra like a stepping stone allowing energy to flow freely."
      },
      circuits: [
        {
          title: "Spinal Mobility Circuit A",
          exercises: [
            {
              name: "Cat-Cow Stretch – 5 minutes continuous",
              technicalCue: "Hands and knees, move slowly, articulating each vertebra. Inhale arch (Cow), exhale round (Cat)",
              somaticCue: "Feel like you're painting the ceiling with your spine in Cat, and opening your heart to the sky in Cow",
              videoInfo: {
                title: "Cat Cow Stretch | Spinal Mobility Foundation",
                instructor: "Yoga with Adriene",
                duration: "8:30",
                url: "https://www.youtube.com/watch?v=kqnua4rHVVA"
              }
            },
            {
              name: "Seated Spinal Twist – 5 minutes (2.5 each side)",
              technicalCue: "Cross-legged, right hand behind, left hand on right knee. Keep both sitting bones grounded",
              somaticCue: "Imagine wringing out tension like a wet towel, feeling space create between your ribs",
              videoInfo: {
                title: "Seated Spinal Twist | Gentle Detox Stretch",
                instructor: "DoYogaWithMe",
                duration: "6:45",
                url: "https://www.youtube.com/watch?v=6Q8_bBl6wvE"
              }
            },
            {
              name: "Child's Pose with Side Reach – 5 minutes (2.5 each side)",
              technicalCue: "From hands and knees, sit back on heels, walk hands to right then left",
              somaticCue: "Feel the gentle opening along your side body, like a flower opening to the sun"
            }
          ]
        },
        {
          title: "Spinal Integration Circuit B",
          exercises: [
            {
              name: "Thoracic Extension Series – 3x8",
              technicalCue: "Focus on opening the upper back, hands behind head, extend from upper spine",
              somaticCue: "Notice the expansion across your chest and between shoulder blades"
            },
            {
              name: "Spinal Wave Flow – 3x5 complete waves",
              technicalCue: "Standing, create wave motion from head to tailbone, then reverse",
              somaticCue: "Feel the fluid mobility of your spine, like seaweed flowing in ocean currents"
            },
            {
              name: "Supported Backbend – 3x30 seconds",
              technicalCue: "Lie over bolster or rolled towel, arms open wide, breathe deeply",
              somaticCue: "Feel your heart opening and your spine gently extending"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Child's pose with side reaches (2 minutes each side)",
          "Gentle neck stretches (30 seconds each direction)",
          "Supine spinal twist (90 seconds each side)",
          "Spinal meditation - awareness of each vertebra (5 minutes)",
          "Deep relaxation with spinal focus (10 minutes)"
        ],
        journalPrompt: "How did my spine feel before and after today's practice? What areas felt tight or restricted? Where did I feel the most opening and freedom?"
      },
      hiddenHint: "A flexible spine is the foundation of a flexible life. Master the small movements, master it all."
    },
    {
      id: 2,
      title: "HIP OPENING FOUNDATION",
      subtitle: "Unlocking Your Power Center",
      message: "Today we focus on your hips - the center of your power and the crossroads of your body. Your hips connect your upper and lower body, and their mobility affects everything from your posture to your athletic performance. Modern life often locks our hips in limited positions, but today we reclaim their full range of motion and natural freedom.",
      warmup: {
        breathwork: "Hip-centered breathing - breathe into your pelvis and lower back (5 minutes)",
        mobilityItems: [
          "Hip circles standing (2 minutes) - large, slow circles each direction",
          "Leg swings front to back (2 minutes) - 10 each leg",
          "Leg swings side to side (2 minutes) - 10 each leg",
          "Walking knee hugs (2 minutes) - 10 steps total",
          "Walking figure-4 stretch (2 minutes) - ankle to opposite knee",
          "Hip flexor marches (2 minutes) - high knees with hip focus"
        ],
        intention: "My hips are free and mobile. I move with grace and power from my center.",
        somaticCue: "Feel your hips as the center of your movement universe. Notice how hip mobility affects your entire body's freedom."
      },
      circuits: [
        {
          title: "Hip Opening Circuit A",
          exercises: [
            {
              name: "90/90 Hip Stretch – 8 minutes (4 each side)",
              technicalCue: "Sit with both legs at 90 degrees, lean forward over front leg, then rotate to back leg",
              somaticCue: "Feel the deep opening in your hip capsule, breathe into any resistance",
              videoInfo: {
                title: "90/90 Hip Stretch | Deep Hip Mobility",
                instructor: "Athlean-X",
                duration: "7:20",
                url: "https://www.youtube.com/watch?v=JBHzXF-mVjY"
              }
            },
            {
              name: "Pigeon Pose Progression – 6 minutes (3 each side)",
              technicalCue: "From table top, bring right knee forward, extend left leg back, fold forward",
              somaticCue: "Feel the deep hip opener, breathe into any emotional release that may arise",
              videoInfo: {
                title: "Pigeon Pose Tutorial | Hip Opening Sequence",
                instructor: "Yoga with Kassandra",
                duration: "12:15",
                url: "https://www.youtube.com/watch?v=0_zPqA65Nok"
              }
            },
            {
              name: "Happy Baby Pose – 3 minutes",
              technicalCue: "Lie on back, grab outside edges of feet, knees toward armpits",
              somaticCue: "Feel like a happy baby, playful and free, gentle rocking side to side"
            }
          ]
        },
        {
          title: "Hip Integration Circuit B",
          exercises: [
            {
              name: "Low Lunge Hip Flexor Stretch – 4 minutes (2 each side)",
              technicalCue: "Step right foot forward, lower left knee, sink hips forward and down",
              somaticCue: "Feel the opening in the front of your hip, the release of stored tension"
            },
            {
              name: "Butterfly Stretch Progression – 4 minutes",
              technicalCue: "Sit with soles of feet together, gently fold forward, breathe deeply",
              somaticCue: "Feel your inner thighs releasing, your hips opening like a flower"
            },
            {
              name: "Hip Circles on Back – 3 minutes",
              technicalCue: "Lie on back, knees to chest, circle knees in large circles",
              somaticCue: "Feel the gentle massage of your hip joints, the freedom of movement"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Supine figure-4 stretch (90 seconds each leg)",
          "Knees to chest gentle rock (2 minutes)",
          "Supine hip circles (2 minutes)",
          "Hip flexor release in child's pose (3 minutes)",
          "Hip meditation - gratitude for your mobility (5 minutes)"
        ],
        journalPrompt: "How did my hips feel before and after today's practice? What emotions or memories arose during the deep hip openers? Where do I feel more freedom in my body?"
      },
      hiddenHint: "Your hips hold the stories of your life. As you open them, you release not just physical tension, but emotional patterns too."
    },
    {
      id: 3,
      title: "SHOULDER & NECK RELEASE",
      subtitle: "Freedom from Modern Tension",
      message: "Today we address the area where most modern tension accumulates - your shoulders and neck. These areas bear the weight of our stress, our posture habits, and our emotional burdens. Through mindful stretching and release work, we'll restore natural alignment and freedom to your upper body, allowing you to carry yourself with grace and ease.",
      warmup: {
        breathwork: "Shoulder-releasing breath - breathe into your upper back and shoulders (5 minutes)",
        mobilityItems: [
          "Gentle neck rolls (2 minutes) - slow, mindful circles each direction",
          "Shoulder blade squeezes (2 minutes) - 15 slow squeezes",
          "Arm circles forward and back (2 minutes) - large, slow circles",
          "Cross-body arm swings (2 minutes) - gentle momentum",
          "Shoulder shrugs and rolls (2 minutes) - release holding patterns",
          "Wall angels (2 minutes) - slide arms up and down wall"
        ],
        intention: "I release all tension from my shoulders and neck. I carry myself with grace and ease.",
        somaticCue: "Feel the weight of the world lifting from your shoulders. Notice how releasing your shoulders affects your entire posture and breathing."
      },
      circuits: [
        {
          title: "Shoulder Release Circuit A",
          exercises: [
            {
              name: "Doorway Chest Stretch – 6 minutes (2 each position)",
              technicalCue: "Forearm on doorframe, step forward, hold. Try low, middle, and high positions",
              somaticCue: "Feel your chest opening, your shoulders releasing forward posture",
              videoInfo: {
                title: "Doorway Chest Stretch | Posture Correction",
                instructor: "Bob & Brad",
                duration: "5:45",
                url: "https://www.youtube.com/watch?v=L8DQHZ-ZhCg"
              }
            },
            {
              name: "Upper Trap Stretch – 6 minutes (3 each side)",
              technicalCue: "Sit tall, ear to shoulder, opposite hand reaches toward floor",
              somaticCue: "Feel the gentle lengthening along the side of your neck, breathe into the stretch",
              videoInfo: {
                title: "Upper Trap Stretch | Neck Tension Relief",
                instructor: "Athlean-X",
                duration: "4:30",
                url: "https://www.youtube.com/watch?v=X2ET3fVbKQs"
              }
            },
            {
              name: "Eagle Arms Stretch – 4 minutes (2 each side)",
              technicalCue: "Wrap arms around yourself, lift elbows, drop chin toward chest",
              somaticCue: "Feel the stretch between your shoulder blades, the opening of your upper back"
            }
          ]
        },
        {
          title: "Neck Integration Circuit B",
          exercises: [
            {
              name: "Levator Scapulae Stretch – 4 minutes (2 each side)",
              technicalCue: "Look down and away, hand on back of head for gentle pressure",
              somaticCue: "Feel the deep muscles of your neck releasing, the freedom returning"
            },
            {
              name: "Thoracic Spine Extension – 4 minutes",
              technicalCue: "Hands behind head, extend upper back over chair or foam roller",
              somaticCue: "Feel your upper back opening, counteracting forward head posture"
            },
            {
              name: "Neck Retraction Series – 3 minutes",
              technicalCue: "Gently draw chin back, creating length in back of neck",
              somaticCue: "Feel your head finding its natural position over your shoulders"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Gentle neck stretches in all directions (2 minutes)",
          "Shoulder blade releases (2 minutes)",
          "Cross-body shoulder stretch (90 seconds each arm)",
          "Supported fish pose (5 minutes) - heart opening",
          "Neck and shoulder meditation (5 minutes) - release and gratitude"
        ],
        journalPrompt: "How did my neck and shoulders feel before and after today's practice? What patterns of tension did I notice? How does releasing this area affect my overall sense of well-being?"
      },
      hiddenHint: "Your shoulders carry more than physical weight - they carry your emotional burdens. As you release them, you free yourself in more ways than one."
    },
    {
      id: 4,
      title: "LOWER BODY INTEGRATION",
      subtitle: "Legs, Hips, and Foundation",
      message: "Today we integrate the mobility of your entire lower body - from your feet to your hips. Your legs are your foundation, your connection to the earth, and the source of your power. By creating length, strength, and mobility throughout your lower body, you build a foundation that supports not just your physical body, but your confidence and stability in life.",
      warmup: {
        breathwork: "Grounding breath - feel your connection to the earth through your legs (5 minutes)",
        mobilityItems: [
          "Ankle circles and flexion (2 minutes) - awaken your foundation",
          "Calf raises and stretches (2 minutes) - prepare lower legs",
          "Leg swings all directions (2 minutes) - dynamic hip mobility",
          "Walking lunges (2 minutes) - integrate hip and leg movement",
          "Gentle squats (2 minutes) - full lower body activation",
          "Standing forward fold prep (2 minutes) - hamstring awakening"
        ],
        intention: "My lower body is strong, flexible, and free. I move with power and grace from my foundation.",
        somaticCue: "Feel your legs as pillars of strength and mobility. Notice how lower body freedom affects your entire sense of groundedness and power."
      },
      circuits: [
        {
          title: "Lower Body Mobility Circuit A",
          exercises: [
            {
              name: "Standing Forward Fold Progression – 6 minutes",
              technicalCue: "Hinge at hips, let arms hang, gentle sway, bend knees as needed",
              somaticCue: "Feel the entire back line of your body lengthening, from heels to head",
              videoInfo: {
                title: "Standing Forward Fold | Hamstring Flexibility",
                instructor: "Yoga with Adriene",
                duration: "8:15",
                url: "https://www.youtube.com/watch?v=g_tea8ZNk5A"
              }
            },
            {
              name: "Seated Forward Fold – 5 minutes",
              technicalCue: "Sit with legs extended, hinge forward from hips, keep spine long",
              somaticCue: "Feel the gentle lengthening of your hamstrings and back, breathe into any resistance"
            },
            {
              name: "Supine Hamstring Stretch – 6 minutes (3 each leg)",
              technicalCue: "Lie on back, extend one leg up, hold behind thigh or use strap",
              somaticCue: "Feel the isolated hamstring stretch, the freedom developing in your leg"
            }
          ]
        },
        {
          title: "Lower Body Integration Circuit B",
          exercises: [
            {
              name: "Quad Stretch Progression – 6 minutes (3 each leg)",
              technicalCue: "Standing or lying, bring heel to glute, keep knees together",
              somaticCue: "Feel the front of your thigh lengthening, the balance challenge engaging your core"
            },
            {
              name: "IT Band and TFL Stretch – 4 minutes (2 each side)",
              technicalCue: "Cross legs, lean away from stretched side, feel along outer thigh",
              somaticCue: "Feel the release along the side of your leg, the freedom in your hip"
            },
            {
              name: "Calf Stretch Series – 4 minutes (2 each leg)",
              technicalCue: "Step back, press heel down, try straight and bent knee versions",
              somaticCue: "Feel your lower leg releasing, your ankle gaining mobility"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Legs up the wall pose (5 minutes) - restore circulation",
          "Gentle hip circles lying down (2 minutes)",
          "Knee rocks side to side (2 minutes)",
          "Final forward fold (3 minutes) - integrate all the opening",
          "Lower body gratitude meditation (5 minutes)"
        ],
        journalPrompt: "How did my legs and hips feel before and after today's practice? What areas felt tight or restricted? How does having more mobile legs affect my sense of groundedness and power?"
      },
      hiddenHint: "Your legs are your roots. The deeper and more flexible your roots, the taller and stronger you can grow."
    },
    {
      id: 5,
      title: "FULL BODY FLOW",
      subtitle: "Connecting All Body Segments",
      message: "Today we integrate everything you've learned into flowing sequences that connect your entire body. True flexibility is not just about individual muscles or joints, but about how all parts of your body work together in harmony. Through flowing movements, we teach your body to move as one integrated, graceful system.",
      warmup: {
        breathwork: "Full-body breath - breathe into your entire torso, feeling expansion everywhere (5 minutes)",
        mobilityItems: [
          "Sun salutation flow (3 rounds) - connect breath and movement",
          "Spinal waves standing (2 minutes) - full spine mobility",
          "Hip circles and figure-8s (2 minutes) - pelvic freedom",
          "Arm circles and shoulder rolls (2 minutes) - upper body preparation",
          "Leg swings all directions (2 minutes) - lower body activation",
          "Full body shake and release (1 minute) - let go of tension"
        ],
        intention: "My body moves as one integrated, graceful system. I flow with ease and freedom through all of life's movements.",
        somaticCue: "Feel how each part of your body connects to every other part. Notice the continuous flow of energy and movement through your entire being."
      },
      circuits: [
        {
          title: "Flow Integration Circuit A",
          exercises: [
            {
              name: "Sun Salutation Flow – 10 minutes (5 rounds)",
              technicalCue: "Mountain pose to forward fold to low lunge to downward dog to plank to cobra to downward dog to lunge to forward fold to mountain",
              somaticCue: "Feel the continuous flow of movement, the integration of strength and flexibility",
              videoInfo: {
                title: "Sun Salutation A | Complete Flow Tutorial",
                instructor: "Yoga with Adriene",
                duration: "12:30",
                url: "https://www.youtube.com/watch?v=73sjOgAF7NU"
              }
            },
            {
              name: "Warrior Flow Sequence – 8 minutes (4 minutes each side)",
              technicalCue: "Warrior I to Warrior II to Side Angle to Triangle to Wide-Legged Forward Fold",
              somaticCue: "Feel the strength and grace of the warrior poses, the opening and lengthening"
            }
          ]
        },
        {
          title: "Flow Integration Circuit B",
          exercises: [
            {
              name: "Seated Flow Sequence – 8 minutes",
              technicalCue: "Seated forward fold to seated twist to bound angle to happy baby to supine twist",
              somaticCue: "Feel the continuous opening and release, the integration of all your flexibility work"
            },
            {
              name: "Standing Balance Flow – 6 minutes (3 each side)",
              technicalCue: "Tree pose to Warrior III to Standing Figure-4 to Standing Forward Fold",
              somaticCue: "Feel the challenge of balance combined with the opening of flexibility"
            },
            {
              name: "Restorative Flow – 6 minutes",
              technicalCue: "Child's pose to gentle backbend to supine twist to legs up wall",
              somaticCue: "Feel your body integrating all the work, settling into deep relaxation"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Gentle movement exploration (3 minutes) - move however feels good",
          "Full body stretch sequence (5 minutes) - touch every major area",
          "Progressive relaxation (5 minutes) - release from toes to head",
          "Integration breathing (3 minutes) - feel your whole body breathing",
          "Flow meditation (5 minutes) - appreciate your body's grace and mobility"
        ],
        journalPrompt: "How did it feel to move my body as one integrated system? What did I discover about the connections between different body parts? Where did I feel the most grace and flow?"
      },
      hiddenHint: "When your body moves as one, you discover that flexibility is not just physical - it's a way of being in the world with grace and adaptability."
    },
    {
      id: 6,
      title: "DEEP TISSUE RELEASE",
      subtitle: "Intensive Flexibility Work",
      message: "Today we go deeper into your flexibility practice, holding stretches longer and working with more intensity to create lasting change in your tissues. This is about patience, persistence, and the willingness to breathe through discomfort to find greater freedom. Deep tissue release requires both physical and mental strength - the strength to stay present with sensation and the wisdom to know your limits.",
      warmup: {
        breathwork: "Deep release breathing - long, slow breaths to prepare for intensive work (5 minutes)",
        mobilityItems: [
          "Gentle movement to warm tissues (3 minutes) - light movement all directions",
          "Joint mobility sequence (3 minutes) - ankles to neck",
          "Dynamic stretching (3 minutes) - prepare for static holds",
          "Breath awareness practice (2 minutes) - connect breath to sensation",
          "Intention setting (2 minutes) - prepare mentally for deep work",
          "Final warming movements (2 minutes) - ensure tissues are ready"
        ],
        intention: "I breathe through discomfort to find greater freedom. I trust my body's wisdom and respect its limits.",
        somaticCue: "Feel your breath as your guide through intensity. Notice how breathing into sensation can transform discomfort into opening."
      },
      circuits: [
        {
          title: "Deep Release Circuit A",
          exercises: [
            {
              name: "Deep Hip Opener Hold – 8 minutes (4 each side)",
              technicalCue: "Choose your deepest hip opener (pigeon, 90/90, or figure-4), hold with breath",
              somaticCue: "Breathe into the sensation, allow your body to slowly release and open",
              videoInfo: {
                title: "Deep Hip Opening | Long Hold Stretches",
                instructor: "Yin Yoga with Kassandra",
                duration: "15:20",
                url: "https://www.youtube.com/watch?v=GLy2rYHwUqY"
              }
            },
            {
              name: "Deep Hamstring Release – 6 minutes (3 each leg)",
              technicalCue: "Supine or seated, hold your deepest hamstring stretch, breathe steadily",
              somaticCue: "Feel the gradual lengthening, the tissue slowly releasing its grip"
            },
            {
              name: "Deep Shoulder and Chest Release – 6 minutes",
              technicalCue: "Doorway stretch or supported fish pose, hold with deep breathing",
              somaticCue: "Feel your heart opening, your shoulders releasing years of tension"
            }
          ]
        },
        {
          title: "Deep Release Circuit B",
          exercises: [
            {
              name: "Deep Spinal Twist – 6 minutes (3 each side)",
              technicalCue: "Seated or supine twist, hold deeply, breathe into your spine",
              somaticCue: "Feel the deep release through your spine, the wringing out of tension"
            },
            {
              name: "Deep Quad Release – 6 minutes (3 each leg)",
              technicalCue: "Lying quad stretch or low lunge variation, hold with patience",
              somaticCue: "Feel the front of your body lengthening, the hip flexors releasing"
            },
            {
              name: "Deep Calf and Achilles Release – 4 minutes (2 each leg)",
              technicalCue: "Wall calf stretch or downward dog variation, hold deeply",
              somaticCue: "Feel your lower legs releasing, your ankles gaining freedom"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Gentle counter-movements (3 minutes) - neutralize any intensity",
          "Full body gentle movement (3 minutes) - integrate the release",
          "Supported relaxation pose (10 minutes) - allow integration",
          "Body scan meditation (5 minutes) - notice the changes",
          "Gratitude practice (3 minutes) - appreciate your body's capacity for change"
        ],
        journalPrompt: "How did it feel to work with intensity and hold stretches for longer periods? What did I discover about my relationship with discomfort? Where do I feel the most significant release and opening?"
      },
      hiddenHint: "Deep change requires deep patience. The tissues that resist the most often hold the greatest potential for transformation."
    },
    {
      id: 7,
      title: "RESTORATIVE INTEGRATION",
      subtitle: "Gentle Restoration and Integration",
      message: "Today we complete your stretching journey with gentle, restorative practices that allow your body to integrate all the work you've done this week. This is not about pushing or striving, but about receiving, allowing, and honoring the transformation that has taken place. Restorative practice teaches us that sometimes the most profound healing happens when we simply allow ourselves to be supported and to rest.",
      warmup: {
        breathwork: "Restorative breathing - gentle, natural breath that soothes your nervous system (10 minutes)",
        mobilityItems: [
          "Gentle movement exploration (5 minutes) - move however feels nurturing",
          "Joint circles and gentle mobility (3 minutes) - honor your body's current state",
          "Soft spinal movements (3 minutes) - gentle waves and curves",
          "Mindful walking (3 minutes) - feel how your body moves differently now",
          "Gratitude body scan (3 minutes) - appreciate your body's journey",
          "Intention setting for integration (3 minutes) - how will you carry this forward"
        ],
        intention: "I honor my body's wisdom and capacity for healing. I integrate all the gifts of this week's practice with gratitude and grace.",
        somaticCue: "Feel how your body has changed over this week. Notice the new spaces, the increased freedom, the deeper sense of ease and grace."
      },
      circuits: [
        {
          title: "Restorative Integration Circuit A",
          exercises: [
            {
              name: "Supported Child's Pose – 8 minutes",
              technicalCue: "Use bolsters, pillows, or blankets for complete support, rest deeply",
              somaticCue: "Feel completely supported, allow your body to release into the earth",
              videoInfo: {
                title: "Restorative Child's Pose | Deep Relaxation",
                instructor: "Yoga with Bolster",
                duration: "10:45",
                url: "https://www.youtube.com/watch?v=M0xVPh8wWlE"
              }
            },
            {
              name: "Supported Fish Pose – 8 minutes",
              technicalCue: "Bolster or rolled blanket under shoulder blades, arms open wide",
              somaticCue: "Feel your heart opening gently, your chest expanding with each breath"
            },
            {
              name: "Legs Up the Wall – 10 minutes",
              technicalCue: "Lie with legs up wall or on chair, arms relaxed by sides",
              somaticCue: "Feel the gentle inversion restoring your circulation and calming your nervous system"
            }
          ]
        },
        {
          title: "Restorative Integration Circuit B",
          exercises: [
            {
              name: "Supported Twist – 8 minutes (4 each side)",
              technicalCue: "Side-lying with bolster between legs, completely supported",
              somaticCue: "Feel the gentle release through your spine, the soft opening"
            },
            {
              name: "Supported Forward Fold – 6 minutes",
              technicalCue: "Seated with bolster on legs, fold forward onto support",
              somaticCue: "Feel the gentle lengthening of your back body, the sense of turning inward"
            },
            {
              name: "Final Savasana – 15 minutes",
              technicalCue: "Lie completely supported with props as needed, cover with blanket",
              somaticCue: "Feel your body integrating all the work, settling into deep peace and restoration"
            }
          ]
        }
      ],
      cooldown: {
        items: [
          "Gentle awakening movements (3 minutes) - slowly return to activity",
          "Seated meditation (5 minutes) - honor your practice and progress",
          "Gratitude practice (5 minutes) - appreciate your body's capacity for change",
          "Integration intention setting (3 minutes) - how will you maintain this flexibility",
          "Closing breath work (5 minutes) - seal in the benefits of your practice"
        ],
        journalPrompt: "Reflecting on this week's stretching journey, how has my relationship with my body changed? What areas feel most transformed? How will I continue to honor my body's need for mobility and care? What gifts will I carry forward from this practice?"
      },
      hiddenHint: "True flexibility is not just about the body - it's about cultivating a flexible, adaptable, graceful approach to all of life. You have learned to bend without breaking."
    }
  ]
};
