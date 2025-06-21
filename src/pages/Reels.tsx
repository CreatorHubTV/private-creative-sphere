import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  MessageSquare, 
  Share, 
  Bookmark,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Crown,
  UserPlus,
  MoreVertical,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const Reels = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();

  const reels = [
    {
      id: 1,
      creator: "@bella.creator",
      description: "Novo look do dia! O que acharam? ✨",
      likes: 1234,
      comments: 89,
      shares: 45,
      isFollowing: false,
      isSubscribed: true,
      duration: "0:15"
    },
    {
      id: 2,
      creator: "@maya.content",
      description: "Behind the scenes da sessão de fotos 📸",
      likes: 987,
      comments: 67,
      shares: 32,
      isFollowing: true,
      isSubscribed: false,
      duration: "0:23"
    },
    {
      id: 3,
      creator: "@luna.model",
      description: "Dica de maquiagem para vocês! Salvem aí 💄",
      likes: 2156,
      comments: 156,
      shares: 89,
      isFollowing: false,
      isSubscribed: true,
      duration: "0:30"
    }
  ];

  const currentReelData = reels[currentReel];

  const handleScroll = (direction: 'up' | 'down') => {
    if (direction === 'down' && currentReel < reels.length - 1) {
      setCurrentReel(currentReel + 1);
    } else if (direction === 'up' && currentReel > 0) {
      setCurrentReel(currentReel - 1);
    }
  };

  const handleLike = () => {
    console.log("Curtindo reel...");
  };

  const handleComment = () => {
    console.log("Abrindo comentários...");
  };

  const handleShare = () => {
    console.log("Compartilhando reel...");
  };

  const handleFollow = () => {
    console.log("Seguindo criador...");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') handleScroll('up');
      if (e.key === 'ArrowDown') handleScroll('down');
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentReel, isPlaying]);

  return (
    <div className="h-screen bg-black overflow-hidden relative">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent p-4">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <Crown className="h-6 w-6 text-purple-400" />
            <span className="text-white font-bold">Reels</span>
          </div>
          
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Reel Container */}
      <div className="h-full relative pb-20">
        {/* Video Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30">
          <div className="h-full w-full flex items-center justify-center">
            <div className="relative w-full h-full max-w-sm mx-auto bg-gray-900 rounded-lg overflow-hidden">
              {/* Simulated Video */}
              <div className="h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                <div className="text-center">
                  {!isPlaying ? (
                    <Play className="h-16 w-16 text-white/80 mb-4" />
                  ) : (
                    <div className="animate-pulse">
                      <Crown className="h-16 w-16 text-purple-400 mb-4" />
                    </div>
                  )}
                  <p className="text-white/60 text-sm">Reel {currentReel + 1} de {reels.length}</p>
                </div>
              </div>
              
              {/* Video Controls Overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {!isPlaying && (
                  <div className="bg-black/50 rounded-full p-4">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                )}
              </div>

              {/* Creator Info Overlay */}
              <div className="absolute bottom-20 left-4 right-20">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Crown className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-semibold">{currentReelData.creator}</span>
                    {!currentReelData.isFollowing && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={handleFollow}
                        className="border-white text-white hover:bg-white hover:text-black"
                      >
                        <UserPlus className="h-3 w-3 mr-1" />
                        Seguir
                      </Button>
                    )}
                  </div>
                  
                  <p className="text-white text-sm">{currentReelData.description}</p>
                  
                  {!currentReelData.isSubscribed && (
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      Assinar para ver mais
                    </Button>
                  )}
                </div>
              </div>

              {/* Duration */}
              <div className="absolute top-4 right-4 bg-black/50 rounded px-2 py-1">
                <span className="text-white text-xs">{currentReelData.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="absolute right-4 bottom-32 space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className="h-12 w-12 p-0 bg-black/30 hover:bg-red-600/20 text-white rounded-full"
            >
              <Heart className="h-6 w-6 text-gray-300" />
            </Button>
            <span className="text-white text-xs">{currentReelData.likes}</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleComment}
              className="h-12 w-12 p-0 bg-black/30 hover:bg-blue-600/20 text-white rounded-full"
            >
              <MessageSquare className="h-6 w-6 text-gray-300" />
            </Button>
            <span className="text-white text-xs">{currentReelData.comments}</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="h-12 w-12 p-0 bg-black/30 hover:bg-green-600/20 text-white rounded-full"
            >
              <Share className="h-6 w-6 text-gray-300" />
            </Button>
            <span className="text-white text-xs">{currentReelData.shares}</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="h-12 w-12 p-0 bg-black/30 hover:bg-yellow-600/20 text-white rounded-full"
          >
            <Bookmark className="h-6 w-6 text-gray-300" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMuted(!isMuted)}
            className="h-12 w-12 p-0 bg-black/30 hover:bg-gray-600/20 text-white rounded-full"
          >
            {isMuted ? <VolumeX className="h-6 w-6 text-gray-300" /> : <Volume2 className="h-6 w-6 text-gray-300" />}
          </Button>
        </div>

        {/* Navigation Hints */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col space-y-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleScroll('up')}
              disabled={currentReel === 0}
              className="h-10 w-10 p-0 bg-black/30 hover:bg-white/20 text-white rounded-full disabled:opacity-30"
            >
              ↑
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleScroll('down')}
              disabled={currentReel === reels.length - 1}
              className="h-10 w-10 p-0 bg-black/30 hover:bg-white/20 text-white rounded-full disabled:opacity-30"
            >
              ↓
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 space-y-2">
        {reels.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-8 rounded-full transition-colors ${
              index === currentReel ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Reels;
