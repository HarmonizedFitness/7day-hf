
import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/contexts/ProgressContext";
import { useToast } from "@/components/ui/use-toast";

interface JournalPromptProps {
  dayId: number;
  prompt: string;
}

const JournalPrompt: React.FC<JournalPromptProps> = ({ dayId, prompt }) => {
  const { saveJournalEntry, getJournalEntry } = useProgress();
  const [entry, setEntry] = useState("");
  const { toast } = useToast();
  
  useEffect(() => {
    const savedEntry = getJournalEntry(dayId);
    setEntry(savedEntry);
  }, [dayId, getJournalEntry]);
  
  const handleSave = () => {
    saveJournalEntry(dayId, entry);
    toast({
      title: "Journal Entry Saved",
      description: "Your reflection has been saved successfully.",
      duration: 3000,
    });
  };
  
  return (
    <div className="journal-prompt">
      <h4 className="text-lg mb-2">Journal Prompt</h4>
      <p className="italic mb-4">{prompt}</p>
      <Textarea
        placeholder="Write your reflections here..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="min-h-[120px] mb-3"
      />
      <Button onClick={handleSave} className="bg-burnt-orange hover:bg-burnt-orange/80">
        Save Reflection
      </Button>
    </div>
  );
};

export default JournalPrompt;
