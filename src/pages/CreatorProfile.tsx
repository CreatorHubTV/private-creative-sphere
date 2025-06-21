import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Share, 
  Lock, 
  Crown, 
  MapPin, 
  Calendar,
  MessageSquare,
  Users,
  Image as ImageIcon,
  Play,
  CreditCard
} from "lucide-react";
import { useParams } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const CreatorProfile = () => {
  const { id } = useParams();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Aqui será implementada a lógica de assinatura com Stripe/PIX
    console.log("Iniciando processo de assinatura...");
  };

  const handleMessage = () => {
    // Navegar para o chat
    console.log("Abrir chat...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 pb-20">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Crown className="h-8 w-8 text-purple-400" />
            <h1 className="text-2xl font-bold text-white">CreatorHub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-purple-300">
              <Share className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
              Voltar
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="relative mb-8">
          {/* Banner */}
          <div className="h-64 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-black/20"></div>
          </div>
          
          {/* Profile Info */}
          <div className="relative -mt-20 px-8">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                  <Crown className="h-12 w-12 text-white" />
                </div>
                <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-600">
                  Criadora
                </Badge>
              </div>
              
              {/* Profile Details */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-3">
                  <h1 className="text-3xl font-bold text-white">@bella.creator</h1>
                  <Badge variant="secondary" className="bg-pink-600 text-white">
                    Verificada
                  </Badge>
                </div>
                
                <p className="text-gray-300 max-w-2xl">
                  ✨ Criadora de conteúdo exclusivo ✨ 
                  Bem-vindos ao meu mundo! Aqui você encontra os meus melhores momentos e conteúdos especiais. 
                  Assinando você terá acesso a tudo! 💖
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>São Paulo, Brasil</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Ativa desde Janeiro 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>1,234 assinantes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {!isSubscribed ? (
            <Button 
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Assinar por R$ 29,90/mês
            </Button>
          ) : (
            <Button 
              onClick={handleMessage}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-8 py-3"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Enviar Mensagem
            </Button>
          )}
          
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
            <Heart className="h-4 w-4 mr-2" />
            Favoritar
          </Button>
        </div>

        {/* Subscription Info */}
        {!isSubscribed && (
          <Card className="mb-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Lock className="h-8 w-8 text-purple-400" />
                  <div>
                    <h3 className="text-white font-semibold text-lg">Conteúdo Exclusivo</h3>
                    <p className="text-gray-300">
                      Assine para ter acesso a mais de 150 fotos e vídeos exclusivos
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">R$ 29,90</p>
                  <p className="text-sm text-gray-400">por mês</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Payment Options */}
        {!isSubscribed && (
          <Card className="mb-8 bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-white font-semibold mb-4">Formas de Pagamento</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="h-16 border-gray-600 hover:border-purple-500 hover:bg-purple-900/20"
                >
                  <div className="text-center">
                    <CreditCard className="h-6 w-6 mx-auto mb-1 text-blue-400" />
                    <p className="text-sm text-white">Cartão de Crédito/Débito</p>
                    <p className="text-xs text-gray-400">Via Stripe</p>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-16 border-gray-600 hover:border-green-500 hover:bg-green-900/20"
                >
                  <div className="text-center">
                    <div className="w-6 h-6 mx-auto mb-1 bg-green-500 rounded text-xs flex items-center justify-center text-white font-bold">
                      PIX
                    </div>
                    <p className="text-sm text-white">PIX</p>
                    <p className="text-xs text-gray-400">Pagamento instantâneo</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }, (_, i) => (
            <Card key={i} className="bg-gray-800/50 border-gray-700 overflow-hidden group cursor-pointer">
              <div className="relative aspect-square">
                {/* Content Preview - Blurred if not subscribed */}
                <div className={`w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center ${!isSubscribed ? 'blur-sm' : ''}`}>
                  {i % 3 === 0 ? (
                    <Play className="h-8 w-8 text-white" />
                  ) : (
                    <ImageIcon className="h-8 w-8 text-white" />
                  )}
                </div>
                
                {/* Lock Overlay */}
                {!isSubscribed && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="h-8 w-8 text-white mx-auto mb-2" />
                      <p className="text-white text-sm font-medium">Conteúdo Exclusivo</p>
                      <p className="text-gray-300 text-xs">Assine para ver</p>
                    </div>
                  </div>
                )}
                
                {/* Content Type Badge */}
                <Badge className={`absolute top-2 left-2 ${i % 3 === 0 ? 'bg-red-600' : 'bg-blue-600'}`}>
                  {i % 3 === 0 ? 'Vídeo' : 'Foto'}
                </Badge>
                
                {/* Like Count */}
                {isSubscribed && (
                  <div className="absolute bottom-2 right-2 bg-black/60 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Heart className="h-3 w-3 text-red-400" />
                    <span className="text-white text-xs">{Math.floor(Math.random() * 100) + 10}</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {isSubscribed && (
          <div className="text-center mt-8">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
              Carregar Mais Conteúdo
            </Button>
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default CreatorProfile;
