
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Calendar, LogOut } from "lucide-react";
import ProgramSwitcher from "./ProgramSwitcher";
import UserTierDisplay from "./UserTierDisplay";

interface UserProfile {
  id: string;
  username: string | null;
  full_name: string | null;
  email: string | null;
  workout_type: string | null;
  created_at: string;
}

const UserProfile: React.FC = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    full_name: '',
  });

  useEffect(() => {
    fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;

      setProfile(data);
      setFormData({
        username: data.username || '',
        full_name: data.full_name || '',
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast({
        title: "Error loading profile",
        description: "Failed to load your profile information",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    if (!user) return;

    setUpdating(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          username: formData.username,
          full_name: formData.full_name,
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully",
      });

      fetchProfile();
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Update failed",
        description: "Failed to update your profile",
        variant: "destructive",
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have been signed out successfully",
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Sign out failed",
        description: "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Card className="bg-stone-700/40 border-stone-600">
          <CardContent className="p-6">
            <div className="text-center text-gray-400">Loading profile...</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* User Tier Display */}
      <UserTierDisplay />

      {/* Profile Information */}
      <Card className="bg-stone-700/40 border-stone-600">
        <CardHeader className="pb-4">
          <CardTitle className="text-white font-playfair text-xl flex items-center gap-2">
            <User className="h-6 w-6 text-burnt-orange" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-300">Username</Label>
              <Input
                id="username"
                value={formData.username}
                onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                className="bg-stone-800/50 border-stone-600 text-white"
                placeholder="Enter username"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="full_name" className="text-gray-300">Full Name</Label>
              <Input
                id="full_name"
                value={formData.full_name}
                onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                className="bg-stone-800/50 border-stone-600 text-white"
                placeholder="Enter full name"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <Mail className="h-4 w-4" />
            <span>{profile?.email}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="h-4 w-4" />
            <span>Member since {new Date(profile?.created_at || '').toLocaleDateString()}</span>
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              onClick={updateProfile}
              disabled={updating}
              className="bg-burnt-orange hover:bg-burnt-orange/80"
            >
              {updating ? 'Updating...' : 'Update Profile'}
            </Button>
            
            <Button 
              onClick={handleSignOut}
              variant="outline"
              className="border-red-500 text-red-400 hover:bg-red-500/10"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Program Selection */}
      <Card className="bg-stone-700/40 border-stone-600">
        <CardHeader className="pb-4">
          <CardTitle className="text-white font-playfair text-xl">
            Program Selection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProgramSwitcher />
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
