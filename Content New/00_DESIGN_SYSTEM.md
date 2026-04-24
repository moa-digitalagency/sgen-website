# SGEN - Design System & Guide de Style

## 🎨 Identité Visuelle

### Palette de Couleurs Gouvernementales RDC

```
PRIMAIRES (Drapeau RDC):
- Bleu Gouvernemental: #003D7A (Confiance, Autorité, Stabilité)
- Cyan Numérique: #00A8E8 (Innovation, Digital, Modernité)
- Or Gouvernemental: #D4A017 (Prestige, Excellence)
- Rouge National: #C41E3A (Fierté, Passion, Dynamisme) ⭐ NOUVEAU

SECONDAIRES:
- Gris Professionnel: #2C3E50 (Texte principal, Structure)
- Blanc Pur: #FFFFFF (Fonds, Clarté)
- Gris Clair: #F5F7FA (Arrière-plans légers)

SIGNALISATION:
- Succès: #27AE60 (Vert)
- Alerte: #E67E22 (Orange)
- Erreur: #E74C3C (Rouge léger)
```

---

## 🔤 Typographie

### Familles de Polices

```
Headings & Titres: Inter / DM Sans (Sans-serif moderne)
Body Text: Inter (Lisibilité optimale)
Prestige (accents): Cormorant Garamond (Autorité gouvernementale)
```

### Hiérarchie des Tailles

```
H1 (Page Title): 3.5rem / 56px - Bold (700)
H2 (Section): 2.5rem / 40px - Bold (700)
H3 (Subsection): 1.875rem / 30px - Semibold (600)
H4 (Content Head): 1.5rem / 24px - Semibold (600)
Body: 1rem / 16px - Regular (400)
Small: 0.875rem / 14px - Regular (400)
Caption: 0.75rem / 12px - Regular (400)
```

### Espacements de Ligne

```
Headings: 1.2
Body: 1.6
Compact: 1.4
```

---

## 🎭 Style Glassmorphisme (Clair)

### Caractéristiques

```
- Fonds: Arrière-plans blancs/gris clair semi-transparents
- Bordures: Bordures fines 1-2px avec couleurs primaires
- Ombre: Ombre subtile et légère (rgba 0.05-0.1)
- Flou: backdrop-filter avec léger flou (blur: 8px)
- Effet: Transparence + bordure + ombre = effet de verre gelé clair
```

### Composant Glassmorphe Base

```html
<!-- Structure CSS -->
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 168, 232, 0.2);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 61, 122, 0.05);
}

.glass-card-dark {
  background: rgba(245, 247, 250, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 61, 122, 0.15);
}
```

### Variantes Glassmorphe

```
LIGHT (Par défaut):
- bg: rgba(255,255,255,0.7)
- border: 1px rgba(0,168,232,0.2)
- shadow: 0 4px 6px rgba(0,61,122,0.05)

MEDIUM:
- bg: rgba(245,247,250,0.8)
- border: 1px rgba(0,61,122,0.15)
- shadow: 0 6px 10px rgba(0,61,122,0.08)

DARK (Texte sombre sur clair):
- bg: rgba(245,247,250,0.9)
- border: 1px rgba(0,61,122,0.2)
- shadow: 0 10px 15px rgba(0,61,122,0.1)

ACCENT ROUGE (Important/Urgent):
- bg: rgba(255,255,255,0.75)
- border: 1px rgba(196,30,58,0.3)
- shadow: 0 4px 6px rgba(196,30,58,0.08)
```

---

## 🎯 Composants Standards

### Boutons CTA

```
PRIMARY:
- Fond: #00A8E8 (Cyan)
- Texte: #FFFFFF
- Hover: #003D7A (Bleu foncé)
- Padding: 12px 24px
- Border-radius: 8px
- Font-weight: 600

SECONDARY:
- Fond: transparent
- Bordure: 2px #00A8E8
- Texte: #00A8E8
- Hover: Fond #E8F4F8 (cyan clair)

ACCENT (Or):
- Fond: #D4A017
- Texte: #FFFFFF
- Hover: #C49014

DANGER/URGENT (Rouge National):
- Fond: #C41E3A (Rouge)
- Texte: #FFFFFF
- Hover: #A01830 (Rouge foncé)
```

### Cartes (Cards)

```
Structure:
- Glassmorphe (rgba fond + backdrop-filter)
- Bordure haut: 3px #00A8E8
- Padding: 1.5rem
- Spacing interne: 1rem
- Hover: Lift + ombre augmentée
- Transition: 0.3s ease
```

### Navigation

```
HEADER:
- Fond: #003D7A (Bleu gouvernemental)
- Texte: #FFFFFF
- Logo: 40px height
- Menu links: Hover cyan (#00A8E8)
- Spacing: padding 1rem 2rem
```

### Hero Section

```
- Image de fond (70% width desktop, 100% mobile)
- Overlay gradient: rgba(0,61,122,0.5) → rgba(0,168,232,0.2)
- H1 blanc bold au centre
- Sous-titre blanc semi-transparent
- 2-3 CTA buttons (cyan primary, white secondary)
- Height: 500px desktop / 400px mobile
```

### Sections

