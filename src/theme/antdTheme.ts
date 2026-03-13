import { theme, type ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#F47920',
    colorBgBase: '#0F1623',
    colorBgContainer: '#182030',
    colorBgElevated: '#1F2B3D',
    colorTextBase: '#F1F5F9',
    colorBorder: '#2A3A52',
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
      colorBgElevated: '#0F1623',
    },
  },
};
