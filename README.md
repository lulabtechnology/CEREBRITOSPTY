# Cerebritos Landing Page

Landing page premium, infantil, responsive y muy animada para **Cerebritos**.

## Tecnología

- Next.js con App Router
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React
- Sin backend
- Sin base de datos
- Lista para GitHub + Vercel

## Cómo correr localmente

1. Abre la carpeta del proyecto.
2. Instala dependencias:

```bash
npm install
```

3. Corre el servidor local:

```bash
npm run dev
```

4. Abre:

```bash
http://localhost:3000
```

## Cómo subir a GitHub Web

1. Entra a https://github.com
2. Crea un repositorio nuevo.
3. Sube todos los archivos de este ZIP al repositorio.
4. Verifica que estén en la raíz:
   - `package.json`
   - `app/`
   - `components/`
   - `lib/`
   - `public/`

## Cómo desplegar en Vercel

1. Entra a https://vercel.com
2. Clic en **Add New Project**.
3. Importa el repositorio de GitHub.
4. Framework preset: **Next.js**.
5. Build command: `npm run build`.
6. Output: dejar automático.
7. Clic en **Deploy**.

## Dónde cambiar el logo

Reemplaza el archivo:

```bash
/public/logo-cerebritos.svg
```

Mantén el mismo nombre para que aparezca automáticamente en preloader, header, hero y footer.

## Dónde cambiar WhatsApp

Edita:

```bash
/lib/site-data.ts
```

Busca:

```ts
whatsapp: "https://wa.me/507XXXXXXXX"
whatsappDisplay: "+507 XXXX-XXXX"
```

## Dónde cambiar textos

Todo el contenido principal está centralizado en:

```bash
/lib/site-data.ts
```

Ahí puedes editar:

- Hero
- Servicios
- Testimonios
- FAQ
- Equipo
- Redes sociales
- WhatsApp
- CTA

## Nota importante

No se inventaron datos delicados como dirección exacta, precios, horarios o nombres reales del equipo. Esos campos quedan editables para reemplazarlos con información confirmada.
