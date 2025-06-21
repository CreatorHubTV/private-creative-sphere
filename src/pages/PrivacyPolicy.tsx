
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, ArrowLeft, Shield, Lock, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
              Política de Privacidade
            </CardTitle>
            <p className="text-gray-400 text-center">
              Última atualização: Janeiro de 2024
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300">
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-center">
                <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h3 className="text-white font-medium">Dados Protegidos</h3>
                <p className="text-sm text-gray-400">Criptografia de ponta a ponta</p>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-center">
                <Lock className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h3 className="text-white font-medium">Acesso Restrito</h3>
                <p className="text-sm text-gray-400">Apenas você e criadores</p>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                <Eye className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-white font-medium">Transparência</h3>
                <p className="text-sm text-gray-400">Você controla seus dados</p>
              </div>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Informações que Coletamos</h2>
              <p className="leading-relaxed mb-3">
                Coletamos as seguintes informações para fornecer nossos serviços:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-700/20 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Informações Pessoais</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Nome e email</li>
                    <li>• Data de nascimento (verificação de idade)</li>
                    <li>• Informações de pagamento</li>
                    <li>• Endereço IP e localização</li>
                  </ul>
                </div>
                <div className="bg-gray-700/20 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Dados de Uso</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Histórico de navegação</li>
                    <li>• Preferências de conteúdo</li>
                    <li>• Interações com criadores</li>
                    <li>• Dados de sessão</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Como Usamos suas Informações</h2>
              <p className="leading-relaxed">
                Utilizamos suas informações exclusivamente para:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Fornecer acesso ao conteúdo assinado</li>
                <li>Processar pagamentos e assinaturas</li>
                <li>Personalizar sua experiência na plataforma</li>
                <li>Comunicar sobre atualizações e novos conteúdos</li>
                <li>Manter a segurança e prevenir fraudes</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Compartilhamento de Dados</h2>
              <p className="leading-relaxed">
                <strong>Nunca vendemos seus dados pessoais.</strong> Compartilhamos informações apenas com:
              </p>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-3">
                <h4 className="text-red-200 font-medium mb-2">Provedores de Serviço Autorizados:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Stripe (processamento de pagamentos)</li>
                  <li>• Supabase (armazenamento seguro de dados)</li>
                  <li>• Serviços de hospedagem em nuvem</li>
                  <li>• Autoridades legais (quando exigido por lei)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Proteção de Conteúdo</h2>
              <p className="leading-relaxed">
                Implementamos medidas rigorosas para proteger o conteúdo dos criadores:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Proteção contra download não autorizado</li>
                <li>Tecnologia anti-screenshot em browsers compatíveis</li>
                <li>Watermarks invisíveis para rastreamento</li>
                <li>Monitoramento de vazamentos de conteúdo</li>
                <li>Ação legal contra violações de direitos autorais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Seus Direitos</h2>
              <p className="leading-relaxed">
                De acordo com a LGPD, você tem direito a:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-200 font-medium mb-2">Direitos de Acesso</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Acessar seus dados pessoais</li>
                    <li>• Solicitar correção de dados</li>
                    <li>• Portabilidade de dados</li>
                  </ul>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-200 font-medium mb-2">Direitos de Controle</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Revogar consentimento</li>
                    <li>• Solicitar exclusão de dados</li>
                    <li>• Limitar processamento</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Segurança de Dados</h2>
              <p className="leading-relaxed">
                Implementamos medidas de segurança de nível empresarial:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Criptografia SSL/TLS para todas as transmissões</li>
                <li>Criptografia de dados em repouso</li>
                <li>Autenticação de dois fatores</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups seguros e redundantes</li>
                <li>Testes regulares de penetração</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Cookies e Tecnologias Similares</h2>
              <p className="leading-relaxed">
                Utilizamos cookies para melhorar sua experiência:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Cookies essenciais para funcionalidade básica</li>
                <li>Cookies de preferência para personalização</li>
                <li>Cookies analíticos para melhoria do serviço</li>
                <li>Você pode gerenciar cookies nas configurações do navegador</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Retenção de Dados</h2>
              <p className="leading-relaxed">
                Mantemos seus dados apenas pelo tempo necessário:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Dados de conta: enquanto a conta estiver ativa</li>
                <li>Dados de pagamento: conforme exigências legais (5 anos)</li>
                <li>Dados de uso: 2 anos para análise e melhoria</li>
                <li>Logs de segurança: 1 ano para proteção</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Transferência Internacional</h2>
              <p className="leading-relaxed">
                Alguns dados podem ser processados fora do Brasil por nossos provedores de serviço. Garantimos que todas as transferências seguem padrões internacionais de proteção de dados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contato e DPO</h2>
              <p className="leading-relaxed">
                Para questões sobre privacidade ou exercer seus direitos:
              </p>
              <div className="bg-gray-700/20 rounded-lg p-4 mt-3">
                <p><strong>Email:</strong> privacy@creatorhub.com</p>
                <p><strong>DPO:</strong> dpo@creatorhub.com</p>
                <p><strong>Telefone:</strong> +55 11 9999-9999</p>
                <p><strong>Endereço:</strong> São Paulo, SP - Brasil</p>
              </div>
            </section>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mt-8">
              <p className="text-green-200 text-sm">
                <strong>Compromisso com a Privacidade:</strong> Sua privacidade é nossa prioridade. Estamos comprometidos em proteger seus dados e manter a transparência sobre como os utilizamos. Esta política é atualizada regularmente para refletir mudanças em nossas práticas e na legislação.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
