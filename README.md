# Sitio web personal con Astro

Este repositorio contiene el c\u00f3digo fuente de [mapineda48.de](https://www.mapineda48.de), una p\u00e1gina personal desarrollada con **Astro** e integrada con React y Tailwind CSS. El objetivo principal es servir como espacio de presentaci\u00f3n y experimentaci\u00f3n con estas tecnolog\u00edas.

## \u00bfQu\u00e9 es Astro?

[Astro](https://astro.build) es un framework orientado a la generaci\u00f3n de sitios est\u00e1ticos r\u00e1pidos. Su arquitectura permite usar componentes de varios frameworks (como React o Vue) y producir HTML optimizado para obtener tiempos de carga m\u00e1s veloces. Gracias a su enfoque _islands_, solo se ejecuta JavaScript donde es realmente necesario.

## Estructura del proyecto

```
/
├── public/            Archivos est\u00e1ticos
├── src/
│   ├── assets/        Recursos (im\u00e1genes, fuentes, ...)
│   ├── components/    Componentes de la interfaz
│   ├── layouts/       Dise\u00f1os reutilizables
│   └── pages/         P\u00e1ginas del sitio
└── package.json       Definici\u00f3n de dependencias
```

## C\u00f3mo empezar a trabajar

1. Clona el repositorio y accede a la carpeta del proyecto.
2. Instala las dependencias ejecutando:

   ```bash
   pnpm install
   ```

3. Inicia el servidor de desarrollo con:

   ```bash
   pnpm dev
   ```

   Esto levantar\u00e1 el sitio en `http://localhost:4321`.

4. Para generar la versi\u00f3n de producci\u00f3n ejecuta:

   ```bash
   pnpm build
   ```

5. Si deseas revisar el resultado del _build_ localmente:

   ```bash
   pnpm preview
   ```

## Recursos adicionales

- Documentaci\u00f3n oficial de Astro: <https://docs.astro.build>
- Comunidad en Discord: <https://astro.build/chat>

