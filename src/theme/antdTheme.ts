import { theme, type ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#F47920',
    colorBgBase: '#0A0E17',
    colorBgContainer: '#111827',
    colorBgElevated: '#1A2332',
    colorTextBase: '#F1F5F9',
    colorBorder: '#243044',
    borderRadius: 8,
    fontFamily: "'Inter', 'Noto Sans', sans-serif",
  },
  components: {
    Menu: {
      darkItemBg: 'transparent',
      darkItemHoverBg: 'rgba(244, 121, 32, 0.1)',
      darkItemSelectedBg: 'rgba(244, 121, 32, 0.15)',
      darkItemSelectedColor: '#F47920',
    },
    Button: {
      primaryColor: '#FFFFFF',
      borderRadius: 8,
    },
    Drawer: {
      colorBgElevated: '#0A0E17',
    },
  },
};
