import type { Article } from '../types';

export const articles: Article[] = [
  // === NEWS ===
  {
    id: 'news-001',
    slug: 'le-khoi-cong-eha-hai-phong',
    category: 'news',
    title: {
      vi: 'Lễ khởi công dự án EHA Hải Phòng tại KCN Nam Đình Vũ',
      en: 'Groundbreaking Ceremony for EHA Hai Phong at Nam Dinh Vu IP',
    },
    excerpt: {
      vi: 'EHA Industrial chính thức khởi công dự án nhà xưởng xây sẵn tại KCN Nam Đình Vũ với tổng vốn đầu tư 900 tỷ VNĐ, đánh dấu bước phát triển mới trong hạ tầng công nghiệp xanh.',
      en: 'EHA Industrial officially broke ground on the ready-built factory project at Nam Dinh Vu IP with a total investment of VND 900 billion, marking a new milestone in green industrial infrastructure.',
    },
    contentParagraphs: {
      vi: [
        'Ngày 15/03/2024, tại KCN Nam Đình Vũ, Quận Hải An, TP. Hải Phòng, Công ty CP Phát triển Công nghiệp EHA Hải Phòng đã tổ chức lễ khởi công dự án nhà xưởng xây sẵn và kho vận với tổng diện tích 9 hectares.',
        'Dự án có tổng vốn đầu tư 900 tỷ VNĐ (tương đương 34.2 triệu USD), cung cấp nhà xưởng xây sẵn (RBF), nhà xưởng-kho vận kết hợp (RBH) và văn phòng đạt tiêu chuẩn quốc tế. Đây là dự án đầu tiên của EHA Industrial tại Việt Nam.',
        'Phát biểu tại lễ khởi công, ông Chu Việt Hà — Tổng Giám đốc EHA Industrial cho biết: "Chúng tôi cam kết phát triển hạ tầng công nghiệp xanh, thông minh và bền vững, mang đến giải pháp tối ưu cho các nhà đầu tư trong và ngoài nước."',
        'Dự án tọa lạc tại KCN Nam Đình Vũ — khu công nghiệp duy nhất tại Việt Nam sở hữu cảng biển nội bộ, kết nối trực tiếp cảng nước sâu quốc tế Lạch Huyện, mang đến lợi thế logistics vượt trội.',
        'Giai đoạn 1 của dự án dự kiến hoàn thành vào giữa năm 2025, với nhà xưởng RBF và RBH đầu tiên sẵn sàng đón nhà đầu tư.',
      ],
      en: [
        'On March 15, 2024, at Nam Dinh Vu Industrial Park, Hai An District, Hai Phong City, EHA Hai Phong Industrial Development JSC held the groundbreaking ceremony for the ready-built factory and warehouse project with a total area of 9 hectares.',
        'The project has a total investment of VND 900 billion (approximately USD 34.2 million), providing Ready-Built Factories (RBF), Factory-Warehouse Hybrids (RBH) and office spaces built to international standards. This is the first project of EHA Industrial in Vietnam.',
        'Speaking at the ceremony, Mr. Chu Viet Ha — CEO of EHA Industrial said: "We are committed to developing green, smart and sustainable industrial infrastructure, providing optimal solutions for domestic and international investors."',
        'The project is located at Nam Dinh Vu Industrial Park — the only industrial park in Vietnam with an internal seaport, directly connected to Lach Huyen international deep-sea port, offering superior logistics advantages.',
        'Phase 1 of the project is expected to be completed by mid-2025, with the first RBF and RBH factories ready for investors.',
      ],
    },
    author: { name: 'EHA Industrial', title: { vi: 'Ban Truyền thông', en: 'Communications Team' } },
    publishedAt: '2024-03-15',
    thumbnail: { url: '/images/projects/aerial-day-full.jpg', alt: { vi: 'Lễ khởi công EHA Hải Phòng', en: 'EHA Hai Phong groundbreaking' } },
    tags: { vi: ['Sự kiện', 'Dự án', 'Hải Phòng'], en: ['Event', 'Project', 'Hai Phong'] },
    isFeatured: true,
  },
  {
    id: 'news-002',
    slug: 'ky-ket-hop-tac-thang-long',
    category: 'news',
    title: {
      vi: 'EHA Industrial ký kết hợp tác chiến lược với Tập đoàn Thăng Long',
      en: 'EHA Industrial Signs Strategic Partnership with Thang Long Corporation',
    },
    excerpt: {
      vi: 'EHA Industrial và Tập đoàn Thăng Long — đơn vị có hơn 52 năm kinh nghiệm hạ tầng — chính thức ký kết hợp tác chiến lược, nâng tầm năng lực phát triển khu công nghiệp.',
      en: 'EHA Industrial and Thang Long Corporation — with over 52 years of infrastructure experience — officially signed a strategic partnership, enhancing industrial park development capabilities.',
    },
    contentParagraphs: {
      vi: [
        'Ngày 20/09/2023, tại Hà Nội, EHA Industrial và Tổng Công ty Xây dựng Thăng Long - CTCP đã chính thức ký kết thỏa thuận hợp tác chiến lược toàn diện trong lĩnh vực phát triển hạ tầng khu công nghiệp.',
        'Tập đoàn Thăng Long là một trong những đơn vị hàng đầu Việt Nam với hơn 52 năm kinh nghiệm trong lĩnh vực xây dựng giao thông và hạ tầng đô thị, tham gia nhiều dự án trọng điểm quốc gia.',
        'Theo thỏa thuận, Tập đoàn Thăng Long sẽ là đối tác chiến lược trong việc thi công hạ tầng đồng bộ cho các dự án khu công nghiệp của EHA Industrial, bao gồm hệ thống đường nội bộ, cấp thoát nước, trạm biến áp và các công trình phụ trợ.',
        'Sự hợp tác này kết hợp tầm nhìn phát triển công nghiệp xanh của EHA Industrial với năng lực thi công hạ tầng vượt trội của Tập đoàn Thăng Long, tạo nền tảng vững chắc cho các dự án quy mô lớn trong tương lai.',
      ],
      en: [
        'On September 20, 2023, in Hanoi, EHA Industrial and Thang Long Construction Corporation JSC officially signed a comprehensive strategic cooperation agreement in industrial park infrastructure development.',
        'Thang Long Corporation is one of Vietnam\'s leading companies with over 52 years of experience in transportation construction and urban infrastructure, participating in many major national projects.',
        'Under the agreement, Thang Long Corporation will serve as a strategic partner in constructing synchronized infrastructure for EHA Industrial\'s industrial park projects, including internal road systems, water supply and drainage, substations and auxiliary facilities.',
        'This partnership combines EHA Industrial\'s vision for green industrial development with Thang Long Corporation\'s superior infrastructure construction capabilities, creating a solid foundation for large-scale projects in the future.',
      ],
    },
    author: { name: 'EHA Industrial', title: { vi: 'Ban Truyền thông', en: 'Communications Team' } },
    publishedAt: '2023-09-20',
    thumbnail: { url: '/images/about/masterplan-topdown.jpg', alt: { vi: 'Ký kết hợp tác Thăng Long', en: 'Thang Long partnership signing' } },
    tags: { vi: ['Đối tác', 'Hợp tác', 'Thăng Long'], en: ['Partnership', 'Cooperation', 'Thang Long'] },
    isFeatured: false,
  },
  {
    id: 'news-003',
    slug: 'hoan-thanh-giai-doan-1',
    category: 'news',
    title: {
      vi: 'Hoàn thành giai đoạn 1 dự án EHA Hải Phòng',
      en: 'Phase 1 Completion of EHA Hai Phong Project',
    },
    excerpt: {
      vi: 'EHA Industrial hoàn thành và bàn giao nhà xưởng xây sẵn RBF và RBH đầu tiên, sẵn sàng đón nhà đầu tư tại KCN Nam Đình Vũ.',
      en: 'EHA Industrial completed and handed over the first Ready-Built Factories and Hybrid warehouses, ready for investors at Nam Dinh Vu IP.',
    },
    contentParagraphs: {
      vi: [
        'Tháng 6/2025, EHA Industrial chính thức hoàn thành giai đoạn 1 dự án EHA Hải Phòng, bàn giao nhà xưởng xây sẵn (RBF) và nhà xưởng-kho vận kết hợp (RBH) đầu tiên tại KCN Nam Đình Vũ.',
        'Các nhà xưởng được thiết kế theo tiêu chuẩn quốc tế với chiều cao thông thủy 7-10.5m, tải trọng sàn 2 T/m², hệ thống PCCC tự động sprinkler ESFR và cửa dock container hiện đại.',
        'Diện tích linh hoạt từ 2,000 đến 8,000 m² đáp ứng đa dạng nhu cầu của các nhà đầu tư trong lĩnh vực sản xuất, lắp ráp và kho vận.',
        'Với vị trí chiến lược tại KCN Nam Đình Vũ — cách cảng nước sâu quốc tế Lạch Huyện 0 km và sân bay quốc tế Cát Bi 8 km — các nhà xưởng EHA mang đến lợi thế logistics tối ưu cho doanh nghiệp.',
      ],
      en: [
        'In June 2025, EHA Industrial officially completed Phase 1 of the EHA Hai Phong project, handing over the first Ready-Built Factories (RBF) and Factory-Warehouse Hybrids (RBH) at Nam Dinh Vu IP.',
        'The factories are designed to international standards with 7-10.5m clear height, 2 T/m² floor load capacity, automatic ESFR sprinkler fire suppression system and modern container dock doors.',
        'Flexible areas from 2,000 to 8,000 m² meet diverse needs of investors in manufacturing, assembly and logistics sectors.',
        'Strategically located at Nam Dinh Vu IP — 0 km from Lach Huyen international deep-sea port and 8 km from Cat Bi international airport — EHA factories offer optimal logistics advantages for businesses.',
      ],
    },
    author: { name: 'EHA Industrial', title: { vi: 'Ban Truyền thông', en: 'Communications Team' } },
    publishedAt: '2025-06-10',
    thumbnail: { url: '/images/products/rbf-exterior.jpg', alt: { vi: 'Nhà xưởng hoàn thành', en: 'Completed factory' } },
    tags: { vi: ['Dự án', 'Hoàn thành', 'RBF'], en: ['Project', 'Completion', 'RBF'] },
    isFeatured: false,
  },
  {
    id: 'news-004',
    slug: 'su-kien-nha-dau-tu-2025',
    category: 'news',
    title: {
      vi: 'EHA tổ chức sự kiện gặp gỡ nhà đầu tư 2025',
      en: 'EHA Hosts Investor Meeting Event 2025',
    },
    excerpt: {
      vi: 'EHA Industrial tổ chức sự kiện gặp gỡ nhà đầu tư trong và ngoài nước, giới thiệu tiềm năng phát triển và cơ hội hợp tác tại KCN Nam Đình Vũ.',
      en: 'EHA Industrial hosted an investor meeting event for domestic and international investors, presenting development potential and cooperation opportunities at Nam Dinh Vu IP.',
    },
    contentParagraphs: {
      vi: [
        'Ngày 28/02/2025, EHA Industrial đã tổ chức thành công sự kiện "Gặp gỡ Nhà đầu tư 2025" tại Hải Phòng, thu hút sự tham gia của hơn 50 doanh nghiệp trong và ngoài nước.',
        'Tại sự kiện, EHA Industrial đã giới thiệu toàn diện về dự án EHA Hải Phòng, các sản phẩm nhà xưởng xây sẵn RBF, RBH và văn phòng cùng lộ trình mở rộng lên 100+ hectares trong 2 năm tới.',
        'Các nhà đầu tư đã được tham quan thực tế nhà xưởng hoàn thiện, trải nghiệm hạ tầng đồng bộ và lắng nghe chia sẻ từ ban lãnh đạo EHA về tầm nhìn phát triển bền vững.',
        'Sự kiện đã nhận được phản hồi tích cực từ cộng đồng doanh nghiệp, nhiều nhà đầu tư bày tỏ quan tâm đến việc thuê nhà xưởng và hợp tác lâu dài với EHA Industrial.',
      ],
      en: [
        'On February 28, 2025, EHA Industrial successfully organized the "Investor Meeting 2025" event in Hai Phong, attracting participation from over 50 domestic and international enterprises.',
        'At the event, EHA Industrial comprehensively presented the EHA Hai Phong project, ready-built factory products RBF, RBH and offices along with the expansion roadmap to 100+ hectares within the next 2 years.',
        'Investors were given a hands-on tour of completed factories, experiencing the synchronized infrastructure and listening to EHA leadership share their vision for sustainable development.',
        'The event received positive feedback from the business community, with many investors expressing interest in leasing factories and establishing long-term partnerships with EHA Industrial.',
      ],
    },
    author: { name: 'EHA Industrial', title: { vi: 'Ban Truyền thông', en: 'Communications Team' } },
    publishedAt: '2025-02-28',
    thumbnail: { url: '/images/about/aerial-night-far.jpg', alt: { vi: 'Sự kiện nhà đầu tư', en: 'Investor event' } },
    tags: { vi: ['Sự kiện', 'Nhà đầu tư', 'Hợp tác'], en: ['Event', 'Investors', 'Partnership'] },
    isFeatured: false,
  },

  // === INSIGHTS ===
  {
    id: 'insight-001',
    slug: 'xu-huong-khu-cong-nghiep-viet-nam',
    category: 'insight',
    title: {
      vi: 'Xu hướng phát triển khu công nghiệp tại Việt Nam 2025',
      en: 'Industrial Park Development Trends in Vietnam 2025',
    },
    excerpt: {
      vi: 'Phân tích xu hướng phát triển khu công nghiệp thế hệ mới tại Việt Nam: từ nhà xưởng xây sẵn đến mô hình công nghiệp xanh và thông minh.',
      en: 'Analysis of new-generation industrial park development trends in Vietnam: from ready-built factories to green and smart industrial models.',
    },
    contentParagraphs: {
      vi: [
        'Thị trường bất động sản công nghiệp Việt Nam đang bước vào giai đoạn phát triển mạnh mẽ nhờ làn sóng dịch chuyển chuỗi cung ứng toàn cầu và chiến lược "China+1". Việt Nam đã trở thành điểm đến hàng đầu cho các nhà đầu tư quốc tế trong lĩnh vực sản xuất.',
        'Xu hướng nổi bật nhất là sự chuyển dịch từ mô hình thuê đất xây dựng sang nhà xưởng xây sẵn (Ready-Built Factory). Mô hình này giúp nhà đầu tư tiết kiệm thời gian 12-18 tháng, giảm chi phí đầu tư ban đầu và linh hoạt mở rộng theo nhu cầu.',
        'Các khu công nghiệp thế hệ mới không chỉ cung cấp mặt bằng mà còn tích hợp hạ tầng đồng bộ: đường nội bộ rộng, hệ thống cấp thoát nước hiện đại, trạm biến áp công suất lớn và dịch vụ hậu cần trọn gói.',
        'Yếu tố "xanh" và "thông minh" ngày càng được chú trọng. Các nhà đầu tư quốc tế yêu cầu nhà xưởng đạt tiêu chuẩn xanh, sử dụng năng lượng hiệu quả và có hệ thống xử lý chất thải hiện đại.',
        'Với vị trí chiến lược và hạ tầng đồng bộ, Hải Phòng đang nổi lên như một trung tâm công nghiệp mới bên cạnh Bắc Ninh, Hải Dương và Bình Dương.',
      ],
      en: [
        'Vietnam\'s industrial real estate market is entering a period of strong growth driven by global supply chain shifts and the "China+1" strategy. Vietnam has become a top destination for international investors in the manufacturing sector.',
        'The most prominent trend is the shift from land-lease-and-build models to Ready-Built Factories (RBF). This model helps investors save 12-18 months of construction time, reduce initial investment costs, and flexibly expand according to demand.',
        'New-generation industrial parks not only provide space but also integrate synchronized infrastructure: wide internal roads, modern water supply and drainage systems, high-capacity substations, and comprehensive logistics services.',
        '"Green" and "smart" factors are increasingly emphasized. International investors require factories to meet green standards, use energy efficiently, and have modern waste treatment systems.',
        'With its strategic location and synchronized infrastructure, Hai Phong is emerging as a new industrial center alongside Bac Ninh, Hai Duong, and Binh Duong.',
      ],
    },
    author: { name: 'Nguyễn Minh Tuấn', title: { vi: 'Giám đốc Phát triển Kinh doanh', en: 'Business Development Director' } },
    publishedAt: '2025-01-15',
    thumbnail: { url: '/images/projects/aerial-day-angle.jpg', alt: { vi: 'Khu công nghiệp Việt Nam', en: 'Vietnam industrial park' } },
    tags: { vi: ['Thị trường', 'Khu công nghiệp', 'Xu hướng'], en: ['Market', 'Industrial Park', 'Trends'] },
    isFeatured: true,
  },
  {
    id: 'insight-002',
    slug: 'loi-the-logistics-hai-phong',
    category: 'insight',
    title: {
      vi: 'Lợi thế logistics của Hải Phòng trong chuỗi cung ứng toàn cầu',
      en: "Hai Phong's Logistics Advantages in the Global Supply Chain",
    },
    excerpt: {
      vi: 'Hải Phòng sở hữu vị trí chiến lược với cảng nước sâu quốc tế, sân bay và hệ thống giao thông kết nối, trở thành hub logistics quan trọng tại miền Bắc Việt Nam.',
      en: 'Hai Phong boasts a strategic location with international deep-sea port, airport and connected transportation system, becoming an important logistics hub in Northern Vietnam.',
    },
    contentParagraphs: {
      vi: [
        'Hải Phòng là thành phố cảng lớn nhất miền Bắc Việt Nam, sở hữu hệ thống cảng biển hiện đại bao gồm cảng nước sâu quốc tế Lạch Huyện — một trong những cảng container lớn nhất Đông Nam Á.',
        'Cảng Lạch Huyện có khả năng tiếp nhận tàu trọng tải đến 200,000 DWT, kết nối trực tiếp với các tuyến hàng hải quốc tế đi châu Âu, Bắc Mỹ và Đông Á. Đây là lợi thế cạnh tranh vượt trội cho các doanh nghiệp xuất nhập khẩu.',
        'KCN Nam Đình Vũ — nơi đặt dự án EHA Hải Phòng — là khu công nghiệp duy nhất tại Việt Nam sở hữu cảng biển nội bộ (Nam Đình Vũ Port), có thể tiếp nhận tàu đến 40,000 DWT với vùng quay trở 300m.',
        'Ngoài đường biển, Hải Phòng còn kết nối thuận lợi bằng đường bộ cao tốc Hà Nội - Hải Phòng (105 km, 1.5 giờ), sân bay quốc tế Cát Bi và tuyến đường sắt vận chuyển hàng hóa.',
        'Sự kết hợp giữa cảng biển, sân bay, đường bộ cao tốc và đường sắt tạo nên hệ thống logistics đa phương thức, giúp Hải Phòng trở thành lựa chọn lý tưởng cho các nhà đầu tư quốc tế.',
      ],
      en: [
        'Hai Phong is the largest port city in Northern Vietnam, featuring a modern port system including Lach Huyen international deep-sea port — one of the largest container ports in Southeast Asia.',
        'Lach Huyen port can accommodate vessels up to 200,000 DWT, directly connecting to international shipping routes to Europe, North America, and East Asia. This is a superior competitive advantage for import-export businesses.',
        'Nam Dinh Vu Industrial Park — home to the EHA Hai Phong project — is the only industrial park in Vietnam with an internal seaport (Nam Dinh Vu Port), capable of receiving ships up to 40,000 DWT with a 300m turning basin.',
        'Beyond sea routes, Hai Phong is conveniently connected by the Hanoi-Hai Phong expressway (105 km, 1.5 hours), Cat Bi international airport, and cargo railway lines.',
        'The combination of seaport, airport, expressway, and railway creates a multimodal logistics system, making Hai Phong an ideal choice for international investors.',
      ],
    },
    author: { name: 'Nguyễn Minh Tuấn', title: { vi: 'Giám đốc Phát triển Kinh doanh', en: 'Business Development Director' } },
    publishedAt: '2025-02-10',
    thumbnail: { url: '/images/hero/entrance-gate.jpg', alt: { vi: 'Cảng Hải Phòng', en: 'Hai Phong port' } },
    tags: { vi: ['Logistics', 'Hải Phòng', 'Vận tải'], en: ['Logistics', 'Hai Phong', 'Transportation'] },
    isFeatured: false,
  },
  {
    id: 'insight-003',
    slug: 'phat-trien-cong-nghiep-xanh',
    category: 'insight',
    title: {
      vi: 'Phát triển công nghiệp xanh và bền vững: Từ xu hướng đến hành động',
      en: 'Green and Sustainable Industrial Development: From Trend to Action',
    },
    excerpt: {
      vi: 'Phát triển công nghiệp xanh không còn là xu hướng mà đã trở thành yêu cầu bắt buộc. EHA Industrial chia sẻ góc nhìn về hạ tầng công nghiệp bền vững.',
      en: 'Green industrial development is no longer a trend but a mandatory requirement. EHA Industrial shares perspectives on sustainable industrial infrastructure.',
    },
    contentParagraphs: {
      vi: [
        'Trong bối cảnh biến đổi khí hậu và cam kết Net Zero của Việt Nam vào năm 2050, phát triển công nghiệp xanh đã trở thành yêu cầu bắt buộc chứ không chỉ là xu hướng.',
        'Các nhà đầu tư quốc tế, đặc biệt từ Nhật Bản, Hàn Quốc và EU, ngày càng đặt ra tiêu chuẩn cao về môi trường khi lựa chọn địa điểm đầu tư. Nhà xưởng phải đảm bảo hiệu quả năng lượng, quản lý chất thải và sử dụng vật liệu thân thiện môi trường.',
        'EHA Industrial đang tiên phong trong việc phát triển hạ tầng công nghiệp xanh tại miền Bắc Việt Nam. Dự án EHA Hải Phòng được thiết kế với hệ thống xử lý nước thải tập trung 10,000 m³/ngày, hệ thống thoát nước mưa riêng biệt và không gian cây xanh đạt chuẩn.',
        'Bên cạnh hạ tầng xanh, EHA còn hướng đến mô hình "công nghiệp thông minh" với hệ thống quản lý năng lượng thông minh, giám sát môi trường tự động và tối ưu hóa vận hành bằng công nghệ số.',
        'Đầu tư vào hạ tầng xanh không chỉ bảo vệ môi trường mà còn tạo ra giá trị kinh tế bền vững: giảm chi phí vận hành, thu hút nhà đầu tư chất lượng cao và nâng cao giá trị thương hiệu.',
      ],
      en: [
        'In the context of climate change and Vietnam\'s Net Zero commitment by 2050, green industrial development has become a mandatory requirement rather than just a trend.',
        'International investors, especially from Japan, South Korea, and the EU, are increasingly setting high environmental standards when choosing investment locations. Factories must ensure energy efficiency, waste management, and the use of eco-friendly materials.',
        'EHA Industrial is pioneering green industrial infrastructure development in Northern Vietnam. The EHA Hai Phong project is designed with a centralized wastewater treatment system of 10,000 m³/day, separate stormwater drainage, and standard green spaces.',
        'Beyond green infrastructure, EHA is also moving towards a "smart industry" model with intelligent energy management systems, automated environmental monitoring, and digital technology-optimized operations.',
        'Investing in green infrastructure not only protects the environment but also creates sustainable economic value: reducing operating costs, attracting high-quality investors, and enhancing brand value.',
      ],
    },
    author: { name: 'Nguyễn Minh Tuấn', title: { vi: 'Giám đốc Phát triển Kinh doanh', en: 'Business Development Director' } },
    publishedAt: '2024-11-05',
    thumbnail: { url: '/images/projects/aerial-day-side.jpg', alt: { vi: 'Công nghiệp xanh', en: 'Green industry' } },
    tags: { vi: ['Bền vững', 'Công nghiệp xanh', 'ESG'], en: ['Sustainability', 'Green Industry', 'ESG'] },
    isFeatured: false,
  },
];
