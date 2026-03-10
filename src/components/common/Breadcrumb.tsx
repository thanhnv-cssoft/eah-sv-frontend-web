import Link from 'next/link';
import { HomeOutlined, RightOutlined } from '@ant-design/icons';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="container-padding mx-auto max-w-7xl pb-4 pt-24">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <RightOutlined className="text-[10px] text-text-tertiary" />}
            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center gap-1 text-text-tertiary transition-colors hover:text-primary-500"
              >
                {i === 0 && <HomeOutlined className="text-xs" />}
                {item.label}
              </Link>
            ) : (
              <span className="text-text-secondary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
