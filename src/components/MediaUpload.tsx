
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, X, Image as ImageIcon, Video } from 'lucide-react';
import { useProfile } from '@/hooks/useProfile';
import { useToast } from '@/hooks/use-toast';

interface MediaUploadProps {
  onUpload: (url: string) => void;
  acceptVideo?: boolean;
  maxDuration?: number; // in seconds
  bucket: string;
}

const MediaUpload = ({ onUpload, acceptVideo = false, maxDuration, bucket }: MediaUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const { uploadFile } = useProfile();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateVideo = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      
      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src);
        if (maxDuration && video.duration > maxDuration) {
          toast({
            title: "Vídeo muito longo",
            description: `O vídeo deve ter no máximo ${maxDuration} segundos.`,
            variant: "destructive",
          });
          resolve(false);
        } else {
          resolve(true);
        }
      };
      
      video.src = URL.createObjectURL(file);
    });
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      toast({
        title: "Arquivo inválido",
        description: "Apenas imagens e vídeos são aceitos.",
        variant: "destructive",
      });
      return;
    }

    if (isVideo && !acceptVideo) {
      toast({
        title: "Vídeos não permitidos",
        description: "Este campo aceita apenas imagens.",
        variant: "destructive",
      });
      return;
    }

    // Validate video duration if needed
    if (isVideo && maxDuration) {
      const isValid = await validateVideo(file);
      if (!isValid) return;
    }

    // Create preview
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    // Upload file
    setUploading(true);
    try {
      const fileName = `${Date.now()}-${file.name}`;
      const url = await uploadFile(file, bucket, fileName);
      onUpload(url);
      toast({
        title: "Upload concluído!",
        description: "Arquivo enviado com sucesso.",
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Erro no upload",
        description: "Não foi possível enviar o arquivo.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const clearPreview = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
      setPreview(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptVideo ? "image/*,video/*" : "image/*"}
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {preview ? (
        <div className="relative">
          {preview.includes('video') ? (
            <video
              src={preview}
              controls
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
          )}
          <Button
            onClick={clearPreview}
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => fileInputRef.current?.click()}
          variant="outline"
          className="w-full h-32 border-dashed border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700"
          disabled={uploading}
        >
          <div className="flex flex-col items-center space-y-2">
            {uploading ? (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
            ) : (
              <>
                <Upload className="h-8 w-8" />
                <span>
                  {acceptVideo ? 'Clique para enviar imagem ou vídeo' : 'Clique para enviar imagem'}
                </span>
                {maxDuration && (
                  <span className="text-xs">Vídeos até {maxDuration}s</span>
                )}
              </>
            )}
          </div>
        </Button>
      )}
    </div>
  );
};

export default MediaUpload;
