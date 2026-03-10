# EHA Industrial Website - Implementation Plan

## Context

Xây dựng website cho công ty EHA trong lĩnh vực **Industrial** (nhà xưởng, kho vận, văn phòng công nghiệp). Dự án hoàn toàn mới (greenfield), thư mục `sv-frontend-web/` chỉ có file `readme.md` trống.

**Mục tiêu**: Website chuyên nghiệp, phong cách **Dark Industrial** với khả năng xem 3D các sản phẩm/dự án, hỗ trợ đa ngôn ngữ VI/EN.

**Tech Stack**: Next.js 14 (Pages Router) + TypeScript + Tailwind CSS + Ant Design 5 + Three.js (React Three Fiber) + Framer Motion

---

## Project Structure

```
sv-frontend-web/
├── public/
│   ├── locales/{vi,en}/*.json     # Translation files
│   ├── models/*.glb               # 3D model files
│   ├── images/{logo,hero,products,projects,team,news}/
│   └── fonts/
├── src/
│   ├── pages/                     # Pages Router
│   │   ├── _app.tsx, _document.tsx, 404.tsx
│   │   ├── index.tsx, about.tsx, contact.tsx
│   │   ├── products/{index,[slug]}.tsx
│   │   ├── projects/{index,[slug]}.tsx
│   │   ├── news/{index,[slug]}.tsx
│   │   ├── insights/{index,[slug]}.tsx
│   │   └── careers/{index,[slug]}.tsx
│   ├── components/
│   │   ├── layout/    (MainLayout, Header, Footer, Navigation, LanguageSwitcher, MobileMenu)
│   │   ├── common/    (SEOHead, PageHero, SectionTitle, Card, Button, Breadcrumb)
│   │   ├── three/     (Scene, HeroScene, ProductViewer, ModelLoader, CameraControls, effects/)
│   │   ├── home/      (HeroSection, ServicesOverview, FeaturedProjects, StatsCounter, CTASection)
│   │   ├── about/     (CompanyStory, Timeline, TeamSection, ValuesSection)
│   │   ├── products/  (ProductCard, ProductFilter, ProductGrid, Product3DViewer, ProductSpecs)
│   │   ├── projects/  (ProjectCard, ProjectGallery, ProjectTimeline)
│   │   ├── news/      (ArticleCard, ArticleList, ArticleDetail)
│   │   ├── careers/   (JobCard, JobList, ApplicationForm)
│   │   └── contact/   (ContactInfo, ContactMap, ContactFormSection)
│   ├── data/
│   │   ├── types/     (product.ts, project.ts, news.ts, insight.ts, career.ts, company.ts, common.ts)
│   │   ├── mock/      (products.ts, projects.ts, news.ts, insights.ts, careers.ts, company.ts)
│   │   └── services/  (productService.ts, projectService.ts, ...)  ← service layer cho migration sang API sau
│   ├── hooks/         (useScrollAnimation, useMediaQuery, useInView, useLanguage)
│   ├── lib/           (i18n.ts, three-utils.ts)
│   ├── styles/        (globals.css, antd-overrides.css, glassmorphism.css)
│   ├── theme/         (antdTheme.ts, colors.ts, typography.ts)
│   └── utils/         (cn.ts, formatDate.ts, slugify.ts, seo.ts)
├── next.config.js, next-i18next.config.js
├── tailwind.config.ts, postcss.config.js, tsconfig.json
└── .eslintrc.json, .prettierrc, .gitignore
```

---

