
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import MediaUpload from '@/components/MediaUpload';
import { useProfile } from '@/hooks/useProfile';
import { Save, User, DollarSign } from 'lucide-react';

interface ProfileEditorProps {
  onClose?: () => void;
}

const ProfileEditor = ({ onClose }: ProfileEditorProps) => {
  const { profile, updateProfile } = useProfile();
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || '',
    username: profile?.username || '',
    bio: profile?.bio || '',
    is_creator: profile?.is_creator || false,
    subscription_price: profile?.subscription_price || 29.90,
    phone: profile?.phone || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile(formData);
    if (onClose) onClose();
  };

  const handleAvatarUpload = (url: string) => {
    updateProfile({ avatar_url: url });
  };

  const handleBannerUpload = (url: string) => {
    updateProfile({ banner_url: url });
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <User className="h-5 w-5" />
          <span>Editar Perfil</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Upload */}
          <div>
            <Label className="text-white">Foto de Perfil</Label>
            <MediaUpload
              onUpload={handleAvatarUpload}
              bucket="avatars"
            />
          </div>

          {/* Banner Upload */}
          <div>
            <Label className="text-white">Capa do Perfil</Label>
            <MediaUpload
              onUpload={handleBannerUpload}
              bucket="banners"
            />
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="full_name" className="text-white">Nome Completo</Label>
              <Input
                id="full_name"
                value={formData.full_name}
                onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="username" className="text-white">Nome de Usuário</Label>
              <Input
                id="username"
                value={formData.username}
                onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="@seunome"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-white">Telefone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="(11) 99999-9999"
            />
          </div>

          <div>
            <Label htmlFor="bio" className="text-white">Bio</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="Conte um pouco sobre você..."
              rows={3}
            />
          </div>

          {/* Creator Settings */}
          <div className="space-y-4 p-4 bg-gray-700/50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white">Modo Criador</Label>
                <p className="text-sm text-gray-400">Habilite para oferecer conteúdo premium</p>
              </div>
              <Switch
                checked={formData.is_creator}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_creator: checked }))}
              />
            </div>

            {formData.is_creator && (
              <div>
                <Label htmlFor="subscription_price" className="text-white flex items-center space-x-1">
                  <DollarSign className="h-4 w-4" />
                  <span>Preço da Assinatura (R$)</span>
                </Label>
                <Input
                  id="subscription_price"
                  type="number"
                  step="0.01"
                  min="1"
                  value={formData.subscription_price}
                  onChange={(e) => setFormData(prev => ({ ...prev, subscription_price: parseFloat(e.target.value) }))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            )}
          </div>

          <div className="flex space-x-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Save className="h-4 w-4 mr-2" />
              Salvar Alterações
            </Button>
            {onClose && (
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Cancelar
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileEditor;
