# GD-01: Layout + Data Structure + Homepage

## Context

Giai đoạn đầu tiên (gd-01) của dự án EHA Industrial website. Bao gồm:
1. Khởi tạo dự án Next.js 14 + cài đặt toàn bộ dependencies
2. Xây dựng layout chung (Header, Footer, Navigation, i18n)
3. Xây dựng cấu trúc dữ liệu mẫu với **nội dung thật** từ EHA Industrial
4. Xây dựng trang chủ hoàn chỉnh với dữ liệu demo thực tế

**Yêu cầu quan trọng**: Tất cả text, description, ảnh đều phải là dữ liệu demo thật - KHÔNG dùng placeholder/lorem ipsum.

---

## Tài nguyên có sẵn

### 15 ảnh render 3D thực tế (`public/`)
| File | Nội dung | Mapping |
|------|----------|---------|
| `1.jpg` | Top-down toàn khu, logo EHA, slogan "Built on Core, Driven by Value" | Hero overlay, About |
| `2.jpg` | Aerial toàn khu ban ngày (góc rộng, có mây) | Hero slide, Projects |
| `3.jpg` | Aerial ban ngày (góc nghiêng phải) | Projects gallery |
| `4.jpg` | Aerial với slogan trên mái | Featured Projects |
| `5.jpg` | Aerial toàn khu ban ngày (góc thấp) | Products overview |
| `6.jpg` | Close-up dock area, trucks, slogan trên mái | RBH product |
| `7.jpg` | Đường nội bộ giữa các RBH (ground level) | RBH product detail |
| `8.jpg` | Cổng vào EHA Industrial (ground level) | Hero, About |
| `9.jpg` | Nhà xưởng đơn lẻ ban ngày (front view) | RBF product thumbnail |
| `10.jpg` | Aerial toàn khu ban đêm (đèn sáng, full) | Hero background chính |
| `11.jpg` | Aerial ban đêm (góc nghiêng) | Hero slide 2 |
| `12.jpg` | Aerial ban đêm (góc xa) | About section |
| `13.jpg` | Nhà xưởng ban đêm (ground, dramatic) | Featured product |
| `14.jpg` | Văn phòng A.01 ban đêm (ground) | Office product |
| `15.jpg` | RBH với trucks ban đêm (ground) | RBH product |

