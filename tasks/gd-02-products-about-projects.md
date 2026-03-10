# GD-02: Sản phẩm + Giới thiệu + Dự án

## Context

Giai đoạn 2 của dự án EHA Industrial website. GD-01 đã hoàn thành: layout, data structure, homepage với 3D hero, image optimization, glassmorphism UI. Bây giờ xây dựng 3 nhóm trang nội dung chính:

1. **Sản phẩm** — Listing + Detail (6 sản phẩm: 2 RBF, 2 RBH, 2 Office)
2. **Giới thiệu** — Trang about với company story, timeline, partnership
3. **Dự án** — Listing + Detail (1 dự án: EHA Hải Phòng 9ha)

Tất cả nội dung dùng dữ liệu thật EHA Industrial, song ngữ VI/EN.

**Trạng thái: ĐÃ HOÀN THÀNH**

---

## Tổng hợp files (34 files changed, 1941 insertions)

### Common Components mới (2 files)
- `src/components/common/Breadcrumb.tsx` — Navigation trail (Home > Products > RBF-A1), dùng `RightOutlined` separator, `HomeOutlined` cho item đầu
- `src/components/common/PageHero.tsx` — Hero banner tái sử dụng cho trang con, `h-[50vh] min-h-[400px]`, `OptimizedImage` background + gradient overlays

### Products (7 files)
- `src/components/products/ProductFilterBar.tsx` — Category tabs dạng pill (All|RBF|RBH|Office), `gradient-primary` active, count badge
- `src/components/products/ProductCard.tsx` — Glass card, `OptimizedImage` thumbnail, category badge (RBF=orange, RBH=blue, Office=emerald), status badge, hover scale
- `src/components/products/ProductGrid.tsx` — Grid responsive `1→2→3 cols`, `AnimatePresence`, empty state
- `src/components/products/ProductGallery.tsx` — Main image + thumbnail strip, `Image.PreviewGroup` lightbox, `AnimatePresence` khi switch
- `src/components/products/ProductSpecsTable.tsx` — Bảng 2 cột glass-card, alternating row `bg-white/[0.02]`
- `src/pages/products/index.tsx` — Listing với filter, `useMemo`, shallow routing URL sync
- `src/pages/products/[slug].tsx` — Detail: gallery, specs, features, related products, CTAs

### About (5 files)
- `src/components/about/CompanyStory.tsx` — Split layout text 60% + ảnh 40% (`masterplan-topdown.jpg`), slogan gradient-text, Mission/Vision glass-cards
- `src/components/about/PartnershipSection.tsx` — AnimatedNumber 52+, partner achievements với CheckCircleOutlined
- `src/components/about/TimelineSection.tsx` — Custom vertical timeline 5 milestones (2022-2026+), `TechBackground`, staggered `whileInView`
- `src/components/about/LeadershipSection.tsx` — CEO photo (`ceo-chu-viet-ha.jpg`), name, title, bio
- `src/pages/about.tsx` — Assembly: PageHero → CompanyStory → StatsCounter(inline) → Partnership → WhyChooseUs → Timeline → Leadership → CTA

### Projects (5 files)
- `src/components/projects/ProjectCard.tsx` — Glass card, `max-w-3xl mx-auto` (centered cho 1 project), status badge, hover effects
- `src/components/projects/ProjectGallery.tsx` — Main image `aspect-[16/9]` + thumbnail strip, `Image.PreviewGroup` lightbox
- `src/components/projects/ProjectHighlights.tsx` — Highlights grid 2×2 (compass, send, home, thunderbolt) + key facts checklist
- `src/pages/projects/index.tsx` — Listing page
- `src/pages/projects/[slug].tsx` — Detail: overview sidebar (glass-card), gallery, highlights, infrastructure grid, CTA

### i18n (6 files)
- `public/locales/vi/products.json` + `en/products.json` — meta, hero, filter, card, detail, empty
- `public/locales/vi/about.json` + `en/about.json` — meta, hero, story, stats, partnership, timeline, leadership, cta
- `public/locales/vi/projects.json` + `en/projects.json` — meta, hero, card, detail

### Data layer mở rộng (8 files sửa + 1 file mới)
- `src/data/types/company.ts` — Thêm `TimelineMilestone`, `LeaderInfo`, `PartnerInfo`
- `src/data/types/project.ts` — Thêm `ProjectInfrastructure`, `investment`, `infrastructure` fields
- `src/data/mock/company.ts` — Thêm `companyTimeline` (5 milestones), `leaderInfo` (CEO), `partnerInfo` (Thăng Long)
- `src/data/mock/projects.ts` — Thêm `investment` (900 tỷ VNĐ), `infrastructure` (đường, nước, điện, cảng)
- `src/data/services/companyService.ts` — **MỚI**: getInfo, getWhyChooseUs, getServices, getTimeline, getLeader, getPartner
- `src/data/services/index.ts` — Export `companyService`
- `src/data/services/projectService.ts` — Thêm `getAllSlugs()`
- `src/components/home/WhyChooseUs.tsx` — Thêm optional `title`/`subtitle` props để reuse ở About
- `src/components/home/StatsCounter.tsx` — Thêm `variant` prop (`'overlap'` | `'inline'`)

### Assets
- `public/images/about/ceo-chu-viet-ha.jpg` — Ảnh CEO Chu Việt Hà

---

## Chi tiết triển khai

### STEP 1: Common Components

**Breadcrumb** (`src/components/common/Breadcrumb.tsx`):
- Interface: `BreadcrumbItem { label: string; href?: string }` — không có href = current page
- Dùng `RightOutlined` separator, `HomeOutlined` cho item đầu
- Style: `text-text-tertiary`, active `text-text-secondary`
- Wrapper: `container-padding mx-auto max-w-7xl pt-24 pb-4` (clear fixed header)

