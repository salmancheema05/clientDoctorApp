import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { lightTheme } from "./lightTheme";
import { ThemeProps } from "./interface";
import { Appearance, ColorSchemeName } from "react-native";
import { darkTheme } from "./darkTheme";
const ThemeContext = createContext<ThemeProps>(lightTheme);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [systemTheme, setSystemTheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme()
  );
  const [theme, setTheme] = useState(
    systemTheme === "dark" ? darkTheme : lightTheme
  );
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemTheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);
  useEffect(() => {
    setTheme(systemTheme === "dark" ? darkTheme : lightTheme);
  }, [systemTheme]);
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
