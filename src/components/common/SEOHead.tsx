import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = 'EHA Industrial | Giải pháp nhà xưởng xây sẵn hàng đầu Việt Nam',
  description = 'EHA Industrial cung cấp nhà xưởng xây sẵn (RBF), nhà xưởng-kho vận kết hợp (RBH) và văn phòng tại KCN Nam Đình Vũ, Hải Phòng',
  ogImage = '/images/hero/aerial-night-full.jpg',
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
