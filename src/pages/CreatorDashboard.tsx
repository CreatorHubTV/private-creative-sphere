
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  Eye
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
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
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
          <TabsList className="grid w-full grid-cols-5 bg-gray-800 border-gray-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-purple-600">
              Conteúdo
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
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    Total de Assinantes
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
                    Conteúdos Postados
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
                    Taxa de Engajamento
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-pink-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">89%</div>
                  <p className="text-xs text-pink-400">+3% este mês</p>
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
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">Novo assinante: @usuario{item}</p>
                        <p className="text-gray-400 text-xs">Há {item} horas</p>
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
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Upload className="h-4 w-4 mr-2" />
                Novo Post
              </Button>
            </div>

            {/* Upload Form */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Criar Novo Post</CardTitle>
                <CardDescription className="text-gray-400">
                  Faça upload de fotos, vídeos ou crie posts de texto
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="h-24 border-gray-600 border-dashed hover:border-purple-500">
                    <div className="text-center">
                      <Image className="h-6 w-6 mx-auto mb-2 text-gray-400" />
                      <span className="text-sm text-gray-400">Foto</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-24 border-gray-600 border-dashed hover:border-purple-500">
                    <div className="text-center">
                      <Video className="h-6 w-6 mx-auto mb-2 text-gray-400" />
                      <span className="text-sm text-gray-400">Vídeo</span>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-24 border-gray-600 border-dashed hover:border-purple-500">
                    <div className="text-center">
                      <FileText className="h-6 w-6 mx-auto mb-2 text-gray-400" />
                      <span className="text-sm text-gray-400">Texto</span>
                    </div>
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="caption" className="text-white">Legenda</Label>
                  <Textarea 
                    id="caption"
                    placeholder="Escreva uma legenda para seu post..."
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Publicar Conteúdo
                </Button>
              </CardContent>
            </Card>

            {/* Content Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="bg-gray-800/50 border-gray-700 overflow-hidden">
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
