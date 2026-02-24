// client/src/services/api.ts

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const api = {
  async getLandingContent() {
    const response = await fetch('/data/landing.json');
    if (!response.ok) throw new Error('Error cargando contenido');
    return response.json();
  }, 
};