
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { getAllPrograms, ProgramType } from '@/data/programs';
import { useAdmin } from '@/contexts/AdminContext';
import { useProgress } from '@/contexts/ProgressContext';
import { Settings, X, Trash2 } from 'lucide-react';

const AdminProgramSelector: React.FC = () => {
  const { isAdminMode, currentAdminProgram, setAdminProgram, exitAdminMode } = useAdmin();
  const { clearAllProgress } = useProgress();
  const [isClearingProgress, setIsClearingProgress] = useState(false);
  const programs = getAllPrograms();

  if (!isAdminMode) return null;

  const handleClearProgress = async () => {
    setIsClearingProgress(true);
    try {
      await clearAllProgress();
    } finally {
      setIsClearingProgress(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white p-2 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            <span className="font-bold">ADMIN MODE</span>
          </div>
          
          <div className="flex gap-2">
            {programs.map((program) => (
              <Button
                key={program.id}
                onClick={() => setAdminProgram(program.id)}
                variant={currentAdminProgram === program.id ? "secondary" : "outline"}
                size="sm"
                className={`text-xs ${
                  currentAdminProgram === program.id 
                    ? 'bg-white text-red-600' 
                    : 'border-white text-white hover:bg-white hover:text-red-600'
                }`}
              >
                {program.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-white text-white">
            Current: {programs.find(p => p.id === currentAdminProgram)?.name}
          </Badge>
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-red-600"
                disabled={isClearingProgress}
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Clear Progress
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Clear All Progress</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete all progress tracking and journal entries for the{' '}
                  <strong>{programs.find(p => p.id === currentAdminProgram)?.name}</strong> program.
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleClearProgress}
                  className="bg-red-600 hover:bg-red-700"
                  disabled={isClearingProgress}
                >
                  {isClearingProgress ? 'Clearing...' : 'Clear All Progress'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          
          <Button
            onClick={exitAdminMode}
            variant="outline"
            size="sm"
            className="border-white text-white hover:bg-white hover:text-red-600"
          >
            <X className="h-4 w-4" />
            Exit Admin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminProgramSelector;
