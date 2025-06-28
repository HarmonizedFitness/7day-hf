
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ProgramType } from '@/data/programs';

interface AdminContextType {
  isAdminMode: boolean;
  currentAdminProgram: ProgramType;
  toggleAdminMode: () => void;
  setAdminProgram: (program: ProgramType) => void;
  exitAdminMode: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [currentAdminProgram, setCurrentAdminProgram] = useState<ProgramType>('bodyweight');

  // Keyboard shortcut to toggle admin mode (Ctrl+Shift+A)
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        toggleAdminMode();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const toggleAdminMode = () => {
    setIsAdminMode(prev => !prev);
    if (!isAdminMode) {
      console.log('🔧 Admin Mode Activated - Use Ctrl+Shift+A to toggle');
    } else {
      console.log('👤 Admin Mode Deactivated');
    }
  };

  const setAdminProgram = (program: ProgramType) => {
    setCurrentAdminProgram(program);
    console.log(`🏋️ Admin switched to: ${program}`);
  };

  const exitAdminMode = () => {
    setIsAdminMode(false);
    console.log('👤 Admin Mode Deactivated');
  };

  const value = {
    isAdminMode,
    currentAdminProgram,
    toggleAdminMode,
    setAdminProgram,
    exitAdminMode
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
