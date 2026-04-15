# Estructura de contenido

Todo el contenido editable principal está en:

```bash
/lib/site-data.ts
```

## Datos generales

```ts
name
tagline
logo
instagram
whatsapp
whatsappDisplay
email
```

## Hero

```ts
hero: {
  eyebrow
  title
  subtitle
  primaryCta
  secondaryCta
  image
}
```

## Confianza

```ts
trust: []
```

Edita las cuatro tarjetas:

- Aprendizaje con amor
- Atención personalizada
- Desarrollo integral
- Acompañamiento familiar

## Servicios

```ts
services: []
```

Cada servicio tiene:

- `title`
- `icon`
- `image`
- `color`
- `text`

## Método

```ts
method: []
```

Pasos editables:

1. Escuchamos
2. Evaluamos
3. Personalizamos
4. Acompañamos

## Equipo

```ts
team: []
```

Campos:

- `name`
- `role`
- `image`
- `text`

Reemplaza los placeholders cuando tengas información real.

## Galería

```ts
gallery: []
```

Cambia las rutas si subes nuevas imágenes.

## Testimonios

```ts
testimonials: []
```

No se usaron nombres reales. Reemplaza cuando tengas testimonios confirmados.

## FAQ

```ts
faqs: []
```

Cada pregunta tiene:

- `q`
- `a`

## Componentes principales

```bash
/components/Preloader.tsx
/components/Header.tsx
/components/Hero.tsx
/components/TrustSection.tsx
/components/ServicesSection.tsx
/components/MethodSection.tsx
/components/PlayLearningSection.tsx
/components/TeamSection.tsx
/components/GallerySection.tsx
/components/TestimonialsSection.tsx
/components/CTASection.tsx
/components/FAQSection.tsx
/components/ContactSection.tsx
/components/Footer.tsx
```
