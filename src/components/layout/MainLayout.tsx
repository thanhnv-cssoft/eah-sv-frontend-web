import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-dark-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
