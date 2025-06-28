import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
interface Profile {
  username: string;
  full_name: string;
  avatar_url: string | null;
}
const UserProfile: React.FC = () => {
  const {
    user,
    updateProfile,
    signOut
  } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    full_name: ''
  });
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const {
          data,
          error
        } = await supabase.from('profiles').select('username, full_name, avatar_url').eq('id', user.id).single();
        if (error) throw error;
        setProfile(data);
        setFormData({
          username: data.username || '',
          full_name: data.full_name || ''
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);
  const handleEditToggle = () => {
    setEditing(!editing);
    if (!editing && profile) {
      setFormData({
        username: profile.username || '',
        full_name: profile.full_name || ''
      });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    try {
      await updateProfile({
        username: formData.username,
        full_name: formData.full_name
      });
      setProfile({
        ...profile!,
        username: formData.username,
        full_name: formData.full_name
      });
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  if (loading) {
    return <div className="flex items-center justify-center p-4">
        <Loader2 className="h-8 w-8 animate-spin text-burnt-orange" />
      </div>;
  }
  if (!user || !profile) {
    return <div className="text-center p-4">
        <p>Please log in to view your profile</p>
      </div>;
  }
  return <div className="bg-white rounded-lg shadow p-6 px-[25px] mx-[120px]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Avatar className="h-16 w-16">
            {profile.avatar_url ? <AvatarImage src={profile.avatar_url} alt={profile.username} /> : <AvatarFallback className="bg-burnt-orange text-white">
                {profile.full_name ? profile.full_name[0].toUpperCase() : <User />}
              </AvatarFallback>}
          </Avatar>
          <div className="ml-4">
            <h3 className="font-bold text-xl">{profile.full_name || 'User'}</h3>
            <p className="text-gray-500">@{profile.username || 'username'}</p>
          </div>
        </div>

        <Button variant="outline" onClick={handleEditToggle} className="ml-auto">
          {editing ? 'Cancel' : 'Edit Profile'}
        </Button>
      </div>

      {editing ? <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <Input id="username" name="username" value={formData.username} onChange={handleChange} className="max-w-md" />
          </div>

          <div>
            <label htmlFor="full_name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <Input id="full_name" name="full_name" value={formData.full_name} onChange={handleChange} className="max-w-md" />
          </div>

          <div className="pt-2">
            <Button type="submit" className="bg-burnt-orange hover:bg-burnt-orange/90">
              {loading ? <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </> : 'Save Changes'}
            </Button>
          </div>
        </form> : <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-1">Email</p>
            <p>{user.email}</p>
          </div>

          <Button onClick={() => signOut()} variant="outline" className="mt-4 text-red-600 border-red-600 hover:bg-red-50">
            Sign Out
          </Button>
        </div>}
    </div>;
};
export default UserProfile;