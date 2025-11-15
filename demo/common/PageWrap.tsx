import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'react-simple-comps';

interface ThemeContextType {
  theme: string;
  updateTheme: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(245, 247, 250);
    font-size: 14px;
    margin:0;
    font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', STHeiti,
    'Microsoft Yahei', Tahoma, Simsun, sans-serif;
    line-height: 1.5715;
  }
  *{
    box-sizing: border-box;;
  }
`;

const getColor = () =>
  document.documentElement.style.getPropertyValue('--rsc-color') || '#005cff';

export default function PageWrap({ children, ...rest }) {
  const [theme, setTheme] = useState(getColor());
  const updateTheme = (color: string) => {
    setTheme(color);
  };
  // 定义 themeContextValue 对象
  const themeContextValue = {
    theme,
    updateTheme,
  };
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <GlobalStyle />
      <ThemeProvider color={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
