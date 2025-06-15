import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  loginWithGoogle: () => window.location.href = `${API_URL}/auth/google`,
  getCurrentUser: () => api.get('/auth/me'),
};

// Artwork API
export const artworkAPI = {
  getArtworks: (params?: {
    page?: number;
    limit?: number;
    category?: string;
    status?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
    featured?: boolean;
  }) => api.get('/artworks', { params }),
  
  getArtwork: (id: string) => api.get(`/artworks/${id}`),
  
  createArtwork: (data: any) => api.post('/artworks', data),
  
  updateArtwork: (id: string, data: any) => api.put(`/artworks/${id}`, data),
  
  deleteArtwork: (id: string) => api.delete(`/artworks/${id}`),
};

export default api; 