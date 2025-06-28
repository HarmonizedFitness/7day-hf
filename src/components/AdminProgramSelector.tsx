
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getAllPrograms, ProgramType } from '@/data/programs';
import { useAdmin } from '@/contexts/AdminContext';
import { Settings, X } from 'lucide-react';

const AdminProgramSelector: React.FC = () => {
  const { isAdminMode, currentAdminProgram, setAdminProgram, exitAdminMode } = useAdmin();
  const programs = getAllPrograms();

  if (!isAdminMode) return null;

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
