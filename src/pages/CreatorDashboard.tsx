
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MediaUpload from "@/components/MediaUpload";
import { 
  Upload, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Image, 
  Video, 
  FileText, 
  Settings,
  MessageSquare,
  Bell,
  Crown,
  Camera,
  Eye,
  Play,
  Gift,
  Radio
} from "lucide-react";

const CreatorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

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
            <Button 
              variant="outline" 
              className="border-gray-600 text-white hover:bg-gray-700"
              onClick={() => window.open("/creator/1", "_blank")}
            >
              Ver Perfil
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard do Criador</h2>
          <p className="text-gray-400">Gerencie seu conteúdo e acompanhe suas estatísticas</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-gray-800 border-gray-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-purple-600">
              Conteúdo
            </TabsTrigger>
            <TabsTrigger value="live" className="data-[state=active]:bg-purple-600">
              Live
            </TabsTrigger>
            <TabsTrigger value="subscribers" className="data-[state=active]:bg-purple-600">
              Assinantes
            </TabsTrigger>
            <TabsTrigger value="earnings" className="data-[state=active]:bg-purple-600">
              Ganhos
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-purple-600">
              Perfil
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-5 gap-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    Assinantes
                  </CardTitle>
                  <Users className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">1,234</div>
                  <p className="text-xs text-green-400">+12% este mês</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    Ganhos do Mês
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">R$ 9,876</div>
                  <p className="text-xs text-green-400">+8% este mês</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    Conteúdos
                  </CardTitle>
                  <Image className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">156</div>
                  <p className="text-xs text-blue-400">+5 esta semana</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    Doações
                  </CardTitle>
                  <Gift className="h-4 w-4 text-pink-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">R$ 2,345</div>
                  <p className="text-xs text-pink-400">+15% este mês</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    Engajamento
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-orange-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">89%</div>
                  <p className="text-xs text-orange-400">+3% este mês</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Atividade Recente</CardTitle>
                <CardDescription className="text-gray-400">
                  Últimas interações com seu conteúdo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { icon: Users, text: "Novo assinante: @usuario123", time: "Há 2 horas", color: "text-purple-500" },
                    { icon: Gift, text: "Doação de R$ 25 recebida", time: "Há 3 horas", color: "text-green-500" },
                    { icon: MessageSquare, text: "Nova mensagem privada", time: "Há 5 horas", color: "text-blue-500" },
                    { icon: Eye, text: "Seu reel alcançou 1k visualizações", time: "Há 1 dia", color: "text-pink-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <div className="flex-1">
                        <p className="text-white text-sm">{item.text}</p>
                        <p className="text-gray-400 text-xs">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Gerenciar Conteúdo</h3>
              <div className="flex space-x-2">
                <Button 
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700"
                  onClick={() => window.open("/reels", "_blank")}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Ver Reels
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Upload className="h-4 w-4 mr-2" />
                  Novo Conteúdo
                </Button>
              </div>
            </div>

            {/* Upload Component */}
            <MediaUpload />

            {/* Content Grid */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Seus Conteúdos</CardTitle>
                <CardDescription className="text-gray-400">
                  Gerencie todo o seu conteúdo publicado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="bg-gray-700/30 border-gray-600 overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <Camera className="h-8 w-8 text-gray-400" />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-white text-sm font-medium">Post #{item}</p>
                            <p className="text-gray-400 text-xs">Há 2 dias</p>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-400">
                            <Eye className="h-4 w-4" />
                            <span className="text-xs">{item * 47}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="live" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Centro de Transmissão</CardTitle>
                <CardDescription className="text-gray-400">
                  Gerencie suas lives e interaja com seus assinantes em tempo real
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-r from-red-900/30 to-pink-900/30 border-red-500/30">
                    <CardContent className="p-6 text-center">
                      <Radio className="h-12 w-12 text-red-400 mx-auto mb-4" />
                      <h3 className="text-white font-semibold mb-2">Iniciar Live</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Transmita ao vivo para seus assinantes
                      </p>
                      <Button 
                        className="bg-red-600 hover:bg-red-700"
                        onClick={() => window.open("/live", "_blank")}
                      >
                        <Radio className="h-4 w-4 mr-2" />
                        Ir ao Vivo
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-700/30 border-gray-600">
                    <CardContent className="p-6">
                      <h3 className="text-white font-semibold mb-4">Estatísticas de Live</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Lives este mês:</span>
                          <span className="text-white font-medium">8</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Tempo total:</span>
                          <span className="text-white font-medium">12h 45m</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Pico de audiência:</span>
                          <span className="text-white font-medium">1,247 pessoas</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Doações em lives:</span>
                          <span className="text-green-400 font-medium">R$ 1,850</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscribers" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Lista de Assinantes</CardTitle>
                <CardDescription className="text-gray-400">
                  Gerencie e interaja com seus assinantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">U{item}</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">@usuario{item}</p>
                          <p className="text-gray-400 text-sm">Assinante desde 15/01/2024</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-700">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Conversar
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Relatório de Ganhos</CardTitle>
                <CardDescription className="text-gray-400">
                  Acompanhe sua receita e estatísticas de pagamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-green-300">Ganhos Totais</span>
                        <DollarSign className="h-5 w-5 text-green-400" />
                      </div>
                      <p className="text-2xl font-bold text-white mt-2">R$ 15.847,50</p>
                    </div>
                    
                    <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-300">Este Mês</span>
                        <TrendingUp className="h-5 w-5 text-blue-400" />
                      </div>
                      <p className="text-2xl font-bold text-white mt-2">R$ 3.287,90</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-white font-medium">Últimos Pagamentos</h4>
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex justify-between items-center p-3 bg-gray-700/30 rounded">
                        <div>
                          <p className="text-white text-sm">Assinatura mensal</p>
                          <p className="text-gray-400 text-xs">15/01/2024</p>
                        </div>
                        <span className="text-green-400 font-medium">+R$ 29,90</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Configurações do Perfil</CardTitle>
                <CardDescription className="text-gray-400">
                  Personalize seu perfil público
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-white">Nome de usuário</Label>
                  <Input 
                    id="username"
                    placeholder="@seunome"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-white">Bio</Label>
                  <Textarea 
                    id="bio"
                    placeholder="Conte um pouco sobre você..."
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price" className="text-white">Preço da Assinatura (mensal)</Label>
                  <Input 
                    id="price"
                    type="number"
                    placeholder="29.90"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                    Alterar Foto de Perfil
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                    Alterar Banner
                  </Button>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Salvar Alterações
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CreatorDashboard;
