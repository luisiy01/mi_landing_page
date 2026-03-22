# Portafolio - Luis Fernando Nuñez Delgado

Este es el proyecto del portafolio profesional de Luis Fernando Nuñez Delgado, un desarrollador Full Stack con experiencia en el diseño y arquitectura de soluciones empresariales.

## 🚀 Tecnologías Principales
- **Librería UI:** React 19
- **Lenguaje:** TypeScript
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React

## 📁 Estructura del Proyecto (`src/`)
Todo el código de la interfaz se encuentra dentro del directorio `src`.

- `App.tsx`: Componente raíz principal. Actúa como la página central ensamblando todas las secciones del portafolio (Hero, Experiencia y Proyectos).
- `main.tsx`: Punto de entrada para montar la aplicación de React en el DOM.
- `components/`: Componentes modulares y reutilizables.
  - `CertificationSection.tsx`: Sección de UI para exponer las certificaciones.
  - `ProjectCard.tsx`: Componente de tarjeta para resumir cada proyecto destacado (Ej: Tech Central UI, OMA v2).
  - `ProjectModal.tsx`: Ventana modal enfocada en listar el historial completo laboral y de proyectos pasados.
  - `TerminalAnimation.tsx`: Animación estética en formato terminal usada en la presentación del perfil.
- `utils/`: Archivos de configuración o herramientas.
  - `languages.ts`: Objeto tipado con los textos en español e inglés, proporcionando el soporte de multilenguaje (`i18n`) estático.
- `assets/`: 
  - `style.css`: Personalizaciones adicionales de CSS puro que pueden ser requeridas más allá de Tailwind.

## 🛠️ Entorno de Desarrollo

1. Asegúrate de tener **Node.js** instalado.
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

3. Levanta el servidor local de Vite:
   ```bash
   npm run dev
   ```

4. Compila el proyecto para entorno productivo (TypeScript + Vite):
   ```bash
   npm run build
   ```

## 🌟 Características Destacadas
- **Manejo de Idiomas Constante:** Un botón interactivo situado en el `App.tsx` que alterna variables locales, permitiendo mostrar todo en Inglés o Español al vuelo sin dependencias pesadas.
- **Micro-Animaciones Premium:** Scroll suave y escalado en los íconos gracias a parámetros integrados de Framer Motion (`staggerChildren` y `visible`).
- **Arquitectura de Interfaz:** Un *Bento Grid* completamente visual para exponer habilidades "Core Development", "Data & Cloud", "IA / N8N" y hobbies alineado a componentes modernos de UI.
