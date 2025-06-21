
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Heart, 
  MessageSquare, 
  Crown, 
  Settings,
  Bell,
  CreditCard,
  Calendar,
  TrendingUp,
  Users,
  Filter
} from "lucide-react";

const SubscriberDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Crown className="h-8 w-8 text-purple-500" />
            <h1 className="text-2xl font-bold text-white">CreatorHub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-purple-300">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-purple-300">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Meu Dashboard</h2>
          <p className="text-gray-400">Gerencie suas assinaturas e explore novos criadores</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                Assinaturas Ativas
              </CardTitle>
              <Users className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">5</div>
              <p className="text-xs text-purple-400">Criadores seguidos</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                Gasto Mensal
              </CardTitle>
              <CreditCard className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">R$ 149,50</div>
              <p className="text-xs text-green-400">5 assinaturas</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                Conteúdos Curtidos
              </CardTitle>
              <Heart className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">234</div>
              <p className="text-xs text-red-400">Este mês</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                Mensagens
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">12</div>
              <p className="text-xs text-blue-400">Não lidas</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="bg-gray-800/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Descobrir Novos Criadores</CardTitle>
            <CardDescription className="text-gray-400">
              Encontre e assine novos criadores de conteúdo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar criadores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Active Subscriptions */}
        <Card className="bg-gray-800/50 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Minhas Assinaturas</CardTitle>
            <CardDescription className="text-gray-400">
              Gerencie suas assinaturas ativas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <Card key={item} className="bg-gray-700/30 border-gray-600">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Crown className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium">@criadora{item}</h3>
                        <p className="text-gray-400 text-sm">Assinatura ativa</p>
                      </div>
                      <Badge className="bg-green-600">Ativa</Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Preço:</span>
                        <span>R$ 29,90/mês</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Próximo pagamento:</span>
                        <span>15/02/2024</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1 border-gray-600 text-white hover:bg-gray-600">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Chat
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 border-gray-600 text-white hover:bg-gray-600">
                        Ver Perfil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Creators */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Criadores em Destaque</CardTitle>
            <CardDescription className="text-gray-400">
              Novos criadores populares na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="bg-gray-700/30 border-gray-600 overflow-hidden group cursor-pointer hover:border-purple-500/50 transition-colors">
                  {/* Banner */}
                  <div className="h-24 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                  
                  <CardContent className="p-4 -mt-8 relative">
                    {/* Profile Picture */}
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-700 flex items-center justify-center mb-3">
                      <Crown className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-medium">@nova.criadora{item}</h3>
                        <Badge variant="secondary" className="bg-pink-600 text-white text-xs">
                          Nova
                        </Badge>
                      </div>
                      
                      <p className="text-gray-400 text-sm line-clamp-2">
                        Criadora de conteúdo exclusivo. Bem-vindos ao meu mundo especial! ✨
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-3 text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{Math.floor(Math.random() * 500) + 100}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="h-3 w-3" />
                            <span>+{Math.floor(Math.random() * 50) + 10}%</span>
                          </div>
                        </div>
                        <span className="text-white font-medium">R$ {(Math.random() * 30 + 15).toFixed(2)}</span>
                      </div>
                      
                      <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Ver Perfil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubscriberDashboard;
