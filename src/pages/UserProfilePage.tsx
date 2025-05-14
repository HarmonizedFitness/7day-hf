
import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const UserProfilePage: React.FC = () => {
  const logoUrl = "/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png";

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 bg-[#D3E4FD]">
      <header className="flex items-center mb-8">
        <Link to="/home">
          <Button variant="ghost" className="p-0 mr-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Button>
        </Link>
        <div className="flex items-center">
          <img src={logoUrl} alt="HF Logo" className="w-12 h-12 mr-4" />
          <h1 className="text-2xl font-bold">Your Profile</h1>
        </div>
      </header>

      <div className="mb-8">
        <UserProfile />
      </div>

      <footer className="text-center text-sm text-gray-500 mt-12">
        <p>© 7 Days of Harmony - Transformational Training Program</p>
        <p>Created by Kyle McCormick - Veteran, Elite Fitness Trainer, and Spiritual Practitioner</p>
      </footer>
    </div>
  );
};

export default UserProfilePage;
