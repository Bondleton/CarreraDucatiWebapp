# 🏍️ Carrera Ducati - Aplicación Web PWA

![Logo Ducati](assets/images/logo-marcas.png)

## 📖 Descripción

**Carrera Ducati** es una aplicación web desarrollada con **Angular** que ofrece una experiencia interactiva de promoción y juego, con integración de funcionalidades como login, registro, perfil de usuario, bases de la promoción, instrucciones y un juego dinámico relacionado con la marca Ducati.

La aplicación está diseñada para funcionar como una **Progressive Web App (PWA)**, lo que permite su instalación en dispositivos móviles y escritorio, ofreciendo un rendimiento rápido, acceso offline parcial y una experiencia nativa en diferentes plataformas.

---

## ✨ Características principales

- 🔐 Autenticación y registro de usuarios con validación completa.
- 🗺️ Navegación dinámica mediante un módulo de rutas organizado.
- ♻️ Componentes parciales reutilizables: header, sidebar y footer.
- 📱 Pantallas para bases de la promoción, instrucciones, juego y perfil.
- 📝 Gestión de perfiles con edición y almacenamiento local.
- 📜 Políticas de privacidad y términos y condiciones integrados.
- 🎮 Juego interactivo con sistema de puntuación.
- 🌐 Aplicación desplegada como PWA con soporte offline y carga rápida.

---

## 🛠️ Tecnologías utilizadas

- Angular 14+
- Angular Material
- TypeScript
- HTML5 / CSS3 / SCSS
- LocalStorage para persistencia de perfil
- PWA (Service Worker, Manifest)

---

## 🚀 Instalación y ejecución local

1. Clona el repositorio
```bash
git clone https://github.com/tu_usuario/carrera-ducati.git
cd carrera-ducati
```

2. Instala las dependencias
```bash
npm install
```

3. Levanta el servidor de desarrollo
```bash
ng serve
```

4. Abre en tu navegador
```bash
http://localhost:4200
```

## ⚙️ Configuración y despliegue PWA
La aplicación está configurada para funcionar como una PWA usando el Angular Service Worker.

### 🗂️ Archivos clave
* ngsw-config.json — Configuración del service worker para cacheo y manejo offline.

* manifest.webmanifest — Archivo de manifiesto para el icono, nombre, y comportamiento de la app.

* angular.json — Configuración para habilitar la compilación y despliegue de la PWA.

* src/assets/icons/ — Iconos para diferentes tamaños de pantalla.

### 📦 Pasos para construir la aplicación para producción con PWA

1. Esto genera una carpeta dist/ optimizada para producción.

```bash
ng build --prod
```

### 🔍 Cómo servir la PWA localmente

1. Para probar la PWA localmente es recomendable usar un servidor HTTP estático:
```bash
npm install -g http-server
http-server -p 8080 -c-1 dist/carrera-ducati
```

2. Luego abre en tu navegador:
```bash
http://localhost:8080
```
### 📁 Estructura del proyecto
* src/app/partials/ — Componentes reutilizables (header, sidebar, footer).

* src/app/screens/ — Componentes principales por pantalla.

* src/app/services/ — Servicios para validación, manejo de usuarios y errores.

* src/assets/ — Imágenes y recursos estáticos.

* ngsw-config.json — Configuración del service worker.
