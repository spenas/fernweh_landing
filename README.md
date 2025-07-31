# Fernweh - Agencia de Turismo | Página en Construcción

Una elegante página "En construcción" para una agencia de turismo, construida con Next.js, React y Tailwind CSS.

## 🌟 Características

- **Diseño Responsivo**: Optimizado para móvil, tablet y desktop
- **Animaciones Suaves**: Transiciones CSS puras sin librerías externas
- **Formulario de Email**: Captura de leads preparado para integración futura
- **SEO Optimizado**: Meta tags completos para mejor indexación
- **Performance**: Carga rápida y optimizado para Vercel
- **Accesibilidad**: Diseño inclusivo y navegable

## 🚀 Instalación Local

### Prerrequisitos
- Node.js 18.0 o superior
- npm o yarn

### Pasos de instalación

1. **Clonar o descargar el proyecto**
   ```bash
   # Si tienes el código en un repositorio
   git clone [URL-del-repositorio]
   cd landing_fernweh
   
   # O simplemente navega a la carpeta del proyecto
   cd /ruta/a/tu/proyecto
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📦 Despliegue en Vercel

### Opción 1: Despliegue automático desde Git

1. **Sube tu código a GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Landing page en construcción"
   git branch -M main
   git remote add origin [tu-repositorio]
   git push -u origin main
   ```

2. **Conecta con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub/GitLab/Bitbucket
   - Haz clic en "New Project"
   - Selecciona tu repositorio
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"

### Opción 2: Despliegue directo con Vercel CLI

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Autenticarse**
   ```bash
   vercel login
   ```

3. **Desplegar**
   ```bash
   vercel
   ```

4. **Para despliegue a producción**
   ```bash
   vercel --prod
   ```

## 🌐 Conexión con Dominio de Wix

### Paso 1: Configurar DNS en Wix

1. **Accede a tu panel de Wix**
   - Ve a "Configuración del sitio" > "Dominios"
   - Selecciona tu dominio personalizado

2. **Configurar registros DNS**
   - Añade un registro CNAME:
     ```
     Tipo: CNAME
     Nombre: www (o @ para el dominio raíz)
     Valor: [tu-dominio-vercel].vercel.app
     ```

### Paso 2: Configurar el dominio en Vercel

1. **En tu dashboard de Vercel**
   - Ve a tu proyecto
   - Haz clic en "Settings" > "Domains"
   - Añade tu dominio personalizado
   - Sigue las instrucciones para verificación

2. **Configuración alternativa (si Wix no permite CNAME en el root)**
   ```
   Registro A para el dominio raíz (@):
   76.76.19.61
   
   Registro CNAME para www:
   [tu-proyecto].vercel.app
   ```

### Paso 3: Verificación

1. **Espera la propagación DNS** (puede tardar hasta 48 horas)
2. **Verifica en múltiples herramientas**:
   - [whatsmydns.net](https://www.whatsmydns.net/)
   - [dnschecker.org](https://www.dnschecker.org/)

## 📝 Personalización

### Contenido Principal
Edita `app/page.js` para personalizar:
- Nombre de la agencia (línea 20)
- Mensajes principales (líneas 35-45)
- Información de contacto (líneas 85-110)
- Enlaces de redes sociales (líneas 115-125)

### Estilos y Colores
Modifica `tailwind.config.js` para cambiar:
- Paleta de colores (líneas 8-13)
- Animaciones personalizadas (líneas 14-25)

### Metadata y SEO
Actualiza `app/layout.js` para cambiar:
- Título y descripción (líneas 3-6)
- Meta tags de redes sociales (líneas 10-20)

## 🎨 Estructura de Colores

```css
/* Colores principales */
ocean-blue: #0ea5e9    /* Azul océano */
deep-blue: #0284c7     /* Azul profundo */
nature-green: #10b981  /* Verde naturaleza */
forest-green: #059669  /* Verde bosque */
```

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter de código

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Próximas Integraciones

El proyecto está preparado para futuras integraciones:

### Backend para formulario de email
```javascript
// Ejemplo de integración con API
const handleEmailSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    // Manejar respuesta
  } catch (error) {
    console.error('Error:', error)
  }
}
```

### Analytics
```javascript
// Google Analytics 4
import { GoogleAnalytics } from '@next/third-parties/google'

// En layout.js
<GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
```

## 📞 Soporte

Si necesitas ayuda con la configuración:

1. **Revisa la documentación oficial**:
   - [Next.js Docs](https://nextjs.org/docs)
   - [Vercel Docs](https://vercel.com/docs)
   
2. **Problemas comunes**:
   - Error de compilación: Verifica que todas las dependencias estén instaladas
   - Problemas de DNS: Espera 24-48 horas para propagación completa
   - Error 404: Asegúrate de que el archivo `app/page.js` existe

## 📄 Licencia

Este proyecto es privado y está destinado para uso de la agencia de turismo Fernweh.

---

**¡Tu página estará lista en minutos!** 🎉

Para cualquier modificación adicional, todos los archivos están bien comentados y organizados para facilitar futuras actualizaciones.