## Design System - Dark Industrial

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary (Electric Blue) | ![#1677FF](https://placehold.co/15x15/1677FF/1677FF.png) | `#1677FF` |
| Secondary (Cyan) | ![#13C2C2](https://placehold.co/15x15/13C2C2/13C2C2.png) | `#13C2C2` |
| Accent (Amber) | ![#FA8C16](https://placehold.co/15x15/FA8C16/FA8C16.png) | `#FA8C16` |
| Page BG | ![#0A0E17](https://placehold.co/15x15/0A0E17/0A0E17.png) | `#0A0E17` |
| Card BG | ![#111827](https://placehold.co/15x15/111827/111827.png) | `#111827` |
| Text Primary | ![#F1F5F9](https://placehold.co/15x15/F1F5F9/F1F5F9.png) | `#F1F5F9` |
| Text Secondary | ![#94A3B8](https://placehold.co/15x15/94A3B8/94A3B8.png) | `#94A3B8` |

### Typography
- **Headings**: Space Grotesk (geometric, techy)
- **Body**: Inter (clean, modern UI)
- **Fallback**: Noto Sans (Vietnamese support)

### UI Approach
- **Ant Design**: Forms, Tables, Modals, Drawers, Menu, Timeline, Pagination
- **Tailwind CSS**: Layout, cards, heroes, typography, spacing, animations
- **Glassmorphism**: Cards với `backdrop-blur`, `border-white/10`, subtle glow on hover
- **Animations**: Framer Motion cho scroll reveal, page transitions, hover effects

---

## Implementation Phases

### Phase 1: Project Initialization
```bash
cd sv-frontend-web
npx create-next-app@14 . --typescript --eslint --tailwind --src-dir --no-app
npm install antd @ant-design/cssinjs clsx tailwind-merge
npm install framer-motion
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
npm install -D @types/three
npm install next-i18next react-i18next i18next
npm install next-sitemap
npm install -D prettier eslint-config-prettier prettier-plugin-tailwindcss
```
- Config: `tailwind.config.ts` (dark palette, glassmorphism utilities), `tsconfig.json` (path aliases), `next.config.js` (i18n, transpilePackages), `.eslintrc.json`, `.prettierrc`, `.gitignore`
- **Deliverable**: `npm run dev` chạy được

### Phase 2: Core Architecture
- `_app.tsx`: AntD ConfigProvider (dark theme) + `appWithTranslation` + MainLayout + AnimatePresence
- `_document.tsx`: AntD CSS-in-JS SSR extraction (chống FOUC)
- `antdTheme.ts`: Dark algorithm + custom tokens
- `MainLayout.tsx`, `Header.tsx` (glassmorphism sticky), `Footer.tsx`, `Navigation.tsx`, `MobileMenu.tsx`
- `LanguageSwitcher.tsx`: Toggle VI/EN
- `next-i18next.config.js` + translation files `common.json` (vi/en)
- Common components: `SEOHead.tsx`, `cn.ts` utility
- `globals.css`: Tailwind directives + glass utilities
- **Deliverable**: Layout + navigation + i18n hoạt động

### Phase 3: Homepage
- `HeroSection.tsx`: Full-viewport hero + dynamic import `HeroScene` (3D factory, particles, orbit camera)
- `ServicesOverview.tsx`: Grid glassmorphism cards (RBF, RBH, Office)
- `FeaturedProjects.tsx`: Carousel project cards
- `StatsCounter.tsx`: Animated counters (area, projects, years)
- `ClientLogos.tsx`: Logo marquee
- `CTASection.tsx`: Gradient CTA
- **Deliverable**: Homepage hoàn chỉnh với 3D hero

### Phase 4: About Us
- `CompanyStory.tsx`, `Timeline.tsx` (AntD Timeline, dark styled), `ValuesSection.tsx`, `TeamSection.tsx`, `CertificationsSection.tsx`
- Mock data: `company.ts`

### Phase 5: Products (Core Feature)
- TypeScript types: `Product`, `ProductCategory` (RBF/RBH/OFFICE), `ProductSpec`
- Mock data: 8-12 sản phẩm, service layer `productService.ts`
- `ProductFilter.tsx` (category tabs + area range + status)
- `ProductCard.tsx` + `ProductGrid.tsx`
- `products/index.tsx`: Listing với filter
- `ProductViewer.tsx` (Three.js): Interactive 3D viewer (orbit, zoom, auto-rotate)
- `Product3DViewer.tsx`: Dynamic import wrapper (ssr: false)
- `products/[slug].tsx`: Detail page (3D viewer/gallery toggle, specs table, features)

### Phase 6: Projects
- Types + mock (EHA Hải Phòng flagship + 2-3 dự án khác)
- `ProjectCard.tsx`, listing, detail page with gallery + milestone timeline

### Phase 7: News & Insights
- Types + mock (6-8 news, 4-6 insights)
- `ArticleCard.tsx`, `ArticleList.tsx`, `ArticleDetail.tsx`
- Listing + detail pages cho cả News và Insights

### Phase 8: Careers & Contact
- Types + mock (4-6 job postings)
- `JobCard.tsx`, `JobList.tsx`, `ApplicationForm.tsx` (AntD Form)
- `contact.tsx`: Company info + Google Maps + contact form

### Phase 9: Polish
- Scroll animations (Framer Motion) cho tất cả sections
- Page transitions (AnimatePresence)
- SEO: meta tags, JSON-LD, sitemap.xml, robots.txt
- Performance: `next/image`, `next/font`, lazy loading, bundle analysis
- Responsive audit: 320px → 1920px
- Accessibility: ARIA labels, keyboard navigation
- Custom 404 page, loading skeletons

---

## 3D Integration Strategy

- **Luôn dùng** `next/dynamic` với `ssr: false` cho mọi Three.js component
- **Format**: GLTF/GLB + Draco compression (hero < 2MB, product < 5MB)
- **Performance**: `dpr={[1, 2]}`, `frameloop="demand"` khi không animate, Intersection Observer
- **Vị trí 3D**: Hero section (ambient factory), Product detail (interactive viewer), Project detail (optional tour)

## i18n Strategy

- **Library**: `next-i18next` (Pages Router standard)
- **Default locale**: `vi`, supported: `['vi', 'en']`
- **Translation files**: `public/locales/{locale}/{namespace}.json` (common, home, about, products, projects, news, insights, careers, contact)
- **Mock data**: Dùng `Record<'vi' | 'en', string>` + helper `localized(data, locale)`
- **Mỗi page**: `getStaticProps` với `serverSideTranslations(locale, [namespaces])`

## Data Architecture

Service layer pattern (`src/data/services/`):
- Mỗi page gọi service (vd: `productService.getAll()`) thay vì import trực tiếp mock data
- Khi có API backend: chỉ sửa body function trong service, không cần sửa page/component

---

## Verification

1. `npm run dev` → tất cả pages render đúng
2. Chuyển đổi VI/EN → text thay đổi, URL có locale prefix
3. Products filter → lọc đúng theo category/status
4. Product detail → 3D viewer load và tương tác được (orbit, zoom)
5. Responsive → test trên mobile (375px) và desktop (1440px)
6. `npm run build` → build thành công không lỗi
