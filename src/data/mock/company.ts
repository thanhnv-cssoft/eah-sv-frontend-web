import type { CompanyInfo, WhyChooseUsItem, ServiceItem, TimelineMilestone, LeaderInfo, PartnerInfo } from '../types';

export const companyInfo: CompanyInfo = {
  name: 'EHA Industrial',
  fullName: {
    vi: 'Công ty CP Phát triển Công nghiệp EHA Hải Phòng',
    en: 'EHA Hai Phong Industrial Development JSC',
  },
  slogan: 'Built on Core. Driven by Value',
  description: {
    vi: 'EHA Industrial phát triển hạ tầng công nghiệp xanh, thông minh và bền vững tại Việt Nam. Chúng tôi cung cấp nhà xưởng xây sẵn (RBF), nhà xưởng-kho vận kết hợp (RBH) và văn phòng đạt tiêu chuẩn quốc tế, phục vụ các nhà đầu tư trong và ngoài nước.',
    en: 'EHA Industrial develops green, smart and sustainable industrial infrastructure in Vietnam. We provide Ready-Built Factories (RBF), Ready-Built Hybrid warehouses (RBH) and office spaces built to international standards, serving domestic and international investors.',
  },
  stats: [
    {
      label: { vi: 'Tổng diện tích quy hoạch', en: 'Total Planned Area' },
      value: '100',
      suffix: 'ha+',
    },
    {
      label: { vi: 'Vốn đầu tư', en: 'Investment Capital' },
      value: '900',
      suffix: { vi: 'tỷ VNĐ', en: 'B VND' },
    },
    {
      label: { vi: 'Khoảng cách đến cảng biển', en: 'Distance to Seaport' },
      value: '0',
      suffix: 'km',
    },
    {
      label: { vi: 'Kinh nghiệm đối tác', en: 'Partner Experience' },
      value: '52',
      suffix: { vi: 'năm+', en: 'years+' },
    },
  ],
  contact: {
    address: {
      vi: 'KCN Nam Đình Vũ, Quận Hải An, TP. Hải Phòng, Việt Nam',
      en: 'Nam Dinh Vu Industrial Park, Hai An District, Hai Phong City, Vietnam',
    },
    phone: '+84 225 883 6666',
    email: 'info@ehaindustrial.com',
    website: 'ehaindustrial.com',
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/showcase/eha-industrial/',
    facebook: '#',
  },
};

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    icon: 'environment',
    title: {
      vi: 'Vị trí chiến lược',
      en: 'Strategic Location',
    },
    description: {
      vi: 'Tọa lạc tại KCN Nam Đình Vũ — KCN duy nhất tại Việt Nam sở hữu cảng biển nội bộ, kết nối trực tiếp cảng nước sâu quốc tế Lạch Huyện.',
      en: 'Located at Nam Dinh Vu Industrial Park — the only industrial park in Vietnam with an internal seaport, directly connected to Lach Huyen international deep-sea port.',
    },
  },
  {
    icon: 'cluster',
    title: {
      vi: 'Hạ tầng đồng bộ',
      en: 'Integrated Infrastructure',
    },
    description: {
      vi: 'Hệ thống đường nội bộ 23-46m, cấp nước 30,000 m³/ngày, xử lý nước thải tập trung 10,000 m³/ngày, trạm biến áp 110/22KV công suất 4 x 63 MVA.',
      en: 'Internal road system 23-46m wide, water supply 30,000 m³/day, centralized wastewater treatment 10,000 m³/day, 110/22KV substation with 4 x 63 MVA capacity.',
    },
  },
  {
    icon: 'safety',
    title: {
      vi: 'Tiêu chuẩn quốc tế',
      en: 'International Standards',
    },
    description: {
      vi: 'Nhà xưởng thiết kế theo tiêu chuẩn quốc tế: chiều cao thông thủy 7-10.5m, tải trọng sàn 2 T/m², hệ thống PCCC tự động sprinkler ESFR.',
      en: 'Factories designed to international standards: 7-10.5m clear height, 2 T/m² floor load capacity, automatic ESFR sprinkler fire suppression system.',
    },
  },
  {
    icon: 'team',
    title: {
      vi: 'Đối tác uy tín',
      en: 'Trusted Partners',
    },
    description: {
      vi: 'Hợp tác chiến lược cùng Tập đoàn Thăng Long — hơn 52 năm kinh nghiệm trong lĩnh vực giao thông và hạ tầng đô thị, tham gia các dự án trọng điểm quốc gia.',
      en: 'Strategic partnership with Thang Long Corporation — over 52 years of experience in transportation and urban infrastructure, involved in major national projects.',
    },
  },
  {
    icon: 'global',
    title: {
      vi: 'Phát triển bền vững',
      en: 'Sustainable Development',
    },
    description: {
      vi: 'Cam kết phát triển công nghiệp xanh với vật liệu thân thiện môi trường, hệ thống quản lý năng lượng thông minh và xử lý chất thải hiện đại.',
      en: 'Committed to green industrial development with eco-friendly materials, smart energy management systems and modern waste treatment facilities.',
    },
  },
  {
    icon: 'solution',
    title: {
      vi: 'Hỗ trợ toàn diện',
      en: 'Comprehensive Support',
    },
    description: {
      vi: 'Đội ngũ tư vấn chuyên nghiệp hỗ trợ từ tìm kiếm mặt bằng, thiết kế, xây dựng đến vận hành — đồng hành cùng doanh nghiệp trong suốt hành trình.',
      en: 'Professional consulting team supports from site selection, design, construction to operation — accompanying businesses throughout the journey.',
    },
  },
];

