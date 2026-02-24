// client/src/services/api.ts

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const api = {
  async getLandingContent() {
    const response = await fetch('/data/landing.json');
    if (!response.ok) throw new Error('Error cargando contenido');
    return response.json();
  }, 

  async login(email: string, password: string) {
    // SIMULACIÓN - Sprint 3: conectar con backend real
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, token: 'mock-token' };
  },
};