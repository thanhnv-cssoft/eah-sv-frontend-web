import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-001',
    slug: 'eha-hai-phong',
    name: { vi: 'EHA Hải Phòng', en: 'EHA Hai Phong' },
    location: 'KCN Nam Đình Vũ, Hải An, Hải Phòng',
    shortDescription: {
      vi: 'Dự án khu công nghiệp xanh và thông minh với tổng diện tích 9 hectares, tọa lạc tại KCN Nam Đình Vũ — khu công nghiệp duy nhất tại Việt Nam có cảng biển nội bộ.',
      en: 'Green and smart industrial development with a total area of 9 hectares, located at Nam Dinh Vu Industrial Park — the only industrial park in Vietnam with an internal seaport.',
    },
    fullDescription: {
      vi: 'EHA Hải Phòng là dự án tiên phong trong phát triển hạ tầng công nghiệp xanh, thông minh và bền vững tại miền Bắc Việt Nam. Với tổng vốn đầu tư 900 tỷ VNĐ, dự án cung cấp nhà xưởng xây sẵn (RBF), nhà xưởng-kho vận kết hợp (RBH) và văn phòng đạt tiêu chuẩn quốc tế. Tọa lạc tại KCN Nam Đình Vũ — KCN duy nhất tại Việt Nam sở hữu cảng biển nội bộ, kết nối trực tiếp cảng nước sâu quốc tế Lạch Huyện, dự án mang đến lợi thế logistics vượt trội cho các nhà đầu tư.',
      en: 'EHA Hai Phong is a pioneering project in developing green, smart and sustainable industrial infrastructure in Northern Vietnam. With a total investment of VND 900 billion, the project provides Ready-Built Factories (RBF), Factory-Warehouse Hybrids (RBH) and office spaces built to international standards. Located at Nam Dinh Vu Industrial Park — the only industrial park in Vietnam with an internal seaport, directly connected to Lach Huyen international deep-sea port, the project offers superior logistics advantages for investors.',
    },
    thumbnail: {
      url: '/images/projects/aerial-day-full.jpg',
      alt: { vi: 'EHA Hải Phòng toàn cảnh', en: 'EHA Hai Phong overview' },
    },
    gallery: [
      { url: '/images/projects/aerial-day-full.jpg', alt: { vi: 'Toàn cảnh ban ngày', en: 'Daytime overview' } },
      { url: '/images/projects/aerial-day-angle.jpg', alt: { vi: 'Góc nhìn nghiêng', en: 'Angled view' } },
      { url: '/images/projects/aerial-day-side.jpg', alt: { vi: 'Góc nhìn bên', en: 'Side view' } },
      { url: '/images/projects/aerial-day-low.jpg', alt: { vi: 'Góc nhìn thấp', en: 'Low angle view' } },
      { url: '/images/hero/aerial-night-full.jpg', alt: { vi: 'Toàn cảnh ban đêm', en: 'Nighttime overview' } },
      { url: '/images/hero/aerial-night-angle.jpg', alt: { vi: 'Ban đêm góc nghiêng', en: 'Night angled view' } },
    ],
    totalArea: '90,000 m² (9 ha)',
    status: 'in-progress',
    highlights: [
      { icon: 'compass', text: { vi: 'Cách cảng nước sâu quốc tế Lạch Huyện 0 km', en: '0 km to Lach Huyen international deep-sea port' } },
      { icon: 'send', text: { vi: 'Cách sân bay quốc tế Cát Bi 8 km', en: '8 km to Cat Bi international airport' } },
      { icon: 'home', text: { vi: 'Tổng diện tích: 9 hectares', en: 'Total area: 9 hectares' } },
      { icon: 'thunderbolt', text: { vi: 'Trạm biến áp 110/22KV, 4 x 63 MVA', en: '110/22KV substation, 4 x 63 MVA' } },
    ],
    keyFacts: {
      vi: [
        'KCN duy nhất tại Việt Nam có cảng biển nội bộ (Nam Đình Vũ Port)',
        'Cảng tiếp nhận tàu đến 40,000 DWT, vùng quay trở 300m',
        'Hệ thống đường nội bộ rộng 23m, 34m và 46m',
        'Trạm biến áp 110/22KV, công suất 4 x 63 MVA',
        'Cấp nước 30,000 m³/ngày',
        'Xử lý nước thải tập trung 10,000 m³/ngày',
        'Cách trung tâm Hải Phòng 10 km, Hà Nội 105 km',
      ],
      en: [
        'Only industrial park in Vietnam with internal seaport (Nam Dinh Vu Port)',
        'Port accommodates ships up to 40,000 DWT, 300m turning basin',
        'Internal road system 23m, 34m and 46m wide',
        '110/22KV substation with 4 x 63 MVA capacity',
        'Water supply 30,000 m³/day',
        'Centralized wastewater treatment 10,000 m³/day',
        '10 km from Hai Phong city center, 105 km from Hanoi',
      ],
    },
    isFeatured: true,
  },
];