export const serviceItems: ServiceItem[] = [
  {
    id: 'rbf',
    title: {
      vi: 'Nhà xưởng xây sẵn (RBFs)',
      en: 'Ready-Built Factories (RBFs)',
    },
    description: {
      vi: 'Nhà xưởng tiêu chuẩn quốc tế, sẵn sàng đưa vào vận hành. Diện tích linh hoạt từ 3,000 - 8,000 m², chiều cao lên đến 10.5m, tải trọng sàn 2 T/m².',
      en: 'International standard factories, ready for operation. Flexible area from 3,000 - 8,000 m², clear height up to 10.5m, floor load capacity 2 T/m².',
    },
    image: '/images/products/rbf-exterior.jpg',
    link: '/products?category=rbf',
  },
  {
    id: 'rbh',
    title: {
      vi: 'Nhà xưởng - Kho vận (RBHs)',
      en: 'Factory-Warehouse Hybrid (RBHs)',
    },
    description: {
      vi: 'Giải pháp kết hợp sản xuất và kho vận trong cùng một công trình. Tối ưu logistics với hệ thống dock container hiện đại, đường nội bộ rộng rãi.',
      en: 'Combined production and logistics solution in a single facility. Optimized logistics with modern container dock systems and spacious internal roads.',
    },
    image: '/images/products/rbh-night.jpg',
    link: '/products?category=rbh',
  },
  {
    id: 'office',
    title: {
      vi: 'Văn phòng',
      en: 'Office Spaces',
    },
    description: {
      vi: 'Không gian văn phòng hiện đại trong khu công nghiệp, thiết kế thông minh, tiện nghi đầy đủ. Phù hợp cho trụ sở điều hành và văn phòng đại diện.',
      en: 'Modern office spaces within the industrial park, smart design with full amenities. Suitable for headquarters and representative offices.',
    },
    image: '/images/products/office-night.jpg',
    link: '/products?category=office',
  },
];

