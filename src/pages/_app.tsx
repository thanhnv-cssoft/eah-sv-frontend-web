import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ConfigProvider } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { antdTheme } from '@/theme/antdTheme';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ConfigProvider theme={antdTheme}>
      <MainLayout>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </MainLayout>
    </ConfigProvider>
  );
}

export default appWithTranslation(App);
