
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  Crown, 
  Heart,
  MessageSquare,
  Star,
  Users
} from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface Creator {
  id: string;
  full_name?: string;
  username?: string;
  bio?: string;
  avatar_url?: string;
  banner_url?: string;
  subscription_price?: number;
  is_creator: boolean;
}

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('is_creator', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCreators(data || []);
    } catch (error) {
      console.error('Error fetching creators:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCreators = creators.filter(creator =>
    creator.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    creator.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    creator.bio?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFavorite = async (creatorId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('favorites')
        .upsert({ user_id: user.id, creator_id: creatorId });

      if (error) throw error;
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 pb-20">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-3 mb-4">
            <Crown className="h-8 w-8 text-purple-400" />
            <h1 className="text-2xl font-bold text-white">Explorar</h1>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar criadores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-700 border-gray-600 text-white"
            />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {filteredCreators.length === 0 ? (
          <div className="text-center text-gray-400 mt-12">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Nenhum criador encontrado</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCreators.map((creator) => (
              <Card key={creator.id} className="bg-gray-800/50 border-gray-700 overflow-hidden">
                {/* Banner */}
                <div className="h-24 bg-gradient-to-r from-purple-500 to-pink-500 relative">
                  {creator.banner_url && (
                    <img 
                      src={creator.banner_url} 
                      alt="Banner"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <Button
                    onClick={() => handleFavorite(creator.id)}
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 text-white hover:bg-white/20"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <CardContent className="p-4 -mt-8 relative z-10">
                  {/* Avatar */}
                  <div className="flex justify-center mb-3">
                    <Avatar className="h-16 w-16 border-4 border-gray-800">
                      <AvatarImage src={creator.avatar_url} />
                      <AvatarFallback className="bg-purple-600 text-white">
                        {creator.full_name?.[0] || creator.username?.[0] || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-white font-semibold">
                      {creator.full_name || creator.username}
                    </h3>
                    {creator.username && (
                      <p className="text-gray-400 text-sm">@{creator.username}</p>
                    )}
                    {creator.bio && (
                      <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                        {creator.bio}
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-center mb-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">
                      R$ {creator.subscription_price?.toFixed(2) || '29,90'}/mês
                    </Badge>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => navigate(`/creator/${creator.id}`)}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      size="sm"
                    >
                      <Users className="h-4 w-4 mr-1" />
                      Ver Perfil
                    </Button>
                    <Button
                      onClick={() => navigate(`/chat?user=${creator.id}`)}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Explore;