**PageHero** (`src/components/common/PageHero.tsx`):
- Props: `backgroundImage`, `title`, `subtitle?`, `badge?`
- Height: `h-[50vh] min-h-[400px]`
- `OptimizedImage` background + gradient overlay `from-dark-900 via-dark-900/60 to-dark-900/30`
- Framer Motion `initial/animate` cho text entrance

---

### STEP 2: Data Layer mở rộng

**Types mới** (`company.ts`):
```ts
TimelineMilestone { year, title, description, icon? }
LeaderInfo { name, title, bio }
PartnerInfo { name, fullName, yearsExperience, description, achievements }
```

**Types mới** (`project.ts`):
```ts
ProjectInfrastructure { key, label, value }
// Thêm vào Project: investment?, infrastructure?
```

**Mock data** (`company.ts`):
- `companyTimeline`: 2022 (thành lập) → 2023 (đối tác Thăng Long) → 2024 (khởi công 9ha) → 2025 (hoàn thành GĐ1) → 2026+ (mở rộng 100+ha)
- `leaderInfo`: CEO Chu Việt Hà + bio
- `partnerInfo`: Tập đoàn Thăng Long, 52 năm, 4 achievements

**Mock data** (`projects.ts`):
- `investment`: "900 tỷ VNĐ (~34.2 triệu USD)"
- `infrastructure`: đường nội bộ 23-46m, cấp nước 30,000 m³/ngày, xử lý nước thải 10,000 m³/ngày, trạm biến áp 110/22KV 4×63 MVA, cảng nội bộ 40,000 DWT

---

### STEP 3: Trang Sản phẩm

**Products Listing** (`/products`):
- `getStaticProps` → truyền tất cả products + translations
- Client-side filter bằng `useMemo` (chỉ 6 products)
- URL sync: `/products?category=rbf` (shallow routing)
- Assembly: `SEOHead → PageHero → Breadcrumb → ProductFilterBar → ProductGrid`

**Product Detail** (`/products/[slug]`):
- `getStaticPaths`: `productService.getAllSlugs()` × 2 locales, `fallback: false`
- `getStaticProps`: product + relatedProducts (same category, exclude current, max 3)
- Layout: Gallery (60%) | Info (40%) — badges, name, location, area, description, CTAs
- Sections: Specs table + Features (CheckCircleOutlined) + Related products
- Assembly: `SEOHead → Breadcrumb → [Gallery|Info] → Specs → Features → Related`

---

### STEP 4: Refactor components để reuse

**WhyChooseUs**: Thêm optional `title`/`subtitle` props, fallback về `t('why_choose_us.title')` nếu không truyền
**StatsCounter**: Thêm `variant` prop — `'overlap'` (default, `relative z-10 -mt-20`) vs `'inline'` (`py-12`)

---

### STEP 5: Trang Giới thiệu (`/about`)

**CompanyStory**: Split layout text 60% + ảnh 40%, slogan gradient-text, Mission/Vision glass-cards với RocketOutlined/EyeOutlined icons

**PartnershipSection**: `glass-strong` card, AnimatedNumber 52+ (reuse pattern từ StatsCounter), partner achievements CheckCircleOutlined

**TimelineSection**: Custom vertical timeline, đường nối dọc `bg-primary-500/30`, dot icons (Flag, Team, Build, CheckCircle, Rise), `TechBackground` phía sau, staggered whileInView

**LeadershipSection**: Centered `glass-card`, CEO photo (rounded-full, border primary), name, title, bio

**About Page Assembly**:
```
SEOHead → PageHero → CompanyStory → StatsCounter(inline) → PartnershipSection
→ WhyChooseUs(custom title) → TimelineSection → LeadershipSection → CTA
```
`getStaticProps` namespaces: `['common', 'about', 'home']`

---

### STEP 6: Trang Dự án

**Projects Listing** (`/projects`):
- Grid responsive, centered cho 1 project (`max-w-3xl mx-auto`)
- Assembly: `SEOHead → PageHero → Breadcrumb → ProjectCards`

**Project Detail** (`/projects/[slug]`):
- `getStaticPaths`: slugs × locales, `fallback: false`
- Overview: description (2/3) + sidebar glass-card (1/3) với total area, investment, status
- Gallery: 6 images `aspect-[16/9]`, thumbnails, `Image.PreviewGroup` lightbox
- Highlights: 2×2 grid (compass, send, home, thunderbolt icons) + key facts checklist
- Infrastructure: grid 3 cols, mỗi item glass-card với label + value
- Assembly: `SEOHead → Breadcrumb → Overview → Gallery → Highlights → Infrastructure → CTA`

---

## Build result

```
Route (pages)                                 Size     First Load JS
┌ ● /                                         9.53 kB         248 kB
├ ● /about                                    5.93 kB         245 kB
├ ● /products                                 2.82 kB         241 kB
├ ● /products/[slug]                          2.44 kB         253 kB
├ ● /projects                                 5.12 kB         239 kB
└ ● /projects/[slug]                          6.09 kB         252 kB

28/28 static pages generated successfully (cả 2 locales vi/en)
```

---

## Verification checklist

- [x] `npm run build` thành công (28/28 pages, cả 2 locales)
- [x] `/products` — render 6 products, filter tabs hoạt động, URL sync
- [x] `/products/[slug]` — tất cả 6 slugs, gallery, specs, related products
- [x] `/about` — tất cả sections, stats animate, timeline, reuse components
- [x] `/projects` — render project card
- [x] `/projects/eha-hai-phong` — gallery 6 ảnh, highlights, infrastructure
- [x] VI ↔ EN — song ngữ trên mọi trang
- [x] Visual consistency: dark theme, glassmorphism, orange accent (#F47920)
