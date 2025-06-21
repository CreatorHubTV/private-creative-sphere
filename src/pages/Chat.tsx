
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Paperclip, 
  Image as ImageIcon, 
  Crown, 
  Search,
  MoreVertical,
  Phone,
  Video,
  Settings
} from "lucide-react";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const chats = [
    { id: 1, name: "@bella.creator", lastMessage: "Obrigada pela assinatura! 💖", time: "2min", unread: 2, online: true },
    { id: 2, name: "@luna.model", lastMessage: "Novo conteúdo no ar!", time: "1h", unread: 0, online: true },
    { id: 3, name: "@sophia.vip", lastMessage: "Como você está?", time: "3h", unread: 1, online: false },
    { id: 4, name: "@amanda.exclusive", lastMessage: "Tchau! 😘", time: "1d", unread: 0, online: false },
  ];

  const messages = [
    { id: 1, sender: "creator", content: "Oi! Obrigada por se inscrever no meu canal! 💖", time: "14:30" },
    { id: 2, sender: "user", content: "Oi! Estava ansioso para conversar com você!", time: "14:32" },
    { id: 3, sender: "creator", content: "Que fofo! Espero que goste do meu conteúdo 😊", time: "14:33" },
    { id: 4, sender: "creator", content: "Acabei de postar umas fotos novas, vai dar uma olhada?", time: "14:35" },
    { id: 5, sender: "user", content: "Com certeza! Já estou vendo aqui 🔥", time: "14:36" },
    { id: 6, sender: "creator", content: "Fico feliz que tenha gostado! Tem alguma sugestão para próximos conteúdos?", time: "14:40" },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Enviando mensagem:", message);
      setMessage("");
    }
  };

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
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
              Voltar ao Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 h-[calc(100vh-88px)]">
        <div className="grid lg:grid-cols-3 gap-6 h-full">
          {/* Chat List */}
          <Card className="bg-gray-800/50 border-gray-700 h-full">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                Conversas
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Settings className="h-4 w-4" />
                </Button>
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar conversas..."
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-4 cursor-pointer hover:bg-gray-700/50 transition-colors ${
                      selectedChat === chat.id ? 'bg-gray-700/30 border-l-2 border-purple-500' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Crown className="h-5 w-5 text-white" />
                        </div>
                        {chat.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-medium truncate">{chat.name}</h3>
                          <span className="text-xs text-gray-400">{chat.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-gray-400 text-sm truncate">{chat.lastMessage}</p>
                          {chat.unread > 0 && (
                            <Badge className="bg-purple-600 text-xs">{chat.unread}</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <div className="lg:col-span-2 flex flex-col h-full">
            <Card className="flex-1 bg-gray-800/50 border-gray-700 flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Crown className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">@bella.creator</h3>
                      <p className="text-green-400 text-sm">Online agora</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-gray-700 text-white'
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                        <p className={`text-xs mt-1 ${
                          msg.sender === 'user' ? 'text-purple-100' : 'text-gray-400'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-700">
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Digite sua mensagem..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="bg-gray-700 border-gray-600 text-white pr-12"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                  <span>Digite @ para mencionar criadores</span>
                  <span>Pressione Enter para enviar</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
