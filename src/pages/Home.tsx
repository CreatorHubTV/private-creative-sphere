
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import BottomNavigation from "@/components/BottomNavigation";
import { 
  Search, 
  TrendingUp, 
  Flame, 
  Users, 
  Heart,
  MessageSquare,
  Share,
  Bookmark,
  Crown,
  Play,
  Eye,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const trendingCreators = [
    { id: 1, username: "@bella.creator", subscribers: 1234, isLive: true, thumbnail: "gradient-purple" },
    { id: 2, username: "@maya.content", subscribers: 987, isLive: false, thumbnail: "gradient-pink" },
    { id: 3, username: "@luna.model", subscribers: 2156, isLive: true, thumbnail: "gradient-blue" },
    { id: 4, username: "@sofia.art", subscribers: 876, isLive: false, thumbnail: "gradient-green" },
  ];

  const featuredContent = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    creator: `@creator${i + 1}`,
    type: i % 3 === 0 ? "video" : "photo",
    likes: Math.floor(Math.random() * 500) + 50,
    isSubscribed: Math.random() > 0.7
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 pb-20">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Crown className="h-8 w-8 text-purple-400" />
            <h1 className="text-2xl font-bold text-white">CreatorHub</h1>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-300" />
              <Input
                placeholder="Buscar criadores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-300 hover:text-purple-300"
              onClick={() => navigate("/reels")}
            >
              <Play className="h-5 w-5 mr-2 text-gray-300" />
              Reels
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => navigate("/subscriber-dashboard")}
            >
              Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Descubra Criadores Incríveis</h2>
          <p className="text-gray-300">Explore conteúdo exclusivo dos seus criadores favoritos</p>
        </div>

        {/* Trending Creators */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="h-6 w-6 text-purple-400" />
            <h3 className="text-xl font-bold text-white">Em Alta</h3>
            <Badge className="bg-red-600 animate-pulse">AO VIVO</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCreators.map((creator) => (
              <Card 
                key={creator.id} 
                className="bg-gray-800/50 border-gray-700 overflow-hidden group cursor-pointer hover:border-purple-500/50 transition-all"
                onClick={() => navigate(`/creator/${creator.id}`)}
              >
                <div className="relative">
                  <div className={`h-32 bg-gradient-to-r ${
                    creator.thumbnail === "gradient-purple" ? "from-purple-600 to-pink-600" :
                    creator.thumbnail === "gradient-pink" ? "from-pink-600 to-rose-600" :
                    creator.thumbnail === "gradient-blue" ? "from-blue-600 to-cyan-600" :
                    "from-green-600 to-emerald-600"
                  }`}></div>
                  
                  {creator.isLive && (
                    <Badge className="absolute top-2 right-2 bg-red-600 animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                      AO VIVO
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-4 -mt-8 relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-800 flex items-center justify-center mb-3">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium">{creator.username}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
                      <Users className="h-3 w-3" />
                      <span>{creator.subscribers.toLocaleString()} assinantes</span>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full mt-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      {creator.isLive ? "Assistir Live" : "Ver Perfil"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <Flame className="h-6 w-6 text-orange-400" />
            <h3 className="text-xl font-bold text-white">Conteúdo em Destaque</h3>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredContent.map((content) => (
              <Card 
                key={content.id} 
                className="bg-gray-800/50 border-gray-700 overflow-hidden group cursor-pointer"
              >
                <div className="relative aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    {content.type === "video" ? (
                      <Play className="h-8 w-8 text-white" />
                    ) : (
                      <Eye className="h-8 w-8 text-white" />
                    )}
                  </div>
                  
                  {!content.isSubscribed && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <Crown className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                        <p className="text-white text-sm font-medium">Conteúdo Premium</p>
                        <p className="text-gray-300 text-xs">Assine para ver</p>
                      </div>
                    </div>
                  )}
                  
                  <Badge className={`absolute top-2 left-2 ${content.type === "video" ? "bg-red-600" : "bg-blue-600"}`}>
                    {content.type === "video" ? "Vídeo" : "Foto"}
                  </Badge>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">{content.creator}</span>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-red-400">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <span className="text-gray-400 text-xs">{content.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30">
            <CardContent className="p-6 text-center">
              <Play className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Assista Reels</h3>
              <p className="text-gray-300 text-sm mb-4">Descubra vídeos curtos dos seus criadores favoritos</p>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => navigate("/reels")}
              >
                Explorar Reels
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Chat Privado</h3>
              <p className="text-gray-300 text-sm mb-4">Converse diretamente com seus criadores</p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => navigate("/chat")}
              >
                Abrir Chat
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-500/30">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Lives</h3>
              <p className="text-gray-300 text-sm mb-4">Assista transmissões ao vivo exclusivas</p>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => navigate("/live")}
              >
                Ver Lives
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Home;
