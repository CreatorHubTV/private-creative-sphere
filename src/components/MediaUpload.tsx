
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Image, 
  Video, 
  FileText, 
  X,
  Play,
  Eye,
  Trash2,
  Edit
} from "lucide-react";

interface MediaFile {
  id: string;
  file: File;
  type: 'image' | 'video' | 'text';
  preview?: string;
  title: string;
  description: string;
}

const MediaUpload = () => {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [uploadType, setUploadType] = useState<'image' | 'video' | 'text'>('image');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    
    selectedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newFile: MediaFile = {
          id: Date.now().toString() + Math.random(),
          file,
          type: file.type.startsWith('video') ? 'video' : 'image',
          preview: e.target?.result as string,
          title: '',
          description: ''
        };
        setFiles(prev => [...prev, newFile]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleTextPost = () => {
    const newTextPost: MediaFile = {
      id: Date.now().toString(),
      file: new File([''], 'text-post.txt'),
      type: 'text',
      title: '',
      description: ''
    };
    setFiles(prev => [...prev, newTextPost]);
  };

  const updateFile = (id: string, updates: Partial<MediaFile>) => {
    setFiles(prev => prev.map(file => 
      file.id === id ? { ...file, ...updates } : file
    ));
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const handleUpload = async () => {
    setIsUploading(true);
    
    // Simular upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Fazendo upload de", files.length, "arquivos:", files);
    setFiles([]);
    setIsUploading(false);
  };

  return (
    <div className="space-y-6">
      {/* Upload Type Selection */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Tipo de Conteúdo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <Button
              variant={uploadType === 'image' ? 'default' : 'outline'}
              className={`h-20 ${uploadType === 'image' ? 'bg-purple-600 hover:bg-purple-700' : 'border-gray-600 hover:bg-gray-700'}`}
              onClick={() => setUploadType('image')}
            >
              <div className="text-center">
                <Image className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm">Fotos</span>
              </div>
            </Button>
            
            <Button
              variant={uploadType === 'video' ? 'default' : 'outline'}
              className={`h-20 ${uploadType === 'video' ? 'bg-purple-600 hover:bg-purple-700' : 'border-gray-600 hover:bg-gray-700'}`}
              onClick={() => setUploadType('video')}
            >
              <div className="text-center">
                <Video className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm">Vídeos</span>
              </div>
            </Button>
            
            <Button
              variant={uploadType === 'text' ? 'default' : 'outline'}
              className={`h-20 ${uploadType === 'text' ? 'bg-purple-600 hover:bg-purple-700' : 'border-gray-600 hover:bg-gray-700'}`}
              onClick={() => setUploadType('text')}
            >
              <div className="text-center">
                <FileText className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm">Texto</span>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upload Area */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardContent className="p-6">
          {uploadType === 'text' ? (
            <Button
              onClick={handleTextPost}
              className="w-full h-32 border-2 border-dashed border-gray-600 hover:border-purple-500 bg-transparent"
            >
              <div className="text-center">
                <FileText className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-400">Criar Post de Texto</p>
              </div>
            </Button>
          ) : (
            <div>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept={uploadType === 'image' ? 'image/*' : 'video/*'}
                onChange={handleFileSelect}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-32 border-2 border-dashed border-gray-600 hover:border-purple-500 bg-transparent"
              >
                <div className="text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-400">
                    Clique para fazer upload de {uploadType === 'image' ? 'fotos' : 'vídeos'}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Ou arraste e solte arquivos aqui
                  </p>
                </div>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* File Preview and Editing */}
      {files.length > 0 && (
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Conteúdo para Upload ({files.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {files.map((file) => (
              <div key={file.id} className="border border-gray-600 rounded-lg p-4 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    {/* Preview */}
                    <div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                      {file.type === 'image' && file.preview ? (
                        <img src={file.preview} alt="Preview" className="w-full h-full object-cover" />
                      ) : file.type === 'video' && file.preview ? (
                        <div className="relative w-full h-full">
                          <img src={file.preview} alt="Video preview" className="w-full h-full object-cover" />
                          <Play className="absolute inset-0 m-auto h-6 w-6 text-white" />
                        </div>
                      ) : (
                        <FileText className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    
                    {/* File Info */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-2">
                        <Badge className={
                          file.type === 'image' ? 'bg-blue-600' :
                          file.type === 'video' ? 'bg-red-600' : 'bg-green-600'
                        }>
                          {file.type === 'image' ? 'Foto' : file.type === 'video' ? 'Vídeo' : 'Texto'}
                        </Badge>
                        {file.file.size && (
                          <span className="text-gray-400 text-sm">
                            {(file.file.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <Label htmlFor={`title-${file.id}`} className="text-white text-sm">
                            Título
                          </Label>
                          <Input
                            id={`title-${file.id}`}
                            placeholder="Título do conteúdo..."
                            value={file.title}
                            onChange={(e) => updateFile(file.id, { title: e.target.value })}
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor={`desc-${file.id}`} className="text-white text-sm">
                            Descrição
                          </Label>
                          <Textarea
                            id={`desc-${file.id}`}
                            placeholder="Descrição do conteúdo..."
                            value={file.description}
                            onChange={(e) => updateFile(file.id, { description: e.target.value })}
                            className="bg-gray-700 border-gray-600 text-white"
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(file.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Upload Button */}
            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-600">
              <Button
                variant="outline"
                onClick={() => setFiles([])}
                className="border-gray-600 text-white hover:bg-gray-700"
              >
                Limpar Tudo
              </Button>
              <Button
                onClick={handleUpload}
                disabled={isUploading || files.length === 0}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {isUploading ? (
                  <>
                    <Upload className="h-4 w-4 mr-2 animate-spin" />
                    Fazendo Upload...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Publicar Conteúdo ({files.length})
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MediaUpload;
