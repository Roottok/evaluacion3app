import api from './api';

export const imageService = {
  async uploadImage(uri: string): Promise<string | null> {
    try {
      const formData = new FormData();
      const filename = uri.split('/').pop();
      const match = /\.(\w+)$/.exec(filename || '');
      const type = match ? `image/${match[1]}` : `image`;

      formData.append('image', { uri, name: filename, type } as any);

      const response = await api.post('/images', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return response.data.data.url; 
    } catch (error) {
      console.error("Error subiendo imagen:", error);
      return null;
    }
  }
};