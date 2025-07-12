import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProgramSelector from './ProgramSelector';
import { ProgramType } from '@/data/programs';

interface FirstProgramModalProps {
  open: boolean;
  onClose: () => void;
  onProgramSelected: (programType: ProgramType) => void;
}

const FirstProgramModal: React.FC<FirstProgramModalProps> = ({ open, onClose, onProgramSelected }) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Choose Your Free Program</DialogTitle>
      </DialogHeader>
      <ProgramSelector onProgramSelected={onProgramSelected} />
    </DialogContent>
  </Dialog>
);

export default FirstProgramModal; 