export const companyTimeline: TimelineMilestone[] = [
  {
    year: '2022',
    title: { vi: 'Thành lập công ty', en: 'Company Founded' },
    description: {
      vi: 'Thành lập Công ty CP Phát triển Công nghiệp EHA Hải Phòng, xác định tầm nhìn phát triển hạ tầng công nghiệp xanh.',
      en: 'Established EHA Hai Phong Industrial Development JSC with a vision for green industrial infrastructure development.',
    },
    icon: 'flag',
  },
  {
    year: '2023',
    title: { vi: 'Ký kết đối tác chiến lược', en: 'Strategic Partnership Signed' },
    description: {
      vi: 'Hợp tác chiến lược với Tập đoàn Thăng Long — hơn 52 năm kinh nghiệm hạ tầng giao thông và đô thị.',
      en: 'Strategic partnership with Thang Long Corporation — over 52 years of experience in transportation and urban infrastructure.',
    },
    icon: 'team',
  },
  {
    year: '2024',
    title: { vi: 'Khởi công EHA Hải Phòng', en: 'EHA Hai Phong Groundbreaking' },
    description: {
      vi: 'Khởi công dự án EHA Hải Phòng tại KCN Nam Đình Vũ, tổng diện tích 9 hectares, tổng vốn đầu tư 900 tỷ VNĐ.',
      en: 'Groundbreaking ceremony for EHA Hai Phong project at Nam Dinh Vu IP, 9 hectares total area, VND 900 billion investment.',
    },
    icon: 'build',
  },
  {
    year: '2025',
    title: { vi: 'Hoàn thành giai đoạn 1', en: 'Phase 1 Completion' },
    description: {
      vi: 'Hoàn thành và bàn giao nhà xưởng xây sẵn RBF và RBH đầu tiên, sẵn sàng đón nhà đầu tư.',
      en: 'Completed and handed over first Ready-Built Factories and Hybrid warehouses, ready for investors.',
    },
    icon: 'check-circle',
  },
  {
    year: '2026+',
    title: { vi: 'Mở rộng 100+ hectares', en: 'Expansion to 100+ Hectares' },
    description: {
      vi: 'Mở rộng quy mô phát triển lên 100+ hectares trong vòng 2 năm, đa dạng loại hình bất động sản công nghiệp.',
      en: 'Expanding development to 100+ hectares within 2 years, diversifying industrial real estate offerings.',
    },
    icon: 'rise',
  },
];

export const leaderInfo: LeaderInfo = {
  name: 'Chu Việt Hà',
  title: {
    vi: 'Tổng Giám đốc (CEO)',
    en: 'Chief Executive Officer (CEO)',
  },
  bio: {
    vi: 'Với tầm nhìn phát triển hạ tầng công nghiệp bền vững, ông Chu Việt Hà dẫn dắt EHA Industrial trở thành nhà phát triển khu công nghiệp hàng đầu tại miền Bắc Việt Nam. Dưới sự lãnh đạo của ông, EHA đã hợp tác chiến lược cùng Tập đoàn Thăng Long và triển khai thành công dự án EHA Hải Phòng với tổng vốn đầu tư 900 tỷ VNĐ.',
    en: 'With a vision for sustainable industrial infrastructure development, Mr. Chu Viet Ha leads EHA Industrial to become a leading industrial park developer in Northern Vietnam. Under his leadership, EHA has formed a strategic partnership with Thang Long Corporation and successfully launched the EHA Hai Phong project with a total investment of VND 900 billion.',
  },
};

export const partnerInfo: PartnerInfo = {
  name: 'Tập đoàn Thăng Long',
  fullName: {
    vi: 'Tổng Công ty Xây dựng Thăng Long - CTCP',
    en: 'Thang Long Construction Corporation JSC',
  },
  yearsExperience: 52,
  description: {
    vi: 'Tập đoàn Thăng Long là một trong những đơn vị hàng đầu Việt Nam trong lĩnh vực xây dựng giao thông và hạ tầng đô thị, với hơn 52 năm kinh nghiệm và tham gia các dự án trọng điểm quốc gia.',
    en: "Thang Long Corporation is one of Vietnam's leading companies in transportation construction and urban infrastructure, with over 52 years of experience and participation in major national projects.",
  },
  achievements: {
    vi: [
      'Hơn 52 năm kinh nghiệm xây dựng hạ tầng',
      'Tham gia các dự án trọng điểm quốc gia',
      'Năng lực thi công hạ tầng KCN đồng bộ',
      'Đối tác chiến lược của EHA Industrial',
    ],
    en: [
      'Over 52 years of infrastructure construction experience',
      'Participated in major national projects',
      'Capable of synchronized industrial park infrastructure construction',
      'Strategic partner of EHA Industrial',
    ],
  },
};
