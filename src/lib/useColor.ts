import { useTheme } from '../theme/theme-provider';

const defaultColors = {
  background: 'hsl(0, 0%, 100%)',
  foreground: 'hsl(240, 10%, 3.9%)',
  darkBackground: 'hsl(240, 10%, 3.9%)',
  darkForeground: 'hsl(0, 0%, 98%)',
};

export function useColor() {
  const { theme } = useTheme();

  const foreground =
    theme === 'dark' ? defaultColors.darkForeground : defaultColors.foreground;

  const background =
    theme === 'dark' ? defaultColors.darkBackground : defaultColors.background;

  return { foreground, background };
}