### Dữ liệu thật về EHA Industrial
- **Tên đầy đủ**: EHA Hải Phòng Industrial Development JSC
- **Slogan**: "Built on Core. Driven by Value"
- **CEO**: Chu Việt Hà
- **Dự án flagship**: KCN Nam Đình Vũ, Hải Phòng - 9 hectares
- **Đối tác chiến lược**: Tập đoàn Thăng Long (52 năm kinh nghiệm hạ tầng)
- **Vốn đầu tư**: 900 tỷ VNĐ (~34.2 triệu USD)
- **Mục tiêu**: 100+ hectares trong 2 năm
- **Brand colors**: Orange (#F47920) + Dark Grey + White

---

## STEP 1: Khởi tạo dự án

### 1.1 Create Next.js project
```bash
cd /Users/thanh1669/Desktop/works/EHA/sv-frontend-web
npx create-next-app@14 . --typescript --eslint --tailwind --src-dir --no-app --import-alias "@/*"
```
> **Lưu ý**: Thư mục đã có `public/`, `tasks/`, `readme.md` → cần dùng `.` để init trong thư mục hiện tại

### 1.2 Install dependencies
```bash
# UI
npm install antd @ant-design/cssinjs clsx tailwind-merge

# Animation
npm install framer-motion

# 3D (cài sẵn, dùng ở phase sau)
npm install three @react-three/fiber @react-three/drei
npm install -D @types/three

# i18n
npm install next-i18next react-i18next i18next

# SEO
npm install next-sitemap

# Dev tools
npm install -D prettier eslint-config-prettier prettier-plugin-tailwindcss
```

### 1.3 Config files cần tạo/sửa

**`next-i18next.config.js`**
```js
module.exports = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
```

**`next.config.js`** - thêm i18n + transpilePackages

**`tailwind.config.ts`** - extend với EHA color palette:
- `primary: '#F47920'` (EHA orange)
- `secondary: '#1677FF'` (electric blue)
- `dark-900: '#0A0E17'` (page bg)
- `dark-800: '#111827'` (card bg)
- Custom glassmorphism utilities

**`.prettierrc`**, **`.eslintrc.json`** - standard config

### 1.4 Cấu trúc thư mục tạo mới
```
src/
├── components/
│   ├── layout/
│   ├── common/
│   ├── home/
│   └── three/
├── data/
│   ├── types/
│   ├── mock/
│   └── services/
├── hooks/
├── styles/
├── theme/
└── utils/
public/
├── locales/vi/common.json
├── locales/en/common.json
└── images/ (move & organize 1-15.jpg)
```

---

## STEP 2: Layout chung

### 2.1 Theme & Design Tokens

**`src/theme/antdTheme.ts`** - Ant Design dark theme config:
```ts
// darkAlgorithm + custom tokens
// colorPrimary: '#F47920' (EHA orange)
// colorBgBase: '#0A0E17'
// fontFamily: Inter, Noto Sans
```

**`src/theme/colors.ts`** - Design system tokens (EHA brand)

**`src/styles/globals.css`** - Tailwind directives + glass utilities:
```css
.glass { @apply bg-white/5 backdrop-blur-xl border border-white/10; }
.glass-hover:hover { border-color: rgba(244,121,32,0.3); box-shadow: 0 0 30px rgba(244,121,32,0.08); }
```

### 2.2 App Wrapper

**`src/pages/_app.tsx`**:
- `ConfigProvider` (AntD dark theme)
- `appWithTranslation` (next-i18next)
- `MainLayout` wrapper
- `AnimatePresence` (framer-motion page transitions)

**`src/pages/_document.tsx`**:
- AntD CSS-in-JS SSR extraction (`@ant-design/cssinjs`)

### 2.3 Layout Components

**`src/components/layout/MainLayout.tsx`**:
- Dark background container
- Header + children + Footer
- Scroll-to-top button

**`src/components/layout/Header.tsx`**:
- Logo EHA (text-based với icon, vì chưa có file logo SVG)
- Navigation links: Trang chủ, Giới thiệu, Sản phẩm (dropdown), Dự án, Góc nhìn, Tin tức, Tuyển dụng, Liên hệ
- LanguageSwitcher (VI/EN)
- CTA button "Liên hệ ngay"
- Glassmorphism background, sticky, blur khi scroll
- Mobile: hamburger → Drawer

**`src/components/layout/Footer.tsx`**:
- 4 columns: Về EHA | Sản phẩm | Liên kết nhanh | Liên hệ
- Nội dung thật:
  - Địa chỉ: KCN Nam Đình Vũ, Hải Phòng
  - Email: info@ehaindustrial.com
  - Website: ehaindustrial.com
  - Slogan: "Built on Core. Driven by Value"
- Copyright bar
- Social links (LinkedIn, Facebook placeholder)

**`src/components/layout/Navigation.tsx`**:
- Desktop: horizontal menu (AntD Menu restyled dark)
- Products dropdown: Tất cả SP | Nhà xưởng (RBFs) | Nhà xưởng-Kho vận (RBHs) | Văn phòng

**`src/components/layout/MobileMenu.tsx`**:
- AntD Drawer slide-in từ phải
- Full navigation + language switcher + CTA

**`src/components/layout/LanguageSwitcher.tsx`**:
- Pill toggle VI | EN
- `useRouter` + `Link` với locale

### 2.4 Common Components

**`src/components/common/SEOHead.tsx`** - Reusable `<Head>` với title, description, OG tags
**`src/components/common/SectionTitle.tsx`** - Heading + subtitle + accent line
**`src/components/common/Button.tsx`** - Custom button (glassmorphism, gradient variants)
**`src/utils/cn.ts`** - `clsx` + `tailwind-merge`

### 2.5 i18n Translation Files

**`public/locales/vi/common.json`** (nội dung thật):
```json
{
  "meta": {
    "title": "EHA Industrial | Giải pháp nhà xưởng xây sẵn hàng đầu Việt Nam",
    "description": "EHA Industrial cung cấp nhà xưởng xây sẵn (RBF), nhà xưởng-kho vận kết hợp (RBH) và văn phòng tại KCN Nam Đình Vũ, Hải Phòng"
  },
  "nav": {
    "home": "Trang chủ",
    "about": "Giới thiệu",
    "products": "Sản phẩm",
    "products_all": "Tất cả sản phẩm",
    "products_rbf": "Nhà xưởng (RBFs)",
    "products_rbh": "Nhà xưởng-Kho vận (RBHs)",
    "products_office": "Văn phòng",
    "projects": "Dự án",
    "insights": "Góc nhìn",
    "news": "Tin tức",
    "careers": "Tuyển dụng",
    "contact": "Liên hệ"
  },
  "buttons": {
    "learn_more": "Tìm hiểu thêm",
    "contact_us": "Liên hệ ngay",
    "view_all": "Xem tất cả",
    "view_details": "Xem chi tiết",
    "explore_products": "Khám phá sản phẩm",
    "get_quote": "Nhận báo giá"
  },
  "footer": {
    "about_text": "EHA Industrial - Phát triển hạ tầng công nghiệp xanh, thông minh và bền vững tại Việt Nam. Đối tác tin cậy cho các nhà đầu tư quốc tế.",
    "products": "Sản phẩm",
    "quick_links": "Liên kết nhanh",
    "contact_info": "Thông tin liên hệ",
    "address": "KCN Nam Đình Vũ, Hải An, Hải Phòng",
    "copyright": "© 2025 EHA Industrial. Tất cả quyền được bảo lưu."
  }
}
```

**`public/locales/en/common.json`** (English counterpart - same structure)

**`public/locales/vi/home.json`** + **`public/locales/en/home.json`** (homepage content)

---

## STEP 3: Cấu trúc dữ liệu mẫu (Mock Data)

### 3.1 TypeScript Types

**`src/data/types/common.ts`**:
```ts
export type Locale = 'vi' | 'en';
export type LocalizedString = Record<Locale, string>;
export type LocalizedStringArray = Record<Locale, string[]>;
export interface ImageAsset {
  url: string;
  alt: LocalizedString;
}
```

**`src/data/types/product.ts`**:
```ts
export enum ProductCategory { RBF = 'rbf', RBH = 'rbh', OFFICE = 'office' }
export type ProductStatus = 'available' | 'leased' | 'coming-soon';
export interface ProductSpec {
  key: string;
  label: LocalizedString;
  value: string;
  unit?: string;
}
export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  name: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  thumbnail: ImageAsset;
  gallery: ImageAsset[];
  specs: ProductSpec[];
  features: LocalizedStringArray;
  area: { min: number; max: number; unit: string };
  location: string;
  status: ProductStatus;
  isFeatured: boolean;
  createdAt: string;
}
```

**`src/data/types/project.ts`**:
```ts
export interface Project {
  id: string;
  slug: string;
  name: LocalizedString;
  location: string;
  shortDescription: LocalizedString;
  thumbnail: ImageAsset;
  gallery: ImageAsset[];
  totalArea: string;
  status: 'completed' | 'in-progress' | 'planned';
  highlights: LocalizedStringArray;
  isFeatured: boolean;
}
```

**`src/data/types/news.ts`**, **`src/data/types/company.ts`** - tương tự

### 3.2 Mock Data (NỘI DUNG THẬT)

**`src/data/mock/products.ts`** - 6 sản phẩm thật:

| ID | Name | Category | Area | Image | Status |
|----|------|----------|------|-------|--------|
| `rbf-01` | Nhà xưởng RBF-A1 | RBF | 3,000-5,000 m² | `9.jpg` | available |
| `rbf-02` | Nhà xưởng RBF-B2 | RBF | 5,000-8,000 m² | `5.jpg` | available |
| `rbh-01` | Nhà xưởng-Kho vận RBH-C1 | RBH | 2,000-4,000 m² | `6.jpg` | available |
| `rbh-02` | Nhà xưởng-Kho vận RBH-C2 | RBH | 4,000-6,000 m² | `15.jpg` | coming-soon |
| `office-01` | Văn phòng A.01 | OFFICE | 200-500 m² | `14.jpg` | available |
| `office-02` | Văn phòng A.02 | OFFICE | 300-800 m² | `7.jpg` | available |

Mỗi sản phẩm có specs thật:
- Tổng diện tích, Chiều cao thông thủy (7-10.5m), Tải trọng sàn (2 T/m²)
- Hệ thống PCCC tự động, Cửa dock container, Trạm biến áp 110/22KV
- Features thật: Sprinkler ESFR, hệ thống thoát nước CN, bãi đậu xe...

**`src/data/mock/projects.ts`** - Dự án EHA Hải Phòng:
```ts
{
  name: { vi: 'EHA Hải Phòng', en: 'EHA Hai Phong' },
  location: 'KCN Nam Đình Vũ, Hải An, Hải Phòng',
  totalArea: '90,000 m² (9 hectares)',
  shortDescription: {
    vi: 'Dự án khu công nghiệp xanh, thông minh tại KCN Nam Đình Vũ...',
    en: 'Green, smart industrial development at Nam Dinh Vu Industrial Park...'
  },
  highlights: {
    vi: [
      'Tọa lạc tại KCN Nam Đình Vũ - KCN duy nhất có cảng biển nội bộ tại VN',
      'Cách cảng nước sâu quốc tế Lạch Huyện 0 km',
      'Cách sân bay quốc tế Cát Bi 8 km',
      'Cách trung tâm Hải Phòng 10 km, Hà Nội 105 km',
      'Hệ thống cấp nước 30,000 m³/ngày',
      'Xử lý nước thải tập trung 10,000 m³/ngày'
    ]
  },
  gallery: ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '10.jpg', '11.jpg']
}
```

**`src/data/mock/company.ts`** - Thông tin EHA:
```ts
{
  name: 'EHA Industrial',
  fullName: { vi: 'Công ty CP Phát triển Công nghiệp EHA Hải Phòng', en: 'EHA Hai Phong Industrial Development JSC' },
  slogan: 'Built on Core. Driven by Value',
  description: { vi: '...phát triển hạ tầng công nghiệp xanh, thông minh...', en: '...' },
  stats: [
    { label: { vi: 'Tổng diện tích phát triển', en: 'Total Development Area' }, value: '100+', suffix: 'ha' },
    { label: { vi: 'Vốn đầu tư', en: 'Investment Capital' }, value: '900', suffix: { vi: 'tỷ VNĐ', en: 'B VND' } },
    { label: { vi: 'Đối tác chiến lược', en: 'Strategic Partners' }, value: '10+', suffix: '' },
    { label: { vi: 'Năm kinh nghiệm (Thăng Long)', en: 'Years Experience (Thang Long)' }, value: '52+', suffix: { vi: 'năm', en: 'years' } }
  ],
  partner: {
    name: 'Tập đoàn Thăng Long',
    description: { vi: 'Hơn 52 năm kinh nghiệm trong lĩnh vực giao thông và hạ tầng đô thị...', en: '...' }
  },
  contact: {
    address: { vi: 'KCN Nam Đình Vũ, Quận Hải An, TP. Hải Phòng', en: 'Nam Dinh Vu IP, Hai An District, Hai Phong City' },
    phone: '+84 225 XXX XXXX',
    email: 'info@ehaindustrial.com',
    website: 'ehaindustrial.com'
  }
}
```

### 3.3 Service Layer

**`src/data/services/productService.ts`**:
```ts
// getAll(filters?), getBySlug(slug), getFeatured(), getByCategory(cat), getAllSlugs()
```

**`src/data/services/projectService.ts`**, **`src/data/services/companyService.ts`** - tương tự

---

## STEP 4: Trang chủ (Homepage)

### 4.1 Hero Section — `src/components/home/HeroSection.tsx`

**Layout**: Full-viewport (100vh), background image `10.jpg` (aerial đêm, dramatic nhất) với overlay gradient dark.

**Content**:
- Tagline nhỏ: "KCN Nam Đình Vũ, Hải Phòng"
- Heading chính: **"Giải pháp nhà xưởng xây sẵn hàng đầu Việt Nam"** (EN: "Vietnam's Premier Ready-Built Factory Solutions")
- Sub-heading: "Phát triển hạ tầng công nghiệp xanh, thông minh và bền vững cho nhà đầu tư quốc tế" (EN: "Developing green, smart and sustainable industrial infrastructure for international investors")
- 2 CTA buttons: "Khám phá sản phẩm" (primary) + "Liên hệ ngay" (outline)
- Scroll indicator animated ở dưới

**Animations**: Framer Motion - text fade-in-up staggered, background subtle zoom

**Ảnh alternatives**: Có thể làm slider/carousel xoay giữa `10.jpg`, `11.jpg`, `8.jpg`

### 4.2 Stats Counter — `src/components/home/StatsCounter.tsx`

**Layout**: Horizontal bar, 4 stats trên nền glassmorphism

| Stat | Value | Suffix |
|------|-------|--------|
| Tổng diện tích quy hoạch | 100+ | ha |
| Vốn đầu tư | 900 | tỷ VNĐ |
| Vị trí chiến lược | 0 | km đến cảng biển |
| Đối tác uy tín | 52+ | năm kinh nghiệm |

**Animation**: Number count-up khi scroll vào viewport (Framer Motion + useInView)

### 4.3 Services Overview — `src/components/home/ServicesOverview.tsx`

**Layout**: Section title + 3 glassmorphism cards grid (responsive: 1→2→3 cols)

| Card | Image | Title | Description |
|------|-------|-------|-------------|
| 1 | `9.jpg` (RBF) | Nhà xưởng xây sẵn (RBFs) | "Nhà xưởng tiêu chuẩn quốc tế, sẵn sàng đưa vào vận hành. Diện tích linh hoạt từ 3,000 - 8,000 m², chiều cao thông thủy lên đến 10.5m." |
| 2 | `15.jpg` (RBH) | Nhà xưởng - Kho vận (RBHs) | "Giải pháp kết hợp sản xuất và kho vận trong cùng một công trình. Tối ưu logistics với hệ thống dock container hiện đại." |
| 3 | `14.jpg` (Office) | Văn phòng | "Không gian văn phòng hiện đại trong khu công nghiệp, thiết kế thông minh, tiện nghi đầy đủ cho doanh nghiệp." |

**Hover effect**: Card lift + border glow orange + image zoom nhẹ
**CTA mỗi card**: "Tìm hiểu thêm →"

### 4.4 Featured Project — `src/components/home/FeaturedProject.tsx`

**Layout**: Split layout - ảnh trái (60%) + text phải (40%)
- **Ảnh**: `2.jpg` (aerial toàn khu ban ngày, ấn tượng nhất)
- **Badge**: "Dự án tiêu biểu"
- **Title**: "EHA Hải Phòng"
- **Location**: "KCN Nam Đình Vũ, Hải An, Hải Phòng"
- **Description**: "Dự án khu công nghiệp xanh và thông minh với tổng diện tích 9 hectares, tọa lạc tại KCN Nam Đình Vũ - khu công nghiệp duy nhất tại Việt Nam có cảng biển nội bộ."
- **Key facts** (icon + text):
  - 📍 Cách cảng nước sâu Lạch Huyện 0 km
  - ✈️ Cách sân bay quốc tế Cát Bi 8 km
  - 🏭 Tổng diện tích: 9 hectares
  - ⚡ Trạm biến áp 110/22KV, 4 x 63 MVA
- **CTA**: "Xem chi tiết dự án →"

**Animation**: Ảnh slide-in-left, text slide-in-right khi scroll

### 4.5 Why Choose Us — `src/components/home/WhyChooseUs.tsx`

**Layout**: Section title + 2x3 grid cards (icon + title + description)

| # | Title | Description |
|---|-------|-------------|
| 1 | Vị trí chiến lược | Tọa lạc tại KCN Nam Đình Vũ - KCN duy nhất tại Việt Nam sở hữu cảng biển nội bộ, kết nối trực tiếp cảng nước sâu quốc tế Lạch Huyện |
| 2 | Hạ tầng đồng bộ | Hệ thống đường nội bộ 23-46m, cấp nước 30,000 m³/ngày, xử lý nước thải 10,000 m³/ngày, trạm biến áp 110/22KV |
| 3 | Tiêu chuẩn quốc tế | Nhà xưởng thiết kế theo tiêu chuẩn quốc tế với chiều cao thông thủy 7-10.5m, tải trọng sàn 2 T/m², PCCC tự động |
| 4 | Đối tác uy tín | Hợp tác chiến lược cùng Tập đoàn Thăng Long - hơn 52 năm kinh nghiệm trong lĩnh vực hạ tầng |
| 5 | Phát triển bền vững | Cam kết phát triển công nghiệp xanh với vật liệu thân thiện môi trường và hệ thống quản lý năng lượng thông minh |
| 6 | Hỗ trợ toàn diện | Đội ngũ tư vấn chuyên nghiệp hỗ trợ từ tìm kiếm mặt bằng, thiết kế, xây dựng đến vận hành |

**Style**: Icon sử dụng Ant Design icons hoặc SVG custom, glassmorphism card nhẹ

### 4.6 Image Gallery — `src/components/home/GalleryPreview.tsx`

**Layout**: Masonry hoặc bento grid hiển thị 4-6 ảnh đẹp nhất
- `8.jpg` (cổng vào - large)
- `13.jpg` (nhà xưởng đêm)
- `7.jpg` (đường nội bộ)
- `1.jpg` (top-down)

**Hover**: Overlay với title ảnh
**CTA**: "Xem toàn bộ hình ảnh →"

### 4.7 CTA Section — `src/components/home/CTASection.tsx`

**Layout**: Full-width, background `12.jpg` (aerial đêm) với dark overlay + gradient
- **Heading**: "Sẵn sàng khởi đầu dự án của bạn?"
- **Sub**: "Liên hệ với chúng tôi để nhận tư vấn miễn phí và báo giá chi tiết cho nhu cầu mặt bằng công nghiệp của bạn."
- **2 buttons**: "Nhận báo giá" (primary) + "Gọi ngay: +84 225 XXX XXXX" (outline)

### 4.8 Page Assembly — `src/pages/index.tsx`

```tsx
// Compose all sections in order:
<SEOHead />
<HeroSection />
<StatsCounter />
<ServicesOverview />
<FeaturedProject />
<WhyChooseUs />
<GalleryPreview />
<CTASection />
```

`getStaticProps` → `serverSideTranslations(locale, ['common', 'home'])`

---

## Tổng hợp files cần tạo (~45 files)

### Config (8 files)
- `next.config.js`
- `next-i18next.config.js`
- `tailwind.config.ts` (sửa file generated)
- `postcss.config.js` (generated)
- `tsconfig.json` (sửa path alias)
- `.eslintrc.json` (sửa)
- `.prettierrc`
- `.gitignore` (sửa)

### Theme & Styles (4 files)
- `src/theme/antdTheme.ts`
- `src/theme/colors.ts`
- `src/styles/globals.css` (sửa)
- `src/styles/glassmorphism.css`

### Utils (1 file)
- `src/utils/cn.ts`

### Layout Components (6 files)
- `src/components/layout/MainLayout.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Navigation.tsx`
- `src/components/layout/MobileMenu.tsx`
- `src/components/layout/LanguageSwitcher.tsx`

### Common Components (3 files)
- `src/components/common/SEOHead.tsx`
- `src/components/common/SectionTitle.tsx`
- `src/components/common/Button.tsx`

### Data Types (5 files)
- `src/data/types/common.ts`
- `src/data/types/product.ts`
- `src/data/types/project.ts`
- `src/data/types/company.ts`
- `src/data/types/index.ts`

### Mock Data (3 files)
- `src/data/mock/products.ts`
- `src/data/mock/projects.ts`
- `src/data/mock/company.ts`

### Services (3 files)
- `src/data/services/productService.ts`
- `src/data/services/projectService.ts`
- `src/data/services/index.ts`

### Hooks (2 files)
- `src/hooks/useScrollAnimation.ts`
- `src/hooks/useInView.ts`

### i18n Files (4 files)
- `public/locales/vi/common.json`
- `public/locales/en/common.json`
- `public/locales/vi/home.json`
- `public/locales/en/home.json`

### Homepage Components (7 files)
- `src/components/home/HeroSection.tsx`
- `src/components/home/StatsCounter.tsx`
- `src/components/home/ServicesOverview.tsx`
- `src/components/home/FeaturedProject.tsx`
- `src/components/home/WhyChooseUs.tsx`
- `src/components/home/GalleryPreview.tsx`
- `src/components/home/CTASection.tsx`

### Pages (2 files)
- `src/pages/_app.tsx` (sửa)
- `src/pages/_document.tsx` (sửa)
- `src/pages/index.tsx` (sửa)

---

## Tổ chức ảnh

Di chuyển và đổi tên ảnh cho rõ ràng:
```
public/images/
├── hero/
│   ├── aerial-night-full.jpg     ← 10.jpg
│   ├── aerial-night-angle.jpg    ← 11.jpg
│   └── entrance-gate.jpg         ← 8.jpg
├── projects/
│   ├── aerial-day-full.jpg       ← 2.jpg
│   ├── aerial-day-angle.jpg      ← 3.jpg
│   ├── aerial-day-side.jpg       ← 4.jpg
│   └── aerial-day-low.jpg        ← 5.jpg
├── products/
│   ├── rbf-exterior.jpg          ← 9.jpg
│   ├── rbh-dock-area.jpg         ← 6.jpg
│   ├── rbh-internal-road.jpg     ← 7.jpg
│   ├── rbh-night.jpg             ← 15.jpg
│   ├── office-night.jpg          ← 14.jpg
│   └── factory-night.jpg         ← 13.jpg
├── about/
│   ├── masterplan-topdown.jpg    ← 1.jpg
│   └── aerial-night-far.jpg     ← 12.jpg
```

> **Lưu ý**: Ảnh gốc rất nặng (10-17MB mỗi ảnh). Sẽ dùng `next/image` với `quality` và `sizes` để tối ưu tự động. Nên optimize ảnh gốc sau (phase polish).

---

## Verification

1. `npm run dev` → chạy thành công tại `localhost:3000`
2. Homepage render đầy đủ 7 sections với ảnh + text thật
3. Header navigation hoạt động (links, mobile menu, sticky scroll)
4. Footer hiển thị thông tin liên hệ thật
5. Chuyển VI ↔ EN → tất cả text thay đổi đúng
6. Responsive: mobile (375px), tablet (768px), desktop (1440px) đều hiển thị tốt
7. `npm run build` → build thành công
