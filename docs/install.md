# 🚀 DevStudy - Guía de Instalación del Entorno

**Versión:** 1.1
**Última actualización:** 23 de febrero de 2026
**Carrera:** Matemáticas Aplicadas y Computación - UNAM FES Acatlán  
**Materia:** Desarrollo Web
**Profesor:** Romero Mora Diego

---

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Instalación en Windows](#instalación-en-windows)
3. [Instalación en Linux](#instalación-en-linux)
4. [Configuración del Proyecto](#configuración-del-proyecto)
5. [Variables de Entorno](#variables-de-entorno)
6. [Ejecución del Proyecto](#ejecución-del-proyecto)
7. [Solución de Problemas](#solución-de-problemas)
8. [Información del Equipo](#información-del-equipo)

---

## 🎯 Requisitos Previos

| Herramienta | Versión Mínima | Propósito |
|-------------|---------------|-----------|
| **[Node.js](https://nodejs.org/en/download)** | >= 18.0.0 | Runtime de JavaScript |
| **[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)** | >= 9.0.0 | Gestor de paquetes |
| **[Git](https://git-scm.com/install/)** | >= 2.40.0 | Control de versiones |
| **[VS Code](https://code.visualstudio.com/Download)** | >= 1.80.0 | Editor de código (recomendado) |
| **Navegador** | Chrome/Firefox/Edge | Pruebas del sitio |

---

## 🪟 Instalación en Windows

### Paso 1: Instalar Node.js y npm

1. Ve a [nodejs.org](https://nodejs.org/)
2. Descarga la versión **LTS** (Long Term Support)
3. Ejecuta el instalador `.msi`
4. Sigue el asistente de instalación (Next → Next → Install)
5. Verifica la instalación:

```powershell
# Abre PowerShell o CMD
node --version
npm --version
```

**Debe mostrar:**
```
v18.x.x o superior
9.x.x o superior
```

### Paso 2: Instalar Git

1. Ve a [git-scm.com](https://git-scm.com/)
2. Descarga el instalador para Windows
3. Ejecuta el instalador `.exe`
4. **Importante:** En "Adjusting your PATH environment", selecciona:
   - ✅ **Git from the command line and also from 3rd-party software**
5. Verifica la instalación:

```powershell
git --version
```

### Paso 3: Configurar Git

```powershell
# Configura tu nombre y email (usados en commits)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Configura el editor por defecto
git config --global core.editor "code --wait"

# Configura saltos de línea para Windows
git config --global core.autocrlf true
```

### Paso 4: Instalar VS Code (Recomendado)

1. Ve a [code.visualstudio.com](https://code.visualstudio.com/)
2. Descarga e instala VS Code
3. Instala las extensiones recomendadas:

```
✅ ESLint
✅ Prettier
✅ Tailwind CSS IntelliSense
✅ GitLens
✅ TypeScript Hero
✅ Live Server
```

---

## 🐧 Instalación en Linux

### Paso 1: Actualizar Sistema

```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# Fedora
sudo dnf update -y

# Arch/Manjaro
sudo pacman -Syu
```

### Paso 2: Instalar Node.js y npm

#### Opción A: Usando NVM (Recomendado)

```bash
# Instalar NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Cargar NVM
source ~/.bashrc  # o ~/.zshrc

# Instalar Node.js LTS
nvm install --lts

# Verificar instalación
node --version
npm --version
```

#### Opción B: Usando Repositorio Oficial

```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Fedora
sudo dnf install nodejs npm

# Arch/Manjaro
sudo pacman -S nodejs npm
```

### Paso 3: Instalar Git

```bash
# Ubuntu/Debian
sudo apt install git -y

# Fedora
sudo dnf install git -y

# Arch/Manjaro
sudo pacman -S git
```

### Paso 4: Configurar Git

```bash
# Configura tu nombre y email
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Configura el editor por defecto
git config --global core.editor "code --wait"

# Configura saltos de línea para Linux
git config --global core.autocrlf input
```

### Paso 5: Instalar VS Code

```bash
# Ubuntu/Debian
sudo snap install --classic code

# Fedora
sudo dnf install https://packages.microsoft.com/repos/vscode/code-1.85.0-1699621508.el7.x86_64.rpm

# Arch/Manjaro
sudo pacman -S visual-studio-code-bin
```

---

## ⚙️ Configuración del Proyecto

### Paso 1: Clonar el Repositorio

```bash
# Navega a tu carpeta de proyectos
cd ~/Documents  # Linux
cd C:\Users\TuUsuario\Documents  # Windows

# Clona el repositorio
git clone https://github.com/DevStudyJS/DevStudy.git

# Entra al directorio
cd DevStudy
```

### Paso 2: Instalar Dependencias

```bash
# Dependencias del Frontend (client)
cd client
npm install

# (Opcional) Dependencias del Backend (Sprint 3+)
# cd ../server
# npm install
```

### Paso 3: Configurar Variables de Entorno

```bash
# En la carpeta client/
cd client

# Crea el archivo .env.local
cp .env.example .env.local
```

**Edita `.env.local`:**

```env
# API URL
VITE_API_URL=/api

# Nombre de la aplicación
VITE_APP_NAME=DevStudy

# Versión actual
VITE_VERSION=1.1
```

⚠️ **Importante:** Nunca subas `.env.local` a GitHub. Está en `.gitignore`.

---

## 🚀 Ejecución del Proyecto

### Modo Desarrollo

```bash
# En la carpeta client/
cd client
npm run dev
```

**El servidor iniciará en:** `http://localhost:5173`

### Modo Producción (Build)

```bash
# En la carpeta client/
cd client
npm run build
npm run preview
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Ejecuta ESLint |
| `npm test` | Ejecuta tests (Sprint 5+) |

---

## 🔧 Solución de Problemas

### ❌ Error: `npm: command not found`

**Windows:**
```powershell
# Reinicia la terminal o agrega Node.js al PATH manualmente
# C:\Program Files\nodejs\
```

**Linux:**
```bash
# Verifica que Node.js esté en PATH
export PATH=$PATH:/usr/local/bin/node
source ~/.bashrc
```

---

### ❌ Error: `EACCES: permission denied`

**Linux:**
```bash
# No uses sudo con npm. En su lugar:
sudo chown -R $USER:$GROUP ~/.npm
```

**Windows:**
```powershell
# Ejecuta PowerShell como Administrador
```

---

### ❌ Error: `tsc: command not found`

```bash
# Instala TypeScript globalmente
npm install -g typescript

# O asegúrate de que esté en client/package.json
cd client
npm install typescript --save-dev
```

---

### ❌ Error: `Cannot find module '@rollup/rollup-linux-x64-gnu'`

```bash
# Elimina node_modules y package-lock.json
rm -rf node_modules package-lock.json

# Reinstala dependencias
npm install

# Agrega rollup para Linux (si usas GitHub Actions)
npm install -D @rollup/rollup-linux-x64-gnu
```

---

### ❌ Error: Puerto 5173 ya está en uso

```bash
# Cambia el puerto en vite.config.ts
# O usa otro puerto:
npm run dev -- --port 5174
```

---

### ❌ Error: Git no reconoce saltos de línea

**Windows:**
```powershell
git config --global core.autocrlf true
```

**Linux:**
```bash
git config --global core.autocrlf input
```

---

## 👥 Información del Equipo

### Miembros del Equipo DevStudy

| Nombre | Rol | Email | GitHub |
|--------|-----|-------|--------|
| **Buenrostro Cruces Sarai** | Diseñadora UI/UX, Gestora BD | --- | @SaraiCruces |
| **Gil de Gaona Jazmín** | QA Tester, Product Owner | giljazmin2005@gmail.com | @JazGil |
| **Hernández Peña Ángel** | Project Manager, Full-Stack | ahangel2005@gmail.com | @SinR0str0 |
| **Medina Hernández Ramón** | QA Tester, Developer | --- | @RamonMedina04 |
| **Pérez López Zaira** | Frontend, Arquitecta Software | --- | @ZairaP-coder |

---

### 🗓️ Flujo de Trabajo Recomendado

```bash
# 1. Antes de empezar a trabajar
git pull origin main

# 2. Crea tu rama feature
git checkout -b feature/tu-nombre-tarea

# 3. Trabaja en tu feature
# ... código ...

# 4. Commit con mensaje descriptivo
git add .
git commit -m "feat: descripción clara del cambio"

# 5. Push a GitHub
git push -u origin feature/tu-nombre-tarea

# 6. Crea Pull Request en GitHub
# 7. Espera Code Review (mínimo 2 compañeros)
# 8. Merge a develop/main
```

---

## 📚 Recursos Adicionales

| Recurso | Enlace | Propósito |
|---------|--------|-----------|
| **Documentación React** | react.dev | Frontend framework |
| **Documentación Vite** | vitejs.dev | Build tool |
| **Documentación TypeScript** | typescriptlang.org | Tipado |
| **Documentación Tailwind** | tailwindcss.com | Estilos |
| **Documentación Git** | git-scm.com/doc | Control de versiones |
| **Documentación Vercel** | vercel.com/docs | Deploy |
| **Plan de Trabajo** | Ver PDF adjunto | Guía del proyecto |

---

**© 2026 DevStudy - UNAM FES Acatlán**  
**Matemáticas Aplicadas y Computación**  
**Desarrollo Web - Semestre 2026-II**

---
