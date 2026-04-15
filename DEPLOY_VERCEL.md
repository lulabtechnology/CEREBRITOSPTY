# Guía rápida para desplegar en Vercel

## 1. Subir proyecto a GitHub

Sube el contenido completo del ZIP a un repositorio nuevo.

La raíz del repositorio debe verse así:

```bash
app/
components/
lib/
public/
package.json
tailwind.config.ts
tsconfig.json
next.config.ts
```

## 2. Importar en Vercel

1. Entra a Vercel.
2. Clic en **Add New**.
3. Clic en **Project**.
4. Selecciona el repositorio.
5. Vercel detectará Next.js automáticamente.

## 3. Configuración

Usa la configuración automática:

- Framework: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: automático

## 4. Deploy

Clic en **Deploy**.

## 5. Si cambias el logo

Sube el nuevo logo en:

```bash
/public/logo-cerebritos.svg
```

Haz commit y Vercel actualizará el sitio.

## 6. Si cambias textos o WhatsApp

Edita:

```bash
/lib/site-data.ts
```

Luego haz commit en GitHub y Vercel desplegará la nueva versión.
