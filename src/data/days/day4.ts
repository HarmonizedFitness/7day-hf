
import { WorkoutDay } from '../types';

export const day4: WorkoutDay = {
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
};
