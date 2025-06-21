
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Search, 
  MessageSquare, 
  Play, 
  User 
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: Search, label: "Explorar", path: "/explore" },
    { icon: MessageSquare, label: "Mensagens", path: "/chat" },
    { icon: Play, label: "Reels", path: "/reels" },
    { icon: User, label: "Perfil", path: "/subscriber-dashboard" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 z-50">
      <div className="flex justify-around items-center px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Button
              key={item.path}
              variant="ghost"
              size="sm"
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center space-y-1 h-auto py-2 px-3 ${
                isActive 
                  ? 'text-purple-400 bg-purple-900/20' 
                  : 'text-gray-300 hover:text-purple-300 hover:bg-gray-800/50'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
