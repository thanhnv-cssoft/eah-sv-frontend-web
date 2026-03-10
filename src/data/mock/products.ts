import { type Product, ProductCategory } from '../types';

export const products: Product[] = [
  {
    id: 'rbf-01',
    slug: 'nha-xuong-rbf-a1',
    category: ProductCategory.RBF,
    name: { vi: 'Nhà xưởng RBF-A1', en: 'Ready-Built Factory RBF-A1' },
    shortDescription: {
      vi: 'Nhà xưởng xây sẵn tiêu chuẩn quốc tế tại KCN Nam Đình Vũ, Hải Phòng. Sẵn sàng vận hành ngay.',
      en: 'International standard ready-built factory at Nam Dinh Vu IP, Hai Phong. Ready for immediate operation.',
    },
    description: {
      vi: 'Nhà xưởng RBF-A1 được thiết kế theo tiêu chuẩn quốc tế với chiều cao thông thủy 10.5m, tải trọng sàn 2 T/m², hệ thống PCCC tự động sprinkler ESFR. Vị trí thuận lợi tại KCN Nam Đình Vũ, kết nối trực tiếp cảng nước sâu quốc tế Lạch Huyện.',
      en: 'RBF-A1 factory is designed to international standards with 10.5m clear height, 2 T/m² floor load, automatic ESFR sprinkler fire system. Conveniently located at Nam Dinh Vu IP, directly connected to Lach Huyen international deep-sea port.',
    },
    thumbnail: {
      url: '/images/products/rbf-exterior.jpg',
      alt: { vi: 'Nhà xưởng RBF-A1', en: 'RBF-A1 Factory' },
    },
    gallery: [
      { url: '/images/products/rbf-exterior.jpg', alt: { vi: 'Mặt trước nhà xưởng', en: 'Factory front view' } },
      { url: '/images/projects/aerial-day-full.jpg', alt: { vi: 'Toàn cảnh khu công nghiệp', en: 'Industrial park overview' } },
    ],
    specs: [
      { key: 'total-area', label: { vi: 'Tổng diện tích', en: 'Total Area' }, value: '5,000', unit: 'm²' },
      { key: 'clear-height', label: { vi: 'Chiều cao thông thủy', en: 'Clear Height' }, value: '10.5', unit: 'm' },
      { key: 'floor-load', label: { vi: 'Tải trọng sàn', en: 'Floor Load' }, value: '2', unit: 'T/m²' },
      { key: 'power', label: { vi: 'Công suất điện', en: 'Power Capacity' }, value: '250', unit: 'KVA' },
    ],
    features: {
      vi: ['Hệ thống PCCC tự động sprinkler ESFR', 'Cửa dock container', 'Hệ thống thoát nước công nghiệp', 'Bãi đậu xe rộng rãi', 'Đường nội bộ 23-46m'],
      en: ['Automatic ESFR sprinkler fire system', 'Container dock doors', 'Industrial drainage system', 'Spacious parking area', 'Internal roads 23-46m wide'],
    },
    area: { min: 3000, max: 5000, unit: 'm²' },
    location: 'KCN Nam Đình Vũ, Hải Phòng',
    status: 'available',
    isFeatured: true,
    createdAt: '2025-01-15',
  },
  {
    id: 'rbf-02',
    slug: 'nha-xuong-rbf-b2',
    category: ProductCategory.RBF,
    name: { vi: 'Nhà xưởng RBF-B2', en: 'Ready-Built Factory RBF-B2' },
    shortDescription: {
      vi: 'Nhà xưởng quy mô lớn, phù hợp cho sản xuất công nghiệp nặng và lắp ráp.',
      en: 'Large-scale factory, suitable for heavy industrial production and assembly.',
    },
    description: {
      vi: 'Nhà xưởng RBF-B2 có diện tích lên đến 8,000 m², thiết kế cho các ngành sản xuất quy mô lớn. Trang bị hệ thống cầu trục, sàn chịu tải cao, hệ thống thông gió công nghiệp.',
      en: 'RBF-B2 factory with area up to 8,000 m², designed for large-scale manufacturing. Equipped with crane system, high-load floor, industrial ventilation system.',
    },
    thumbnail: {
      url: '/images/projects/aerial-day-low.jpg',
      alt: { vi: 'Nhà xưởng RBF-B2', en: 'RBF-B2 Factory' },
    },
    gallery: [
      { url: '/images/projects/aerial-day-low.jpg', alt: { vi: 'Tổng quan nhà xưởng', en: 'Factory overview' } },
    ],
    specs: [
      { key: 'total-area', label: { vi: 'Tổng diện tích', en: 'Total Area' }, value: '8,000', unit: 'm²' },
      { key: 'clear-height', label: { vi: 'Chiều cao thông thủy', en: 'Clear Height' }, value: '10.5', unit: 'm' },
      { key: 'floor-load', label: { vi: 'Tải trọng sàn', en: 'Floor Load' }, value: '2', unit: 'T/m²' },
      { key: 'power', label: { vi: 'Công suất điện', en: 'Power Capacity' }, value: '400', unit: 'KVA' },
    ],
    features: {
      vi: ['Hệ thống cầu trục 5-10 tấn', 'Sàn bê tông chịu tải cao', 'Hệ thống thông gió công nghiệp', 'Khu vực loading bay rộng', 'PCCC tự động'],
      en: ['5-10 ton crane system', 'High-load concrete floor', 'Industrial ventilation system', 'Wide loading bay area', 'Automatic fire suppression'],
    },
    area: { min: 5000, max: 8000, unit: 'm²' },
    location: 'KCN Nam Đình Vũ, Hải Phòng',
    status: 'available',
    isFeatured: false,
    createdAt: '2025-02-01',
  },
  {
    id: 'rbh-01',
    slug: 'nha-xuong-kho-van-rbh-c1',
    category: ProductCategory.RBH,
    name: { vi: 'Nhà xưởng-Kho vận RBH-C1', en: 'Factory-Warehouse Hybrid RBH-C1' },
    shortDescription: {
      vi: 'Kết hợp sản xuất và kho vận trong cùng một công trình, tối ưu chuỗi cung ứng.',
      en: 'Combined production and warehousing in one facility, optimizing supply chain.',
    },
    description: {
      vi: 'RBH-C1 là giải pháp kết hợp nhà xưởng sản xuất và kho vận trong cùng một công trình. Hệ thống dock container hiện đại, đường nội bộ rộng rãi cho xe container ra vào thuận tiện.',
      en: 'RBH-C1 is a hybrid solution combining factory and warehouse in a single facility. Modern container dock system, spacious internal roads for convenient container vehicle access.',
    },
    thumbnail: {
      url: '/images/products/rbh-dock-area.jpg',
      alt: { vi: 'Nhà xưởng-Kho vận RBH-C1', en: 'Factory-Warehouse RBH-C1' },
    },
    gallery: [
      { url: '/images/products/rbh-dock-area.jpg', alt: { vi: 'Khu vực dock', en: 'Dock area' } },
      { url: '/images/products/rbh-internal-road.jpg', alt: { vi: 'Đường nội bộ', en: 'Internal road' } },
    ],
    specs: [
      { key: 'total-area', label: { vi: 'Tổng diện tích', en: 'Total Area' }, value: '4,000', unit: 'm²' },
      { key: 'clear-height', label: { vi: 'Chiều cao thông thủy', en: 'Clear Height' }, value: '9', unit: 'm' },
      { key: 'floor-load', label: { vi: 'Tải trọng sàn', en: 'Floor Load' }, value: '2', unit: 'T/m²' },
      { key: 'docks', label: { vi: 'Số dock container', en: 'Container Docks' }, value: '4', unit: '' },
    ],
    features: {
      vi: ['Hệ thống dock container hiện đại', 'Kho vận tích hợp', 'Đường nội bộ cho xe container', 'PCCC tự động sprinkler', 'Hệ thống an ninh 24/7'],
      en: ['Modern container dock system', 'Integrated warehousing', 'Container vehicle internal roads', 'Automatic sprinkler fire system', '24/7 security system'],
    },
    area: { min: 2000, max: 4000, unit: 'm²' },
    location: 'KCN Nam Đình Vũ, Hải Phòng',
    status: 'available',
    isFeatured: true,
    createdAt: '2025-01-20',
  },
  {
    id: 'rbh-02',
    slug: 'nha-xuong-kho-van-rbh-c2',
    category: ProductCategory.RBH,
    name: { vi: 'Nhà xưởng-Kho vận RBH-C2', en: 'Factory-Warehouse Hybrid RBH-C2' },
    shortDescription: {
      vi: 'Nhà xưởng-kho vận quy mô lớn, tích hợp hệ thống logistics tiên tiến.',
      en: 'Large-scale factory-warehouse with advanced integrated logistics system.',
    },
    description: {
      vi: 'RBH-C2 được thiết kế cho các doanh nghiệp cần không gian kho vận lớn kết hợp sản xuất. Hệ thống racks hiện đại, dock container đa năng, phù hợp cho ngành logistics và phân phối.',
      en: 'RBH-C2 is designed for businesses requiring large warehousing combined with production. Modern rack systems, multi-purpose container docks, suitable for logistics and distribution.',
    },
    thumbnail: {
      url: '/images/products/rbh-night.jpg',
      alt: { vi: 'Nhà xưởng-Kho vận RBH-C2', en: 'Factory-Warehouse RBH-C2' },
    },
    gallery: [
      { url: '/images/products/rbh-night.jpg', alt: { vi: 'RBH-C2 ban đêm', en: 'RBH-C2 at night' } },
    ],
    specs: [
      { key: 'total-area', label: { vi: 'Tổng diện tích', en: 'Total Area' }, value: '6,000', unit: 'm²' },
      { key: 'clear-height', label: { vi: 'Chiều cao thông thủy', en: 'Clear Height' }, value: '10.5', unit: 'm' },
      { key: 'floor-load', label: { vi: 'Tải trọng sàn', en: 'Floor Load' }, value: '2', unit: 'T/m²' },
      { key: 'docks', label: { vi: 'Số dock container', en: 'Container Docks' }, value: '6', unit: '' },
    ],
    features: {
      vi: ['Hệ thống racks kho hàng', '6 dock container đa năng', 'Khu vực staging rộng', 'Hệ thống chiếu sáng LED', 'PCCC tự động'],
      en: ['Warehouse rack systems', '6 multi-purpose container docks', 'Wide staging area', 'LED lighting system', 'Automatic fire suppression'],
    },
    area: { min: 4000, max: 6000, unit: 'm²' },
    location: 'KCN Nam Đình Vũ, Hải Phòng',
    status: 'coming-soon',
    isFeatured: false,
    createdAt: '2025-03-01',
  },
  {
    id: 'office-01',
    slug: 'van-phong-a01',
    category: ProductCategory.OFFICE,
    name: { vi: 'Văn phòng A.01', en: 'Office A.01' },
    shortDescription: {
      vi: 'Văn phòng hiện đại trong KCN, thiết kế thông minh, tiện nghi đầy đủ.',
      en: 'Modern office in industrial park, smart design with full amenities.',
    },
    description: {
      vi: 'Văn phòng A.01 là không gian làm việc hiện đại ngay trong khu công nghiệp. Thiết kế mở, hệ thống điều hòa trung tâm, khu vực đỗ xe riêng, phù hợp cho trụ sở điều hành và văn phòng đại diện.',
      en: 'Office A.01 is a modern workspace within the industrial park. Open-plan design, central air conditioning, dedicated parking, suitable for headquarters and representative offices.',
    },
    thumbnail: {
      url: '/images/products/office-night.jpg',
      alt: { vi: 'Văn phòng A.01', en: 'Office A.01' },
    },
    gallery: [
      { url: '/images/products/office-night.jpg', alt: { vi: 'Văn phòng A.01 ban đêm', en: 'Office A.01 at night' } },
    ],
    specs: [
      { key: 'total-area', label: { vi: 'Tổng diện tích', en: 'Total Area' }, value: '500', unit: 'm²' },
      { key: 'floors', label: { vi: 'Số tầng', en: 'Floors' }, value: '2', unit: '' },
      { key: 'parking', label: { vi: 'Chỗ đậu xe', en: 'Parking Spots' }, value: '20', unit: '' },
    ],
    features: {
      vi: ['Thiết kế văn phòng mở', 'Điều hòa trung tâm', 'Khu vực đỗ xe riêng', 'Internet cáp quang tốc độ cao', 'An ninh 24/7'],
      en: ['Open-plan office design', 'Central air conditioning', 'Dedicated parking area', 'High-speed fiber internet', '24/7 security'],
    },
    area: { min: 200, max: 500, unit: 'm²' },
    location: 'KCN Nam Đình Vũ, Hải Phòng',
    status: 'available',
    isFeatured: true,
    createdAt: '2025-02-15',
  },
  {
    id: 'office-02',
    slug: 'van-phong-a02',
    category: ProductCategory.OFFICE,
    name: { vi: 'Văn phòng A.02', en: 'Office A.02' },
    shortDescription: {
      vi: 'Văn phòng quy mô lớn hơn, phù hợp cho doanh nghiệp có nhu cầu không gian làm việc rộng.',
      en: 'Larger office space, suitable for businesses requiring wider working areas.',
    },
    description: {
      vi: 'Văn phòng A.02 với diện tích lên đến 800 m², thiết kế linh hoạt có thể chia nhỏ theo nhu cầu. Khu vực tiếp khách riêng, phòng họp, pantry, phù hợp cho doanh nghiệp vừa và lớn.',
      en: 'Office A.02 with area up to 800 m², flexible design that can be partitioned as needed. Private reception area, meeting rooms, pantry, suitable for medium and large enterprises.',
    },
    thumbnail: {
      url: '/images/products/rbh-internal-road.jpg',
      alt: { vi: 'Văn phòng A.02', en: 'Office A.02' },
    },
    gallery: [
      { url: '/images/products/rbh-internal-road.jpg', alt: { vi: 'Khu vực văn phòng', en: 'Office area' } },
    ],
    specs: [
      { key: 'total-area', label: { vi: 'Tổng diện tích', en: 'Total Area' }, value: '800', unit: 'm²' },
      { key: 'floors', label: { vi: 'Số tầng', en: 'Floors' }, value: '3', unit: '' },
      { key: 'parking', label: { vi: 'Chỗ đậu xe', en: 'Parking Spots' }, value: '35', unit: '' },
    ],
    features: {
      vi: ['Thiết kế linh hoạt chia nhỏ', 'Khu tiếp khách riêng', 'Phòng họp hiện đại', 'Pantry đầy đủ tiện nghi', 'Thang máy'],
      en: ['Flexible partitioning design', 'Private reception area', 'Modern meeting rooms', 'Fully-equipped pantry', 'Elevator'],
    },
    area: { min: 300, max: 800, unit: 'm²' },
    location: 'KCN Nam Đình Vũ, Hải Phòng',
    status: 'available',
    isFeatured: false,
    createdAt: '2025-02-20',
  },
];