```
SECTION ALTERNÉE:
- Image LEFT / Content RIGHT
- Puis Image RIGHT / Content LEFT
- Spacing: 3rem entre sections
- Content width: 50% max per side

ICON GRIDS:
- 4 colonnes desktop / 2 colonnes tablet / 1 colonne mobile
- Icons: 48px × 48px
- Titre + Description courte
- Hover: Scale 1.05 + changement couleur

TESTIMONY/STATS:
- Large number (2.5rem) en #00A8E8
- Petit texte en gris
- Glassmorphe fond clair
```

---

## 📐 Grille & Spacing

### Marges Standards

```
Container: max-width 1200px, margin 0 auto
Padding page: 2rem (mobile) / 4rem (desktop)
Spacing sections: 4rem (mobile) / 6rem (desktop)
Spacing items: 1.5rem
Padding cartes: 1.5rem
```

### Breakpoints Tailwind

```
sm: 640px (mobiles)
md: 768px (tablets)
lg: 1024px (desktops)
xl: 1280px (large screens)
2xl: 1536px (ultra-wide)
```

---

## 🌓 Mode Clair (Défaut)

```
Fond page: #FFFFFF
Fond sections alt: #F5F7FA
Texte principal: #2C3E50
Texte secondaire: #8B95A5
Titres: #003D7A (Bleu) ou #C41E3A (Rouge national pour emphasis)
Accents: #00A8E8 (Cyan) ou #D4A017 (Or) ou #C41E3A (Rouge)
Bordures: rgba(0,168,232,0.2) ou rgba(196,30,58,0.15)
Ombre: rgba(0,61,122,0.05-0.1)
```

---

## 🎬 Animations & Transitions

### Timing Standards

```
Hover rapide: 0.2s ease
Transition standard: 0.3s ease
Page load: 0.5s ease-out
Scroll reveal: 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

### Effets Recommandés

```
- Button hover: Scale 1.02 + ombre +5px
- Card hover: Translatey -5px + ombre +10px
- Link hover: Color change + bottom border
- Icon hover: Scale 1.1 + color change
- Scroll-in: Fade in + slide down
```

---

## 📱 Responsive Design

### Stratégie Mobile-First

```
Mobile (< 640px):
- Full width content (1 colonne)
- Hero height: 400px
- Font sizes: -10%
- Padding: 1rem

Tablet (640px - 1024px):
- 2 colonnes max
- Hero height: 450px
- Padding: 1.5rem

Desktop (> 1024px):
- Full layout avec grille
- Hero height: 500px+
- Padding: 2-4rem
```

---

## 🎨 Variantes de Sections

### Section Bleu Foncé (Prestige)

```
Fond: #003D7A
Texte: #FFFFFF
Titre: #D4A017 (Or accent)
Boutons: Cyan (inversion de couleur)
```

### Section Gradient (Innovation)

```
Fond: linear-gradient(135deg, #003D7A 0%, #00A8E8 100%)
Texte: #FFFFFF
Accents: #D4A017 (Or)
```

### Section Gradient Rouge (Urgence/Appel)

```
Fond: linear-gradient(135deg, #C41E3A 0%, #A01830 100%)
Texte: #FFFFFF
Accents: #D4A017 (Or)
Boutons: Bleu primaire (inverse de couleur fond)
```

### Section Gris Clair (Données/Stats)

```
Fond: #F5F7FA
Texte: #2C3E50
Bordures: #00A8E8
Icônes: #003D7A
```

---

## ✨ Éléments Interactifs

### Formulaires

```
Input:
- Border: 1px #D4A017 (Or)
- Focus: Border #00A8E8 + ombre cyan
- Padding: 12px
- Border-radius: 6px
- Font-size: 1rem

Label:
- Color: #2C3E50
- Font-weight: 500

Submit Button:
- Fond: #00A8E8
- Hover: #003D7A
- Width: 100% (mobile) / auto (desktop)
```

### Icônes

```
Taille: 32px / 48px / 64px selon contexte
Couleur: #003D7A (par défaut) ou #00A8E8 (accent)
Stroke-width: 2px
Hover: Couleur change + scale 1.1
```

---

## 📊 Structure des Pages

### Meta Tags Recommandés

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="...">
<meta name="theme-color" content="#003D7A">
<link rel="canonical" href="https://sgen.gouv.cd/">
```

### Open Graph

```html
<meta property="og:title" content="SGEN - Secrétariat Général Économie Numérique">
<meta property="og:description" content="...">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:type" content="website">
```

---

## 🎯 Checklist de Conformité Design

```
✅ Palette couleurs RDC appliquée
✅ Glassmorphisme clair (fond blanc/gris, bordure, ombre légère)
✅ Typographie Inter + Cormorant Garamond
✅ Mobile-first responsive
✅ Contraste WCAG AA minimum (#003D7A sur blanc = ✅)
✅ Images optimisées (webp + fallback jpg)
✅ Animations fluides (60fps)
✅ Footer avec infos légales + contact
✅ Navigation cohérente
✅ CTA clairs et visibles
✅ Spacing régulier (multiples de 0.5rem)
✅ Loading states & feedback utilisateur
```

---

## 📝 Notes d'Implémentation

```
- Utiliser Tailwind CSS v3+ avec config couleurs RDC
- JavaScript vanilla pour interactivité
- Images hero: 1920×1080px minimum, optimisées
- Favicon & logo: SVG de préférence
- Icons: Feather Icons ou Heroicons
- Font fallbacks: Sans-serif système
- CSS custom properties pour flexibilité
- BEM pour nommage classes
```

**Prêt pour le développement HTML5 + Tailwind + Vanilla JS**
