import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Video,
  VideoOff,
  Mic,
  MicOff,
  Users,
  Heart,
  Gift,
  MessageSquare,
  Settings,
  Share,
  ArrowLeft,
  Crown,
  DollarSign
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const Live = () => {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(1247);
  const [message, setMessage] = useState("");
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [donations, setDonations] = useState(0);
  const navigate = useNavigate();

  const chatMessages = [
    { id: 1, user: "@user123", message: "Olá! 👋", isVip: false },
    { id: 2, user: "@vipuser", message: "Você está linda hoje! ❤️", isVip: true },
    { id: 3, user: "@fan2024", message: "Primeira vez aqui, adorando!", isVip: false },
    { id: 4, user: "@supporter", message: "🔥🔥🔥", isVip: true },
    { id: 5, user: "@newbie", message: "Como faço para assinar?", isVip: false },
  ];

  const liveCreators = [
    { id: 1, username: "@bella.creator", viewers: 1247, title: "Chat and Chill ✨" },
    { id: 2, username: "@maya.content", viewers: 892, title: "Morning Workout 💪" },
    { id: 3, username: "@luna.model", viewers: 2156, title: "Q&A Session 💭" },
    { id: 4, username: "@sofia.art", viewers: 567, title: "Art Tutorial 🎨" },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Enviando mensagem:", message);
      setMessage("");
    }
  };

  const handleDonation = (amount: number) => {
    setDonations(donations + amount);
    console.log(`Doação de R$ ${amount} enviada!`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isLive) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 pb-20">
        {/* Header */}
        <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate(-1)}
                className="text-gray-300 hover:text-purple-300"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Crown className="h-8 w-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">Lives</h1>
            </div>
            
            <Button 
              onClick={() => setIsLive(true)}
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white"
            >
              <Video className="h-4 w-4 mr-2" />
              Iniciar Live
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Lives em Andamento</h2>
            <p className="text-gray-400">Assista transmissões ao vivo dos seus criadores favoritos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveCreators.map((creator) => (
              <Card 
                key={creator.id} 
                className="bg-gray-800/50 border-gray-700 overflow-hidden group cursor-pointer hover:border-red-500/50 transition-all"
                onClick={() => setIsLive(true)}
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                    <Video className="h-12 w-12 text-white/60" />
                  </div>
                  
                  <Badge className="absolute top-2 left-2 bg-red-600 animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                    AO VIVO
                  </Badge>
                  
                  <div className="absolute top-2 right-2 bg-black/60 rounded px-2 py-1 flex items-center space-x-1">
                    <Users className="h-3 w-3 text-white" />
                    <span className="text-white text-xs">{creator.viewers}</span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Crown className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white font-medium">{creator.username}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">{creator.title}</p>
                  
                  <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                    Assistir Live
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="h-screen bg-black flex pb-20">
      {/* Main Live Stream Area */}
      <div className="flex-1 relative">
        {/* Live Video */}
        <div className="h-full bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30 flex items-center justify-center">
          <div className="text-center">
            {isCameraOn ? (
              <div className="space-y-4">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                  <Crown className="h-16 w-16 text-white" />
                </div>
                <p className="text-white text-lg">@bella.creator</p>
                <Badge className="bg-red-600 animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                  AO VIVO
                </Badge>
              </div>
            ) : (
              <div className="space-y-4">
                <VideoOff className="h-32 w-32 text-gray-600 mx-auto" />
                <p className="text-gray-400">Câmera desligada</p>
              </div>
            )}
          </div>
        </div>

        {/* Live Controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/50 rounded-full px-6 py-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCameraOn(!isCameraOn)}
            className={`h-12 w-12 p-0 rounded-full ${isCameraOn ? 'text-white hover:bg-white/20' : 'text-red-500 bg-red-500/20'}`}
          >
            {isCameraOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMicOn(!isMicOn)}
            className={`h-12 w-12 p-0 rounded-full ${isMicOn ? 'text-white hover:bg-white/20' : 'text-red-500 bg-red-500/20'}`}
          >
            {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="h-12 w-12 p-0 rounded-full text-white hover:bg-white/20"
          >
            <Settings className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="h-12 w-12 p-0 rounded-full text-white hover:bg-white/20"
          >
            <Share className="h-5 w-5" />
          </Button>
          
          <Button
            onClick={() => setIsLive(false)}
            className="bg-red-600 hover:bg-red-700 px-6"
          >
            Encerrar Live
          </Button>
        </div>

        {/* Live Stats */}
        <div className="absolute top-6 left-6 space-y-2">
          <div className="bg-black/50 rounded px-3 py-2 flex items-center space-x-2">
            <Users className="h-4 w-4 text-white" />
            <span className="text-white font-medium">{viewerCount}</span>
            <span className="text-gray-300 text-sm">assistindo</span>
          </div>
          
          <div className="bg-black/50 rounded px-3 py-2 flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-green-400" />
            <span className="text-white font-medium">R$ {donations}</span>
            <span className="text-gray-300 text-sm">em doações</span>
          </div>
        </div>
      </div>

      {/* Chat Sidebar */}
      <div className="w-80 bg-gray-900 flex flex-col border-l border-gray-700">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-white font-semibold flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            Chat ao Vivo
          </h3>
        </div>

        {/* Quick Donations */}
        <div className="p-4 border-b border-gray-700">
          <h4 className="text-white text-sm font-medium mb-3">Doações Rápidas</h4>
          <div className="grid grid-cols-3 gap-2">
            {[5, 10, 25].map((amount) => (
              <Button
                key={amount}
                size="sm"
                onClick={() => handleDonation(amount)}
                className="bg-green-600 hover:bg-green-700 text-xs"
              >
                R$ {amount}
              </Button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {chatMessages.map((msg) => (
            <div key={msg.id} className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${msg.isVip ? 'text-yellow-400' : 'text-purple-400'}`}>
                  {msg.user}
                </span>
                {msg.isVip && (
                  <Crown className="h-3 w-3 text-yellow-400" />
                )}
              </div>
              <p className="text-gray-300 text-sm">{msg.message}</p>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex space-x-2">
            <Input
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="bg-gray-800 border-gray-600 text-white"
            />
            <Button onClick={handleSendMessage} size="sm">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-2 mt-2">
            <Button
              size="sm"
              variant="ghost"
              className="text-red-400 hover:bg-red-400/20"
            >
              <Heart className="h-4 w-4 mr-1" />
              Curtir
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-yellow-400 hover:bg-yellow-400/20"
            >
              <Gift className="h-4 w-4 mr-1" />
              Presentear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
