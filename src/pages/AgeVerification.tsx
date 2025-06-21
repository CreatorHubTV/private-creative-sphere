
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AgeVerification = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    localStorage.setItem("ageVerified", "true");
    navigate("/login");
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center p-6">
      <Card className="max-w-md w-full bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-white">Verificação de Idade</CardTitle>
          <CardDescription className="text-gray-400">
            Esta plataforma contém conteúdo adulto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-red-400 mt-0.5" />
              <div className="text-sm text-red-300">
                <p className="font-semibold mb-2">AVISO IMPORTANTE:</p>
                <p>
                  Esta plataforma é destinada exclusivamente para adultos maiores de 18 anos. 
                  O conteúdo pode incluir nudez e material sexualmente explícito.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-white text-center font-medium">
              Você tem 18 anos ou mais?
            </p>
            
            <div className="flex space-x-3">
              <Button 
                onClick={handleConfirm}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Sim, tenho 18+ anos
              </Button>
              <Button 
                onClick={handleDeny}
                variant="outline"
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Não
              </Button>
            </div>
          </div>

          <div className="text-xs text-gray-500 text-center space-y-1">
            <p>Ao continuar, você confirma que:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Tem 18 anos ou mais</li>
              <li>Concorda com nossos Termos de Uso</li>
              <li>Entende que o conteúdo é para adultos</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeVerification;
