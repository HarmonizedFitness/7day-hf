
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WeekProgress from "@/components/WeekProgress";
const HomePage: React.FC = () => {
  // Logo would normally be imported from an assets folder
  const logoUrl = "/lovable-uploads/f278d815-4b87-43b7-a10a-958e0cd955e9.png";
  return <div className="container max-w-4xl mx-auto px-4 py-8 bg-[#D3E4FD]">
      <header className="text-center mb-12">
        <img src={logoUrl} alt="Harmonized Fitness Logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-burnt-orange mb-2">Harmonized Fitness</h1>
        <h2 className="text-xl md:text-2xl font-medium text-charcoal mb-4">12-Week Transformational Program</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-burnt-orange to-charcoal mx-auto"></div>
      </header>

      <section className="bg-[#D3E4FD]-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Week 1: Establishing Foundations</h3>
        <p className="mb-6 leading-relaxed">
          This week is all about building awareness, establishing proper movement patterns, and 
          connecting with your body's innate intelligence. Each day focuses on different movement 
          patterns, gradually introducing you to the Harmonized Fitness approach.
        </p>
        
        <WeekProgress />
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Program Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md border-gray-200">
            <h4 className="text-lg font-medium text-burnt-orange mb-2">Daily Structure</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Message from Dr. U</li>
              <li>Harmonize Your Body Warm-up</li>
              <li>Strength & Movement Circuits</li>
              <li>Cool Down & Reflect</li>
              <li>Dr. U's Hidden Hint</li>
            </ul>
          </div>
          
          <div className="p-4 border rounded-md border-gray-200">
            <h4 className="text-lg font-medium text-burnt-orange mb-2">Training Focus</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Strength development</li>
              <li>Somatic awareness</li>
              <li>Movement integration</li>
              <li>Mindful reflection</li>
              <li>Recovery optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center">
        <p className="italic mb-4">Ready to start your transformational journey?</p>
        <Button asChild size="lg" className="bg-burnt-orange hover:bg-burnt-orange/90 text-white px-8">
          <Link to="/day/1">Start Day 1</Link>
        </Button>
      </section>
    </div>;
};
export default HomePage;
