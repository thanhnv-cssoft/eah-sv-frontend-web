import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/utils/cn';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  {
    key: 'products',
    href: '/products',
    children: [
      { key: 'products_all', href: '/products' },
      { key: 'products_rbf', href: '/products?category=rbf' },
      { key: 'products_rbh', href: '/products?category=rbh' },
      { key: 'products_office', href: '/products?category=office' },
    ],
  },
  { key: 'projects', href: '/projects' },
  { key: 'insights', href: '/insights' },
  { key: 'news', href: '/news' },
  { key: 'careers', href: '/careers' },
  { key: 'contact', href: '/contact' },
];

export default function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [router.asPath]);

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500 ease-out',
        scrolled
          ? 'border-white/[0.06] bg-dark-900/80 py-3 backdrop-blur-2xl'
          : 'border-transparent bg-transparent py-5'
      )}
    >
      <div className="container-padding mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 font-heading text-lg font-bold text-white">
            E
          </div>
          <div>
            <span className="font-heading text-lg font-bold text-text-primary">EHA</span>
            <span className="ml-1 text-sm text-text-secondary">Industrial</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => item.children && setProductOpen(true)}
              onMouseLeave={() => item.children && setProductOpen(false)}
            >
              <Link
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'text-primary-500'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>

              {/* Products Dropdown */}
              {item.children && productOpen && (
                <div className="glass absolute left-0 top-full mt-1 min-w-[220px] p-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.key}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                    >
                      {t(`nav.${child.key}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="gradient-primary rounded-lg px-5 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
          >
            {t('buttons.contact_us')}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:bg-white/5 lg:hidden"
        >
          <MenuOutlined style={{ fontSize: 20 }} />
        </button>

        {/* Mobile Drawer */}
        <Drawer
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          placement="right"
          width={300}
          closeIcon={<CloseOutlined className="text-text-primary" />}
          styles={{ body: { padding: '1rem' }, header: { borderBottom: '1px solid rgba(255,255,255,0.06)' } }}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.key}>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    isActive(item.href)
                      ? 'bg-primary-500/10 text-primary-500'
                      : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                  )}
                >
                  {t(`nav.${item.key}`)}
                </Link>
                {item.children && (
                  <div className="ml-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.key}
                        href={child.href}
                        className="block rounded-lg px-4 py-2 text-sm text-text-tertiary transition-colors hover:text-text-secondary"
                      >
                        {t(`nav.${child.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6 border-t border-white/10 pt-6">
            <div className="mb-4 flex justify-center">
              <LanguageSwitcher />
            </div>
            <Link
              href="/contact"
              className="gradient-primary block rounded-lg py-3 text-center text-sm font-medium text-white"
            >
              {t('buttons.contact_us')}
            </Link>
          </div>
        </Drawer>
      </div>
    </header>
  );
}
