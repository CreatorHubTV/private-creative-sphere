
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Crown className="h-8 w-8 text-purple-500" />
            <h1 className="text-2xl font-bold text-white">CreatorHub</h1>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="border-gray-600 text-white hover:bg-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Card className="max-w-4xl mx-auto bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl text-white text-center">
              Termos de Uso
            </CardTitle>
            <p className="text-gray-400 text-center">
              Última atualização: Janeiro de 2024
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Aceitação dos Termos</h2>
              <p className="leading-relaxed">
                Ao acessar e usar a plataforma CreatorHub, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não poderá acessar o serviço.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Elegibilidade</h2>
              <p className="leading-relaxed">
                Nossa plataforma é destinada exclusivamente a usuários com idade igual ou superior a 18 anos. Ao usar nossos serviços, você confirma que:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Tem pelo menos 18 anos de idade</li>
                <li>Possui capacidade legal para aceitar estes termos</li>
                <li>Não está proibido de usar nossos serviços por qualquer lei aplicável</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Conteúdo Adulto</h2>
              <p className="leading-relaxed">
                Esta plataforma contém conteúdo adulto explícito destinado apenas a adultos. Todo o conteúdo é protegido por direitos autorais e é propriedade dos criadores. É expressamente proibido:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Compartilhar, distribuir ou revender qualquer conteúdo</li>
                <li>Fazer capturas de tela ou gravações</li>
                <li>Usar o conteúdo para fins comerciais</li>
                <li>Assediar ou ameaçar criadores de conteúdo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Assinaturas e Pagamentos</h2>
              <p className="leading-relaxed">
                As assinaturas são processadas mensalmente e renovadas automaticamente. Os pagamentos são processados através de gateways seguros (Stripe e PIX). Política de reembolso:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Reembolsos são analisados caso a caso</li>
                <li>Cancelamentos podem ser feitos a qualquer momento</li>
                <li>O acesso ao conteúdo expira no final do período de cobrança</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Privacidade e Segurança</h2>
              <p className="leading-relaxed">
                Levamos sua privacidade a sério. Implementamos medidas de segurança para proteger seus dados pessoais e financeiros. Para mais detalhes, consulte nossa Política de Privacidade.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Conduta do Usuário</h2>
              <p className="leading-relaxed">
                Você concorda em não usar nossos serviços para:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Violar qualquer lei local, estadual, nacional ou internacional</li>
                <li>Assediar, abusar ou prejudicar outra pessoa</li>
                <li>Transmitir ou procurar transmitir vírus ou códigos maliciosos</li>
                <li>Coletar informações de outros usuários sem consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Propriedade Intelectual</h2>
              <p className="leading-relaxed">
                Todo o conteúdo disponível na plataforma, incluindo textos, imagens, vídeos, logotipos e marcas, é protegido por direitos autorais e outras leis de propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Limitação de Responsabilidade</h2>
              <p className="leading-relaxed">
                A CreatorHub não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Modificações</h2>
              <p className="leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. O uso continuado dos serviços constitui aceitação dos termos modificados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contato</h2>
              <p className="leading-relaxed">
                Para questões sobre estes termos, entre em contato conosco através do email: legal@creatorhub.com
              </p>
            </section>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mt-8">
              <p className="text-purple-200 text-sm">
                <strong>Importante:</strong> Ao usar nossa plataforma, você confirma ter lido, compreendido e concordado com todos os termos acima. Se não concordar com qualquer parte, descontinue o uso imediatamente.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
