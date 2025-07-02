
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Play, Circle } from 'lucide-react';
import { WorkoutTheme } from '@/data/workoutThemes';

interface SampleDayPreviewProps {
  theme: WorkoutTheme;
  dayTitle: string;
  progress: number;
}

const SampleDayPreview: React.FC<SampleDayPreviewProps> = ({
  theme,
  dayTitle,
  progress
}) => {
  const programSections = [
    { title: "✨ Harmonize Your Body", time: "10 Minutes", desc: "Breathwork & mobility preparation" },
    { title: "💪 Strength & Movement", time: "40 Minutes", desc: "Progressive circuit training" },
    { title: "🧘 Cool Down & Reflect", time: "10 Minutes", desc: "Integration & journaling" }
  ];

  return (
    <Card 
      className="overflow-hidden shadow-xl border-0"
      style={{ 
        background: `linear-gradient(135deg, ${theme.background})`,
        borderTop: `4px solid ${theme.primary}`
      }}
    >
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: theme.primary }}
          >
            <Play className="h-4 w-4 text-white" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-inter font-bold text-gray-900">
            Day 1 Preview: {dayTitle}
          </CardTitle>
        </div>
        <CardDescription className="text-base md:text-lg font-inter text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Experience a complete day-in-the-life with our {theme.name} program. 
          Each session combines mindful movement, strength building, and reflection.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {/* Program Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programSections.map((section, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl bg-white/90 backdrop-blur-sm border shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-inter font-bold text-lg text-gray-900 mb-2">
                {section.title}
              </h4>
              <p className="text-sm font-semibold mb-2" style={{ color: theme.primary }}>
                {section.time}
              </p>
              <p className="text-sm text-gray-600 font-inter leading-relaxed">
                {section.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sample Exercise Preview */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
          <h4 className="font-inter font-bold text-xl text-gray-900 mb-4 text-center">
            Sample Exercise Preview
          </h4>
          <div 
            className="p-4 rounded-lg border-l-4 mb-4"
            style={{ 
              backgroundColor: theme.cardBg,
              borderColor: theme.primary 
            }}
          >
            <h5 className="font-inter font-semibold text-lg text-gray-900 mb-2">
              Foundation Squats
            </h5>
            <p className="text-sm text-gray-700 italic mb-2 font-inter">
              <strong>Technical Cue:</strong> Keep your chest proud, weight in your heels
            </p>
            <p className="text-sm text-gray-600 italic font-inter">
              <strong>Somatic Cue:</strong> Feel your roots growing into the earth with each rep
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-600 font-inter">
              <Play className="h-4 w-4" />
              <span>Video demonstrations included in full program</span>
            </div>
          </div>
        </div>

        {/* Progress Preview */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="font-inter font-semibold text-gray-900">Week 1 Progress Preview</span>
            <span className="text-sm text-gray-600 font-inter">{progress}% Complete</span>
          </div>
          <Progress value={progress} className="h-3 mb-4" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {Array.from({ length: 7 }, (_, i) => (
              <div 
                key={i}
                className="text-center p-3 rounded-lg bg-gray-50 border hover:bg-gray-100 transition-colors"
              >
                <Circle className="h-6 w-6 text-gray-300 mx-auto mb-1" />
                <span className="text-xs font-inter font-medium text-gray-600">
                  Day {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SampleDayPreview;
